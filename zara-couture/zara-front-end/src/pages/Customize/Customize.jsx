import React, { useEffect, useState } from "react";
import "./Customize.css";
import { useParams } from "react-router-dom";
import { clothing } from "../../../data";
console.log(clothing);

function Customize() {
  const { id, encodedImageUrl } = useParams(); // Obteniendo id y encodedImageUrl de la ruta
  const [selectedItem, setSelectedItem] = useState();
  const [image, setImage] = useState("");
  const [selectCustom, setSelectCustom] = useState(false);

  useEffect(() => {
    const numericId = parseInt(id, 10);
    const item = clothing.find((item) => item.id === numericId);
    setSelectedItem(item);

    // Si el artículo se encuentra, usa su primera imagen, si no, usa la URL de la imagen codificada
    setImage(item ? item.images[0] : decodeURIComponent(encodedImageUrl));
    console.log("ID:", id, "Encoded Image URL:", encodedImageUrl);
  }, [id, encodedImageUrl]);

  const handleClick = (newImage) => {
    setImage(newImage);
  };

  function changeBorder(imageId) {
    if (selectCustom === imageId) {
      setSelectCustom(null);
    } else {
      setSelectCustom(imageId);
    }
  }
  return (
    <>
      <div className="body-customize">
        <div className="elements">
          <div className="composition">
            <h5>{selectedItem?.title}</h5>
            <h5>{selectedItem?.titleComposition}</h5>
            <p className="text-composition">{selectedItem?.composition}</p>
          </div>
          <img className="grey-coat" src={image} />

          <div className="customize">
            <h4>{selectedItem?.name}</h4>
            <div className="price">{selectedItem?.price}</div>
            <hr className="customize-line" />

            <div className="leghts">
              <img
                className={`length-1 ${
                  selectCustom === "image1" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image1");
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2146/745/800/2/w/850/2146745800_6_1_1.jpg?ts=1703060648425"
                  );
                }}
                src="https://static.zara.net/photos///2024/V/0/1/p/2146/745/800/2/w/850/2146745800_6_1_1.jpg?ts=1703060648425"
              />

              <img
                className={`length-2 ${
                  selectCustom === "image2" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image2");
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2110/775/800/2/w/850/2110775800_6_1_1.jpg?ts=1701418623170"
                  );
                }}
                src="https://static.zara.net/photos///2024/V/0/1/p/2110/775/800/2/w/850/2110775800_6_1_1.jpg?ts=1701418623170"
              />

              <img
                className={`length-3 ${
                  selectCustom === "image3" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image3");
                  handleClick(
                    "https://static.zara.net/photos///2023/I/0/1/p/7649/187/800/2/w/850/7649187800_6_1_1.jpg?ts=1693931380345"
                  );
                }}
                src="https://static.zara.net/photos///2023/I/0/1/p/7649/187/800/2/w/850/7649187800_6_1_1.jpg?ts=1693931380345"
              />
            </div>
            <div className="colours">
              <div
                className={`color-1 ${
                  selectCustom === "color1" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("color1");
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2052/142/802/2/w/850/2052142802_6_1_1.jpg?ts=1700651707403"
                  );
                }}
              ></div>
              <div
                className={`color-2 ${
                  selectCustom === "color2" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("color2");
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2052/102/711/2/w/850/2052102711_6_1_1.jpg?ts=1703172088307"
                  );
                }}
              ></div>
              <div
                className={`color-3 ${
                  selectCustom === "color3" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("color3");

                  handleClick(
                    "https://static.zara.net/photos///2023/I/0/1/p/8863/745/800/2/w/850/8863745800_6_1_1.jpg?ts=1697702569369"
                  );
                }}
              ></div>
            </div>
            <div className="lapels">
              <div
                className={`lapel-1 ${
                  selectCustom === "image4" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image4");
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2094/745/800/2/w/850/2094745800_2_1_1.jpg?ts=1701278486022"
                  );
                }}
              ></div>
              <div
                className={`lapel-2 ${
                  selectCustom === "image5" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image5");
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2094/886/806/23/w/850/2094886806_2_9_1.jpg?ts=1702644316625"
                  );
                }}
              ></div>
            </div>
            <div className="buttons">
              <div
                className={`button-1 ${
                  selectCustom === "image6" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image6");
                  handleClick(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460027/ZARA/Screenshot_2024-01-05_at_13.01.45_hp94a5.png"
                  );
                }}
              ></div>
              <div
                className={`button-2 ${
                  selectCustom === "image7" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image7");
                  handleClick(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460026/ZARA/Screenshot_2024-01-05_at_13.02.50_ayxf4c.png"
                  );
                }}
              ></div>
              <div
                className={`button-3 ${
                  selectCustom === "image8" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image8");
                  handleClick(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460025/ZARA/Screenshot_2024-01-05_at_13.05.36_kshhst.png"
                  );
                }}
              ></div>
            </div>
            <div className="shapes">
              <div
                className={`shape-1 ${
                  selectCustom === "image9" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image9");
                  handleClick(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460689/ZARA/2753341800_6_3_1_fzo3cq.jpg"
                  );
                }}
              ></div>
              <div
                className={`shape-2 ${
                  selectCustom === "image10" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image10");
                  handleClick(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460782/ZARA/2753340800_2_2_1_b8bbzz.jpg"
                  );
                }}
              ></div>
              <div
                className={`shape-3 ${
                  selectCustom === "image11" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeBorder("image11");
                  handleClick(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460885/ZARA/Screenshot_2024-01-05_at_13.20.01_iqucnh.png"
                  );
                }}
              ></div>
            </div>
            <div className="button-container">
              <button className="button-option-customize"> CUSTOMIZE</button>
            </div>

            <div className="button-container">
              <button className="button-add"> ADD</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customize;
