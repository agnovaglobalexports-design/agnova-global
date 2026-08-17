const fs = require('fs');

const rawText = `
Anti Cancer Medicines

1mg Estrozol Anastrozole Tablets
400mg Veenat Imatinib Tablets
200mg Kryxana Ribociclib Tablet
4mg Lenris Lenvatinib Capsule
250mg Geftinat Gefitinib Tablets
150mg Bracanat Olaparib Tablets
40mg Regonat Regorafenib Tablets
250mg Abirapro Abiraterone Acetate Tablets
150mg Ramiven Abemaciclib Tablets
1mg Armotraz Anastrozole Tablets
Kabanat Cabazitaxel 60 Mg Injection
Maball 500 Mg
Temotero 100mg Capsules
Zoladex 10.8 Mg Injection
Piclib 125
40mg Nublexa Regorafenib Tablets
0.5mg Lanolimus Everolimus Tablets
Sorafenat Sorafenib Tablets

Pharmaceutical Tablets

7mg Rybelsus Semaglutide Tablets
100mg Extra Super Tadaro Tadalafil Dapoxetine Tablets
3mg Rybelsus Semaglutide Tablets
0.5mg Dutasure Dutasteride Tablets
10mg Oxanadrol Oxandrolone Tablets
10mg Anavar Oxandrolone Tablets
10mg Vardejuv Vardenafil Tablets
50mg Enclomisign Enclomiphene Tablets
50mg Enclofert Enclomiphene Tablets
60mg Poxet Dapoxetine HCL Tablets
30mg Poxet Dapoxetine Tablets
10mg Vbolnor Methandienone Tablets
400mg Viadali Ademetionine Tablets
500mg Azicip Azithromycin Tablets
250mg Azicip Azithromycin Tablets
5mg Tofajak Tofacitinib Tablets
5mg Inramed Midodrine Hydrochloride Tablets
2.5mg Inramed Midodrine Hydrochloride Tablet
100mg Ridsunate Artesunate Tablets
50mg Ridsunate Artesunate Tablets
500mg Graftide Mycophenolate Mofetil Tablets
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
650mg Penlactic Amoxicillin Potassium Clavulanate Tablets
35mg Conshe Cyproterone Acetate Ethinylestradiol Tablets
25mcg T 3 Liothyronine Sodium Tablets
5mg Healpecia Finasteride Tablets
50mg Oxythol Oxymetholone Tablets
10mg Stazol Stanozolol Tablets
40mcg Clenbut Clenbuterol HCL Tablets
50mg Androl Oxymetholone Tablets

Himalaya Herbal Capsules & Tablets

Himalaya Speman Tablet
Himalaya Triphala Bowel Wellness Tablets
Himalaya Party Smart Capsules
Himalaya Tentex Royal Capsules
Himalaya Tagara Sleep Wellness Tablets
Himalaya Brahmi Mind Wellness Tablet
Himalaya Shatavari Women Wellness Tablets
Himalaya Yashtimadhu Gastric Wellness Tablets
Himalaya Liv 52 Tablets
Himalaya Karela Metabolic Wellness Tablets
Himalaya Ashvagandha General Wellness Tablets
Himalaya Cystone Tablet
Himalaya Liv.52 DS Tablets

Tadalafil Tablets

20mg Vidalista Tadalafil Tablets
20mg Vidalista Professional Tadalafil Sublingual Tablets
80mg Tadaga Power Tadalafil Tablets
80mg Vidalista Black Tadalafil Tablets
cialista 10mg Tablets
Cialista 20mg tablets
Cialista 5mg Tablets
Cialista 40mg Tablets
Cialista 60mg Tablets
Cialista 80mg Tablets.
Super Tadapox Tadalafil Dapoxetine Tablets

Sildenafil Tablets

100mg Suhagra Sildenafil Citrate Tablets
100mg Kamagra Sildenafil Citrate Chewable Tablets
50mg Cenforce Sildenafil Citrate Tablets
100mg Kamagra Gold Sildenafil Citrate Tablets
200mg Sildigra Gold Sildenafil Citrate Tablets
100mg Cenforce Sildenafil Citrate Tablets
100mg Priforce Sildenafil Citrate Tablets
200mg Cenforce Sildenafil Citrate Tablets
100mg Cenforce Sildenafil Citrate Tablets

Pharmaceutical Injection

250mg Teston Testosterone Enanthate Injection
Abhayrab Rabies Vaccine
Indirab Human Rabies Vaccine
Pri Testo Mix Testosterone Mix Compound
250mg Pri Testo Cyp Testosterone Cypionate Injection
250mg Pri Bold Boldenone Undecylenate Injection
100mg Pri Testo Prop Testosterone Propionate Injection
76.5mg Pri Tren Hexa Trenbolone Hexahydrobenzylcarbonate Injection
250mg Pri Testo Testosterone Enanthate Injection
PRITESTO VIAL 250mg/ml
PRIBOLAN 10ml vial
120mg Esentra Denosumab Injection
4mg Pomalid Pomalidomide Capsules
Proluton Depot Hydroxyprogesterone Caproate Injection
250ml Sustanon Testosterone Propionate Injection
Puregraf 75 Iu

Tenofovir Tablet

1200mg Trioday Tenofovir Disoproxil Fumarate Lamivudine Efavirenz Tablets
300mg Tenvir Tenofovir Disoproxil Fumarate Tablets
500mg Ricovir EM Tenofovir Disoproxil Fumarate And Emtricitabine Tablets
300mg Tenof Tenofovir Disoproxil Fumarate Tablets
300mg Ricovir Tenofovir Disoproxil Fumarate Tablets
225mg Tafero EM Emtricitabine Tablets
Tendolami Doultegravir Lamivudine Tenofovir Disproxil Fumarate Tablets
1000mg Avonza Tenofovir Disoproxil Fumarate Tablets

Fenbendazole Tablet

500mg Prifen Fenbendazole Tablets
222mg Wormentel Fenbendazole Tablets
150mg Panacur Vet Fenbendazole Tablets
444mg Wormentel Fenbendazole Tablets
150mg Wormentel Fenbendazole Tablets
500mg Wormentel Fenbendazole Tablets
444mg Wormentel Fenbendazole Tablets
`;

