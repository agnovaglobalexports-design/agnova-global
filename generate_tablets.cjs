const fs = require('fs');

const productNames = `
10mg Oxanadrol Oxandrolone Tablets
40mcg Clenbut Clenbuterol HCL Tablets
10mg Anavar Oxandrolone Tablets
40mg Clenbest Clenbuterol Tablets
10mg Vardejuv Vardenafil Tablets
50mg Enclomisign Enclomiphene Tablets
50mg Enclofert Enclomiphene Tablets
60mg Poxet Dapoxetine HCL Tablets
30mg Poxet Dapoxetine Tablets
10mg Vbolnor Methandienone Tablets
7mg Rybelsus Semaglutide Tablets
400mg Viadali Ademetionine Tablets
100mg Extra Super Tadaro Tadalafil Dapoxetine Tablets
250mg Azicip Azithromycin Tablets
5mg Tofajak Tofacitinib Tablets
5mg Inramed Midodrine Hydrochloride Tablets
2.5mg Inramed Midodrine Hydrochloride Tablet
100mg Ridsunate Artesunate Tablets
50mg Ridsunate Artesunate Tablets
25mg Jardiance Empagliflozin Tablets
125mg Prolavir LR Lopinavir Ritonavir Tablets
250mg Prolavir LR Lopinavir Ritonavir Tablets
250mg Paxista Nirmatrelvir Ritonavir Tablets
50mg Instgra Dolutegravir Tablets
650mg Cipanec Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets
650mg Trilavir D Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets
650mg Xapavir LT Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets
650mg Acriptega Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets
650mg Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets
400mg Ralmac Raltegravir Tablets
3mg Rybelsus Semaglutide Tablets
650mg Penlactic Amoxicillin Potassium Clavulanate Tablets
35mg Conshe Cyproterone Acetate Ethinylestradiol Tablets
25mcg T 3 Liothyronine Sodium Tablets
0.5mg Dutasure Dutasteride Tablets
5mg Healpecia Finasteride Tablets
50mg Oxythol Oxymetholone Tablets
10mg Stazol Stanozolol Tablets
50mg Androl Oxymetholone Tablets
200mg Vorier Voriconazole Tablets
`.trim().split('\n').filter(Boolean);

const generatedProducts = productNames.map((name, index) => {
    // Extract basic details from name
    const strengthMatch = name.match(/^([\d.]+[a-zA-Z]+)\s/);
    const strength = strengthMatch ? strengthMatch[1] : 'As prescribed';
    
    const parts = name.split(' ');
    // Assuming Brand is the second word if it doesn't match a generic compound, but let's do simple parsing
    const brand = parts.length > 2 ? parts[1] : parts[0];
    const form = name.includes('Tablet') ? 'Tablet' : name.includes('Capsule') ? 'Capsule' : 'Tablet';
    
    // Attempt to extract composition (everything between brand and Form)
    let composition = name.replace(strength, '').replace(brand, '').replace(/Tablets?/gi, '').replace(/Capsules?/gi, '').trim();
    if (!composition) composition = brand;

    return {
        id: `pt-${index + 1}`,
        name: name.trim(),
        category: 'pharmaceutical-tablets',
        strength: strength,
        image: '/assets/cat_general.jpg', // Default image
        brand: brand,
        packagingType: 'Box',
        treatment: 'Clinical Treatment',
        form: form,
        composition: composition,
        packagingSize: '10 x 10 Tablets',
        price: 'Get Latest Price',
        description: `${name} is an advanced pharmaceutical ${form.toLowerCase()} formulated with ${composition}. It is utilized for clinical treatments requiring ${strength} dosage. As a trusted product under the ${brand} brand, it guarantees high efficacy and safety. Always consult a healthcare provider for proper usages and dosage.`
    };
});

// For specific overrides based on the screenshot:
const oxa = generatedProducts.find(p => p.name.includes('10mg Oxanadrol'));
if(oxa) {
    oxa.usages = 'To regain weight or muscle';
    oxa.packagingSize = '5x10 Tablets';
    oxa.price = '₹ 1,500/Box';
    oxa.description = 'Oxandrolone is an oral anabolic steroid derived from dihydrotestosterone (DHT), but in injectable form it is used for its anabolic effects with minimal androgenic activity. It is known for promoting lean muscle gains, enhancing recovery, and aiding in weight gain after trauma, surgery, or chronic illness.';
    oxa.treatment = 'Muscle Wasting';
}

const fileContent = fs.readFileSync('src/data/products.js', 'utf-8');

// Replace the empty products array with the populated one
const newProductsStr = 'export const products = ' + JSON.stringify(generatedProducts, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';

const updatedContent = fileContent.replace(/export const products = \[\];/, newProductsStr);

fs.writeFileSync('src/data/products.js', updatedContent);
console.log('Products successfully added.');
