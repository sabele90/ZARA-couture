import React from "react";
import "./Couture.css";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";

function Couture() {
  return (
    <>
      <div className="body-couture">
        <div className="row-0">
          <video className="video-logo" muted autoPlay loop>
            <source
              src="https://res.cloudinary.com/dfwcnoezy/video/upload/v1704453693/ZARA/logo_ctzo7p.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="row-1">
          <img
            width="155%"
            className="coat-1"
            src="https://static.zara.net/photos///2024/V/0/1/p/2052/142/802/2/w/850/2052142802_1_1_1.jpg?ts=1700645686074"
          />
          <Link to="/customize">
            <Icon sx={{ color: "white" }} className="icon-1" fontSize="large">
              add_circle
            </Icon>
          </Link>

          <video className="video-1" muted autoPlay loop height="100%">
            <source
              src="https://res.cloudinary.com/dfwcnoezy/video/upload/v1704451705/ZARA/Screen_Recording_2024-01-04_at_13.32.00_hmypx9.mov"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="big-image">
          <img
            width="100%"
            height="100%"
            className="coat-2"
            src="https://static.zara.net/photos///2023/I/0/1/p/8133/724/800/3/w/2880/8133724800_15_1_1.jpg?ts=1701772251427"
          />
          <Icon sx={{ color: "white" }} className="icon-2" fontSize="large">
            add_circle
          </Icon>
        </div>
        <div className="row-2">
          <img
            width="100%"
            className="image-atelier-1"
            src="public/img/image-atelier.jpg"
          />
          <img
            className="image-atelier-2"
            src="https://i.pinimg.com/564x/f1/13/87/f1138785a276415b7a28d46fec055493.jpg"
          />
        </div>
        <div className="row-3">
          <div className="container-suit-1">
            <img
              className="suit-1"
              src="https://static.zara.net/photos///2023/I/T/1/p/0275/334/809/2/w/880/0275334809_1_1_1.jpg?ts=1696238580784"
            />
            <Icon sx={{ color: "white" }} className="icon-3" fontSize="large">
              add_circle
            </Icon>
          </div>

          <img
            className="suit-2"
            src="https://static.zara.net/photos///2023/I/0/1/p/9240/296/800/2/w/880/9240296800_2_1_1.jpg?ts=1700645804368"
          />
          <Icon sx={{ color: "white" }} className="icon-4" fontSize="large">
            add_circle
          </Icon>
        </div>
        <div className="row-4">
          <img
            className="suit-buttons"
            src="https://static.zara.net/photos///2023/I/0/1/p/2753/341/800/2/w/850/2753341800_6_3_1.jpg?ts=1696932965251"
          />
        </div>
      </div>
    </>
  );
}

export default Couture;