const categoryMap = {
    'Anti Cancer Medicines': 'anti-cancer-medicines',
    'Pharmaceutical Tablets': 'pharmaceutical-tablets',
    'Himalaya Herbal Capsules & Tablets': 'himalaya-herbal',
    'Tadalafil Tablets': 'tadalafil-tablets',
    'Sildenafil Tablets': 'sildenafil-tablets',
    'Pharmaceutical Injection': 'pharmaceutical-injection',
    'Tenofovir Tablet': 'tenofovir-tablet',
    'Fenbendazole Tablet': 'fenbendazole-tablet'
};

const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
const products = [];
let currentCategory = '';
let index = 1;

for (const line of lines) {
    if (categoryMap[line]) {
        currentCategory = categoryMap[line];
    } else {
        const name = line;
        
        // Extract basic details from name
        const strengthMatch = name.match(/^([\d.]+[a-zA-Z]+)\s/);
        let strength = strengthMatch ? strengthMatch[1] : 'As prescribed';
        if (strength === 'As prescribed') {
            const endMatch = name.match(/(\d+\.?\d*\s?(mg|mcg|ml|Iu|IU|ml vial))/i);
            if (endMatch) strength = endMatch[1].trim();
        }

        let form = 'Tablet';
        if (name.toLowerCase().includes('capsule')) form = 'Capsule';
        else if (name.toLowerCase().includes('injection') || name.toLowerCase().includes('vial') || name.toLowerCase().includes('vaccine')) form = 'Injection';
        else if (name.toLowerCase().includes('jelly')) form = 'Oral Jelly';
        else if (name.toLowerCase().includes('cream') || name.toLowerCase().includes('ointment')) form = 'Topical';

        const parts = name.split(' ');
        let brand = parts[0];
        if (strengthMatch && parts.length > 1) {
            brand = parts[1];
        }
        if (brand.toLowerCase() === 'himalaya') brand = 'Himalaya';
        if (name.toLowerCase().includes('generic')) brand = 'Generic';

        let composition = name.replace(new RegExp('^' + strength + '\\s?', 'i'), '')
                              .replace(brand, '')
                              .replace(/Tablets?/gi, '')
                              .replace(/Capsules?/gi, '')
                              .replace(/Injection/gi, '')
                              .replace(/Vial/gi, '')
                              .replace(/Vaccine/gi, '')
                              .trim();
        if (!composition || composition === '') composition = name;

        // Custom image mapping
        let image = '/assets/cat_general.jpg';
        if (currentCategory === 'anti-cancer-medicines') image = '/assets/cat_anticancer.jpg';
        if (currentCategory === 'pharmaceutical-injection') image = '/assets/cat_injection.jpg';
        if (name.toLowerCase().includes('himalaya')) image = '/assets/cat_general.jpg'; // can be herbal later

        products.push({
            id: `p-${index++}`,
            name: name,
            category: currentCategory,
            strength: strength,
            image: image,
            brand: brand,
            packagingType: form === 'Injection' ? 'Vial/Ampoule' : 'Box/Strip',
            treatment: 'Clinical Indication',
            usages: 'As directed by the physician',
            form: form,
            composition: composition,
            packagingSize: form === 'Injection' ? '1 Vial' : '10 x 10',
            description: `${name} is an advanced formulation ensuring maximum efficacy and patient safety. It is extensively utilized in clinical settings for targeted treatments. Manufactured under stringent quality standards, this ${form.toLowerCase()} is recognized for its reliability. Please consult a registered medical practitioner for precise dosage and administrative protocols.`
        });
    }
}

// Special overrides to maintain the exact 10mg Oxanadrol from screenshot
const oxa = products.find(p => p.name === '10mg Oxanadrol Oxandrolone Tablets');
if (oxa) {
    oxa.usages = 'To regain weight or muscle';
    oxa.treatment = 'Muscle Wasting';
    oxa.packagingSize = '5x10 Tablets';
    oxa.description = 'Oxandrolone is an oral anabolic steroid derived from dihydrotestosterone (DHT), but in injectable form it is used for its anabolic effects with minimal androgenic activity. It is known for promoting lean muscle gains, enhancing recovery, and aiding in weight gain after trauma, surgery, or chronic illness.';
}

const fileContent = fs.readFileSync('src/data/products.js', 'utf-8');
const newProductsStr = 'export const products = ' + JSON.stringify(products, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';
const updatedContent = fileContent.replace(/export const products = \[.*?\];/s, newProductsStr);

fs.writeFileSync('src/data/products.js', updatedContent);
console.log(`Successfully added ${products.length} products to the catalog.`);
