import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { appendToGoogleSheet, authorizeGoogle, getSpreadsheetInfo, parseRangeSheetName, appendDiagnostics } from './googleSheets.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || '';

app.use(cors({ origin: '*', methods: ['GET','POST','PUT','OPTIONS'], allowedHeaders: ['Content-Type'] }));
app.use(express.json());

// Storage abstraction: Mongo if available, else JSON file
let mongoClient = null;
let mongoCollection = null;

const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'internships.json');

async function ensureJsonFile() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.access(dataFile).catch(async () => {
      await fs.writeFile(dataFile, JSON.stringify([], null, 2), 'utf-8');
    });
  } catch (err) {
    console.error('Error ensuring JSON file:', err);
  }
}

async function jsonReadAll() {
  await ensureJsonFile();
  const raw = await fs.readFile(dataFile, 'utf-8');
  return JSON.parse(raw);
}

async function jsonWriteAll(items) {
  await ensureJsonFile();
  await fs.writeFile(dataFile, JSON.stringify(items, null, 2), 'utf-8');
}

async function initMongo() {
  if (!MONGODB_URI) return;
  try {
    mongoClient = new MongoClient(MONGODB_URI);
    await mongoClient.connect();
    const db = mongoClient.db(process.env.MONGODB_DB || 'apexdeploy');
    mongoCollection = db.collection('internships');
    console.log('Connected to MongoDB');
    console.log('Sheets env present:', {
      clientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      privateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      spreadsheetId: !!process.env.GOOGLE_SHEETS_ID,
      range: !!process.env.GOOGLE_SHEETS_RANGE,
    });
  } catch (err) {
    console.warn('MongoDB connection failed, falling back to JSON file storage:', err.message);
    mongoClient = null;
    mongoCollection = null;
  }
}

// API routes
app.get('/api/internships', async (req, res) => {
  try {
    if (mongoCollection) {
      const items = await mongoCollection.find({}).sort({ createdAt: -1 }).toArray();
      return res.json(items);
    }
    const items = await jsonReadAll();
    items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(items);
  } catch (err) {
    console.error('GET /api/internships error:', err);
    res.status(500).json({ error: 'Failed to fetch internships' });
  }
});

app.post('/api/internships', async (req, res) => {
  try {
    const {
      fullName,
      email,
      profession, // 'student' | 'employee'
      collegeName,
      courseName,
      currentYear,
      internshipType, // 'frontend' | 'fullstack' | 'uiux' | 'aiml'
    } = req.body || {};

    if (!fullName || !email || !profession || !internshipType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const doc = {
      fullName,
      email,
      profession,
      collegeName: profession === 'student' ? (collegeName || '') : '',
      courseName: profession === 'student' ? (courseName || '') : '',
      currentYear: profession === 'student' ? (currentYear || '') : '',
      internshipType,
      status: 'pending', // default status
      assignedRole: '',
      createdAt: new Date().toISOString(),
    };

    if (mongoCollection) {
      const result = await mongoCollection.insertOne(doc);
      const savedMongo = { ...doc, _id: result.insertedId };
      appendToGoogleSheet(savedMongo)
        .then(r => { if (!r?.ok) console.warn('Sheets append skipped:', r?.reason || r?.error); })
        .catch(err => console.warn('Google Sheets append error:', err?.message || err));
      return res.json(savedMongo);
    }

    const items = await jsonReadAll();
    const id = uuidv4();
    const saved = { ...doc, _id: id };
    items.push(saved);
    await jsonWriteAll(items);
    appendToGoogleSheet(saved)
      .then(r => { if (!r?.ok) console.warn('Sheets append skipped:', r?.reason || r?.error); })
      .catch(err => console.warn('Google Sheets append error:', err?.message || err));
    res.json(saved);
  } catch (err) {
    console.error('POST /api/internships error:', err);
    res.status(500).json({ error: 'Failed to submit internship application' });
  }
});

app.put('/api/internships/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, assignedRole } = req.body || {};

    if (mongoCollection) {
      const filter = { _id: ObjectId.isValid(id) ? new ObjectId(id) : id };
      const update = { $set: {} };
      if (typeof status === 'string') update.$set.status = status;
      if (typeof assignedRole === 'string') update.$set.assignedRole = assignedRole;
      const result = await mongoCollection.findOneAndUpdate(filter, update, { returnDocument: 'after' });
      return res.json(result.value || { ok: true });
    }

    const items = await jsonReadAll();
    const idx = items.findIndex(x => String(x._id) === String(id));
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    if (typeof status === 'string') items[idx].status = status;
    if (typeof assignedRole === 'string') items[idx].assignedRole = assignedRole;
    await jsonWriteAll(items);
    res.json(items[idx]);
  } catch (err) {
    console.error('PUT /api/internships/:id error:', err);
    res.status(500).json({ error: 'Failed to update internship application' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, mongo: !!mongoCollection });
});

// Sheets diagnostics route
app.get('/api/sheets/diagnose', async (req, res) => {
  try {
    const env = {
      clientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      privateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      spreadsheetId: !!process.env.GOOGLE_SHEETS_ID,
      range: process.env.GOOGLE_SHEETS_RANGE || 'Internship_Applications!A1',
    };
    const auth = await authorizeGoogle();
    const spreadsheet = await getSpreadsheetInfo();
    const rangeName = parseRangeSheetName(env.range);
    const rangeInSheetList = spreadsheet.ok && spreadsheet.titles ? spreadsheet.titles.includes(rangeName) : false;
    const append = await appendDiagnostics();

    res.json({ env, auth, spreadsheet, rangeName, rangeInSheetList, append });
  } catch (err) {
    res.status(500).json({ error: err.message || 'diagnose_failed' });
  }
});

initMongo().then(() => {
  console.log('Sheets env present:', {
    clientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
    privateKey: !!process.env.GOOGLE_PRIVATE_KEY,
    spreadsheetId: !!process.env.GOOGLE_SHEETS_ID,
    range: !!process.env.GOOGLE_SHEETS_RANGE,
  });
  app.listen(PORT, () => {
    console.log(`Internship API server running on http://localhost:${PORT}`);
  });
});