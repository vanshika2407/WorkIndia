import React from "react";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="header bg-headerC ">
        <div className=" pt-11 px-8 flex  justify-between ">
          <h1 className=" font-bold ">Add Item</h1>
          <button className="text-green-500">Add</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
