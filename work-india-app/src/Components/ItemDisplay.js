import React from "react";
import "./ItemDisplay.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function ItemDisplay(props) {
  const history = useNavigate();
  //   const { _id, name, author, description, price, image } = props.book;
  //   const handleDelete = async () => {
  //     await axios
  //       .delete("http://localhost:5000/books/" + _id)
  //       .then((res) => res.data)
  //       .then(() => window.location.reload(false))
  //       .then(() => history("/books"));
  //   };

  return (
    <div className="Book">
      <img src={props.itemD.image_url} alt={props.itemD.item}></img>
      <div className="content">
        <h3 className="book heading">{props.itemD.item}</h3>
        <h4 className="book price"> Rs {props.itemD.price}</h4>
      </div>
    </div>
  );
}

export default ItemDisplay;
