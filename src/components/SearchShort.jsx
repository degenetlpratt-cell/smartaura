import React from "react";

const SearchShort = ({ searchTerm, onSearchChange }) => (
  <div className="search-short">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>
);

export default SearchShort;
