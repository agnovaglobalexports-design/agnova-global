const fs = require('fs');

const productDataRaw = [
    { name: "10mg Oxanadrol Oxandrolone Tablets", brand: "Oxanadrol", composition: "Oxandrolone", usages: "To regain weight or muscle", treatment: "Muscle Wasting", strength: "10 mg" },
    { name: "40mcg Clenbut Clenbuterol HCL Tablets", brand: "Clenbut", composition: "Clenbuterol HCL", usages: "Bronchodilator, asthma treatment, fat loss", treatment: "Asthma / Respiratory Disorders", strength: "40 mcg" },
    { name: "10mg Anavar Oxandrolone Tablets", brand: "Anavar", composition: "Oxandrolone", usages: "Promote weight gain, treat bone pain from osteoporosis", treatment: "Weight Loss / Muscle Wasting", strength: "10 mg" },
    { name: "40mg Clenbest Clenbuterol Tablets", brand: "Clenbest", composition: "Clenbuterol", usages: "Asthma management and lean muscle retention", treatment: "Asthma", strength: "40 mg" },
    { name: "10mg Vardejuv Vardenafil Tablets", brand: "Vardejuv", composition: "Vardenafil", usages: "Erectile dysfunction treatment", treatment: "Erectile Dysfunction", strength: "10 mg" },
    { name: "50mg Enclomisign Enclomiphene Tablets", brand: "Enclomisign", composition: "Enclomiphene", usages: "Treatment of male hypogonadism", treatment: "Testosterone Deficiency", strength: "50 mg" },
    { name: "50mg Enclofert Enclomiphene Tablets", brand: "Enclofert", composition: "Enclomiphene", usages: "Induction of ovulation, male hypogonadism", treatment: "Infertility", strength: "50 mg" },
    { name: "60mg Poxet Dapoxetine HCL Tablets", brand: "Poxet", composition: "Dapoxetine HCL", usages: "Premature ejaculation treatment", treatment: "Premature Ejaculation", strength: "60 mg" },
    { name: "30mg Poxet Dapoxetine Tablets", brand: "Poxet", composition: "Dapoxetine", usages: "Premature ejaculation treatment", treatment: "Premature Ejaculation", strength: "30 mg" },
    { name: "10mg Vbolnor Methandienone Tablets", brand: "Vbolnor", composition: "Methandienone", usages: "Performance enhancement, protein synthesis", treatment: "Anabolic support", strength: "10 mg" },
    { name: "7mg Rybelsus Semaglutide Tablets", brand: "Rybelsus", composition: "Semaglutide", usages: "Type 2 diabetes management", treatment: "Type 2 Diabetes", strength: "7 mg" },
    { name: "400mg Viadali Ademetionine Tablets", brand: "Viadali", composition: "Ademetionine", usages: "Liver disease and depression treatment", treatment: "Liver Cirrhosis / Depression", strength: "400 mg" },
    { name: "100mg Extra Super Tadaro Tadalafil Dapoxetine Tablets", brand: "Extra Super Tadaro", composition: "Tadalafil + Dapoxetine", usages: "Treatment of ED and premature ejaculation", treatment: "Erectile Dysfunction", strength: "100 mg" },
    { name: "250mg Azicip Azithromycin Tablets", brand: "Azicip", composition: "Azithromycin", usages: "Treatment of bacterial infections", treatment: "Bacterial Infections", strength: "250 mg" },
    { name: "5mg Tofajak Tofacitinib Tablets", brand: "Tofajak", composition: "Tofacitinib", usages: "Rheumatoid arthritis treatment", treatment: "Rheumatoid Arthritis", strength: "5 mg" },
    { name: "5mg Inramed Midodrine Hydrochloride Tablets", brand: "Inramed", composition: "Midodrine Hydrochloride", usages: "Treatment of symptomatic orthostatic hypotension", treatment: "Orthostatic Hypotension", strength: "5 mg" },
    { name: "2.5mg Inramed Midodrine Hydrochloride Tablet", brand: "Inramed", composition: "Midodrine Hydrochloride", usages: "Low blood pressure management", treatment: "Hypotension", strength: "2.5 mg" },
    { name: "100mg Ridsunate Artesunate Tablets", brand: "Ridsunate", composition: "Artesunate", usages: "Treatment of severe malaria", treatment: "Malaria", strength: "100 mg" },
    { name: "50mg Ridsunate Artesunate Tablets", brand: "Ridsunate", composition: "Artesunate", usages: "Antimalarial treatment", treatment: "Malaria", strength: "50 mg" },
    { name: "25mg Jardiance Empagliflozin Tablets", brand: "Jardiance", composition: "Empagliflozin", usages: "Type 2 diabetes and heart failure treatment", treatment: "Type 2 Diabetes", strength: "25 mg" },
    { name: "125mg Prolavir LR Lopinavir Ritonavir Tablets", brand: "Prolavir LR", composition: "Lopinavir + Ritonavir", usages: "HIV infection management", treatment: "HIV/AIDS", strength: "125 mg" },
    { name: "250mg Prolavir LR Lopinavir Ritonavir Tablets", brand: "Prolavir LR", composition: "Lopinavir + Ritonavir", usages: "Antiretroviral therapy", treatment: "HIV/AIDS", strength: "250 mg" },
    { name: "250mg Paxista Nirmatrelvir Ritonavir Tablets", brand: "Paxista", composition: "Nirmatrelvir + Ritonavir", usages: "COVID-19 antiviral treatment", treatment: "COVID-19", strength: "250 mg" },
    { name: "50mg Instgra Dolutegravir Tablets", brand: "Instgra", composition: "Dolutegravir", usages: "HIV infection treatment", treatment: "HIV/AIDS", strength: "50 mg" },
    { name: "650mg Cipanec Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets", brand: "Cipanec", composition: "Dolutegravir + Lamivudine + Tenofovir", usages: "Combination antiretroviral therapy", treatment: "HIV/AIDS", strength: "650 mg" },
    { name: "650mg Trilavir D Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets", brand: "Trilavir D", composition: "Dolutegravir + Lamivudine + Tenofovir", usages: "HIV viral load reduction", treatment: "HIV/AIDS", strength: "650 mg" },
    { name: "650mg Xapavir LT Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets", brand: "Xapavir LT", composition: "Dolutegravir + Lamivudine + Tenofovir", usages: "First-line HIV treatment", treatment: "HIV/AIDS", strength: "650 mg" },
    { name: "650mg Acriptega Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets", brand: "Acriptega", composition: "Dolutegravir + Lamivudine + Tenofovir", usages: "HIV-1 infection management", treatment: "HIV/AIDS", strength: "650 mg" },
    { name: "650mg Dolutegravir Lamivudine Tenofovir Disoproxil Fumarate Tablets", brand: "Generic TLD", composition: "Dolutegravir + Lamivudine + Tenofovir", usages: "Comprehensive HIV management", treatment: "HIV/AIDS", strength: "650 mg" },
    { name: "400mg Ralmac Raltegravir Tablets", brand: "Ralmac", composition: "Raltegravir", usages: "Integrase inhibitor for HIV", treatment: "HIV/AIDS", strength: "400 mg" },
    { name: "3mg Rybelsus Semaglutide Tablets", brand: "Rybelsus", composition: "Semaglutide", usages: "Initial dosage for Type 2 diabetes", treatment: "Type 2 Diabetes", strength: "3 mg" },
    { name: "650mg Penlactic Amoxicillin Potassium Clavulanate Tablets", brand: "Penlactic", composition: "Amoxicillin + Potassium Clavulanate", usages: "Broad-spectrum antibiotic", treatment: "Bacterial Infections", strength: "650 mg" },
    { name: "35mg Conshe Cyproterone Acetate Ethinylestradiol Tablets", brand: "Conshe", composition: "Cyproterone Acetate + Ethinylestradiol", usages: "Severe acne and hirsutism treatment", treatment: "Hormonal Imbalance", strength: "35 mg" },
    { name: "25mcg T 3 Liothyronine Sodium Tablets", brand: "T 3", composition: "Liothyronine Sodium", usages: "Hypothyroidism management", treatment: "Hypothyroidism", strength: "25 mcg" },
    { name: "0.5mg Dutasure Dutasteride Tablets", brand: "Dutasure", composition: "Dutasteride", usages: "Benign prostatic hyperplasia (BPH) treatment", treatment: "BPH", strength: "0.5 mg" },
    { name: "5mg Healpecia Finasteride Tablets", brand: "Healpecia", composition: "Finasteride", usages: "Male pattern hair loss treatment", treatment: "Hair Loss", strength: "5 mg" },
    { name: "50mg Oxythol Oxymetholone Tablets", brand: "Oxythol", composition: "Oxymetholone", usages: "Anemia treatment", treatment: "Anemia", strength: "50 mg" },
    { name: "10mg Stazol Stanozolol Tablets", brand: "Stazol", composition: "Stanozolol", usages: "Hereditary angioedema prevention", treatment: "Angioedema", strength: "10 mg" },
    { name: "50mg Androl Oxymetholone Tablets", brand: "Androl", composition: "Oxymetholone", usages: "Erythropoiesis stimulation", treatment: "Anemia", strength: "50 mg" },
    { name: "200mg Vorier Voriconazole Tablets", brand: "Vorier", composition: "Voriconazole", usages: "Severe fungal infections treatment", treatment: "Fungal Infections", strength: "200 mg" }
];

