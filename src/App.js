import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import { CartProvider } from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
