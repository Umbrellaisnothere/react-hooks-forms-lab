import React, { useState } from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";
import Filter from "./Filter";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }
  function handleItemFormSubmit(newItem) {
    onItemFormSubmit(newItem);
  }

  const itemsToDisplay = items.filter((item) => {
    if 
    (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    } 
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={handleItemFormSubmit}
      />
      <Filter 
        searchText={searchText}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
       />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
