import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useLocalStorage";

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">SmartAura</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
