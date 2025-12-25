import { google } from 'googleapis';


const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

function getAuth() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  
  if (!clientEmail || !privateKey) {
    console.log('Missing credentials:', { clientEmail: !!clientEmail, privateKey: !!privateKey });
    return null;
  }
  
  // Handle escaped newlines in env var
  privateKey = privateKey.replace(/\\n/g, '\n');
  // private key normalized
  
  try {
    // Create JWT auth using GoogleAuth with service account credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: SCOPES,
    });
    
    return auth;
  } catch (error) {
    console.log('Auth creation error:', error.message);
    return null;
  }
}

export async function appendToGoogleSheet(row) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const range = process.env.GOOGLE_SHEETS_RANGE || 'Internship_Applications!A1';
    if (!spreadsheetId) {
      return { ok: false, reason: 'missing_sheet_id' };
    }
    const auth = getAuth();
    if (!auth) {
      return { ok: false, reason: 'missing_credentials' };
    }
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });

    const values = [[
      row.fullName,
      row.email,
      row.profession,
      row.collegeName || '',
      row.courseName || '',
      row.currentYear || '',
      row.internshipType,
      row.status,
      row.assignedRole || '',
      row.createdAt,
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: { values },
    });

    return { ok: true };
  } catch (err) {
    console.warn('Google Sheets append error:', err.message);
    return { ok: false, error: err.message };
  }
}

export async function authorizeGoogle() {
  try {
    const auth = getAuth();
    if (!auth) {
      return { ok: false, error: 'missing_credentials' };
    }
    // For GoogleAuth, we get the client instead of calling authorize
    const authClient = await auth.getClient();
    const clientType = authClient?.constructor?.name || 'UnknownClient';
    return { ok: true, clientType };
  } catch (err) {
    console.log('authorizeGoogle error:', err?.message);
    return { ok: false, error: err.message };
  }
}

export async function getSpreadsheetInfo() {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!spreadsheetId) {
      return { ok: false, reason: 'missing_sheet_id' };
    }
    const auth = getAuth();
    if (!auth) {
      return { ok: false, reason: 'missing_credentials' };
    }
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });
    const resp = await sheets.spreadsheets.get({ spreadsheetId });
    const titles = resp.data.sheets?.map(s => s.properties?.title) || [];
    return { ok: true, titles };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export function parseRangeSheetName(range) {
  try {
    if (!range) return null;
    const r = String(range);
    if (r.startsWith("'")) {
      const endIdx = r.indexOf("'", 1);
      const excl = r.indexOf("!", endIdx + 1);
      if (endIdx > 0) return r.substring(1, endIdx);
    }
    return r.split('!')[0];
  } catch {
    return null;
  }
}

export async function appendDiagnostics() {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const range = process.env.GOOGLE_SHEETS_RANGE || 'Internship_Applications!A1';
    if (!spreadsheetId) {
      return { ok: false, reason: 'missing_sheet_id' };
    }
    const auth = getAuth();
    if (!auth) {
      return { ok: false, reason: 'missing_credentials' };
    }
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });
    const values = [[
      'DIAGNOSTIC',
      new Date().toISOString(),
      process.env.GOOGLE_CLIENT_EMAIL || '',
      range
    ]];
    const resp = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: { values },
    });
    return { ok: true, updates: resp.data?.updates };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}