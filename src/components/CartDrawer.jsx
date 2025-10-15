import React, { useState } from "react";
import { useCart } from "../hooks/useLocalStorage";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { cart, removeFromCart, total } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          right: "2rem",
          bottom: "2rem",
          background: "#38bdf8",
          border: "none",
          padding: "1rem",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        🛒 {cart.length}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100%",
              width: "350px",
              background: "rgba(31,41,55,0.95)",
              backdropFilter: "blur(10px)",
              padding: "2rem",
              zIndex: 999,
              overflowY: "auto",
            }}
          >
            <button onClick={() => setOpen(false)} style={{ marginBottom: "1rem" }}>Close</button>
            <h2 style={{ color: "#38bdf8", marginBottom: "1rem" }}>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} style={{ marginBottom: "1rem" }}>
                  <img src={item.img} alt={item.name} width="60" style={{ borderRadius: "0.5rem" }} />
                  <p>{item.name}</p>
                  <p>{item.price} × {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))
            )}
            <p style={{ fontWeight: "bold", marginTop: "1rem" }}>Total: ${total.toFixed(2)}</p>
            <Link to="/checkout">
              <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "#38bdf8", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}>Checkout</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
