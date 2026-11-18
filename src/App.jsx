import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

import ServerError503 from './components/ServerError503';

// Set to true to completely stop the website (shows real 503 server unavailable error)
// Change to false whenever you want to start/restore the live website back to normal
const IS_STOPPED = true;

function App() {
  if (IS_STOPPED) {
    return <ServerError503 />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingChatbot />
      </div>
    </Router>
  );
}

export default App;
