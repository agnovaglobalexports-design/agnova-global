const fs = require('fs');
let content = fs.readFileSync('src/data/products.js', 'utf-8');

// Replace the literal string '\\n' that I accidentally wrote
content = content.replace(/,\\n/g, ',\n');
content = content.replace(/\\n\];/g, '\n];');

fs.writeFileSync('src/data/products.js', content);
console.log('Syntax fixed.');
