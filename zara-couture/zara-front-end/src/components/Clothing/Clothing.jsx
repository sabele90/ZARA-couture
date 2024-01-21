// import "./Clothing.css";
// import React, { useState } from "react";
// import { clothing } from "../../../data";
// import { Link } from "react-router-dom";
// //encodeURIComponent: encript picture URL to avoid wrong interpretation like ?
// const ClothingItem = ({ item, index }) => {
//   return (
//     <div className={`container-item-${index}`}>
//<Link to={`/customize/${item.id}/${encodeURIComponent(item.images[0])}`}>
//         <img
//           className={`clothing-image-${index}`}
//           src={item.images[0]}
//           alt={item.name}
//         />
//       </Link>
//     </div>
//   );
// };
// export default ClothingItem;
import React from "react";

import { Link } from "react-router-dom";

function Clothing(item) {
  return (
    // <div key={item.id} className={`container-item-${item.id}`}>
    //   <Link to={`/customize/${item.id}/${encodeURIComponent(item.image1)}`}>
    //     <img
    //       className={`clothing-image-${item.id}`}
    //       src={item.image1}
    //       alt={item.name}
    //     />
    //   </Link>
    // </div>
    <></>
  );
}

export default Clothing;
