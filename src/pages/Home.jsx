import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Award, Truck, Phone, FlaskConical, HeartPulse, CheckCircle2 } from 'lucide-react';
import CategorySection from '../components/CategorySection';
import AnimatedCounter from '../components/AnimatedCounter';
import { categories, products } from '../data/products';
import { heroCarouselSlides } from '../data/carousel';
import './Home.css';

const Home = () => {
  const WHATSAPP_NUMBER = '917970153653';

  const heroSlides = heroCarouselSlides && heroCarouselSlides.length > 0 ? heroCarouselSlides : [
    {
      image: '/assets/anti_cancer_meds.jpg',
      tag: 'Quality Certified',
      tagSub: 'WHO-GMP Approved',
      badge: '50+ Countries',
      badgeSub: 'Worldwide Export'
    }
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Preload all carousel images into memory for instant transitions
  useEffect(() => {
    heroSlides.forEach((slide) => {
      if (slide.image) {
        const img = new Image();
        img.src = slide.image;
      }
    });
  }, [heroSlides]);

  // 2-second auto-cycling hero carousel
  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const stats = [
    { target: 5, suffix: '+', label: 'Years Experience' },
    { target: 5000, suffix: '+', label: 'Products Exported' },
    { target: 50, suffix: '+', label: 'Countries Served' },
    { target: 99, suffix: '%', label: 'Client Satisfaction' },
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
              <div className="hero-slides-container">
                {heroSlides.map((slide, idx) => (
                  <img
                    key={idx}
                    src={slide.image}
                    alt="Pharmaceutical Products"
                    className={`hero-product-img ${currentHeroSlide === idx ? 'active-slide' : 'inactive-slide'}`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/anti_cancer_meds.jpg';
                    }}
                  />
                ))}
              </div>
              
              <div className="hero-float-card card-top">
                <HeartPulse size={20} className="float-icon" />
                <div>
                  <strong>{heroSlides[currentHeroSlide]?.tag || 'Quality Certified'}</strong>
                  <span>{heroSlides[currentHeroSlide]?.tagSub || 'WHO-GMP Approved'}</span>
                </div>
              </div>

              <div className="hero-float-card card-bottom">
                <Globe size={20} className="float-icon" />
                <div>
                  <strong>{heroSlides[currentHeroSlide]?.badge || '50+ Countries'}</strong>
                  <span>{heroSlides[currentHeroSlide]?.badgeSub || 'Worldwide Export'}</span>
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
              <AnimatedCounter target={s.target} suffix={s.suffix} duration={1800} />
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
