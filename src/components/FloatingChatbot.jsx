import React, { useState } from 'react';
import { MessageCircle, Phone, X, Send, CheckCheck, Sparkles, Building2 } from 'lucide-react';
import './FloatingChatbot.css';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const WHATSAPP_NUMBER = '917970153653';
  const PHONE_NUMBER = '+917970153653';

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    const textToSend = message.trim() || 'Hello Agnova Global, I would like to inquire about pharmaceutical export products.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setMessage('');
  };

  const handleQuickOption = (optText) => {
    const textToSend = `Hello Agnova Global, ${optText}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="floating-chat-container">
      
      {/* ── CHAT POPUP WINDOW ── */}
      {isOpen && (
        <div className="chat-popup animate-scale-up">
          
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar-wrapper">
                <img src="/assets/logo.jpg" alt="Agnova Global Logo" className="chat-avatar-img" />
                <span className="online-dot" />
              </div>
              <div>
                <div className="chat-title-row">
                  <h4>Agnova Global Support</h4>
                  <span className="verified-badge">✓</span>
                </div>
                <p className="chat-status">Online • Typically replies instantly</p>
              </div>
            </div>
            <button className="chat-close-btn" onClick={toggleChat} aria-label="Close Chat">
              <X size={18} />
            </button>
          </div>

          {/* Body Messages */}
          <div className="chat-body">
            <div className="chat-timestamp">Today</div>

            <div className="chat-bubble agent-bubble">
              <p>
                👋 Hello! Welcome to <strong>Agnova Global Exports</strong>.
              </p>
              <p>
                How can we assist your pharmaceutical sourcing & export requirements today?
              </p>
              <span className="bubble-time">
                Just now <CheckCheck size={14} className="double-tick" />
              </span>
            </div>

            {/* Quick Prompts */}
            <div className="quick-options-title">
              <Sparkles size={14} /> Quick Inquiries:
            </div>
            <div className="quick-options-list">
              <button 
                className="quick-btn" 
                onClick={() => handleQuickOption('I would like to request a bulk price quote.')}
              >
                📦 Request a Bulk Quote
              </button>
              <button 
                className="quick-btn" 
                onClick={() => handleQuickOption('I need information about international export & shipping.')}
              >
                🌍 Export & Shipping Info
              </button>
              <button 
                className="quick-btn" 
                onClick={() => handleQuickOption('I want to check product availability and documentation.')}
              >
                📋 Product Availability & Dossiers
              </button>
            </div>
          </div>

          {/* Quick Direct Actions */}
          <div className="chat-direct-actions">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Agnova Global, I would like to chat regarding pharmaceutical supplies.')}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="chat-action-btn wa-action-btn"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="chat-action-btn call-action-btn"
            >
              <Phone size={18} /> Call +91 79701 53653
            </a>
          </div>

          {/* Input Form */}
          <form className="chat-input-bar" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Type a message to start WhatsApp chat..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="chat-send-btn" title="Send message via WhatsApp">
              <Send size={16} />
            </button>
          </form>

        </div>
      )}

      {/* ── FLOATING BUTTONS (BOTTOM RIGHT) ── */}
      <div className="floating-triggers">
        
        {/* Direct Call Floating Trigger */}
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="floating-call-btn" 
          title="Call Us Directly: +91 79701 53653"
        >
          <Phone size={26} />
        </a>

        {/* WhatsApp Chatbot Floating Trigger */}
        <button 
          className={`floating-wa-btn ${isOpen ? 'active' : ''}`} 
          onClick={toggleChat}
          aria-label="Open WhatsApp Chat"
          title="Chat on WhatsApp"
        >
          {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
          {!isOpen && <span className="notification-ping" />}
        </button>

      </div>

    </div>
  );
};

export default FloatingChatbot;
