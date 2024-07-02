import React from "react";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddItem from "./Pages/AddItem";
import ShowItem from "./Pages/ShowItem";
import ShowItemL from "./Pages/ShowItemL";
function App() {
  const [newItems, setNewItems] = useState([]);
  function onAdd(newItem) {
    setNewItems((prevItem) => {
      return [...prevItem, newItem];
    });
    console.log(newItems);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add-item" element={<AddItem onAdd={onAdd} />} />
          <Route path="/items" element={<ShowItem newI={newItems} />} />
          <Route path="/itemsL" element={<ShowItemL newI={newItems} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
