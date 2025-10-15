import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useLocalStorage";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card-inner">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className="buttons">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <Link to={`/product/${product.id}`}>View</Link>
      </div>
    </div>
  );
};

export default ProductCard;
