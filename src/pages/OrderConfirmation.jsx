import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => (
  <div className="confirmation-page">
    <h2>Thank You for Your Purchase!</h2>
    <p>Your order has been placed successfully.</p>
    <Link to="/">
      <button>Return Home</button>
    </Link>
  </div>
);

export default OrderConfirmation;
