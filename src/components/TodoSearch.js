import React, { useState } from "react";
import "./css/TodoSearch.css";

function TodoSearch({ searchedValue, setSearchedValue }) {
  return (
    <div className="search-container">
      <input
        className=""
        placeholder="Cortar cebolla"
        value={searchedValue}
        type="search"
        onChange={(e) => {
          setSearchedValue(e.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
