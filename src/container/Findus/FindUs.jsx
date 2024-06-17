import React from "react";
import { images } from "../../constants";

const FindUs = () => {
  return (
    <div
      className="app__bg app__wrapper section__padding"
      id="contact"
      style={{ backgroundColor: "Black" }}
    >
      <div className="app__wrapper_info" style={{ alignItems: "flex-end" }}>
        <div style={{ marginBottom: "1rem", marginRight: "0px" }}>
          <p className="p__cormorant"> آدرس تابه</p>
        </div>
        <div className="app__wrapper-content">
          <p className="p__opensans">شیراز، معالی آباد، خیابان دوستان</p>
        </div>

        <div style={{ marginBottom: "1rem", marginRight: "0px" }}>
          <p className="p__cormorant"> ساعت کاری</p>
        </div>
        <div className="app__wrapper-content">
          <p className="p__opensans">شنبه - چهارشنبه : ساعت 12 ظهر - 12شب</p>
          <p className="p__opensans">پنج شنبه - جمعه : ساعت 12 ظهر - 2 شب</p>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus__img" />
      </div>
    </div>
  );
};

export default FindUs;
