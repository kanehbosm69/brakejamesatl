// ============================================================
//  BrakeJamesATL — Lead Intake Pipeline
//  Apps Script V8 | Google Sheets bound
// ============================================================
//
//  Script Properties required (Project Settings → Script Properties):
//    TWILIO_ACCOUNT_SID   — your Twilio Account SID
//    TWILIO_AUTH_TOKEN    — your Twilio Auth Token  ← rotate the old one now
//    TWILIO_FROM_NUMBER   — e.g. +14706495010
//    TWILIO_OWNER_PHONE   — e.g. +14045006371
//    GEMINI_API_KEY       — Google AI Studio key
//    FIREBASE_PROJECT_ID  — Firebase project ID
//    FIREBASE_CLIENT_EMAIL— service account email
//    FIREBASE_PRIVATE_KEY — service account private key (with \n escaped)
//
// ============================================================

const CONFIG = {
  LEADS_SHEET_NAME: "Leads",
  FOLLOW_UP_HOURS:  24,
};

// ============================================================
//  MAIN TRIGGER
// ============================================================

function onFormSubmit(e) {
  if (!e || !e.namedValues) {
    throw new Error("onFormSubmit requires the Form Submit trigger event object.");
  }

  const nv = e.namedValues;

  const createdAt    = nv["Timestamp"]?.[0]                                    || new Date().toISOString();
  const fullName     = (nv["Full Name"]?.[0]                                   || "").trim();
  const email        = (nv["Email Address"]?.[0]                               || "").trim();
  const phone        = (nv["Phone Number"]?.[0]                                || "").trim();
  const serviceType  = (nv["What Service Do You Need?"]?.[0]                   || "").trim();
  const vehicleYear  = (nv["Vehicle Year"]?.[0]                                || "").trim();
  const vehicleMake  = (nv["Vehicle Make"]?.[0]                                || "").trim();
  const vehicleModel = (nv["Vehicle Model"]?.[0]                               || "").trim();
  const location     = (nv["Where is the vehicle located (city or zip)?"]?.[0] || "").trim();
  const urgency      = (nv["How soon do you need service?"]?.[0]               || "").trim();
  const contactPref  = (nv["Best way to contact you"]?.[0]                     || "").trim();

  const ownerPhone = PropertiesService.getScriptProperties().getProperty("TWILIO_OWNER_PHONE");

  // SMS → customer
  sendSMS_(
    phone,
    `Hi ${fullName}, thanks for reaching out to BrakeJamesATL! ` +
    `We received your request for ${serviceType} on your ${vehicleYear} ${vehicleMake} ${vehicleModel}. ` +
    `We'll follow up via ${contactPref || "text"} shortly.`
  );

  // SMS → owner
  sendSMS_(
    ownerPhone,
    `NEW LEAD: ${fullName} | ${serviceType} | ${vehicleYear} ${vehicleMake} ${vehicleModel} | ${location} | ${urgency}`
  );

  // Sheets
  const leadsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.LEADS_SHEET_NAME);
  if (!leadsSheet) throw new Error(`Missing sheet named "${CONFIG.LEADS_SHEET_NAME}"`);

  // Firestore
  const leadId = `lead_${Utilities.getUuid()}`;
  firestoreCreateLead_(leadId, {
    accountId:  "acct_brakejamesatl",
    source:     "google_form",
    createdAt,
    updatedAt:  new Date().toISOString(),
    contact:    { fullName, email, phone },
    job: {
      serviceType,
      vehicle: { year: vehicleYear, make: vehicleMake, model: vehicleModel },
    },
    status: { stage: "new" },
  });

  // Gmail draft (review before sending)
  const nextFollowUpAt = new Date(Date.now() + CONFIG.FOLLOW_UP_HOURS * 3_600_000);
  let draftId = "";
  if (email.includes("@")) {
    const subject = `BrakeJamesATL — Quick details for your ${serviceType || "brake service"}`;
    const body    = buildEmailBody_({ fullName, serviceType, vehicleYear, vehicleMake, vehicleModel });
    draftId       = GmailApp.createDraft(email, subject, body).getId();
  }

  leadsSheet.appendRow([
    leadId,
    createdAt,
    fullName,
    email,
    phone,
    serviceType,
    vehicleYear,
    vehicleMake,
    vehicleModel,
    "new",
    formatAsLocal_(nextFollowUpAt),
    draftId,
    "",   // Notes — blank at intake
  ]);
}

// ============================================================
//  EMAIL HELPERS
// ============================================================

