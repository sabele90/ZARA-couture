import React, { useState } from "react";
import "./Customize.css";
import { useParams } from "react-router-dom";
function Customize() {
  const { imageId } = useParams();
  const [image, setImage] = useState(
    decodeURIComponent(imageId) ||
      "https://static.zara.net/photos///2024/V/0/1/p/2052/142/802/2/w/850/2052142802_1_1_1.jpg?ts=1700645686074"
  );
  const handleClick = (newImage) => {
    setImage(newImage);
  };
  return (
    <>
      <div className="body-customize">
        <div className="elements">
          <div className="composition"></div>
          <img className="grey-coat" src={image} />

          <div className="customize">
            <h4>WOOL BLEND BELTED COAT</h4>
            <div className="price">99.95 EUR</div>
            <hr className="customize-line" />

            <div className="leghts">
              <img
                className="lenght-1"
                src="https://static.zara.net/photos///2024/V/0/1/p/2146/745/800/2/w/850/2146745800_6_1_1.jpg?ts=1703060648425"
              />

              <img
                className="lenght-2"
                src="https://static.zara.net/photos///2024/V/0/1/p/2110/775/800/2/w/850/2110775800_6_1_1.jpg?ts=1701418623170"
              />
              <img
                className="lenght-3"
                src="https://static.zara.net/photos///2023/I/0/1/p/7649/187/800/2/w/850/7649187800_6_1_1.jpg?ts=1693931380345"
              />
            </div>
            <div className="colours">
              <div
                className="color-1"
                onClick={() =>
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2052/142/802/2/w/850/2052142802_1_1_1.jpg?ts=1700645686074"
                  )
                }
              ></div>
              <div
                className="color-2"
                onClick={() =>
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2052/102/711/17/w/850/2052102711_1_1_1.jpg?ts=1703593995021"
                  )
                }
              ></div>
              <div
                className="color-3"
                onClick={() =>
                  handleClick(
                    "https://static.zara.net/photos///2023/I/0/1/p/8863/745/800/2/w/850/8863745800_6_1_1.jpg?ts=1697702569369"
                  )
                }
              ></div>
            </div>
            <div className="lapels">
              <div
                className="lapel-1"
                onClick={() =>
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2094/745/800/2/w/850/2094745800_2_1_1.jpg?ts=1701278486022"
                  )
                }
              ></div>
              <div
                className="lapel-2"
                onClick={() =>
                  handleClick(
                    "https://static.zara.net/photos///2024/V/0/1/p/2094/886/806/23/w/850/2094886806_2_9_1.jpg?ts=1702644316625"
                  )
                }
              ></div>
            </div>
            <div className="buttons">
              <div className="button-1"></div>
              <div className="button-2"></div>
              <div className="button-3"></div>
            </div>
            <div className="shapes">
              <div className="shape-1"></div>
              <div className="shape-2"></div>
              <div className="shape-3"></div>
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
