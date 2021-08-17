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
        <div className="footer-block">
          <div className="footer-one">
            <span>TezTer | 2021</span>
            <span className="footer-one-title">
              <a href="#">tezterkg@gmail.com</a>
            </span>
          </div>

          <div className="footer-two">
            <a href="https://www.instagram.com/tezter.kg/?hl=ru">
              <img src={instagram} />
            </a>
            <a href="https://www.facebook.com/">
              {" "}
              <img src={face} />
            </a>
            <a href="https://www.youtube.com/">
              {" "}
              <img src={visa} />
            </a>
            <a href="https://github.com/jasminaisaeva">
              {" "}
              <img src={github} />
            </a>
            <a href="https://webz.telegram.org/">
              {" "}
              <img src={telega} />
            </a>
            <a href="https://www.whatsapp.com/?lang=ru">
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
