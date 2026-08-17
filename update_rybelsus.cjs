const fs = require('fs');

const fileContent = fs.readFileSync('src/data/products.js', 'utf-8');

// The file exports `categories` and `products`. 
// To safely update just this product, let's parse the file content as a string, or just use string replacement.
// Since the products are an array of objects, we can require it, modify the object, and write it back.
// However, writing it back via JSON.stringify will lose the 'export const products = ' part.

const { products } = require('./src/data/products.js');
const rybelsus = products.find(p => p.name === '7mg Rybelsus Semaglutide Tablets');

if (rybelsus) {
    rybelsus.strength = '7'; // Match screenshot exactly: "7" instead of "7 mg"
    rybelsus.packagingType = 'Box';
    rybelsus.composition = 'Semaglutide';
    rybelsus.packagingSize = '1x10 Tablets';
    rybelsus.brand = 'Rybelsus';
    rybelsus.treatment = 'Treat Type 2 Diabetes';
    delete rybelsus.usages; // Usages not in screenshot table
    rybelsus.description = 'Rybelsus 7 mg tablets contain semaglutide, a glucagon-like peptide-1 (GLP-1) receptor agonist. It is the first oral GLP-1 RA approved for the treatment of type 2 diabetes mellitus. Semaglutide works by enhancing glucose-dependent insulin secretion, reducing glucagon secretion, slowing gastric emptying, and promoting satiety—leading to improved glycemic control and weight loss.';

    // Now we need to write the products back to the file.
    // We will read the file, slice out the products array, and replace it.
    
    let contentStr = fs.readFileSync('src/data/products.js', 'utf-8');
    const startExport = contentStr.indexOf('export const products = ');
    
    if (startExport !== -1) {
        const categoriesPart = contentStr.substring(0, startExport);
        const newProductsStr = 'export const products = ' + JSON.stringify(products, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';
        fs.writeFileSync('src/data/products.js', categoriesPart + newProductsStr);
        console.log('Successfully updated 7mg Rybelsus Semaglutide Tablets.');
    } else {
        console.log('Could not find export const products');
    }
} else {
    console.log('Product not found!');
}
