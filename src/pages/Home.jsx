import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Award, Truck, Phone, FlaskConical, HeartPulse, CheckCircle2 } from 'lucide-react';
import CategorySection from '../components/CategorySection';
import { categories, products } from '../data/products';
import './Home.css';

const Home = () => {
  const WHATSAPP_NUMBER = '917970153653';

  const heroSlides = [
    {
      image: '/assets/anti_cancer_meds.jpg',
      tag: 'Quality Certified',
      tagSub: 'WHO-GMP Approved',
      badge: '50+ Countries',
      badgeSub: 'Worldwide Export'
    },
    {
      image: '/assets/hero_banner.jpg',
      tag: 'Certified Exporter',
      tagSub: '200+ Products Sourced',
      badge: 'Fast Logistics',
      badgeSub: 'Global Cold-Chain'
    },
    {
      image: '/assets/pharma_injections.jpg',
      tag: 'Pharmaceutical Injections',
      tagSub: 'Sterile & Verified',
      badge: 'Direct Sourcing',
      badgeSub: '50+ Supply Partners'
    },
    {
      image: '/assets/cat_anticancer.jpg',
      tag: 'Oncology & Antivirals',
      tagSub: 'Life-Saving Formulations',
      badge: 'Quality Assured',
      badgeSub: 'COA / COO Certified'
    }
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // 2-second auto-cycling hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

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
                key={currentHeroSlide}
                src={heroSlides[currentHeroSlide].image}
                alt="Pharmaceutical Products"
                className="hero-product-img hero-slide-fade"
              />
              
              <div className="hero-float-card card-top">
                <HeartPulse size={20} className="float-icon" />
                <div>
                  <strong>{heroSlides[currentHeroSlide].tag}</strong>
                  <span>{heroSlides[currentHeroSlide].tagSub}</span>
                </div>
              </div>

              <div className="hero-float-card card-bottom">
                <Globe size={20} className="float-icon" />
                <div>
                  <strong>{heroSlides[currentHeroSlide].badge}</strong>
                  <span>{heroSlides[currentHeroSlide].badgeSub}</span>
                </div>
              </div>

              {/* Hero Carousel Dots */}
              <div className="hero-dots-indicator">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`hero-dot ${currentHeroSlide === idx ? 'active' : ''}`}
                    onClick={() => setCurrentHeroSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
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

      {/* ── PRODUCTS SECTION (PLACED ABOVE WHY CHOOSE US) ── */}
      <section className="featured-products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Explore Catalog</span>
            <h2 className="section-title">Key Product Categories</h2>
            <p className="section-subtitle">
              Sourcing high-quality generics, tablets, and specialized pharmaceuticals from 50+ verified WHO-GMP certified Indian manufacturers.
            </p>
          </div>

          <div className="featured-categories-content">
            {categories.slice(0, 4).map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                products={products.filter((p) => p.category === category.id)}
                limit={4}
              />
            ))}
          </div>

          <div className="view-more-container text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/products" className="btn btn-primary btn-lg" style={{ padding: '0.9rem 2.5rem', fontSize: '1.05rem' }}>
              View All 29 Product Categories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Your Trusted Export Partner</h2>
            <p className="section-subtitle">
              Committed to delivering excellence through certified quality, global compliance, and end-to-end supply chain support.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card glass-panel hover-lift" key={i}>
                <div className="feature-icon-wrapper">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner glass-panel">
            <div className="cta-text">
              <h2>Ready to Source High-Quality Pharmaceuticals?</h2>
              <p>Contact our international sales team for bulk inquiries, custom sourcing, and regulatory documentation support.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-hero-primary">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta-outline"
              >
                <Phone size={18} /> Chat with Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
