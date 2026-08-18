import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  User, 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  Share2, 
  ShieldCheck
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const WHATSAPP_NUMBER = '917970153653';
  const PHONE_NUMBER = '+917970153653';
  const EMAIL = 'agnovaglobalexports@gmail.com';

  const shareUrl = encodeURIComponent(window.location.origin);
  const shareText = encodeURIComponent('Agnova Global Exports - Pharmaceutical Exporter');

  return (
    <footer className="indiamart-footer">
      
      {/* 1. Header Bar */}
      <div className="footer-header-bar">
        <div className="container">
          <h2>Get in touch with us</h2>
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="footer-main-body">
        <div className="container footer-grid">

          {/* Left Column: Our Company & Share */}
          <div className="footer-col-company">
            <h3 className="footer-section-heading">Our Company</h3>
            <ul className="company-nav-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            {/* Social Share Bar */}
            <div className="footer-share-section">
              <span className="share-label">
                <Share2 size={16} /> Share us via
              </span>
              <div className="social-icons-row">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn facebook-btn" 
                  title="Share on Facebook"
                >
                  f
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn linkedin-btn" 
                  title="Share on LinkedIn"
                >
                  in
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn x-btn" 
                  title="Share on X"
                >
                  𝕏
                </a>
                <a 
                  href={`https://wa.me/?text=${shareText}%20${shareUrl}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn whatsapp-btn" 
                  title="Share on WhatsApp"
                >
                  ✆
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Reach Us */}
          <div className="footer-col-reach">
            <h3 className="footer-section-heading">Reach Us</h3>
            
            <div className="reach-info-list">
              
              {/* Company & Location */}
              <div className="reach-item">
                <div className="reach-icon-wrapper">
                  <MapPin size={22} className="reach-icon" />
                </div>
                <div className="reach-text">
                  <strong className="reach-company-name">Agnova Global Exports</strong>
                  <p className="reach-address">Indore, Madhya Pradesh</p>
                  <span className="reach-address-full">
                    (Aadinaath Sky 59) Chikistaknagar, 60 Feet Road, Vijay Nagar, Indore – 452010, M.P., India
                  </span>
                </div>
              </div>

              {/* Founder & CEO Info */}
              <div className="reach-item">
                <div className="reach-icon-wrapper">
                  <User size={22} className="reach-icon" />
                </div>
                <div className="reach-text">
                  <strong className="reach-person-name">Aman Gajbhiye <span className="designation">(Founder & CEO)</span></strong>
                </div>
              </div>

              {/* Call Now with Response Rate */}
              <div className="reach-item call-reach-item">
                <div className="reach-icon-wrapper">
                  <PhoneCall size={22} className="call-icon-green" />
                </div>
                <div className="reach-text">
                  <a href={`tel:${PHONE_NUMBER}`} className="call-now-heading">
                    Call Now: <span className="call-number">+91 79701 53653</span>
                  </a>
                  <p className="response-rate-badge">94% Call Response Rate</p>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="reach-actions-row">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Agnova Global, I would like to enquire about your pharmaceutical export products.')}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-action-btn sms-btn"
                >
                  <MessageSquare size={18} /> Send SMS / WhatsApp
                </a>
                
                <a 
                  href={`mailto:${EMAIL}?subject=Export%20Enquiry%20-%20Agnova%20Global`} 
                  className="footer-action-btn email-btn"
                >
                  <Mail size={18} /> Send Email
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-flex">
          <div className="bottom-left">
            <p>© {new Date().getFullYear()} Agnova Global Exports. All Rights Reserved (Terms of Use)</p>
            <p className="bottom-subtext">Exporter & Supplier of Quality Pharmaceuticals from India</p>
          </div>
          <div className="bottom-right">
            <div className="trust-member-badge">
              <ShieldCheck size={20} className="trust-icon" />
              <span>Verified Global Exporter</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
