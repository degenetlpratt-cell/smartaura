import React from "react";

export default function SearchShort({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={{
        padding: "0.5rem",
        width: "100%",
        maxWidth: "400px",
        marginBottom: "2rem",
        borderRadius: "0.5rem",
        border: "none",
      }}
    />
  );
}
