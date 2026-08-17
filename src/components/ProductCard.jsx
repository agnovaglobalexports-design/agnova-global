import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const WHATSAPP_NUMBER = '917970153653';
  const message = `Hello Agnova Global, I would like to inquire about ${product.name}.`;

  return (
    <div className="product-card glass-panel hover-scale">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-category-badge">{product.category.replace(/-/g, ' ')}</div>
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
