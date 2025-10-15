import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import { useCart } from "../hooks/useLocalStorage";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <p style={{ padding: "2rem" }}>Product not found.</p>;

  return (
    <div style={{ padding: "2rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      <img src={product.img} alt={product.name} style={{ width: "400px", borderRadius: "1rem" }} />
      <div>
        <h2 style={{ color: "#38bdf8" }}>{product.name}</h2>
        <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{product.description}</p>
        <p style={{ fontWeight: "bold", color: "#38bdf8", marginBottom: "1rem" }}>{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          style={{ padding: "0.5rem 1.5rem", background: "#38bdf8", color: "#000", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
