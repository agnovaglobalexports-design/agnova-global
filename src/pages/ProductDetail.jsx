import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Phone, CheckCircle, ArrowLeft, Send } from 'lucide-react';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  const WHATSAPP_NUMBER = '917970153653';

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
      window.scrollTo(0, 0);
    } else {
      // If product not found, redirect to products page
      navigate('/products');
    }
  }, [id, navigate]);

  if (!product) return <div className="loading-state">Loading...</div>;

  const whatsappMessage = `Hello Agnova Global Exports, I am interested in getting a quote for ${product.name}.`;

  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <div className="product-detail-page">
      <div className="container">
        
        <div className="breadcrumb">
          <Link to="/products" className="back-link">
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <span className="separator">/</span>
          <span className="current-page">{product.name}</span>
        </div>

        <div className="detail-grid">
          
          {/* Left Column - Image Gallery */}
          <div className="detail-image-col">
            <div className="image-wrapper glass-panel">
              <img src={selectedImage || product.image} alt={product.name} className="main-image" />
              
              {/* Multi-image thumbnail selector */}
              {allImages.length > 1 && (
                <div className="thumbnail-row">
                  {allImages.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`${product.name} view ${idx + 1}`}
                      className={`thumbnail-item ${selectedImage === img ? 'active' : ''}`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              )}

              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, please send more high-resolution photos of ${product.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="get-photos-btn"
              >
                <span className="photo-icon">📷</span> Request More Photos
              </a>
            </div>
            
            <div className="interest-box">
              <p>Interested in this product?</p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="quote-link"
              >
                <CheckCircle size={16} /> Get Best Quote
              </a>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="detail-info-col">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="specs-table-wrapper" style={{marginTop: '1.5rem'}}>
              <table className="specs-table">
                <tbody>
                  {product.strength && (
                    <tr>
                      <td className="spec-label">Strength</td>
                      <td className="spec-value"><strong>{product.strength}</strong></td>
                    </tr>
                  )}
                  {product.packagingType && (
                    <tr>
                      <td className="spec-label">Packaging Type</td>
                      <td className="spec-value"><strong>{product.packagingType}</strong></td>
                    </tr>
                  )}
                  {(product.usages || product.usage) && (
                    <tr>
                      <td className="spec-label">Usage</td>
                      <td className="spec-value"><strong>{product.usages || product.usage}</strong></td>
                    </tr>
                  )}
                  {product.type && (
                    <tr>
                      <td className="spec-label">Type</td>
                      <td className="spec-value"><strong>{product.type}</strong></td>
                    </tr>
                  )}
                  {product.form && !product.type && (
                    <tr>
                      <td className="spec-label">Form</td>
                      <td className="spec-value"><strong>{product.form}</strong></td>
                    </tr>
                  )}
                  {product.brand && (
                    <tr>
                      <td className="spec-label">Brand</td>
                      <td className="spec-value"><strong>{product.brand}</strong></td>
                    </tr>
                  )}
                  {product.manufacturer && (
                    <tr>
                      <td className="spec-label">Manufacturer</td>
                      <td className="spec-value"><strong>{product.manufacturer}</strong></td>
                    </tr>
                  )}
                  {product.treatment && (
                    <tr>
                      <td className="spec-label">Treatment</td>
                      <td className="spec-value"><strong>{product.treatment}</strong></td>
                    </tr>
                  )}
                  {product.composition && (
                    <tr>
                      <td className="spec-label">Composition</td>
                      <td className="spec-value"><strong>{product.composition}</strong></td>
                    </tr>
                  )}
                  {product.packagingSize && (
                    <tr>
                      <td className="spec-label">Packaging Size</td>
                      <td className="spec-value"><strong>{product.packagingSize}</strong></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>
            
            <div className="action-buttons">
              <a href="tel:+917970153653" className="detail-btn call-btn">
                <Phone size={18} /> Call Now
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="detail-btn supplier-btn"
              >
                <Send size={18} /> Contact Supplier
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
