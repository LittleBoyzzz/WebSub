const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// Copy HTML files
fs.copyFileSync('index.html', 'public/index.html');
fs.copyFileSync('WebSub.html', 'public/WebSub.html');

// Copy CSS
if (!fs.existsSync('public/dist')) {
  fs.mkdirSync('public/dist', { recursive: true });
}
fs.copyFileSync('dist/output.css', 'public/dist/output.css');

console.log('✓ Files copied to public directory');
