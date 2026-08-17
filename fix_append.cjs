const fs = require('fs');

const rawText = `
Tenofovir Alafenamide Tablets

25mg Prihep Tenofovir Alafenamide Tablets
25mg Hepbest Tenofovir Alafenamide Tablet
25mg Durataf Tenofovir Alafenamide Tablets
25mg Tafnat Tenofovir Alofenomide Tablets
275mg Spegra Dolutegravir Emtricitabine Tenofoir Alafenamide Tablets
275mg Lagmitaf Bictegravir Emtricitabine Tenofovir Alfenamide Tablets
275mg Taffic Bictegravir Emtricitabine Tenofovir Alafenamide Tablets

Pharmaceutical Capsules

8mg Sotret NF Isotretinoin Capsules
75mg Fluvir Oseltamivir Phosphate Capsules
200mg Molnatris Molnupiravir Capsules
10000mg Panmate Pancreatin Capsules
100mg Inmeth Indomethacin Suppositories Capsules
100mg Dee X Doxycycline Hydrochloride Capsules
100mg Thalix Thalidomide Capsules

Tacrolimus Capsules

0.5mg Mylimus Tacrolimus Capsule
1mg Prograf Tacrolimus Capsules
0.5mg Prograf Tacrolimus Capsules
2mg Mylimus Tacrolimus Capsule
1mg Mylimus Tacrolimus Capsules
Nutrabay Pro Natural Testosterone Capsules

Herbal Medicines

Privet Herbal L Arginine Tablets
Privet Herbal Ashwagandha Tablets
Privet Herbal L Glutathione Tablets
1000mg Ashwagandha Root Extract Tablets
1000mg Privet Herbal L Carnitine Tablets
1000mg Prihep Herbal Liver Care Capsule
`;

const categoryMap = {
    'Tenofovir Alafenamide Tablets': 'tenofovir-alafenamide',
    'Pharmaceutical Capsules': 'pharmaceutical-capsules',
    'Tacrolimus Capsules': 'tacrolimus-capsules',
    'Herbal Medicines': 'herbal-medicines'
};

const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
const newProducts = [];
let currentCategory = '';
let index = 123; // Starting index after the 122 existing ones

for (const line of lines) {
    if (categoryMap[line]) {
        currentCategory = categoryMap[line];
    } else {
        const name = line;
        
        const strengthMatch = name.match(/^([\d.]+[a-zA-Z]+)\s/);
        let strength = strengthMatch ? strengthMatch[1] : 'As prescribed';

        let form = 'Tablet';
        if (name.toLowerCase().includes('capsule')) form = 'Capsule';
        else if (name.toLowerCase().includes('suppositor')) form = 'Suppository';
        
        const parts = name.split(' ');
        let brand = parts[0];
        if (strengthMatch && parts.length > 1) {
            brand = parts[1];
        }
        if (brand.toLowerCase() === 'privet' || brand.toLowerCase() === 'nutrabay') {
            brand = parts.slice(0, 2).join(' '); // e.g. "Privet Herbal"
        }

        let composition = name.replace(new RegExp('^' + strength + '\\s?', 'i'), '')
                              .replace(brand, '')
                              .replace(/Tablets?/gi, '')
                              .replace(/Capsules?/gi, '')
                              .replace(/Suppositories/gi, '')
                              .trim();
        if (!composition || composition === '') composition = name;

        let image = '/assets/cat_general.jpg';

        newProducts.push({
            id: `p-${index++}`,
            name: name,
            category: currentCategory,
            strength: strength,
            image: image,
            brand: brand,
            packagingType: 'Box/Strip',
            treatment: 'Clinical Indication',
            usages: 'As directed by the physician',
            form: form,
            composition: composition,
            packagingSize: '10 x 10',
            description: `${name} is an advanced formulation ensuring maximum efficacy and patient safety. It is extensively utilized in clinical settings for targeted treatments. Manufactured under stringent quality standards, this ${form.toLowerCase()} is recognized for its reliability. Please consult a registered medical practitioner for precise dosage and administrative protocols.`
        });
    }
}

// Safer append method
const fileContent = fs.readFileSync('src/data/products.js', 'utf-8');
const closingBracketIndex = fileContent.lastIndexOf(']');
if (closingBracketIndex !== -1) {
    const stringToAppend = ',\\n' + JSON.stringify(newProducts, null, 2).slice(1, -1) + '\\n];';
    const updatedContent = fileContent.substring(0, closingBracketIndex) + stringToAppend;
    fs.writeFileSync('src/data/products.js', updatedContent);
    console.log(`Successfully appended ${newProducts.length} new products.`);
} else {
    console.log('Could not find closing bracket to append.');
}
