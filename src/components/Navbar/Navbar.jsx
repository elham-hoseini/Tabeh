import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img style={{ width: 100 }} src={images.logo} alt="" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">خانه</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">منو</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">شعب</a>
        </li>
        <li className="p__opensans">
          <a href="#about">پیگیری سفارش</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          ثبت نام / ورود
        </a>
        <div />
        <a href="#login" className="p__opensans">
          رزرو میز
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">خانه</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">منو</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">شعب</a>
              </li>
              <li className="p__opensans">
                <a href="#about">پیگیری سفارش</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
