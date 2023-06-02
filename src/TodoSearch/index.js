import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchedValue, setSearchedValue } = useContext(TodoContext);

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
