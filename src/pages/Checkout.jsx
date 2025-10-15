import React, { useState } from "react";
import { useCart } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", address: "", card: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/confirmation");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          placeholder="Shipping Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <input
          required
          placeholder="Card Number"
          value={form.card}
          onChange={(e) => setForm({ ...form, card: e.target.value })}
        />
        <button type="submit">Place Order (${total.toFixed(2)})</button>
      </form>
    </div>
  );
};

export default Checkout;
