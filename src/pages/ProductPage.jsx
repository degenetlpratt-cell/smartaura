import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/product';
import { useCart } from '../hooks/useLocalStorage';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="not-found">Product not found.</div>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      {product.stock > 0 ? (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      ) : (
        <p>Out of Stock</p>
      )}
    </div>
  );
};

export default ProductPage;
