import React from "react";
import face from "../../assets/img/face-footer.jpg";
import github from "../../assets/img/git-footer.jpg";
import telega from "../../assets/img/telegram-footer.jpg";
import whats from "../../assets/img/whats-footer.jpg";
import yutub from "../../assets/img/yutub-footer.jpg";
import "./Footer.scss";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-block">
          <div className="footer-one">
            <span>TezTer | 2021</span>
            <span className="footer-one-title">
              <b>tezterkg@gmail.com</b>
            </span>
          </div>

          <div className="footer-two">
            <a href="https://www.facebook.com/">
              {" "}
              <img src={face} />
            </a>
            <a href="https://www.youtube.com/">
              {" "}
              <img src={yutub} />
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
