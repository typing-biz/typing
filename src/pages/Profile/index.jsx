import React from "react";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRatingUserRequest, getRecordUserRequest } from "../../store/actions";
import vector1 from "../../assets//img//Vector.png";
import vector2 from "../../assets//img//Vector-2.png";
import googleIcon from "../../assets/img/goog-icon.jpg";
import gitIcon from "../../assets/img/git-icon.jpg";
import linkIcon from "../../assets/img/link-icon.jpg";
import moment from 'moment'
import  Modal  from "../../components/Modal/index";

export const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);
  const history = useSelector((state) => state.ratingReducer.history);
  const record = useSelector((state) => state.ratingReducer.record)
  
  useEffect(() => {
    dispatch(getRatingUserRequest(token));
  }, []);

  useEffect(() => {
    dispatch(getRecordUserRequest(token))
  }, [])
  return (
    <div className="profile">
      <div className="container">
        { record ? <div className="profile__wrapper">
          <div className="profile__first-block">
            <div className="profile__img-fio">
              <img src={state.thumbnail} className="profile__img" alt="" />
              <h1 className="profile__title-name">{state.fullName}</h1>
            </div>
            <div className="profile__speed-wrapper">
              <img src={vector1} className="profile__icon-1" alt="" />

              <div>
                <h3 className="profile__speed-title">СКОРОСТЬ ПЕЧАТИ</h3>
                <h2 className="profile__speed">{record.speed}</h2>
              </div>
            </div>
            <div className="profile__accuracy-wrapper">
              <img src={vector2} className="profile__icon-1" alt="" />
              <div>
                <h3 className="profile__speed-title">ТОЧНОСТЬ</h3>
                <h2 className="profile__speed">{Math.round(record.accuracy)}%</h2>
              </div>
            </div>

            <div className="profile__socials">
              <img src={googleIcon} alt="" />
              <img src={gitIcon} alt="" />
              <img src={linkIcon} alt="" />
            </div>
          </div>
          <div className="profile__rating-block">
            <h1 className="profile__rating-title">
              Результаты тестов | История
            </h1>
            <div className="profile__rating-des">
              <p>СКОРОСТЬ ПЕЧАТИ, ЗН./МИН</p>
              <p>ТОЧНОСТЬ, %</p>
              <p>ДАТА / ВРЕМЯ</p>
            </div>
            <div style={{ overflowY: 'hidden', height: 423, overflowX: 0 }} >
              {history.map((el, id) => {
                return (
                  <div key={el.accuracy + Math.random()} className="profile__rating-wrapper">
                    <div>
                      <span>{el.speed}</span>
                      <div></div>
                    </div>
                    <div>
                      <span>{Math.round(el.accuracy)} %</span>
                      <div></div>
                    </div>
                    <div className="profile__rating-date">
                      <span>{moment(el.date).format('lll')}</span>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div> : <Modal title='Вы ни разу не печатали!' buttonTitle='Попробовать печатать'/>}
      </div>
    </div>
  );
};
export default Profile;
