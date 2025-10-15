import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Link>
    </motion.div>
  );
}
