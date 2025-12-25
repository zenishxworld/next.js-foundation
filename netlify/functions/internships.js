import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

function getAuth() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!clientEmail || !privateKey) {
    return null;
  }
  privateKey = privateKey.replace(/\\n/g, '\n');
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: clientEmail, private_key: privateKey },
      scopes: SCOPES,
    });
    return auth;
  } catch {
    return null;
  }
}

async function appendToGoogleSheet(row) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const range = process.env.GOOGLE_SHEETS_RANGE || 'Internship_Applications!A1';
    if (!spreadsheetId) return { ok: false, reason: 'missing_sheet_id' };
    const auth = getAuth();
    if (!auth) return { ok: false, reason: 'missing_credentials' };
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
    return { ok: false, error: err.message };
  }
}

export async function handler(event) {
  // Handle CORS preflight if browser sends OPTIONS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
      },
      body: ''
    };
  }

  // GET handler with diagnostics mode
  if (event.httpMethod === 'GET') {
    const qs = event.queryStringParameters || {};
    if (qs?.diagnose === '1') {
      const env = {
        clientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
        privateKey: !!process.env.GOOGLE_PRIVATE_KEY,
        spreadsheetId: !!process.env.GOOGLE_SHEETS_ID,
        range: process.env.GOOGLE_SHEETS_RANGE || 'Internship_Applications!A1',
      };
      let authOk = false;
      let spreadsheet = { ok: false };
      let rangeName = null;
      let rangeInSheetList = false;

      try {
        const auth = getAuth();
        if (auth) {
          const authClient = await auth.getClient();
          const sheets = google.sheets({ version: 'v4', auth: authClient });
          authOk = true;
          const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
          if (spreadsheetId) {
            const resp = await sheets.spreadsheets.get({ spreadsheetId });
            const titles = resp?.data?.sheets?.map(s => s.properties?.title) || [];
            spreadsheet = { ok: true, titles };
            rangeName = String(env.range).split('!')[0];
            rangeInSheetList = titles.includes(rangeName);
          }
        }
      } catch (e) {
        spreadsheet = { ok: false, error: e?.message || 'spreadsheets_get_failed' };
      }

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ env, authOk, spreadsheet, rangeName, rangeInSheetList })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([])
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { fullName, email, profession, collegeName, courseName, currentYear, internshipType } = body;

    if (!fullName || !email || !profession || !internshipType) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const doc = {
      fullName,
      email,
      profession,
      collegeName: profession === 'student' ? (collegeName || '') : '',
      courseName: profession === 'student' ? (courseName || '') : '',
      currentYear: profession === 'student' ? (currentYear || '') : '',
      internshipType,
      status: 'pending',
      assignedRole: '',
      createdAt: new Date().toISOString(),
    };

    const r = await appendToGoogleSheet(doc);
    if (!r.ok) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: r.error || r.reason || 'sheet_append_failed' }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(doc),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: err.message || 'unexpected_error' }),
    };
  }
}