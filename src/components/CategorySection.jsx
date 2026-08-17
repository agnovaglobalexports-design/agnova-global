import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './CategorySection.css';

const CategorySection = ({ category, products, limit = null }) => {
  const displayedProducts = limit ? products.slice(0, limit) : products;

  if (!displayedProducts || displayedProducts.length === 0) return null;

  return (
    <section className="category-section" id={`cat-sec-${category.id}`}>
      <div className="container">
        <div className="category-header">
          <h2 className="category-title">{category.name}</h2>
          {limit && (
            <Link to={`/products?category=${category.id}`} className="view-all-link">
              View All
            </Link>
          )}
        </div>
        <div className="products-grid">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
