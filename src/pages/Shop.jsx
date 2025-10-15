import React from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

const Shop = () => (
  <div className="shop">
    <h2>All Products</h2>
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Shop;
