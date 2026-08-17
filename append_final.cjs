const fs = require('fs');

const rawText = `
Hepatitis C Medicines

400mg Sofosvir Sofosbuvir Tablets
400mg Velasof Sofosbuvir Velpatasvir Tablets
400mg Velpanat Sofosbuvir Velpatasvir Tablets
400mg Heptral Ademetionine Tablets
500mg Velpavet Sofosbuvir Velpatasvir Tablets
400mg Sovihep Sofosbuvir Tablets

Personal Care Products (6 Products)»
SPF 50 Suntris Physical Fusion UV Defense Gel
200ml Acnacalm Face Cleanser
50ml Acnacalm SPF 30 Face Cream
400ml Dermoflan AD Daily Emollient Lotion
100ml Cidead Ceramide Hyaluronic Acid Lotion
60ml Cleale Salicylic Glycolic Acid Face Wash

Daclatasvir Tablets (5 Products)»

60mg Mydekla Daclatasvir Dihydrochloride Tablet
60mg Dacihep Daclatasvir Dihydrochloride Tablet
60mg Declahep Daclatasvir Tablet
460mg Prihep D Daclatasvir Sofosbuvir Tablets
60mg Daclahep Daclatasvir Tablets

Ivermectin Tablets (4 Products)»

12mg Iverheal Ivermectin Tablet
12mg Covimectin Ivermectin Tablet
12mg Iversun Ivermectin Tablet
12mg Privermectin Ivermectin Tablet

Pharmaceutical Ointment (4 Products)»

0.1%w/w Mylimus Tacrolimus Ointment
20%w/w Azelax Azelaic Acid Cream
Conjugated Premarin Estrogen Vaginal Cream
1%w/w Elidel Pimecrolimus Cream

Human Chorionic Gonadotropin Injections (4 Products)»

5000IU Hucog Chorionic Gonadotropin Injection
5000 IU Zyhcg Chorionic Gonadotropin Injections
5000IU Puretrig Chorionic Gonadotropin Injections
2000IU Zyhcg Chorionic Gonadotropin Injections

Hydroxychloroquine Sulfate Tablet (4 Products)»

200mg HCQS Hydroxychloroquine Tablets
400mg HCQS Hydroxychloroquine Tablet
200mg Hqcheal Hydroxychloroquine Tablets
400mg Hqcheal Hydroxychloroquine Tablets IP

Minoxidil Topical Solution (4 Products)»

10% Morr F Minoxidil Finastaride Topical Solution
10% Mintop Forte Minoxidil Topical Solution
10%w/v Minoxytop Minoxidil Topical Solution
10% Tugain Minoxidil Topical Solution

Tretinoin Cream (3 Products)»

0.025%w/w A Ret Tretinoin Gel
0.1%w/w A Ret Tretinoin Gel
0.05% w/w A Ret Tretinoin Gel

Hepatitis B Vaccine (3 Products)»

Revac B Hepatitis B Vaccine
10ml Bevac Hepatitis B Vaccine
Heparel Hepatitis B Immunoglobulin 200 Iu

Sildenafil Oral Jelly (3 Products)»

160mg Super Kamagra Sildenafil Dapoxetine Oral Jelly
100mg Kamagra Sildenafil Oral Jelly
Lovegra Oral Jelly

Birth Control Pills (3 Products)»

1.5mg Evening Pill Levonorgestrel Tablet
Diane 35 Cyproterone Acetate Ethinylestradiol Tablets
3.02mg YAZ Ethinyl Estradiol Drospirenone Tablets

Entecavir Tablet (3 Products)»

0.5mg Entavir Entecavir Tablets
0.5mg Gepatit Entecavir Tablets
0.5mg Privir Entecavir Tablet

Pharmaceutical Eye Drops (2 Products)»

0.03%w/v Careprost Ophthalmic Eye Drop
Isotine Plus Eye Drop

Forxiga Tablets (1 Product)»

25mg Suhagra Sildenafil Citrate Tablets

Anti Hiv Medicines (1 Product)»

1200mg Trioday Tenofovir Disoproxil Fumarate Lamivudine Efavirenz Tablets

Himalaya Skin Ointment (1 Product)»

30g Himalaya Pilex Forte Ointment

Pharmaceutical Cream (1 Product)»

Conjugated Premarin Estrogen Vaginal Cream
`;

let fileContent = fs.readFileSync('src/data/products.js', 'utf-8');

// Parse lines
const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
const newProducts = [];
let currentCategory = '';
let newCategories = [];

