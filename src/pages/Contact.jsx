import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ChevronDown, 
  UploadCloud, 
  ArrowRight,
  Globe,
  Building2,
  Package,
  Layers,
  Sparkles,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const WHATSAPP_NUMBER = '917970153653';
  const PHONE_NUMBER = '+917970153653';
  const EMAIL = 'agnovaglobalexports@gmail.com';
  
  const formRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    country: '',
    phone: '',
    buyerType: 'Pharmaceutical Importer',
    targetMarket: '',
    productName: '',
    category: 'Anti-Cancer & Oncology',
    dosageForm: 'Tablet',
    strength: '',
    quantity: '',
    packaging: '',
    deliveryLocation: '',
    docs: [],
    message: ''
  });

  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDocCheckbox = (docName) => {
    setFormData(prev => {
      const exists = prev.docs.includes(docName);
      return {
        ...prev,
        docs: exists ? prev.docs.filter(d => d !== docName) : [...prev.docs, docName]
      };
    });
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsAppEnquiry = () => {
    const text = `Hello Agnova Global Exports,\n\n*New Export Enquiry*\nName: ${formData.fullName || 'N/A'}\nCompany: ${formData.companyName || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nCountry: ${formData.country || 'N/A'}\nBuyer Type: ${formData.buyerType}\nProduct: ${formData.productName || 'N/A'}\nStrength: ${formData.strength || 'N/A'}\nQuantity: ${formData.quantity || 'N/A'}\nDelivery: ${formData.deliveryLocation || 'N/A'}\nMessage: ${formData.message || 'Please contact me.'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const docOptions = [
    'Product Information',
    'Certificate of Analysis (COA)',
    'Certificate of Origin (COO)',
    'Manufacturing / Quality Documentation (GMP/ISO)',
    'Batch Documentation',
    'Regulatory Documentation / Dossiers',
    'Export Documentation',
    'Other Custom Requirements'
  ];

  const faqs = [
    {
      q: 'How can I request a pharmaceutical quotation?',
      a: 'You can submit your requirement through our Request a Quote form on this page, or connect with our team directly via WhatsApp (+91 79701 53653) or email. Include the product name, quantity, destination country, and any relevant specifications.'
    },
    {
      q: 'What information should I provide for the fastest response?',
      a: 'For the fastest evaluation, provide the product name or active salt/composition, strength, dosage form, expected quantity/MOQ, destination country/port, and specific documentation or packaging requirements.'
    },
    {
      q: 'Do you work with international distributors and institutional buyers?',
      a: 'Yes. Agnova Global is focused on developing long-term B2B relationships with licensed pharmaceutical importers, distributors, wholesalers, hospitals, pharmacy chains, and institutional procurement agencies globally.'
    },
    {
      q: 'Can I send a product list or RFQ document?',
      a: 'Yes. If you have multiple product requirements, you can upload your product list (PDF, XLSX, XLS, DOCX, CSV) directly through our quotation form or send it via email/WhatsApp.'
    },
    {
      q: 'Can I contact you through WhatsApp for urgent inquiries?',
      a: 'Yes! You can connect with our team directly on WhatsApp (+91 79701 53653) for fast, real-time communication regarding pricing, availability, and export coordination.'
    },
    {
      q: 'Do you provide export documentation and regulatory support?',
      a: 'Yes. Relevant documentation (Certificate of Analysis, Certificate of Origin, GMP Certificates, batch release docs) is coordinated according to the transaction and destination-market requirements.'
    },
    {
      q: 'Do you supply across all therapeutic categories?',
      a: 'We work with an established network of 50+ verified manufacturers across India, covering Oncology, Antivirals, Hepatitis, Diabetes, Cardiology, Respiratory, Antibiotics, Herbal medicines, and more.'
    },
    {
      q: 'Can you help with market-specific packaging and regulatory requirements?',
      a: 'Yes. We discuss product and packaging requirements relevant to the intended destination market to ensure seamless clearance and distribution.'
    }
  ];

  return (
    <div className="contact-page">

      {/* ── 1. HERO HEADER ── */}
      <section className="contact-hero">
        <div className="container">
          <span className="hero-pill animate-fade-in">B2B Pharmaceutical Export Desk</span>
          <h1 className="hero-title animate-fade-in">Contact Agnova Global</h1>
          <p className="hero-subtitle animate-fade-in">
            Let's Discuss Your Pharmaceutical Supply Requirements
          </p>
          <div className="hero-intro-box glass-panel animate-fade-in">
            <p>
              <strong>Looking for a reliable pharmaceutical export partner from India?</strong>
            </p>
            <p>
              Whether you are a pharmaceutical importer, distributor, wholesaler, healthcare organization, pharmacy chain or institutional buyer, Agnova Global can review your requirement and explore suitable pharmaceutical supply options.
            </p>
            <p>
              Tell us what you are looking for, where you need it, and your expected quantity. Our team will evaluate the requirement and get back to you with structured commercial and product information.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToForm}>
                Request a Quote <ArrowRight size={18} />
              </button>
              <Link to="/products" className="btn btn-secondary">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. GET IN TOUCH DIRECT CHANNELS ── */}
      <section className="channels-section container">
        <div className="section-header">
          <p className="section-tag">Get In Touch</p>
          <h2 className="section-title">We're Ready to Discuss Your Requirement</h2>
          <p className="section-subtitle">
            International pharmaceutical procurement involves specific product, packaging, and regulatory parameters. Connect with our dedicated export desk.
          </p>
        </div>

        <div className="channels-grid">
          
          {/* Email */}
          <div className="channel-card glass-panel hover-lift">
            <div className="channel-icon-box email-box">
              <Mail size={28} />
            </div>
            <h3>Sales & Product Inquiries</h3>
            <p className="channel-desc">
              For pharmaceutical product enquiries, formal RFQs, quotations and international B2B opportunities.
            </p>
            <a href={`mailto:${EMAIL}?subject=Product%20Export%20Enquiry`} className="channel-link">
              {EMAIL}
            </a>
          </div>

          {/* Business Enquiries */}
          <div className="channel-card glass-panel hover-lift">
            <div className="channel-icon-box business-box">
              <Building2 size={28} />
            </div>
            <h3>General & Partnership Desk</h3>
            <p className="channel-desc">
              For distributor partnerships, institutional supply agreements, and executive business discussions.
            </p>
            <a href={`mailto:${EMAIL}?subject=Business%20Partnership%20Enquiry`} className="channel-link">
              {EMAIL}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="channel-card glass-panel hover-lift">
            <div className="channel-icon-box wa-box">
              <MessageSquare size={28} />
            </div>
            <h3>Direct WhatsApp Desk</h3>
            <p className="channel-desc">
              Connect directly with our export team for fast real-time communication, instant quotes, and stock checks.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Agnova Global, I would like to inquire about pharmaceutical product sourcing.')}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-link wa-link"
            >
              💬 +91 79701 53653 (Chat Now)
            </a>
          </div>

        </div>
      </section>

      {/* ── 3. QUOTATION FORM ── */}
      <section className="quote-form-section" ref={formRef}>
        <div className="container">
          
          <div className="form-card glass-panel">
            
            {submitted ? (
              /* THANK YOU SUCCESS CARD */
              <div className="thank-you-view text-center animate-scale-up">
                <div className="thank-you-icon">
                  <CheckCircle2 size={64} />
                </div>
                <h2>Thank You!</h2>
                <p className="thank-you-msg">
                  Your pharmaceutical enquiry has been received successfully. Our export team is reviewing the specifications and will get back to you shortly.
                </p>
                <div className="thank-you-box">
                  <p><strong>Need faster response?</strong> You can also send this exact requirement directly to our WhatsApp export desk for immediate evaluation.</p>
                  <button className="btn btn-whatsapp btn-lg" onClick={openWhatsAppEnquiry} style={{marginTop: '1rem'}}>
                    <MessageSquare size={20} /> Open Direct WhatsApp Chat
                  </button>
                </div>
                <div className="thank-you-actions">
                  <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                    Submit Another Requirement
                  </button>
                  <Link to="/products" className="btn btn-primary">
                    Browse Product Catalog
                  </Link>
                </div>
              </div>
            ) : (
              /* THE FULL INQUIRY FORM */
              <form onSubmit={handleSubmit} className="rfq-form">
                
                <div className="form-header">
                  <span className="form-tag">Request a Pharmaceutical Quote</span>
                  <h2>Tell Us What You Need</h2>
                  <p>
                    Complete the form below with your pharmaceutical requirements. The more details you provide (dosage, strength, quantity, destination), the faster our team can evaluate your inquiry.
                  </p>
                </div>

                {/* Section A: Contact Information */}
                <div className="form-block">
                  <h3 className="block-title">
                    <span className="step-num">1</span> Contact Information
                  </h3>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Full Name <span>*</span></label>
                      <input 
                        type="text" 
                        name="fullName" 
                        required 
                        placeholder="e.g. John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company / Organization Name <span>*</span></label>
                      <input 
                        type="text" 
                        name="companyName" 
                        required 
                        placeholder="e.g. Global Med Distributors Ltd."
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-3">
                    <div className="form-group">
                      <label>Business Email <span>*</span></label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Country <span>*</span></label>
                      <input 
                        type="text" 
                        name="country" 
                        required 
                        placeholder="e.g. United Kingdom, UAE, Nigeria"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone / WhatsApp Number <span>*</span></label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="Include country code (e.g. +44 ...)"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Section B: Buyer Information */}
                <div className="form-block">
                  <h3 className="block-title">
                    <span className="step-num">2</span> Buyer Profile & Target Market
                  </h3>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>I am a: <span>*</span></label>
                      <select 
                        name="buyerType" 
                        value={formData.buyerType} 
                        onChange={handleInputChange}
                      >
                        <option value="Pharmaceutical Importer">Pharmaceutical Importer</option>
                        <option value="Pharmaceutical Distributor">Pharmaceutical Distributor</option>
                        <option value="Pharmaceutical Wholesaler">Pharmaceutical Wholesaler</option>
                        <option value="Pharmacy / Pharmacy Chain">Pharmacy / Pharmacy Chain</option>
                        <option value="Hospital / Healthcare Organization">Hospital / Healthcare Organization</option>
                        <option value="Institutional Buyer / Tender">Institutional Buyer / Tender</option>
                        <option value="Pharmaceutical Trading Company">Pharmaceutical Trading Company</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Target Destination Market / Country <span>*</span></label>
                      <input 
                        type="text" 
                        name="targetMarket" 
                        required 
                        placeholder="e.g. USA, UK, Kenya, Philippines, Vietnam"
                        value={formData.targetMarket}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Section C: Product Requirement */}
                <div className="form-block">
                  <h3 className="block-title">
                    <span className="step-num">3</span> Product & Specification Details
                  </h3>
                  
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Product Name / Generic (Salt) Name <span>*</span></label>
                      <input 
                        type="text" 
                        name="productName" 
                        required 
                        placeholder="e.g. Semaglutide, Anastrozole, Tadalafil"
                        value={formData.productName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Therapeutic Category</label>
                      <select 
                        name="category" 
                        value={formData.category} 
                        onChange={handleInputChange}
                      >
                        <option value="Anti-Cancer & Oncology">Anti-Cancer & Oncology</option>
                        <option value="Antivirals">Antivirals</option>
                        <option value="HIV / Antiretroviral">HIV / Antiretroviral</option>
                        <option value="Hepatitis B & C">Hepatitis B & C</option>
                        <option value="Cardiovascular">Cardiovascular</option>
                        <option value="Diabetes & Metabolic Care">Diabetes & Metabolic Care</option>
                        <option value="Respiratory">Respiratory</option>
                        <option value="Dermatology & Skin Care">Dermatology & Skin Care</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Gastrointestinal">Gastrointestinal</option>
                        <option value="Vaccines & Immunoglobulins">Vaccines & Immunoglobulins</option>
                        <option value="Ophthalmic / Eye Care">Ophthalmic / Eye Care</option>
                        <option value="Women's Health / Birth Control">Women's Health / Birth Control</option>
                        <option value="Men's Health & ED">Men's Health & ED</option>
                        <option value="Anti-Infectives & Antibiotics">Anti-Infectives & Antibiotics</option>
                        <option value="Ayurvedic & Herbal Wellness">Ayurvedic & Herbal Wellness</option>
                        <option value="Other">Other Category</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-4">
                    <div className="form-group">
                      <label>Dosage Form</label>
                      <select 
                        name="dosageForm" 
                        value={formData.dosageForm} 
                        onChange={handleInputChange}
                      >
                        <option value="Tablet">Tablet</option>
                        <option value="Capsule">Capsule</option>
                        <option value="Injection / Vial">Injection / Vial</option>
                        <option value="Cream / Ointment / Gel">Cream / Ointment / Gel</option>
                        <option value="Oral Jelly">Oral Jelly</option>
                        <option value="Eye Drops">Eye Drops</option>
                        <option value="Topical Solution">Topical Solution</option>
                        <option value="Syrup / Suspension">Syrup / Suspension</option>
                        <option value="Other">Other Form</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Strength / Composition</label>
                      <input 
                        type="text" 
                        name="strength" 
                        placeholder="e.g. 7mg, 400mg, 10% w/v"
                        value={formData.strength}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Required Quantity / MOQ <span>*</span></label>
                      <input 
                        type="text" 
                        name="quantity" 
                        required 
                        placeholder="e.g. 1,000 Packs, 500 Vials"
                        value={formData.quantity}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Packaging Requirement</label>
                      <input 
                        type="text" 
                        name="packaging" 
                        placeholder="e.g. Blister 10x10, Box"
                        value={formData.packaging}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Section D: Delivery & Documentation */}
                <div className="form-block">
                  <h3 className="block-title">
                    <span className="step-num">4</span> Delivery & Documentation Requirements
                  </h3>

                  <div className="form-group">
                    <label>Target Delivery Location / Port <span>*</span></label>
                    <input 
                      type="text" 
                      name="deliveryLocation" 
                      required 
                      placeholder="Destination City / Airport / Sea Port (e.g. London Heathrow, Dubai, Lagos Port)"
                      value={formData.deliveryLocation}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="checkbox-group-title">Select Any Required Documentation:</label>
                    <div className="docs-checkbox-grid">
                      {docOptions.map((doc, idx) => (
                        <label className="doc-checkbox-label" key={idx}>
                          <input 
                            type="checkbox" 
                            checked={formData.docs.includes(doc)}
                            onChange={() => handleDocCheckbox(doc)}
                          />
                          <span>{doc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Additional Notes / Message</label>
                    <textarea 
                      rows="4"
                      name="message"
                      placeholder="Share additional requirements such as preferred manufacturer, delivery timeline, registration requirements, packaging specifications, or private-label needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  {/* File Upload Box */}
                  <div className="upload-box-wrapper">
                    <label className="upload-box">
                      <UploadCloud size={32} className="upload-icon" />
                      <div className="upload-text">
                        <strong>Have a Product List or RFQ?</strong>
                        <span>Click to attach your requirement list (PDF, XLSX, XLS, DOCX, CSV — Max 15MB)</span>
                        {fileName && <span className="attached-file-badge">✓ Attached: {fileName}</span>}
                      </div>
                      <input 
                        type="file" 
                        accept=".pdf,.xlsx,.xls,.docx,.csv" 
                        onChange={handleFileUpload}
                        style={{display: 'none'}}
                      />
                    </label>
                  </div>

                </div>

                {/* Submit Action */}
                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary btn-xl submit-rfq-btn">
                    <Send size={20} /> SUBMIT PHARMACEUTICAL ENQUIRY
                  </button>
                  <p className="submit-note">
                    🔒 All inquiries are treated with strict confidentiality. Our team responds within 12–24 business hours.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ── 4. WHAT HAPPENS AFTER YOU CONTACT US (6 STEPS) ── */}
      <section className="enquiry-process-section container">
        <div className="section-header">
          <p className="section-tag">Our Workflow</p>
          <h2 className="section-title">What Happens After You Contact Us?</h2>
          <p className="section-subtitle">A structured, transparent 6-step enquiry evaluation process.</p>
        </div>

        <div className="process-grid">
          {[
            { step: '01', title: 'Requirement Review', desc: 'Our team reviews your product, quantity, destination market and documentation specifications.' },
            { step: '02', title: 'Product Evaluation', desc: 'We evaluate suitable product and supply options from our network of 50+ verified manufacturers.' },
            { step: '03', title: 'Commercial Discussion', desc: 'We provide transparent pricing, MOQ details, packaging options, and delivery timelines.' },
            { step: '04', title: 'Documentation Support', desc: 'COA, COO, GMP, and export paperwork are coordinated according to destination-market criteria.' },
            { step: '05', title: 'Order Confirmation', desc: 'Commercial terms, quantities, proforma invoices, and payment arrangements are finalized.' },
            { step: '06', title: 'Export & Logistics', desc: 'Secure, temperature-controlled shipment coordination proceeds according to agreed logistical terms.' },
          ].map((proc, i) => (
            <div className="process-card hover-lift" key={i}>
              <div className="process-badge">{proc.step}</div>
              <h3>{proc.title}</h3>
              <p>{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. WHY CONTACT AGNOVA GLOBAL ── */}
      <section className="why-contact-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Professional Approach</p>
            <h2 className="section-title">Why Contact Agnova Global?</h2>
            <p className="section-subtitle">Reliable, quality-driven pharmaceutical sourcing tailored for global B2B buyers.</p>
          </div>

          <div className="why-contact-grid">
            {[
              { icon: <Building2 size={24} />, title: 'B2B Focus', desc: 'Exclusively focused on serving pharmaceutical importers, distributors, wholesalers, and institutional buyers.' },
              { icon: <Package size={24} />, title: 'Product-Focused Enquiries', desc: 'We evaluate sourcing based on your actual molecule, strength, and therapeutic requirements.' },
              { icon: <Globe size={24} />, title: 'International Perspective', desc: 'We recognize that regulatory standards, registration, and import procedures differ across global markets.' },
              { icon: <MessageSquare size={24} />, title: 'Clear Communication', desc: 'Fast, dependable updates throughout the entire enquiry, quotation, and export process.' },
              { icon: <FileCheck size={24} />, title: 'Documentation Awareness', desc: 'Proactive coordination of Certificates of Analysis, Origin, and compliance dossiers.' },
              { icon: <ShieldCheck size={24} />, title: 'Long-Term Partnerships', desc: 'We aim to build sustainable, repeat business relationships rather than one-time transactions.' }
            ].map((w, i) => (
              <div className="why-contact-card" key={i}>
                <div className="why-c-icon">{w.icon}</div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GLOBAL MARKETS & VERIFIED OFFICE ── */}
      <section className="office-location-section container">
        <div className="office-grid">
          
          {/* Office Details */}
          <div className="office-details-box glass-panel">
            <p className="section-tag">Official Headquarters</p>
            <h2>Agnova Global Exports</h2>
            <p className="office-motto">Pharmaceutical Exporter — From India to the World</p>

            <div className="office-info-rows">
              <div className="info-row">
                <MapPin size={22} className="row-icon" />
                <div>
                  <strong>Office Address:</strong>
                  <p>(Aadinaath Sky 59) Chikistaknagar, 60 Feet Road, Vijay Nagar, Indore – 452010, Madhya Pradesh, India</p>
                </div>
              </div>

              <div className="info-row">
                <Clock size={22} className="row-icon" />
                <div>
                  <strong>Business Hours:</strong>
                  <p>Monday – Saturday: 9:00 AM – 7:00 PM IST<br /><em>(24/7 Support via WhatsApp & Email)</em></p>
                </div>
              </div>

              <div className="info-row">
                <Phone size={22} className="row-icon" />
                <div>
                  <strong>Phone / WhatsApp:</strong>
                  <p><a href={`tel:${PHONE_NUMBER}`}>+91 79701 53653</a></p>
                </div>
              </div>

              <div className="info-row">
                <Mail size={22} className="row-icon" />
                <div>
                  <strong>Official Email:</strong>
                  <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
                </div>
              </div>
            </div>

            <div className="markets-badge-section">
              <strong>Welcoming B2B Enquiries From:</strong>
              <div className="market-pills-row">
                {['USA', 'UK', 'Australia', 'Canada', 'Asia', 'Africa', 'Middle East', 'CIS Markets', 'Latin America', 'Global Markets'].map((reg, i) => (
                  <span className="market-pill" key={i}>{reg}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="map-card glass-panel">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.037936658!2d75.8876!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b7e4b9e8f%3A0x5b4f3c4e5e4e6e7e!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '380px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Agnova Global Location"
            ></iframe>
          </div>

        </div>
      </section>

      {/* ── 7. FAQ ACCORDION ── */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Frequently Asked Questions</p>
            <h2 className="section-title">Common Pharmaceutical Sourcing Questions</h2>
            <p className="section-subtitle">Everything you need to know about our sourcing, export process, and documentation.</p>
          </div>

          <div className="faq-accordion-container">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item glass-panel ${openFaq === index ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <span className="faq-icon-wrapper"><HelpCircle size={18} /></span>
                  <h4>{faq.q}</h4>
                  <ChevronDown size={20} className={`faq-chevron ${openFaq === index ? 'rotated' : ''}`} />
                </div>
                {openFaq === index && (
                  <div className="faq-answer animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA BANNER ── */}
      <section className="contact-final-cta">
        <div className="container">
          <div className="final-cta-box glass-panel">
            <span className="cta-pill">Direct Export Sourcing</span>
            <h2>Have a Pharmaceutical Requirement?</h2>
            <p className="cta-subtitle">
              Don't send a generic enquiry. Tell us exactly what you need:
            </p>
            <div className="cta-spec-tags">
              <span>Product</span> • 
              <span>Strength</span> • 
              <span>Quantity</span> • 
              <span>Destination</span> • 
              <span>Packaging</span> • 
              <span>Documentation</span>
            </div>
            <p className="cta-desc">
              Our export team is ready to evaluate your inquiry and explore suitable supply options from India.
            </p>
            <div className="final-cta-actions">
              <button className="btn btn-primary btn-lg" onClick={scrollToForm}>
                Request a Quote <ArrowRight size={18} />
              </button>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Agnova Global, I would like to inquire about pharmaceutical export supplies.')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-lg"
              >
                💬 Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
