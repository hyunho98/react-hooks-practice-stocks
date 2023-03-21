import React from "react";

function SearchBar({ alphaRadio, priceRadio, handleAlphaRadio, handlePriceRadio, handleFilterChange }) {
  
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphaRadio}
          onChange={handleAlphaRadio}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceRadio}
          onChange={handlePriceRadio}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
