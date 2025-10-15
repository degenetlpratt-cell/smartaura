import React, { useState } from "react";
import { useCart } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", address: "", card: "" });
  const navigate = useNavigate();

  const safeTotal = total || 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.card) return;

    clearCart();
    navigate("/confirmation");
  };

  return (
    <div
      className="checkout"
      style={{
        maxWidth: "500px",
        margin: "3rem auto",
        padding: "2rem",
        background: "#1f2937",
        borderRadius: "1rem",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem", color: "#38bdf8" }}>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            required
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }}
          />
          <input
            required
            placeholder="Shipping Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }}
          />
          <input
            required
            placeholder="Card Number"
            value={form.card}
            onChange={(e) => setForm({ ...form, card: e.target.value })}
            style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }}
          />
          <button
            type="submit"
            style={{
              background: "#38bdf8",
              color: "#000",
              padding: "0.75rem",
              border: "none",
              borderRadius: "9999px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Place Order (${safeTotal.toFixed(2)})
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
