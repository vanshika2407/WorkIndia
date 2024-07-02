import React from "react";
import { useState, useEffect } from "react";
import HeaderShow from "../Components/HeaderShow";
import axios from "axios";
import ListForItem from "../Components/ListForItem";

const URL = "https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a";
const fetchHandler = async () => {
  return await axios
    .get(URL)
    .then((res) => res.data)
    .catch(function (err) {
      console.log(err);
    });
};
function ShowItemL(props) {
  const [ItemData, setItemS] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => setItemS(data));
  }, []);

  useEffect(() => {
    if (props.newI) {
      setItemS((prevItems) => [...prevItems, ...props.newI]);
    }
  }, [props.newI]);
  console.log(ItemData);
  return (
    <div>
      <HeaderShow />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {ItemData &&
          ItemData.map((item) => {
            return (
              <div className="p-4">
                <ListForItem
                  key={item.id}
                  item={item.item}
                  price={item.price}
                  shipping_method={item.shipping_method}
                  id={item.id}
                />
                <hr className="mt-4"></hr>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default ShowItemL;
