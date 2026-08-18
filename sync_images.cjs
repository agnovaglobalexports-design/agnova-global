const fs = require('fs');
const path = require('path');

const { categories, products } = require('./src/data/products.js');

const baseProductsDir = path.join(__dirname, 'public', 'products');
let updatedCount = 0;

function sanitizeFolderName(name) {
  return name.replace(/[<>:"/\\|?*]+/g, '').trim();
}

categories.forEach(cat => {
  const catDirName = sanitizeFolderName(cat.name);
  const catPath = path.join(baseProductsDir, catDirName);
  if (!fs.existsSync(catPath)) return;

  const catProducts = products.filter(p => p.category === cat.id);
  catProducts.forEach(prod => {
    const prodDirName = sanitizeFolderName(prod.name);
    const prodPath = path.join(catPath, prodDirName);
    if (!fs.existsSync(prodPath)) return;

    // Look for all image files inside prodPath
    const files = fs.readdirSync(prodPath);
    const imageFiles = files.filter(f => /\.(jpe?g|png|webp|gif|svg)$/i.test(f));
    
    if (imageFiles.length > 0) {
      const allImagePaths = imageFiles.map(img => `/products/${encodeURIComponent(catDirName)}/${encodeURIComponent(prodDirName)}/${img}`);
      const primaryImage = allImagePaths[0];

      if (prod.image !== primaryImage || JSON.stringify(prod.images) !== JSON.stringify(allImagePaths)) {
        prod.image = primaryImage;
        prod.images = allImagePaths;
        updatedCount++;
        console.log(`Updated images for: ${prod.name} -> ${imageFiles.length} photos found:`, imageFiles);
      }
    }
  });
});

if (updatedCount > 0) {
  const newCategoriesStr = 'export const categories = ' + JSON.stringify(categories, null, 2).replace(/"([^"]+)":/g, '$1:') + ';\n\n';
  const newProductsStr = 'export const products = ' + JSON.stringify(products, null, 2).replace(/"([^"]+)":/g, '$1:') + ';\n';
  fs.writeFileSync('src/data/products.js', newCategoriesStr + newProductsStr, 'utf-8');
  console.log(`Successfully synced ${updatedCount} product image sets into products.js!`);
} else {
  console.log('All product images are up to date.');
}