const generatedProducts = productDataRaw.map((data, index) => {
    return {
        id: `pt-${index + 1}`,
        name: data.name,
        category: 'pharmaceutical-tablets',
        strength: data.strength,
        image: '/assets/cat_general.jpg',
        brand: data.brand,
        packagingType: 'Box',
        treatment: data.treatment,
        usages: data.usages,
        form: 'Tablet',
        composition: data.composition,
        packagingSize: '10 x 10 Tablets',
        // NO PRICE FIELD
        description: `${data.name} is a high-quality pharmaceutical formulated primarily with ${data.composition}. It is highly indicated for ${data.usages.toLowerCase()} and effectively manages symptoms associated with ${data.treatment.toLowerCase()}. Manufactured under strict quality control standards, it ensures maximum therapeutic efficacy and patient safety. Please consult your physician for precise dosage and administration guidelines.`
    };
});

// Override first product to match screenshot exactly (except price)
const oxa = generatedProducts[0];
oxa.packagingSize = '5x10 Tablets';
oxa.description = 'Oxandrolone is an oral anabolic steroid derived from dihydrotestosterone (DHT), but in injectable form it is used for its anabolic effects with minimal androgenic activity. It is known for promoting lean muscle gains, enhancing recovery, and aiding in weight gain after trauma, surgery, or chronic illness.';

const fileContent = fs.readFileSync('src/data/products.js', 'utf-8');

const newProductsStr = 'export const products = ' + JSON.stringify(generatedProducts, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';

const updatedContent = fileContent.replace(/export const products = \[.*?\];/s, newProductsStr);

fs.writeFileSync('src/data/products.js', updatedContent);
console.log('Products successfully updated with accurate analysis and no price.');
