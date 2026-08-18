import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const WHATSAPP_NUMBER = '917970153653';
  const message = `Hello Agnova Global, I would like to inquire about ${product.name}.`;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const hasMultipleImages = images.length > 1;

  // Auto-rotate images every 2 seconds if product has 2 or more images
  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, images.length]);

  return (
    <div className="product-card glass-panel hover-scale">
      <div className="product-image-container">
        <img 
          src={images[currentImgIndex]} 
          alt={`${product.name} view ${currentImgIndex + 1}`} 
          className="product-image fade-image"
          key={currentImgIndex}
        />
        <div className="product-category-badge">{product.category.replace(/-/g, ' ')}</div>

        {/* Slideshow indicator dots */}
        {hasMultipleImages && (
          <div className="card-dots-indicator">
            {images.map((_, idx) => (
              <span 
                key={idx} 
                className={`card-dot ${currentImgIndex === idx ? 'active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="product-content">
        <span className="product-category">{product.category.replace(/-/g, ' ')}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-strength"><strong>Strength:</strong> {product.strength}</p>
        
        <div className="product-actions" style={{display: 'flex', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem'}}>
          <Link to={`/product/${product.id}`} className="btn-secondary" style={{flex: 1, textAlign: 'center', padding: '0.6rem 0.5rem', fontSize: '0.85rem'}}>
            <FileText size={16} /> Details
          </Link>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
            style={{flex: 1, textAlign: 'center', padding: '0.6rem 0.5rem', fontSize: '0.85rem'}}
          >
            <MessageCircle size={16} /> Get Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
