import React, { useState } from "react";
import "./Header.css";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="header">
        <div className="header-container">
          <Link to="/">
            <div className="header-container-text">
              <div>
                <h1 className="header-text-z">Z</h1>
              </div>
              <div>
                <h1 className="header-text-a">A</h1>
              </div>
              <div>
                <h1 className="header-text-r">R</h1>
              </div>
              <div>
                <h1 className="header-text-a-a">A</h1>
              </div>
            </div>
          </Link>
          <div className="shooping-bag-container">
            <div>LOGIN</div>
            <div>HELP</div>
            <Link className="link-style" to="/bag">
              <div>SHOPPING BAG (0)</div>
            </Link>
          </div>
          <div className="search-continer">
            <input className="inputSearch" type="text" placeholder="SEARCH" />
          </div>
          {!showModal && (
            <div className="zara-options">
              <p onClick={handleOpenModal}>WOMAN</p>
              <p>MAN</p>
              <p>KIDS</p>
              <p>BEAUTY</p>
              <p>ZARA PRE-OWNED</p>
            </div>
          )}
        </div>
      </div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </>
  );
}

export default Header;
