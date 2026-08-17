const fs = require('fs');

const fileContent = fs.readFileSync('src/data/products.js', 'utf-8');

// We will do a regex replace to add the new fields
// This is safer than evaling if there are ES module exports

let updatedContent = fileContent.replace(/({ id: '[^]+?', name: '[^]+?', category: '[^]+?', strength: '[^]+?', image: '[^]+?' })/g, (match) => {
    // We add some generic data to the match
    let objStr = match.substring(0, match.length - 2); // remove ' }'
    
    // Extract name for description
    const nameMatch = objStr.match(/name: '([^']+)'/);
    const name = nameMatch ? nameMatch[1] : 'This product';
    
    // Extract strength
    const strengthMatch = objStr.match(/strength: '([^']+)'/);
    const strength = strengthMatch ? strengthMatch[1] : 'As prescribed';

    const newFields = `, brand: '${name.split(' ')[0]}', packagingType: 'Box', treatment: 'Prescription Medical Use', form: 'Tablet / Capsule', composition: '${name}', packagingSize: '10 x 10 Tablets', price: '₹ 250/Box', description: '${name} is an advanced pharmaceutical medication used primarily in clinical treatments. It is formulated with precise composition to ensure maximum efficacy and safety for patients. Always consult your healthcare provider before use.' }`;
    
    return objStr + newFields;
});

// For specific products from the screenshot, let's hardcode one or two to look extremely realistic
updatedContent = updatedContent.replace(
    /brand: 'Bdenza'.*?}/,
    `brand: 'Bdenza', packagingType: 'Box', treatment: 'Prostate Cancer', form: 'Capsule', composition: 'Enzalutamide', packagingSize: '4x28 Capsules', price: '₹ 15,000/Box', description: 'Bdenza 40mg Capsule is an antiandrogen. It works by blocking the effect of the natural male hormones on the growth of prostate cells. This helps block the growth and spread of cancer cells.' }`
);

updatedContent = updatedContent.replace(
    /brand: 'Iversun'.*?}/,
    `brand: 'Iversun', packagingType: 'Strip', treatment: 'Parasitic Infections', form: 'Tablet', composition: 'Ivermectin (12mg)', packagingSize: '10 Tablets', price: '₹ 120/Strip', description: 'Iversun 12mg Tablet is an antiparasitic medication. It is used to treat parasitic infections of your intestinal tract, skin, and eyes. It works by paralyzing and killing the parasites causing the infection.' }`
);

fs.writeFileSync('src/data/products.js', updatedContent);
console.log('Products enriched successfully.');
