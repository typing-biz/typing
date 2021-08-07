import { width } from "@material-ui/system";
import React from "react";
import pic1 from "../../assets/img/Google - Original.png";
import pic2 from "../../assets/img/Rectangle 27.png";
import pic3 from '../../assets/img/Group 22.png'
import "./style.scss";

const Registre = () => {
  return (
    <div className="block">
      <div className="container">
        <div className="block__first" >
          <div className="block__first__main"   >
            <div className="block__first__one" style={{display:'flex' ,justifyContent:'space-between'}}>
              <h1 className="block__first__one__title">TezTer</h1>
              <div>burger</div>
            </div>
            <div className="block__first__two" >
              <h1 className="block__first__title" >Научиться печатать вслепую</h1>
              <img src={pic3} style={{position: 'fixed',width: 216.3,height: 148,left:670,top:315}}/>
              <button className="block__button">
                <img src={pic1} className="block__button__google" />
                <span style={{ marginLeft: 70 }}>Sign In Google</span>{" "}
              </button>
            </div>
          </div>
          <img src={pic2} className="block__img" />
        </div>
      </div>
    </div>
  );
};
export default Registre;