function buildEmailBody_({ fullName, serviceType, vehicleYear, vehicleMake, vehicleModel }) {
  const nameLine    = fullName ? `Hey ${fullName},` : "Hey there,";
  const vehicleLine = [vehicleYear, vehicleMake, vehicleModel].filter(Boolean).join(" ");
  const serviceLine = serviceType ? `for ${serviceType}` : "for brake service";

  return `${nameLine}

I got your request ${serviceLine}${vehicleLine ? ` on your ${vehicleLine}` : ""}.

Reply with 2 quick things so I can confirm pricing and availability:
1) Your vehicle location (address or nearest major intersection)
2) Any noise (squeal/grind) or vibration when braking?

– BrakeJamesATL
`;
}

function formatAsLocal_(dateObj) {
  return Utilities.formatDate(dateObj, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");
}

// ============================================================
//  GEMINI ENRICHMENT
// ============================================================

const GEMINI_MODEL = "gemini-2.5-flash";

function enrichSelectedLead() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.LEADS_SHEET_NAME);
  if (!sheet) throw new Error(`Missing sheet named "${CONFIG.LEADS_SHEET_NAME}"`);

  const row = sheet.getActiveRange().getRow();
  if (row < 2) throw new Error("Select a lead row (not the header).");

  const col  = (n) => String(sheet.getRange(row, n).getValue() || "").trim();
  const lead = {
    leadId:      col(1),
    createdAt:   sheet.getRange(row, 2).getValue(),
    fullName:    col(3),
    email:       col(4),
    phone:       col(5),
    serviceType: col(6),
    vehicleYear: col(7),
    vehicleMake: col(8),
    vehicleModel:col(9),
    stage:       col(10),
    notes:       col(13),
  };

  if (!lead.leadId) throw new Error("No Lead ID in column A for the selected row.");

  const ai = geminiEnrichLead_(lead);
  firestoreUpdateLeadAi_(lead.leadId, ai);

  const existing = lead.notes ? lead.notes + "\n\n" : "";
  sheet.getRange(row, 13).setValue(
    existing +
    `[AI Summary]\n${ai.summary}\n\n` +
    `[AI Missing Info]\n- ${(ai.missingInfo || []).join("\n- ")}`
  );

  SpreadsheetApp.getUi().alert("Enrichment complete — Firestore updated + Notes appended.");
}

function geminiEnrichLead_(lead) {
  const apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
  if (!apiKey) throw new Error("Missing GEMINI_API_KEY in Script Properties.");

  const vehicle = [lead.vehicleYear, lead.vehicleMake, lead.vehicleModel].filter(Boolean).join(" ");

  const prompt = `Return ONLY valid JSON (no markdown, no extra text).

Lead:
- name: ${lead.fullName || "Unknown"}
- email: ${lead.email || "Unknown"}
- phone: ${lead.phone || "Unknown"}
- requested_service: ${lead.serviceType || "Unknown"}
- vehicle: ${vehicle || "Unknown"}
- stage: ${lead.stage || "new"}
- internal_notes: ${lead.notes || ""}

Task:
1) Summary (2-3 sentences, customer-friendly).
2) Missing info needed to price/schedule.
3) 3-8 tags.
4) Draft email asking for missing info (friendly, professional; no pricing promises).
5) Confidence 0..1.

Return JSON with EXACT keys:
{
  "summary": string,
  "missingInfo": string[],
  "tags": string[],
  "draftEmail": string,
  "confidence": number
}`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const res = UrlFetchApp.fetch(url, {
    method:        "post",
    contentType:   "application/json",
    payload:       JSON.stringify({
      contents:         [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2 },
    }),
    muteHttpExceptions: true,
  });

  const code = res.getResponseCode();
  const txt  = res.getContentText();
  if (code >= 300) throw new Error(`Gemini API error (${code}): ${txt}`);

  const raw   = JSON.parse(txt)?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  const start = raw.indexOf("{");
  const end   = raw.lastIndexOf("}");
  if (start === -1 || end <= start) throw new Error("Gemini did not return JSON: " + raw);

  const ai = JSON.parse(raw.slice(start, end + 1));

  return {
    summary:     String(ai.summary    || "").trim(),
    missingInfo: Array.isArray(ai.missingInfo) ? ai.missingInfo.map(String) : [],
    tags:        Array.isArray(ai.tags)        ? ai.tags.map(String)        : [],
    draftEmail:  String(ai.draftEmail || "").trim(),
    confidence:  Number.isFinite(Number(ai.confidence)) ? Number(ai.confidence) : null,
  };
}

// ============================================================
//  TWILIO
// ============================================================

