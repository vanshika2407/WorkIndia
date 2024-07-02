import React from "react";
import { useState, useEffect } from "react";
import HeaderShow from "../Components/HeaderShow";
import axios from "axios";
import ItemDisplay from "../Components/ItemDisplay";
const URL = "https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a";
const fetchHandler = async () => {
  return await axios
    .get(URL)
    .then((res) => res.data)
    .catch(function (err) {
      console.log(err);
    });
};
function ShowItem(props) {
  const [ItemData, setItemS] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => {
      setFetchedData(data);
      setItemS(data);
    });
  }, []);

  useEffect(() => {
    if (props.newI && props.newI.length > 0) {
      setItemS([...fetchedData, ...props.newI]);
    }
  }, [props.newI, fetchedData]);

  console.log("ItemData:", ItemData);
  console.log("New items from props:", props.newI);
  return (
    <div>
      <HeaderShow />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {ItemData &&
          ItemData.map((details, i) => {
            return (
              <div className="container" key={i}>
                <ItemDisplay itemD={details} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default ShowItem;
