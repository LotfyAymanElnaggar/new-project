const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.error('❌ .env file not found');
  process.exit(1);
}

const content = fs.readFileSync(envPath, 'utf8');
const required = ['APP_KEY=', 'DB_CONNECTION=', 'DB_DATABASE='];
const missing = required.filter((k) => !content.includes(k));

if (missing.length) {
  console.error('❌ Missing keys:', missing.join(', '));
  process.exit(1);
}

console.log('✅ Environment file looks good');
