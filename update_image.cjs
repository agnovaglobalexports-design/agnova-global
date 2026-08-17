const fs = require('fs');

const { products } = require('./src/data/products.js');
const rybelsus = products.find(p => p.name === '7mg Rybelsus Semaglutide Tablets');

if (rybelsus) {
    rybelsus.image = '/assets/rybelsus_7mg.jpg';

    let contentStr = fs.readFileSync('src/data/products.js', 'utf-8');
    const startExport = contentStr.indexOf('export const products = ');
    
    if (startExport !== -1) {
        const categoriesPart = contentStr.substring(0, startExport);
        const newProductsStr = 'export const products = ' + JSON.stringify(products, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';
        fs.writeFileSync('src/data/products.js', categoriesPart + newProductsStr);
        console.log('Successfully updated 7mg Rybelsus image.');
    } else {
        console.log('Could not find export const products');
    }
} else {
    console.log('Product not found!');
}
