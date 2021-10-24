import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./Header.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions";
import logo from "../../assets/img/Union.png";

function Header() {
  const user = useSelector((state) => state.authReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <Link className="link" to="/">
          <div className="header__logo">
            {" "}
            <img src={logo} style={{ borderRadius: "0%" }} />
            <strong>Tez</strong>Ter
          </div>
        </Link>

        <nav>
          <Link to="/testing">Тестирование</Link>
          <Link to="/rating">Рейтинг</Link>
          <div className="header__block__profile">
            <img
              src={user.thumbnail || ""}
              onClick={() => history.push("/profile")}
            />
            <div className="header__block__profile__uName">
              {user.fullName || "user"}
              <ul className="main__menu">
                <li className="list-item">
                  <a href="#" className="widget item--js">
                    <i className="ion ion-ios-partly-sunny-outline"></i>
                  </a>
                  <ul className="drop-menu menu-4">
                    <li
                      className="drop-item"
                      onClick={() => history.push("profile")}
                    >
                      <a href="#" className="item--1 clip">
                        {user.fullName.split(" ")[0]}
                      </a>
                    </li>
                    <li className="drop-item">
                      <Link to="/aboutUs" className="item--2 ">
                    
                        О нас
                   
                      </Link>
                      
                    </li>
                    <li
                      className="drop-item"
                      onClick={() => dispatch(logOut())}
                    >
                      <a className="item--3">Выйти</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
