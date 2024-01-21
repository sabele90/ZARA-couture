import "./Clothing.css";
import React from "react";
import { Link } from "react-router-dom";

function Clothing({ item }) {
  const showItem = () => {
    console.log("item", item);
    return (
      <div key={item.id} className={`container-item-${item.id}`}>
        <Link to={`/customize/${item.id}/${encodeURIComponent(item.image1)}`}>
          <img
            className={`clothing-image-${item.id}`}
            src={item.image1}
            alt={item.name}
          />
        </Link>
      </div>
    );
  };
  return item ? showItem() : "Loading";
}

export default Clothing;
