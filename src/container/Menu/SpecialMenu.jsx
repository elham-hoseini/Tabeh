import React from "react";
import { MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  console.log(data);
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_juice flex__center">
          <p className="app__specialMenu-menu_heading">نوشیدنی</p>
          <div className="app__specialMenu-menu_items">
            {data.juice.map((juice, index) => (
              <MenuItem
                title={juice.title}
                key={juice.title + index}
                price={juice.price}
                tags={juice.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="meni__img" />
        </div>

        <div className="app__specialMenu-menu_appetizer flex__center">
          <p className="app__specialMenu-menu_heading">پیش غذا</p>
          <div className="app__specialMenu-menu_items">
            {data.appetizer.map((cocktails, index) => (
              <MenuItem
                title={cocktails.title}
                key={cocktails.title + index}
                price={cocktails.price}
                tags={cocktails.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default SpecialMenu;
