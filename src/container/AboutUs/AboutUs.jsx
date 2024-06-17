import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus  app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__bgwhite">درباره تابه</h1>
          <p className="p__opensans">
            در تابه سعی کردیم که کیفیت و تنوع و تازگی را در کنار هم قرار دهیم و
            طعمی بینظیر را ارایه دهیم
          </p>

          <button type="button" className="custom__button">
            بیشتر بدانید
          </button>
        </div>
        <div className="app__aboutus-content_chips flex__center">
          <img src={images.chips} alt="about_chips" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__bgwhite"> چرا فست فود؟</h1>
          <p className="p__opensans">
            در فست فودها غذای از پیش آماده را در مدت کوتاهی بعد از سفارش به
            مشتری تحویل میدهند
          </p>
          <button type="button" className="custom__button">
            بیشتر بدانید
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
