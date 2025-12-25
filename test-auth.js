import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

console.log('Testing Google Sheets authentication...');

const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
let privateKey = process.env.GOOGLE_PRIVATE_KEY;

console.log('Client email:', clientEmail ? 'Present' : 'Missing');
console.log('Private key:', privateKey ? 'Present' : 'Missing');

if (privateKey) {
  console.log('Raw key length:', privateKey.length);
  console.log('Key starts with:', privateKey.substring(0, 30));
  
  // Handle escaped newlines
  privateKey = privateKey.replace(/\\n/g, '\n');
  console.log('After newline replacement length:', privateKey.length);
  console.log('After replacement starts with:', privateKey.substring(0, 30));
  
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    console.log('Auth object created successfully');
    
    // Test getting client
    auth.getClient().then(client => {
      console.log('Client obtained successfully');
      process.exit(0);
    }).catch(err => {
      console.log('Client error:', err.message);
      process.exit(1);
    });
    
  } catch (error) {
    console.log('Auth creation error:', error.message);
    process.exit(1);
  }
}