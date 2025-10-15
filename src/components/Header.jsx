import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useLocalStorage";

export default function Header() {
  const { cart } = useCart();

  return (
    <header style={headerStyle}>
      <Link to="/" style={logoStyle}>SmartAura</Link>
      <nav style={navStyle}>
        <Link to="/shop" style={linkStyle}>Shop</Link>
        <Link to="/cart" style={linkStyle}>
          Cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(10px)",
  zIndex: 1000,
};

const logoStyle = {
  color: "#38bdf8",
  fontWeight: "bold",
  fontSize: "1.5rem",
  textDecoration: "none",
};

const navStyle = {
  display: "flex",
  gap: "1.5rem",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
};
