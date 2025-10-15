import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useLocalStorage";

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  // Ensure total is always a number
  const safeTotal = total || 0;

  return (
    <div className="cart-page" style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                background: "#1f2937",
                padding: "1rem",
                borderRadius: "0.75rem",
              }}
            >
              <img
                src={item.image || item.img}
                alt={item.name}
                style={{ width: "80px", marginRight: "1rem", borderRadius: "0.5rem" }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p style={{ margin: 0 }}>
                  ${item.price} × {item.quantity || 1}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "#38bdf8",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <h3 style={{ marginTop: "2rem" }}>Total: ${safeTotal.toFixed(2)}</h3>
      {cart.length > 0 && (
        <Link
          to="/checkout"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            background: "#38bdf8",
            color: "#000",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Checkout
        </Link>
      )}
    </div>
  );
};

export default Cart;
