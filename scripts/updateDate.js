#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/Components/Footer/Footer.js');

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Replace the date on line 8 (the hardcoded date in the <li> tag)
content = content.replace(
  /<li>\d{4}-\d{2}-\d{2}<\/li>/,
  `<li>${today}</li>`
);

// Write the file back
fs.writeFileSync(filePath, content, 'utf8');

console.log(`Updated Footer.js with deployment date: ${today}`);
