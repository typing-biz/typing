import React from "react";
import { useSelector ,useDispatch } from "react-redux";
 import {useEffect }from 'react'
import pic1 from "../../assets/img/skorost.png";
import pic2 from "../../assets/img/tochnost.png";
import "./Rating.scss";
import { getRatingRequest } from "../../store/actions";

function Rating() {
  const user = useSelector((state) => state.authReducer.user)
  const rating = useSelector((state) => state.ratingReducer.rating);
  const dispatch = useDispatch()
  // const speedResponse = ratingResponse.speed;
  // const accuracyResponse = ratingResponse.accuracy;
  // const dateResponse = ratingResponse.date;
  

  console.log(rating)
  useEffect(() => {
    dispatch(getRatingRequest())

  }, []);

  return (
    <div className="rating-block">
      <div  className="container" >
        <div className="rating" >
          <div className="rating-block__one">
            <h1>Рейтинг</h1>
            <p>
              Получи сертификат скорости печати, чтобы войти в рейтинг лучших
              результатов.
            </p>
          </div>
          <div className="rating-block-main">
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
            <div >
            {rating.map((el,id) => {
              return <div  className="rating__rating-block" key={id}> 
              <div style={{display:'flex',alignItems:'center'}}> <img src={el.rating.user.thumbnail} style={{width:50 , height:50}}/>{el.rating.user.fullName}</div>
              <div>{el.rating.speed} </div>
              <div>{el.rating.accuracy}%</div>
              <div>{el.rating.date}</div>
              {/* moment().format('lll');  */}
              </div>
            })}
           
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Rating;
