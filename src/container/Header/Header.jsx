import React from "react";
import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <div style={{ marginBottom: "1rem" }}>
          <p className="p__cormorant"> دنبال طعم جدید در تابه</p>
        </div>
        <button type="button" className="custom__button">
          سفارش از منو
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header-img" />
      </div>
    </div>
  );
};

export default Header;
