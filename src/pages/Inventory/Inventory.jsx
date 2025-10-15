// src/pages/Inventory/Inventory.jsx

import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

export default function Inventory() {
  const [products, setProducts] = useState([]);

  const handleAdd = (prod) => {
    setProducts((prev) => [...prev, { ...prod, id: Date.now() }]);
  };
  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#38bdf8" }}>Inventory Management</h2>
      <ProductForm onAdd={handleAdd} />
      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
}
