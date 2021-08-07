import { width } from "@material-ui/system";
import React from "react";
import pic1 from "../../assets/img/Google - Original.png";
import "./style.scss";

const Registre = () => {
  return (
    <div className="block__first">
      <div className="container">
        <button className="block__button">
          <img src={pic1} className="google" />
          <span  style={{marginLeft:70}}>
            Sign In Google
          </span>{" "}
        </button>
      </div>
    </div>
  );
};
export default Registre;
