import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, X, Filter, Package } from 'lucide-react';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isScrollingRef = useRef(false);
  const activeItemRef = useRef(null);

  // Handle URL changes & initial scroll
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const searchParam = params.get('search');

    if (searchParam !== null && searchParam.trim()) {
      setSearchTerm(searchParam);
      setActiveCategory('all');
    } else {
      setSearchTerm('');
      if (categoryParam) {
        setActiveCategory(categoryParam);
        // Scroll to category after mount
        setTimeout(() => {
          const el = document.getElementById(`cat-sec-${categoryParam}`);
          if (el) {
            const yOffset = -100;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 150);
      } else {
        setActiveCategory('all');
      }
    }
  }, [location.search]);

  // ── LIVE SCROLL SPY ──
  // Automatically detects which category is on screen as the user scrolls
  useEffect(() => {
    if (searchTerm.trim()) return;

    const handleScrollSpy = () => {
      if (isScrollingRef.current) return;

      const scrollPos = window.scrollY + 160;

      // If near the top, highlight 'All Products'
      if (window.scrollY < 280) {
        setActiveCategory('all');
        return;
      }

      let currentCat = 'all';
      for (let i = 0; i < categories.length; i++) {
        const cat = categories[i];
        const el = document.getElementById(`cat-sec-${cat.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentCat = cat.id;
            break;
          } else if (scrollPos >= top) {
            currentCat = cat.id;
          }
        }
      }

      setActiveCategory(currentCat);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [searchTerm]);

  // Keep active item in view inside the sidebar
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeCategory]);

  const handleCategoryClick = (catId) => {
    isScrollingRef.current = true;
    if (searchTerm) setSearchTerm('');

    if (catId === 'all') {
      setActiveCategory('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/products', { replace: true });
      setTimeout(() => { isScrollingRef.current = false; }, 600);
    } else {
      setActiveCategory(catId);
      const el = document.getElementById(`cat-sec-${catId}`);
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      navigate(`/products?category=${catId}`, { replace: true });
      setTimeout(() => { isScrollingRef.current = false; }, 600);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/products');
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    navigate('/products');
  };

  // Filter products based on search query across multiple fields
  const searchResults = searchTerm.trim() 
    ? products.filter(p => {
        const query = searchTerm.toLowerCase().trim();
        return (
          (p.name && p.name.toLowerCase().includes(query)) ||
          (p.composition && p.composition.toLowerCase().includes(query)) ||
          (p.brand && p.brand.toLowerCase().includes(query)) ||
          (p.treatment && p.treatment.toLowerCase().includes(query)) ||
          (p.usages && p.usages.toLowerCase().includes(query)) ||
          (p.strength && p.strength.toLowerCase().includes(query)) ||
          (p.form && p.form.toLowerCase().includes(query)) ||
          (p.category && p.category.toLowerCase().includes(query))
        );
      })
    : [];

  return (
    <div className="products-page">
      
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title animate-fade-in">Our Product Catalog</h1>
          <p className="page-subtitle animate-fade-in">
            Explore 200+ certified pharmaceutical medicines, tablets, injections, and herbal products for global export.
          </p>

          {/* In-page live search box */}
          <form className="page-search-wrapper" onSubmit={handleSearchSubmit}>
            <div className="page-search-bar glass-panel">
              <Search size={20} className="search-icon-inside" />
              <input
                type="text"
                placeholder="Search by product name, composition (e.g. Semaglutide), brand, or disease..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button type="button" className="clear-search-btn" onClick={handleClearSearch} title="Clear search">
                  <X size={18} />
                </button>
              )}
              <button type="submit" className="page-search-submit-btn">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container products-container">
        
        {/* ── SIDEBAR CATEGORIES WITH SCROLL SPY ── */}
        <aside className="products-sidebar glass-panel">
          <div className="sidebar-header">
            <Filter size={18} />
            <h3>Categories ({categories.length})</h3>
          </div>
          <ul className="category-list">
            <li 
              ref={activeCategory === 'all' && !searchTerm.trim() ? activeItemRef : null}
              className={activeCategory === 'all' && !searchTerm.trim() ? 'active' : ''}
              onClick={() => handleCategoryClick('all')}
            >
              <span>All Products</span>
              <span className="cat-count">{products.length}</span>
            </li>
            {categories.map(cat => {
              const count = products.filter(p => p.category === cat.id).length;
              const isActive = activeCategory === cat.id && !searchTerm.trim();
              return (
                <li 
                  key={cat.id} 
                  ref={isActive ? activeItemRef : null}
                  className={isActive ? 'active' : ''}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <span>{cat.name}</span>
                  <span className="cat-count">{count}</span>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* ── PRODUCTS CONTENT (CONTINUOUS SCROLL) ── */}
        <div className="products-content">
          
          {/* SEARCH RESULTS VIEW */}
          {searchTerm.trim() ? (
            <div className="search-results-view">
              <div className="search-results-header">
                <div>
                  <h2 className="search-title">
                    Search Results for: <span className="query-highlight">"{searchTerm}"</span>
                  </h2>
                  <p className="search-count-badge">Found {searchResults.length} matching product{searchResults.length === 1 ? '' : 's'}</p>
                </div>
                <button className="btn btn-secondary btn-sm" onClick={handleClearSearch}>
                  <X size={14} /> Clear Search
                </button>
              </div>

              {searchResults.length > 0 ? (
                <div className="search-products-grid">
                  {searchResults.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="no-products glass-panel">
                  <Package size={48} className="no-prod-icon" />
                  <h3>No products found matching "{searchTerm}"</h3>
                  <p>Try searching by active salt name (e.g., <em>Sofosbuvir</em>, <em>Tadalafil</em>, <em>Oxandrolone</em>) or brand name.</p>
                  <button className="btn btn-primary" onClick={handleClearSearch} style={{marginTop: '1rem'}}>
                    View All Products
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* ALL CATEGORY SECTIONS RENDERED FOR SMOOTH SCROLLING */
            <>
              {categories.map(category => {
                const categoryProducts = products.filter(p => p.category === category.id);
                if (categoryProducts.length === 0) return null;
                return (
                  <CategorySection 
                    key={category.id} 
                    category={category} 
                    products={categoryProducts} 
                  />
                );
              })}
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Products;
