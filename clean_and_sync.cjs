const fs = require('fs');
const path = require('path');

const baseProductsDir = path.join(__dirname, 'public', 'products');
const carouselDir = path.join(__dirname, 'public', 'carousel');

function sanitizeFolderName(name) {
  return name.replace(/[<>:"/\\|?*.]+/g, '').trim();
}

function cleanDirectories(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const cleaned = entry.name.replace(/[. ]+$/, '').trim();
      if (cleaned !== entry.name) {
        const newPath = path.join(dir, cleaned);
        console.log(`Renaming invalid dir: "${entry.name}" -> "${cleaned}"`);
        try {
          if (fs.existsSync(newPath) && newPath !== fullPath) {
            const files = fs.readdirSync(fullPath);
            for (const f of files) {
              fs.copyFileSync(path.join(fullPath, f), path.join(newPath, f));
            }
            fs.rmSync(fullPath, { recursive: true, force: true });
          } else {
            fs.renameSync(fullPath, newPath);
          }
          cleanDirectories(newPath);
        } catch (e) {
          console.error('Error renaming:', e.message);
        }
      } else {
        cleanDirectories(fullPath);
      }
    }
  }
}

cleanDirectories(baseProductsDir);

// 1. Sync Products
const { categories, products } = require('./src/data/products.js');
let updatedCount = 0;

categories.forEach(cat => {
  let catDirName = sanitizeFolderName(cat.name);
  let catPath = path.join(baseProductsDir, catDirName);
  
  if (!fs.existsSync(catPath)) {
    const availableCats = fs.existsSync(baseProductsDir) ? fs.readdirSync(baseProductsDir) : [];
    const match = availableCats.find(c => sanitizeFolderName(c).toLowerCase() === catDirName.toLowerCase() || c.toLowerCase() === cat.name.toLowerCase());
    if (match) {
      catDirName = match;
      catPath = path.join(baseProductsDir, match);
    } else {
      return;
    }
  }

  const catProducts = products.filter(p => p.category === cat.id);
  const availableProdDirs = fs.readdirSync(catPath);

  catProducts.forEach(prod => {
    let prodDirName = sanitizeFolderName(prod.name);
    let prodPath = path.join(catPath, prodDirName);

    if (!fs.existsSync(prodPath)) {
      const match = availableProdDirs.find(d => sanitizeFolderName(d).toLowerCase() === prodDirName.toLowerCase() || d.toLowerCase() === prod.name.toLowerCase());
      if (match) {
        prodDirName = match;
        prodPath = path.join(catPath, match);
      } else {
        return;
      }
    }

    const files = fs.readdirSync(prodPath);
    const imageFiles = files.filter(f => /\.(jpe?g|png|webp|gif|svg)$/i.test(f));

    if (imageFiles.length > 0) {
      const allImagePaths = imageFiles.map(img => `/products/${encodeURIComponent(catDirName)}/${encodeURIComponent(prodDirName)}/${img}`);
      const primaryImage = allImagePaths[0];

      if (prod.image !== primaryImage || JSON.stringify(prod.images) !== JSON.stringify(allImagePaths)) {
        prod.image = primaryImage;
        prod.images = allImagePaths;
        updatedCount++;
        console.log(`Updated images for: [${cat.name}] ${prod.name} -> (${imageFiles.length} photos)`);
      }
    }
  });
});

const newCategoriesStr = 'export const categories = ' + JSON.stringify(categories, null, 2).replace(/"([^"]+)":/g, '$1:') + ';\n\n';
const newProductsStr = 'export const products = ' + JSON.stringify(products, null, 2).replace(/"([^"]+)":/g, '$1:') + ';\n';
fs.writeFileSync('src/data/products.js', newCategoriesStr + newProductsStr, 'utf-8');

// 2. Sync Homepage Carousel
if (fs.existsSync(carouselDir)) {
  const carouselFiles = fs.readdirSync(carouselDir).filter(f => /\.(jpe?g|png|webp|gif|svg)$/i.test(f));
  if (carouselFiles.length > 0) {
    const badgesPool = [
      { tag: 'Quality Certified', tagSub: 'WHO-GMP Approved', badge: '50+ Countries', badgeSub: 'Worldwide Export' },
      { tag: 'Certified Exporter', tagSub: '200+ Products Sourced', badge: 'Fast Logistics', badgeSub: 'Global Cold-Chain' },
      { tag: 'Pharmaceutical Sourcing', tagSub: 'Sterile & Verified', badge: 'Direct Sourcing', badgeSub: '50+ Supply Partners' },
      { tag: 'Oncology & Generic Care', tagSub: 'Life-Saving Formulations', badge: 'Quality Assured', badgeSub: 'COA / COO Certified' },
      { tag: 'Global Compliance', tagSub: 'Verified Batch Dossiers', badge: 'Reliable Delivery', badgeSub: 'Secure Cargo Handling' }
    ];

    const carouselSlides = carouselFiles.map((file, idx) => {
      const b = badgesPool[idx % badgesPool.length];
      return {
        image: `/carousel/${encodeURIComponent(file)}`,
        tag: b.tag,
        tagSub: b.tagSub,
        badge: b.badge,
        badgeSub: b.badgeSub
      };
    });

    const carouselFileContent = `// Auto-generated carousel configuration from public/carousel/\nexport const heroCarouselSlides = ${JSON.stringify(carouselSlides, null, 2)};\n`;
    fs.writeFileSync('src/data/carousel.js', carouselFileContent, 'utf-8');
    console.log(`Synced ${carouselFiles.length} homepage carousel images into carousel.js!`);
  }
}

console.log(`Clean and sync completed successfully.`);
