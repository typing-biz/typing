import { width } from "@material-ui/system";
import React from "react";
import pic from "../../assets/img/image 3.png";
import pic1 from "../../assets/img/Google - Original.png";
import pic2 from "../../assets/img/Ellipse 2.png";
import pic3 from "../../assets/img/Rectangle 2.png";
import "./style.scss";

export const Registre = () => {
  return (
    <div className="block__first">
    <div className="block__container">
    <img src={pic2} className="block__img1" />
        <img src={pic3} className="block__img2" />
        <button className="block__button">
          <img src={pic1} className="google" />
          <span style={{ marginTop: 28, marginLeft: 70 }}>
            Sign In Google
          </span>{" "}
        </button>
    </div>
      
      </div>
  
  );
};
