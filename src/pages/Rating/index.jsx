import React from "react";
import { useSelector } from "react-redux";
import pic1 from "../../assets/img/skorost.png";
import pic2 from "../../assets/img/tochnost.png";
import "./Rating.scss";

function Rating() {
  const rating = useSelector((state) => state.authReducer.user);

  return (
    <div className="rating-block">
      <div className="rating">
        <div className="container">
          <div className="rating-block__one">
            <h1>Рейтинг</h1>
            <p>
              Получи сертификат скорости печати, чтобы войти в рейтинг лучших
              результатов.
            </p>
          </div>
          <div
            style={{
              borderBottom: "1px solid",
              width: 768,
              borderColor: "#929292",
              marginLeft: 111,
              paddingBottom: 10,
            }}
          >
            <div className="rating-block__two">
              <span className="rating-block__two__title1">
                <img
                  src={pic1}
                  style={{ width: 16, height: 16, marginRight: 10 }}
                />
                СКОРОСТЬ, ЗН./МИН
              </span>
              <span className="rating-block__two__title1">
                {" "}
                <img
                  src={pic2}
                  style={{ width: 16, height: 16, marginRight: 10 }}
                />
                ТОЧНОСТЬ, %
              </span>
            </div>
          </div>
          <div className="rating__rating-block">
            <div> 1 .  Isaeva Jasmina</div>
            <div>600</div>
            <div>96.1%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
