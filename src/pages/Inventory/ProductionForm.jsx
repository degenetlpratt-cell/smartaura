// /src/pages/Inventory/ProductForm.jsx

import React, { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", price: "", img: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.img) return;
    onAdd(form);
    setForm({ name: "", price: "", img: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      <input
        name="img"
        placeholder="Image URL"
        value={form.img}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
