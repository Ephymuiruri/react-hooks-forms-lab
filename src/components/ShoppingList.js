import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");
  const [ filteredItems,setfilteredItems] = useState([])
  const [display, setDisplay] = useState([]);
console.log(filteredItems)
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchItem(event) {
    const searchValue = event.target.value; 
    setSearchItem(searchValue); 
    searchfilter(searchValue)
    return searchValue
  }
  function searchfilter(searchValue){
      const searcharray = items.filter(
      (item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
      setfilteredItems(searcharray)
      if (searcharray.length!==0){setDisplay(searcharray)}
    console.log(searcharray)
  }
      
  const categoryDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} 
      searchItem={searchItem} 
      onSearch={handleSearchItem} />
      <ul className="Items">
        {display.length === 0 ? 
              categoryDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            )):display.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
            }
      </ul>
    </div>
  );
}

export default ShoppingList;
