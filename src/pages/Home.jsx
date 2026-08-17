import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Award, Truck, Phone, FlaskConical, HeartPulse } from 'lucide-react';
import CategorySection from '../components/CategorySection';
import { categories, products } from '../data/products';
import './Home.css';

const Home = () => {
  const WHATSAPP_NUMBER = '917970153653';

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '5000+', label: 'Products Exported' },
    { value: '50+', label: 'Countries Served' },
    { value: '99%', label: 'Client Satisfaction' },
  ];

  const features = [
    {
      icon: <Globe size={28} />,
      title: 'Global Reach',
      desc: 'Exporting premium pharmaceutical products to healthcare providers across 50+ countries.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Quality Assured',
      desc: 'All products adhere to WHO-GMP, ISO certified standards for safety and efficacy.',
    },
    {
      icon: <Truck size={28} />,
      title: 'Fast Delivery',
      desc: 'Reliable logistics network ensuring timely and secure delivery worldwide.',
    },
    {
      icon: <Award size={28} />,
      title: 'Trusted Partner',
      desc: 'Over a decade of trust in the pharmaceutical industry across global markets.',
    },
  ];

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-dots" />
        <div className="container hero-layout">
          <div className="hero-text animate-fade-in">
            <div className="hero-badge">
              <FlaskConical size={16} />
              <span>Certified Global Pharmaceutical Exporter</span>
            </div>
            <h1 className="hero-title">
              Delivering <span className="hero-highlight">Life-Saving</span> Medicines Globally
            </h1>
            <p className="hero-subtitle">
              Agnova Global is a trusted pharmaceutical exporter, delivering high-quality healthcare products and medicines to partners worldwide with unmatched reliability.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-hero-primary">
                Explore Products <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero-secondary"
              >
                <Phone size={18} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="hero-visual animate-fade-in">
            <div className="hero-card-wrapper">
              <img
                src="/assets/anti_cancer_meds.jpg"
                alt="Pharmaceutical Products"
                className="hero-product-img"
              />
              <div className="hero-float-card card-top">
                <HeartPulse size={20} className="float-icon" />
                <div>
                  <strong>Quality Certified</strong>
                  <span>WHO-GMP Approved</span>
                </div>
              </div>
              <div className="hero-float-card card-bottom">
                <Globe size={20} className="float-icon" />
                <div>
                  <strong>50+ Countries</strong>
                  <span>Worldwide Export</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="featured-categories-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Our Catalog</p>
            <h2 className="section-title">Key Product Categories</h2>
            <p className="section-subtitle">Discover our wide range of specialized pharmaceutical products.</p>
          </div>

          {categories.slice(0, 3).map(category => (
            <CategorySection
              key={category.id}
              category={category}
              products={products.filter(p => p.category === category.id)}
              limit={4}
            />
          ))}

          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary">
              View Complete Catalog <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES / WHY CHOOSE US ── */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Why Choose Us</p>
            <h2 className="section-title">Your Reliable Pharmaceutical Partner</h2>
            <p className="section-subtitle">We combine quality, speed, and global reach to serve your healthcare needs.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card hover-scale" key={i}>
                <div className="feature-icon-box">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="container cta-inner">
          <div className="cta-text">
            <h2>Ready to Partner With Us?</h2>
            <p>Get in touch for bulk orders, product inquiries, or global supply partnerships.</p>
          </div>
          <div className="cta-actions">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <Phone size={18} /> Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-cta-outline">
              View Contact Details
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