function sendSMS_(to, body) {
  const props      = PropertiesService.getScriptProperties();
  const accountSid = props.getProperty("TWILIO_ACCOUNT_SID");
  const authToken  = props.getProperty("TWILIO_AUTH_TOKEN");
  const fromNumber = props.getProperty("TWILIO_FROM_NUMBER");

  if (!accountSid || !authToken || !fromNumber) {
    throw new Error("Missing Twilio credentials in Script Properties.");
  }

  UrlFetchApp.fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method:  "post",
      headers: { Authorization: "Basic " + Utilities.base64Encode(`${accountSid}:${authToken}`) },
      payload: { To: to, From: fromNumber, Body: body },
      muteHttpExceptions: true,
    }
  );
}

// ============================================================
//  FIRESTORE
// ============================================================

function getAccessToken_() {
  const props       = PropertiesService.getScriptProperties();
  const clientEmail = props.getProperty("FIREBASE_CLIENT_EMAIL");
  const projectId   = props.getProperty("FIREBASE_PROJECT_ID");
  let   privateKey  = props.getProperty("FIREBASE_PRIVATE_KEY");

  if (!clientEmail || !privateKey || !projectId) {
    throw new Error("Missing Firebase credentials in Script Properties.");
  }

  privateKey = privateKey.replace(/\\n/g, "\n");

  const now    = Math.floor(Date.now() / 1000);
  const b64    = (o) => Utilities.base64EncodeWebSafe(JSON.stringify(o)).replace(/=+$/g, "");
  const header = { alg: "RS256", typ: "JWT" };
  const claims = {
    iss:   clientEmail,
    scope: "https://www.googleapis.com/auth/datastore",
    aud:   "https://oauth2.googleapis.com/token",
    exp:   now + 3600,
    iat:   now,
  };

  const unsigned = `${b64(header)}.${b64(claims)}`;
  const sig      = Utilities.computeRsaSha256Signature(unsigned, privateKey);
  const jwt      = `${unsigned}.${Utilities.base64EncodeWebSafe(sig).replace(/=+$/g, "")}`;

  const res = UrlFetchApp.fetch("https://oauth2.googleapis.com/token", {
    method:      "post",
    contentType: "application/x-www-form-urlencoded",
    payload: {
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion:  jwt,
    },
    muteHttpExceptions: true,
  });

  const j = JSON.parse(res.getContentText());
  if (!j.access_token) throw new Error(`Token error: ${res.getContentText()}`);
  return j.access_token;
}

function firestoreCreateLead_(docId, obj) {
  const projectId = PropertiesService.getScriptProperties().getProperty("FIREBASE_PROJECT_ID");
  const token     = getAccessToken_();

  const res = UrlFetchApp.fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/leads?documentId=${encodeURIComponent(docId)}`,
    {
      method:      "post",
      contentType: "application/json",
      headers:     { Authorization: `Bearer ${token}` },
      payload:     JSON.stringify({ fields: toFsFields_(obj) }),
      muteHttpExceptions: true,
    }
  );

  const code = res.getResponseCode();
  if (code >= 300) throw new Error(`Firestore write failed (${code}): ${res.getContentText()}`);
}

function firestoreUpdateLeadAi_(leadId, ai) {
  const projectId = PropertiesService.getScriptProperties().getProperty("FIREBASE_PROJECT_ID");
  const token     = getAccessToken_();

  const res = UrlFetchApp.fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/leads/${encodeURIComponent(leadId)}?updateMask.fieldPaths=ai`,
    {
      method:      "patch",
      contentType: "application/json",
      headers:     { Authorization: `Bearer ${token}` },
      payload:     JSON.stringify({ fields: { ai: { mapValue: { fields: toFsFields_(ai) } } } }),
      muteHttpExceptions: true,
    }
  );

  const code = res.getResponseCode();
  if (code >= 300) throw new Error(`Firestore update failed (${code}): ${res.getContentText()}`);
}

function toFsFields_(o) {
  const out = {};
  for (const [k, v] of Object.entries(o)) out[k] = toFsValue_(v);
  return out;
}

function toFsValue_(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (Array.isArray(v))             return { arrayValue: { values: v.map(toFsValue_) } };
  if (typeof v === "object")        return { mapValue: { fields: toFsFields_(v) } };
  if (typeof v === "boolean")       return { booleanValue: v };
  if (typeof v === "number")        return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  return { stringValue: String(v) };
}

// ============================================================
//  UI + AUTH HELPERS
// ============================================================

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("BrakeJamesATL")
    .addItem("Enrich selected lead (Gemini → Firestore)", "enrichSelectedLead")
    .addToUi();
}

function authorizeExternalRequests() {
  UrlFetchApp.fetch("https://www.google.com");
}

function doPost(e) {
  return ContentService.createTextOutput("OK");
}
