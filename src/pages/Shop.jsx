import React, { useState } from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import SearchShort from "../components/SearchShort";
import { motion } from "framer-motion";

export default function Shop() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#38bdf8", marginBottom: "2rem" }}>Shop</h2>

      <SearchShort searchTerm={search} onSearchChange={setSearch} />

      <motion.div className="product-grid">
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 + i * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
