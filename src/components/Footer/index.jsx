import React from "react";
import instagram from "../../assets/img/insta.png";
import face from "../../assets/img/face.png";
import github from "../../assets/img/github.png";
import telega from "../../assets/img/telega.png";
import whats from "../../assets/img/whats.png";
import visa from "../../assets/img/visa.png";
import "./Footer.scss";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-block" >
        <div className="footer-one">
        <span>TezTer | 2021</span>
        <span className="footer-one-title"><a href="#">tezterkg@gmail.com</a></span>
      </div>

      <div className="footer-two">
        <a href="#">
          <img src={instagram} />
        </a>
        <a href="#">
          {" "}
          <img src={face} />
        </a>
        <a href="#">
          {" "}
          <img src={visa} />
        </a>
        <a href="#">
          {" "}
          <img src={github} />
        </a>
        <a href="#">
          {" "}
          <img src={telega} />
        </a>
        <a href="#">
          {" "}
          <img src={whats} />
        </a>
      </div>

        </div>
     

      </div>
     
    </div>
  );
}

export default Footer;
