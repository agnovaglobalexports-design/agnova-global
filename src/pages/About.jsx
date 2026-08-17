import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  ShieldCheck, 
  Award, 
  Users, 
  FlaskConical, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Layers, 
  Sparkles, 
  Building2, 
  Handshake, 
  HeartHandshake, 
  Target, 
  Eye, 
  BadgeCheck, 
  MessageSquare,
  Package,
  Boxes,
  Briefcase
} from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">

      {/* 1. Page Hero Header */}
      <section className="about-hero">
        <div className="container">
          <span className="hero-pill animate-fade-in">Global Pharmaceutical Exporter</span>
          <h1 className="hero-title animate-fade-in">About Agnova Global</h1>
          <p className="hero-subtitle animate-fade-in">
            Connecting Pharmaceutical Supply with Global Healthcare Markets
          </p>
          <div className="hero-intro-box glass-panel animate-fade-in">
            <p>
              <strong>Agnova Global</strong> is an India-based pharmaceutical sourcing and export company dedicated to making access to pharmaceutical products more convenient for customers and business partners worldwide.
            </p>
            <p>
              We work with an established network of 50+ verified pharmaceutical manufacturers and supply partners across India, allowing us to source a wide range of pharmaceutical products from multiple therapeutic categories based on specific requirements.
            </p>
            <p>
              Our strength is our extensive sourcing network, product availability, and personalized approach. By working with multiple supply partners, we are able to identify suitable products and sourcing solutions rather than being restricted to the portfolio of a single manufacturer.
            </p>
            <p className="about-hero-highlight">
              Our approach is built around <strong>quality-focused sourcing, dependable communication, product availability, documentation and long-term business relationships.</strong>
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn btn-secondary">
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="about-section container">
        <div className="about-grid">
          <div className="about-image-col">
            <img src="/assets/hero_banner.jpg" alt="Agnova Global Pharma" className="about-img" />
            <div className="about-badge-float glass-panel">
              <Building2 size={28} className="badge-icon" />
              <div>
                <strong>Global B2B Mindset</strong>
                <span>From India to Worldwide Healthcare Markets</span>
              </div>
            </div>
          </div>
          <div className="about-text-col">
            <p className="section-tag">Who We Are</p>
            <h2 className="section-title">A Pharmaceutical Export Partner Built for Global Business</h2>
            <p className="about-para">
              Agnova Global operates with an international B2B mindset, helping connect pharmaceutical products with businesses that require dependable sourcing and export support.
            </p>
            <p className="about-para">
              Our focus is on creating a straightforward and professional experience for buyers — from the initial product requirement through commercial discussions, documentation and export coordination.
            </p>
            <div className="factor-list-title">
              <strong>We understand that international pharmaceutical procurement requires attention to multiple factors:</strong>
            </div>
            <div className="factors-grid">
              {[
                'Product specifications',
                'Dosage forms and strengths',
                'Packaging requirements',
                'Quantity & commercial terms',
                'Market regulatory criteria',
                'Product documentation',
                'Export documentation',
                'Shipping coordination',
                'Seamless buyer-supplier communication'
              ].map((factor, i) => (
                <div className="factor-item" key={i}>
                  <CheckCircle2 size={16} className="factor-icon" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="what-we-do-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">What We Do</p>
            <h2 className="section-title">Pharmaceutical Export & International Supply</h2>
            <p className="section-subtitle">
              Agnova Global supports the international sourcing and supply of pharmaceutical medicines and healthcare products for B2B markets.
            </p>
          </div>
          <div className="activities-grid">
            {[
              {
                icon: <FlaskConical size={28} />,
                title: 'Pharmaceutical Medicines',
                desc: 'Supporting international buyers with pharmaceutical product sourcing across relevant dosage forms and therapeutic categories.'
              },
              {
                icon: <Globe size={28} />,
                title: 'International B2B Supply',
                desc: 'Working with importers, distributors, wholesalers and institutional buyers to understand their product requirements and commercial needs.'
              },
              {
                icon: <Boxes size={28} />,
                title: 'Product Sourcing',
                desc: 'Matching buyer requirements with suitable available pharmaceutical products and supply options.'
              },
              {
                icon: <Truck size={28} />,
                title: 'Export Coordination',
                desc: 'Supporting the coordination of commercial, product and export requirements throughout the order process.'
              },
              {
                icon: <FileCheck size={28} />,
                title: 'Documentation Support',
                desc: 'Coordinating relevant product and shipment documentation according to the requirements of the transaction and destination market.'
              },
              {
                icon: <Handshake size={28} />,
                title: 'Long-Term Partnerships',
                desc: 'Building relationships with buyers and distributors who are looking for dependable pharmaceutical supply relationships rather than one-time transactions.'
              }
            ].map((act, i) => (
              <div className="activity-card hover-lift" key={i}>
                <div className="activity-icon">{act.icon}</div>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach: 6-Step Workflow */}
      <section className="approach-section container">
        <div className="section-header">
          <p className="section-tag">Our Approach</p>
          <h2 className="section-title">From Requirement to Reliable Supply</h2>
          <p className="section-subtitle">
            Every international pharmaceutical requirement is different. That is why our approach begins with understanding the requirement before proposing a supply solution.
          </p>
        </div>
        <div className="steps-grid">
          {[
            { step: '01', title: 'Understand', desc: 'We first understand the buyer’s product, quantity, market and commercial requirements.' },
            { step: '02', title: 'Match', desc: 'We evaluate suitable product and supply options based on the requirement.' },
            { step: '03', title: 'Discuss', desc: 'Commercial terms, specifications, quantities, packaging and other relevant requirements are discussed transparently.' },
            { step: '04', title: 'Coordinate', desc: 'Required product and export documentation is coordinated according to the transaction and destination-market requirements.' },
            { step: '05', title: 'Confirm', desc: 'Once the commercial and product requirements are agreed, the order details are finalized.' },
            { step: '06', title: 'Supply', desc: 'Export and shipment coordination proceeds according to the agreed commercial and logistical arrangements.' },
          ].map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-badge">{s.step}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="approach-banner glass-panel">
          <p>
            <strong>Our objective is simple:</strong> make pharmaceutical sourcing more organized, transparent and dependable for international B2B buyers.
          </p>
        </div>
      </section>

      {/* 5. Why Agnova Global */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Why Agnova Global</p>
            <h2 className="section-title">Built Around Reliability, Not Just Transactions</h2>
            <p className="section-subtitle">
              International pharmaceutical trade requires trust. Buyers need confidence that their requirements are understood, product information is communicated accurately and commercial discussions are handled professionally.
            </p>
          </div>
          <div className="why-grid">
            {[
              {
                icon: <ShieldCheck size={28} />,
                title: 'Quality-Focused Supply',
                desc: 'We place strong emphasis on product information, sourcing requirements and appropriate documentation throughout the supply process.'
              },
              {
                icon: <Building2 size={28} />,
                title: 'International B2B Focus',
                desc: 'Our business model is designed around professional relationships with international buyers, distributors, importers and healthcare businesses.'
              },
              {
                icon: <MessageSquare size={28} />,
                title: 'Reliable Communication',
                desc: 'Clear and timely communication is essential in international trade. We aim to keep buyers informed throughout the sourcing and order process.'
              },
              {
                icon: <Package size={28} />,
                title: 'Product-Focused Approach',
                desc: 'We work around the buyer’s actual pharmaceutical requirements rather than offering a one-size-fits-all approach.'
              },
              {
                icon: <FileCheck size={28} />,
                title: 'Documentation Awareness',
                desc: 'International pharmaceutical transactions can require detailed product and export documentation. We coordinate relevant documentation requirements as part of the supply process.'
              },
              {
                icon: <HeartHandshake size={28} />,
                title: 'Long-Term Partnerships',
                desc: 'We aim to develop sustainable B2B relationships based on professionalism, transparency and consistent communication.'
              }
            ].map((item, i) => (
              <div className="why-card hover-lift" key={i}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Quality Philosophy */}
      <section className="quality-section container">
        <div className="quality-card glass-panel">
          <div className="section-header" style={{marginBottom: '2rem'}}>
            <p className="section-tag">Quality Philosophy</p>
            <h2 className="section-title">Quality Begins Before Shipment</h2>
            <p className="section-subtitle">
              In pharmaceutical supply, quality is not limited to the physical product. It also involves accurate product information, appropriate documentation, reliable sourcing and responsible coordination throughout the supply chain.
            </p>
          </div>
          <div className="quality-points-grid">
            {[
              'Product specifications & analytical criteria',
              'Composition and strength verification',
              'Dosage form suitability & stability',
              'Export-grade & secure packaging',
              'Batch-related information where applicable',
              'Regulatory & product documentation',
              'Supplier and product compliance checks',
              'Destination-market import requirements',
              'Full export documentation assistance',
              'Temperature-monitored & secure shipment coordination'
            ].map((point, i) => (
              <div className="quality-point-item" key={i}>
                <BadgeCheck size={20} className="q-icon" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="quality-quote-box">
            <p>
              <strong>Agnova Global does not treat compliance as a checkbox. We see it as an important part of responsible international pharmaceutical business.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 7. Global Perspective: Market Focus */}
      <section className="global-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Global Perspective</p>
            <h2 className="section-title">From India to the World</h2>
            <p className="section-subtitle">
              India plays an important role in the global pharmaceutical ecosystem, and Agnova Global is positioned around connecting pharmaceutical supply with international B2B markets.
            </p>
          </div>
          <div className="markets-grid">
            {[
              { region: 'USA', desc: 'Facilitating specialized pharmaceutical procurement and institutional B2B supply partnerships across the United States.' },
              { region: 'UK', desc: 'Connecting with licensed distributors, wholesalers, and healthcare providers throughout the United Kingdom.' },
              { region: 'Australia', desc: 'Supporting reliable pharmaceutical supply and healthcare import requirements across Australia.' },
              { region: 'Canada', desc: 'Providing dependable pharmaceutical sourcing and supply solutions for Canadian healthcare markets.' },
              { region: 'Asia', desc: 'Connecting with distributors, importers and healthcare businesses across dynamic Asian markets.' },
              { region: 'Major Global Markets', desc: 'Working toward broader international pharmaceutical partnerships across Africa, Middle East, CIS, Latin America, and global markets.' }
            ].map((m, i) => (
              <div className="market-card hover-lift" key={i}>
                <div className="market-header">
                  <Globe size={22} className="market-icon" />
                  <h3>{m.region}</h3>
                </div>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="market-disclaimer">
            * Specific country availability, registrations and market access depend on product and destination-market requirements.
          </p>
        </div>
      </section>

      {/* 8. Mission & Vision */}
      <section className="mission-vision-section container">
        <div className="mv-grid">
          <div className="mv-card mission-card glass-panel">
            <div className="mv-icon-wrapper">
              <Target size={32} />
            </div>
            <h2>Our Mission</h2>
            <p className="mv-tagline">To Make Pharmaceutical Supply More Connected and Reliable</p>
            <p className="mv-desc">
              Our mission is to build a trusted international pharmaceutical export business that connects suitable pharmaceutical products with legitimate B2B healthcare requirements.
            </p>
            <ul className="mv-list">
              <li><CheckCircle2 size={16} /> Responsible sourcing & quality control</li>
              <li><CheckCircle2 size={16} /> Professional, transparent communication</li>
              <li><CheckCircle2 size={16} /> Efficient export coordination</li>
              <li><CheckCircle2 size={16} /> Long-term international partnerships</li>
            </ul>
          </div>

          <div className="mv-card vision-card glass-panel">
            <div className="mv-icon-wrapper">
              <Eye size={32} />
            </div>
            <h2>Our Vision</h2>
            <p className="mv-tagline">Building Trusted Connections Across Global Healthcare</p>
            <p className="mv-desc">
              Our vision is to establish Agnova Global as a respected international pharmaceutical supply partner known for professionalism, reliability and responsible B2B relationships.
            </p>
            <p className="mv-desc">
              We want to build an organization where buyers can confidently approach us with their pharmaceutical requirements and receive a structured, transparent and professional response.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Our Foundation</p>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">What Guides Agnova Global in Every Decision & Partnership</p>
          </div>
          <div className="core-values-grid">
            {[
              { title: 'Integrity', desc: 'We believe international pharmaceutical business should be conducted with transparency, professionalism and responsible communication.' },
              { title: 'Quality', desc: 'We focus on product requirements, specifications and documentation throughout the sourcing process.' },
              { title: 'Reliability', desc: 'Our goal is to provide consistent communication and dependable coordination.' },
              { title: 'Partnership', desc: 'We believe long-term B2B relationships create more value than short-term transactions.' },
              { title: 'Responsibility', desc: 'Pharmaceutical products directly relate to healthcare. We therefore approach pharmaceutical trade with appropriate seriousness and attention to requirements.' },
              { title: 'Global Thinking', desc: 'We understand that international markets differ and approach each market according to its specific requirements.' }
            ].map((v, i) => (
              <div className="core-value-card hover-lift" key={i}>
                <div className="value-number">0{i + 1}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Who We Work With & Partnerships */}
      <section className="partners-section container">
        <div className="partners-card glass-panel">
          <div className="section-header" style={{marginBottom: '2rem'}}>
            <p className="section-tag">B2B Partnerships</p>
            <h2 className="section-title">Who We Work With</h2>
            <p className="section-subtitle">
              Agnova Global is focused on long-term B2B pharmaceutical relationships with organizations across the healthcare supply chain:
            </p>
          </div>
          <div className="partners-badge-grid">
            {[
              'Pharmaceutical Importers',
              'Pharmaceutical Distributors',
              'Pharmaceutical Wholesalers',
              'Pharmacy Chains',
              'Hospitals',
              'Healthcare Procurement Organizations',
              'Institutional Buyers',
              'Pharmaceutical Trading Companies',
              'Regional Healthcare Suppliers',
              'Licensed Distribution Partners'
            ].map((p, i) => (
              <div className="partner-badge" key={i}>
                <Briefcase size={16} className="p-icon" />
                <span>{p}</span>
              </div>
            ))}
          </div>
          <p className="partner-compliance-note">
            * All business relationships and product supply remain subject to applicable laws, regulations, licensing and destination-market requirements.
          </p>
        </div>
      </section>

      {/* 11. Responsible International Trade & Looking Ahead */}
      <section className="standards-section container">
        <div className="standards-grid">
          <div className="standard-box glass-panel">
            <p className="section-tag">Professional Standards</p>
            <h3>Responsible International Trade</h3>
            <p>
              Agnova Global recognizes that pharmaceutical export operates within a highly regulated international environment. Product suitability, import permissions, regulatory requirements, documentation and licensing can vary significantly between markets.
            </p>
            <p>
              Our approach is based on responsible commercial coordination and accurate communication. We do not make unsupported claims regarding approvals or registrations; instead, we work with buyers to understand the applicable requirements for their specific market.
            </p>
          </div>
          <div className="standard-box glass-panel">
            <p className="section-tag">Looking Ahead</p>
            <h3>Growing Through Global Partnerships</h3>
            <p>
              Agnova Global is focused on building an international network of pharmaceutical business relationships. As we grow, our objective is to expand our product portfolio, strengthen supply relationships, and develop new international markets.
            </p>
            <p className="standard-highlight">
              <strong>"Create value for buyers, build reliable partnerships and grow responsibly."</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 12. Bottom CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-box glass-panel">
            <span className="cta-tag">Let's Build a Partnership</span>
            <h2>Have a Pharmaceutical Requirement?</h2>
            <p className="cta-para">
              Whether you are an importer, distributor, wholesaler, healthcare organization or pharmaceutical buyer, our team can review your requirement and explore suitable supply options.
            </p>
            <div className="requirements-checklist">
              <span>Share your:</span>
              <div className="req-pills">
                {['Product Requirement', 'Quantity', 'Destination Country', 'Dosage Form', 'Strength', 'Packaging Requirements', 'Documentation Needs'].map((req, i) => (
                  <span className="req-pill" key={i}>{req}</span>
                ))}
              </div>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request a Quote <ArrowRight size={20} />
              </Link>
              <a href="tel:+917970153653" className="btn btn-secondary btn-lg">
                Call Us Directly
              </a>
            </div>
            <div className="cta-footer-branding">
              <strong>Agnova Global Exports</strong> — <em>From India to the World</em>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
