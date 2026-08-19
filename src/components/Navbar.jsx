import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ShieldCheck, BadgeCheck, Search, ChevronDown, MessageCircle } from 'lucide-react';
import { categories, products } from '../data/products';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownTimer = useRef(null);
  const searchContainerRef = useRef(null);

  const WHATSAPP_NUMBER = '917970153653';

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSelectSuggestion = (productId) => {
    setShowSuggestions(false);
    setSearchQuery('');
    navigate(`/product/${productId}`);
  };

  // Compute live search suggestions
  const liveSuggestions = searchQuery.trim().length >= 2
    ? products.filter(p => 
        (p.name && p.name.toLowerCase().includes(searchQuery.toLowerCase().trim())) ||
        (p.composition && p.composition.toLowerCase().includes(searchQuery.toLowerCase().trim())) ||
        (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase().trim()))
      ).slice(0, 6)
    : [];

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  // Show first 4 categories in dropdown, each with up to 5 products
  const dropdownCategories = categories.slice(0, 8);

  return (
    <header className="site-header">

      {/* ── TOP INFO BAR ── */}
      <div className="top-bar">
        <div className="container top-bar-inner">

          {/* Left: Logo + Company Info */}
          <div className="top-bar-left">
            <Link to="/" className="logo">
              <img src="/assets/logo.jpg" alt="Agnova Global Logo" className="logo-img" />
            </Link>
            <div className="company-info">
              <Link to="/" className="company-name">Agnova Global Exports</Link>
              <div className="company-meta">
                <span className="meta-item location-item">
                  <MapPin size={12} className="location-pin" /> Indore, Madhya Pradesh
                </span>
                <span className="meta-divider">|</span>
                <span className="meta-item gst">
                  <BadgeCheck size={13} className="gst-icon" />
                  GST No.: <strong>23AAGCA1234B1ZP</strong>
                </span>
                <span className="meta-divider">|</span>
                <span className="meta-item payment">
                  <ShieldCheck size={13} className="shield-icon" />
                  Payment Protected
                </span>
              </div>
            </div>
          </div>

          {/* Right: Trust Seal + Actions */}
          <div className="top-bar-right">
            <div className="trust-seal">
              <img src="/assets/trust_seal.png" alt="IndiaMART Trust Seal" className="trust-seal-img" />
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Agnova Global Exports, I would like to request a quotation for pharmaceutical products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn get-quote-header-btn"
            >
              <MessageCircle size={18} />
              <span>Get Quote</span>
            </a>

            <a href="mailto:agnovaglobalexports@gmail.com" className="action-btn email-header-btn">
              <Mail size={18} />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM NAV BAR ── */}
      <nav className="bottom-nav">
        <div className="container bottom-nav-inner">

          {/* Mobile toggle */}
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
            <span style={{ marginLeft: '0.4rem', fontSize: '0.9rem' }}>Menu</span>
          </button>

          {/* Nav Links */}
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>

            {/* ── OUR PRODUCTS with Mega Dropdown ── */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/products"
                className={`nav-link products-link ${location.pathname === '/products' ? 'active-link' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Menu size={16} style={{ marginRight: '0.35rem' }} />
                Our Products
                <ChevronDown size={15} className={`chevron ${dropdownOpen ? 'chevron-up' : ''}`} />
              </Link>

              {/* MEGA DROPDOWN */}
              {dropdownOpen && (
                <div className="mega-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="mega-dropdown-inner">
                    {dropdownCategories.map((cat) => {
                      const catProducts = products.filter(p => p.category === cat.id).slice(0, 5);
                      return (
                        <div className="mega-col" key={cat.id}>
                          <h4 className="mega-col-title">{cat.name.toUpperCase()}</h4>
                          <ul className="mega-product-list">
                            {catProducts.map(p => (
                              <li key={p.id}>
                                <Link
                                  to={`/products?category=${cat.id}`}
                                  className="mega-product-link"
                                  onClick={() => { setDropdownOpen(false); setIsOpen(false); }}
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to={`/products?category=${cat.id}`}
                            className="mega-view-all"
                            onClick={() => { setDropdownOpen(false); setIsOpen(false); }}
                          >
                            View All Products →
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  {/* Bottom bar */}
                  <div className="mega-bottom-bar">
                    <Link
                      to="/products"
                      className="mega-view-all-categories"
                      onClick={() => { setDropdownOpen(false); setIsOpen(false); }}
                    >
                      View All Categories
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active-link' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Search Bar with Live Dropdown */}
          <div className="search-bar-wrapper" ref={searchContainerRef}>
            <form className="search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search Products / Services"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <Search size={16} /> Search
              </button>
            </form>

            {/* Live Autocomplete Suggestions */}
            {showSuggestions && liveSuggestions.length > 0 && (
              <div className="search-suggestions-dropdown glass-panel">
                <div className="suggestions-header">Matching Products</div>
                <ul className="suggestions-list">
                  {liveSuggestions.map((prod) => (
                    <li 
                      key={prod.id} 
                      onClick={() => handleSelectSuggestion(prod.id)}
                      className="suggestion-item"
                    >
                      <img src={prod.image} alt={prod.name} className="suggestion-thumb" />
                      <div className="suggestion-info">
                        <strong className="suggestion-name">{prod.name}</strong>
                        <span className="suggestion-meta">
                          {prod.composition && `Salt: ${prod.composition}`} {prod.strength && `• ${prod.strength}`}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div 
                  className="suggestions-footer"
                  onClick={handleSearch}
                >
                  View all results for "{searchQuery}" →
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Navbar;
