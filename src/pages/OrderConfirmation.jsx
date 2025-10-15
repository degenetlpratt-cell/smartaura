import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function OrderConfirmation() {
  const location = useLocation();
  const { form, total } = location.state || {};

  if (!form) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>No order details found.</h2>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Thank you for your order, {form.name}!</h2>
      <p>Total Paid: ${total.toFixed(2)}</p>
      <p>We have sent a confirmation to {form.email}</p>
      <Link to="/">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", background: "#38bdf8", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
}
