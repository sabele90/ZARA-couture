import "./Clothing.css";
import { Icon } from "@mui/material";
import React from "react";
import { clothing } from "../../../data";
import { Link } from "react-router-dom";
//encodeURIComponent: encript picture URL to avoid wrong interpretation like ?
const ClothingItem = ({ item, index }) => {
  return (
    <div className={`container-item-${index}`}>
      <Link to={`/customize/${item.id}/${encodeURIComponent(item.images[0])}`}>
        <img
          className={`clothing-image-${index}`}
          src={item.images[0]}
          alt={item.name}
        />
      </Link>
    </div>
  );
};
export default ClothingItem;
