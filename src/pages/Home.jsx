import React, { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import SearchShort from "../components/SearchShort";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img src="/images/hero.jpg" alt="Hero" className="hero-bg" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>SmartAura</h1>
          <p>Futuristic tech reimagined. Experience the next generation of innovation.</p>
        </motion.div>
      </section>

      {/* Search */}
      <SearchShort searchTerm={search} onSearchChange={setSearch} />

      {/* Featured Products */}
      <section className="products">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Products
        </motion.h2>
        <div className="product-grid">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 + i * 0.2 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
