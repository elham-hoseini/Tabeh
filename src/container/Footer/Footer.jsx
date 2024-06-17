import React from "react";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="app__footer section__padding app__bg"
      id="login"
      style={{ backgroundColor: "Black" }}
    >
      <div className="app__footer-links">
        <div className="app__footer-links_logo">
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans" dir="ltr">
          2024. All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
