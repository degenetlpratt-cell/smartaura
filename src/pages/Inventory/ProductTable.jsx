// src/pages/Inventory/ProductTable.jsx

import React from "react";

export default function ProductTable({ products, onDelete }) {
  if (!products.length) {
    return <p>No products in inventory.</p>;
  }
  return (
    <table style={{ width: "100%", color: "#fff", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ borderBottom: "2px solid #38bdf8" }}>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id} style={{ borderBottom: "1px solid #333" }}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>
              <img src={p.img} alt={p.name} width="50" />
            </td>
            <td>
              <button onClick={() => onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
