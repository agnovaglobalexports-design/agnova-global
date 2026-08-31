import React, { useEffect } from 'react';
import { Mail, MessageCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';

const ComingSoon = () => {
  const WHATSAPP_NUMBER = '917970153653';

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Coming Soon | Agnova Global Exports';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #02183d 0%, #022055 50%, #032b69 100%)',
      color: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: '2rem 1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(76, 175, 16, 0.15) 0%, rgba(0,0,0,0) 70%)',
        top: '-150px',
        right: '-150px',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(11, 61, 146, 0.3) 0%, rgba(0,0,0,0) 70%)',
        bottom: '-100px',
        left: '-100px',
        pointerEvents: 'none'
      }} />

      {/* Main Container */}
      <div style={{
        maxWidth: '620px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '24px',
        padding: '3rem 2rem',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        zIndex: 1,
        position: 'relative'
      }}>
        {/* Company Logo & Brand */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.85rem',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '0.6rem 1.2rem',
          borderRadius: '50px',
          marginBottom: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          <img
            src="/assets/logo.jpg"
            alt="Agnova Global Exports"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <span style={{
            fontSize: '0.95rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            color: '#f8fafc'
          }}>
            Agnova Global Exports
          </span>
        </div>

        {/* Coming Soon Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'rgba(76, 175, 16, 0.2)',
          color: '#6cd12c',
          border: '1px solid rgba(76, 175, 16, 0.4)',
          padding: '0.4rem 1rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          marginBottom: '1.5rem',
          width: 'fit-content',
          margin: '0 auto 1.5rem auto'
        }}>
          <Clock size={15} /> Coming Soon
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '1rem',
          color: '#ffffff'
        }}>
          We’ll Be Back Soon!
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: '1.05rem',
          lineHeight: 1.6,
          color: '#94a3b8',
          marginBottom: '2.5rem',
          maxWidth: '480px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Our website is currently undergoing scheduled updates and enhancements. We look forward to serving you shortly.
        </p>

        {/* Direct Contact Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Agnova Global Exports, I would like to get in touch regarding pharmaceutical export enquiries.')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#25D366',
              color: '#ffffff',
              padding: '0.85rem 1.6rem',
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)'
            }}
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>

          <a
            href="mailto:agnovaglobalexports@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '0.85rem 1.6rem',
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Mail size={18} /> Send Email
          </a>
        </div>

        {/* Location & Trust line */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          fontSize: '0.82rem',
          color: '#64748b',
          flexWrap: 'wrap'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={14} color="#4CAF10" /> Indore, Madhya Pradesh
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <ShieldCheck size={14} color="#4CAF10" /> Certified Exporters
          </span>
        </div>
      </div>

      {/* Footer copyright */}
      <div style={{
        marginTop: '2rem',
        fontSize: '0.82rem',
        color: '#64748b',
        textAlign: 'center',
        zIndex: 1
      }}>
        © {new Date().getFullYear()} Agnova Global Exports. All rights reserved.
      </div>
    </div>
  );
};

export default ComingSoon;
