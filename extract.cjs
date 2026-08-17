const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\harsh\\.gemini\\antigravity\\brain\\5661643b-a65d-460e-885a-08c49e6d053e\\.system_generated\\steps\\301\\content.md', 'utf8');
const match = content.match(/<script type="application\/ld\+json">(\[.*?\])<\/script>/);
if (match) {
  const data = JSON.parse(match[1]);
  const products = data.filter(d => d['@type'] === 'Product');
  console.log(JSON.stringify(products, null, 2));
} else {
  console.log('No JSON-LD found');
}