// Get starting index
const match = fileContent.match(/id: ["']p-(\d+)["']/g);
let index = match ? match.length + 123 : 500; // safe fallback

for (let line of lines) {
    // Clean category headers of " (X Products)»"
    line = line.replace(/\s*\(\d+\s*Products?\)[»>]*\s*/i, '').trim();

    // Check if it's a category header. We assume if it doesn't have a number at the start, or is short, or is in the known list.
    // Actually, any line that doesn't look like a product.
    if (!line.match(/^(\d|\d+\.?\d*[a-zA-Z%]|Conjugated|Revac|Heparel|Lovegra|Diane|Isotine|SPF|Kabanat|Maball|Temotero|Zoladex|Piclib|Sorafenat|Himalaya|cialista|Cialista|Super|Abhayrab|Indirab|Pri|PRITESTO|PRIBOLAN|Proluton|Puregraf|Tendolami|Nutrabay|Privet|Nutrabay)/i)) {
        // It's a category
        currentCategory = line.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        
        // Ensure category exists
        if (!fileContent.includes(currentCategory)) {
            newCategories.push({
                id: currentCategory,
                name: line,
                image: '/assets/cat_general.jpg'
            });
        }
        continue;
    }

    const name = line;
    const strengthMatch = name.match(/^([\d.]+[a-zA-Z%/%w/v/w]+\s?)/i);
    let strength = strengthMatch ? strengthMatch[1].trim() : 'As prescribed';

    let form = 'Tablet';
    if (name.toLowerCase().includes('capsule')) form = 'Capsule';
    else if (name.toLowerCase().includes('suppositor')) form = 'Suppository';
    else if (name.toLowerCase().includes('injection') || name.toLowerCase().includes('vial') || name.toLowerCase().includes('vaccine')) form = 'Injection';
    else if (name.toLowerCase().includes('jelly')) form = 'Oral Jelly';
    else if (name.toLowerCase().includes('cream') || name.toLowerCase().includes('ointment') || name.toLowerCase().includes('gel') || name.toLowerCase().includes('lotion') || name.toLowerCase().includes('wash') || name.toLowerCase().includes('cleanser')) form = 'Topical';
    else if (name.toLowerCase().includes('drop')) form = 'Drops';

    const parts = name.split(' ');
    let brand = parts[0];
    if (strengthMatch && parts.length > 1) {
        brand = parts[1];
    }
    if (brand.toLowerCase() === 'himalaya' || brand.toLowerCase() === 'privet' || brand.toLowerCase() === 'super' || brand.toLowerCase() === 'evening') {
        brand = parts.slice(0, 2).join(' ');
    }

    let composition = name.replace(new RegExp('^' + strength.replace(/[.*+?^$\{()|[\\]\\\\]/g, '\\\\$&') + '\\\\s?', 'i'), '')
                          .replace(brand, '')
                          .replace(/Tablets?/gi, '')
                          .replace(/Capsules?/gi, '')
                          .replace(/Suppositories/gi, '')
                          .replace(/Injection/gi, '')
                          .replace(/Vial/gi, '')
                          .replace(/Vaccine/gi, '')
                          .replace(/Cream/gi, '')
                          .replace(/Ointment/gi, '')
                          .replace(/Gel/gi, '')
                          .replace(/Solution/gi, '')
                          .replace(/Lotion/gi, '')
                          .replace(/Face Wash/gi, '')
                          .replace(/Cleanser/gi, '')
                          .replace(/Oral Jelly/gi, '')
                          .replace(/Eye Drops?/gi, '')
                          .trim();
    if (!composition || composition === '') composition = name;

    let image = '/assets/cat_general.jpg';
    if (form === 'Injection') image = '/assets/cat_injection.jpg';
    if (name.toLowerCase().includes('himalaya')) image = '/assets/cat_general.jpg';

    newProducts.push({
        id: `p-${index++}`,
        name: name,
        category: currentCategory,
        strength: strength,
        image: image,
        brand: brand,
        packagingType: form === 'Injection' || form === 'Drops' ? 'Vial/Bottle' : form === 'Topical' ? 'Tube/Bottle' : 'Box/Strip',
        treatment: 'Clinical Indication',
        usages: 'As directed by the physician',
        form: form,
        composition: composition,
        packagingSize: form === 'Injection' || form === 'Drops' || form === 'Topical' ? '1 Unit' : '10 x 10',
        description: `${name} is an advanced formulation ensuring maximum efficacy and patient safety. It is extensively utilized in clinical settings for targeted treatments. Manufactured under stringent quality standards, this ${form.toLowerCase()} is recognized for its reliability. Please consult a registered medical practitioner for precise dosage and administrative protocols.`
    });
}

// Append new products
const closingBracketIndex = fileContent.lastIndexOf(']');
if (closingBracketIndex !== -1) {
    const stringToAppend = ',\\n' + JSON.stringify(newProducts, null, 2).slice(1, -1) + '\\n];';
    fileContent = fileContent.substring(0, closingBracketIndex) + stringToAppend;
}

// If there are new categories, append them to the categories array
if (newCategories.length > 0) {
    const catClosingIndex = fileContent.indexOf('];');
    if (catClosingIndex !== -1) {
        const catAppend = ',\\n' + JSON.stringify(newCategories, null, 2).slice(1, -1) + '\\n];';
        fileContent = fileContent.substring(0, catClosingIndex) + catAppend + fileContent.substring(catClosingIndex + 2);
    }
}

fs.writeFileSync('src/data/products.js', fileContent);
console.log(`Successfully appended ${newProducts.length} new products and ${newCategories.length} new categories.`);
