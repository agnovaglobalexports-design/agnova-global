const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const content = fs.readFileSync('C:\\Users\\harsh\\.gemini\\antigravity\\brain\\5661643b-a65d-460e-885a-08c49e6d053e\\.system_generated\\steps\\301\\content.md', 'utf8');

const dom = new JSDOM(content);
const document = dom.window.document;

// Find all product containers
const productBlocks = document.querySelectorAll('.fm_desc'); // Or a similar class based on standard IndiaMART layout
// Let's just find tables which often contain the specs
const tables = document.querySelectorAll('table');
const extracted = [];

tables.forEach(table => {
    const rows = table.querySelectorAll('tr');
    const specs = {};
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 2) {
            specs[cells[0].textContent.trim()] = cells[1].textContent.trim();
        }
    });
    if (Object.keys(specs).length > 0) {
        extracted.push(specs);
    }
});

console.log(JSON.stringify(extracted.slice(0, 5), null, 2));
