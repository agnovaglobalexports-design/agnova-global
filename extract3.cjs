const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const content = fs.readFileSync('C:\\Users\\harsh\\.gemini\\antigravity\\brain\\5661643b-a65d-460e-885a-08c49e6d053e\\.system_generated\\steps\\394\\content.md', 'utf8');

const dom = new JSDOM(content);
const document = dom.window.document;

// IndiaMART products are usually in elements with specific classes, or we can look for JSON-LD.
const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
let productsData = [];

jsonLdScripts.forEach(script => {
    try {
        const data = JSON.parse(script.textContent);
        if (Array.isArray(data)) {
             productsData = productsData.concat(data.filter(d => d['@type'] === 'Product'));
        } else if (data['@type'] === 'Product') {
             productsData.push(data);
        }
    } catch(e) {}
});

console.log("JSON-LD Products Found:", productsData.length);

// Also let's try to extract from the DOM tables if they exist
const productItems = [];
const items = document.querySelectorAll('.prd-card'); // common class, we will just look for elements containing tables
if (items.length === 0) {
    // try finding tables directly
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tr');
        const specs = {};
        rows.forEach(row => {
            const cells = row.querySelectorAll('td, th');
            if (cells.length === 2) {
                specs[cells[0].textContent.trim()] = cells[1].textContent.trim();
            }
        });
        
        // Find nearby heading for name
        let current = table;
        let name = '';
        while(current && !name && current.tagName !== 'BODY') {
            current = current.previousElementSibling || current.parentElement;
            if (current) {
                const h2 = current.querySelector('h2, h3, .prd-title');
                if (h2) name = h2.textContent.trim();
            }
        }

        if (Object.keys(specs).length > 0) {
            productItems.push({ name, specs });
        }
    });
}

console.log("DOM Tables Found:", productItems.length);
if (productItems.length > 0) {
    console.log(JSON.stringify(productItems.slice(0, 2), null, 2));
}

// Let's dump a small portion of the body text to see what classes are actually used
console.log("\nSample HTML:\n", document.body.innerHTML.substring(0, 1000));
