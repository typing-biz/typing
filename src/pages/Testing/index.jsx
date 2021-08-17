import React, { useState } from "react";
import { useEffect } from "react";
import CachedIcon from "@material-ui/icons/Cached";
import Modal from "../../components/Modal";
import Numbers from "../../components/Numbers/Numbers";
import { useSelector, useDispatch } from "react-redux";
import {
  getTextRequest,
  sendTestingRequest,
} from "../../store/actions";
import ModalResult from "../../components/ModalResult";
import "./style.scss";

function Testing() {
  const fetchedText = useSelector((state) => state.authReducer.text);
  const Textid = useSelector((state) => state.authReducer.id);

  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [wrongStep, setWrongStep] = useState(true);
  const [wrongStepCount, setWrongStepCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [timer, setTimer] = useState();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdown, setCountdown] = useState(6);
  const [disabled, setDisabled] = useState(true);
  const [speed, setSpeed] = useState(0);
  const [allSeconds, setAllSeconds] = useState();



  let textArray = fetchedText ? fetchedText.split("") : [];


  useEffect(() => {
    localStorage.setItem("params", JSON.stringify({ speed, accuracy, Textid }));
  }, [finish]);

  useEffect(() => {
    dispatch(getTextRequest());
  }, []);

  useEffect(() => {
    if (start) {
      if (seconds === 0) {
        setSeconds(seconds + 1);
      } else if (seconds === 59) {
        setTimeout(() => {
          setSeconds(0);
          setMinutes(minutes + 1);
        }, 1000);
      } else {
        setTimer(
          setTimeout(() => {
            setSeconds(seconds + 1);
          }, 1000)
        );
      }
    }
    setAllSeconds(minutes * 60 + seconds);
    setSpeed(Math.round(textArray.length / (allSeconds / 60)));
  }, [seconds]);

  useEffect(() => {
    if (countdown > 0 && countdown < 6) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setDisabled(false);
      setStart(true);
      setSeconds(1);
    }
  }, [countdown]);

  function checkKeyHandler(e) {
    if (textArray[index] === e.key) {
      setWrongStep(true);
      setIndex(index + 1);
    } else {
      setWrongStepCount(wrongStepCount + 1);
      setWrongStep(false);
      setAccuracy(accuracy - 0.3);
    }
    if (index + 1 === textArray.length) {
      clearTimeout(timer);
      setFinish(true);
      dispatch(sendTestingRequest({ speed, accuracy, Textid }));
    }
  }

  const checkRefresh = () => {
    clearTimeout(timer);
    setStart(false)
    setAccuracy(0);
    setSpeed(0);
    setMinutes(0);
    setSeconds(0);
    setCountdown(6);
    setIndex(0);

  };

  return (
    <div className="testin-block">
      {countdown === 6 && <Modal onClick={() => setCountdown(5)} />}
      <div className="container">
        <div className="testing__main">
          <div className="testing-block__body">
            {textArray.map((el, id) => {
              return (
                <span
                  style={{
                    background:
                      id === index
                        ? wrongStep
                          ? '#90EE90'
                          : "#F08080"
                        : "white" && id < index
                        ? "#ffff7a"
                        : "white",
                      
                  }}
                  key={id}
                >
                  {el}
                </span>
              );
            })}
            <div className="refresh-block">
              {countdown > 0 && countdown < 6 && <Numbers>{countdown}</Numbers>}

              <div
                onClick={() => checkRefresh()}
                style={{
                  width: 30,
                  height: 30,
                  cursor: "pointer",
                  position: "absolute",
                  top:-50,
                 
                }}
                className="refresh_btn"
              >
                <CachedIcon />
              </div>
            </div>
          </div>
          <textarea
            className="testing-block__area"
            cols="50"
            rows="10"
            onKeyPress={(event) => checkKeyHandler(event)}
            autoFocus={!disabled}
            disabled={disabled}
          ></textarea>
          {finish && (
            <ModalResult
              speed={speed}
              accuracy={accuracy === 100 ? 100 : accuracy.toFixed(1)}
            
            />
          )}

          <h1>{minutes}:</h1>
          <h1>{seconds}</h1>
        </div>
      </div>
    </div>
  );
}

export default Testing;
