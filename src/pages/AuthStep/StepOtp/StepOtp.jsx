import React, { useState, useEffect } from "react";
import Card from "../../../components/Card/Card";
import { verifyOtp } from "../../../helpers/http/index";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../../store/auth";
import { useHistory } from "react-router-dom";
import { sendOtp } from "../../../helpers/http/index";
import { setOtp } from "../../../store/auth";
import style from "./StepOtp.module.css";

const StepOtp = ({ onPrev }) => {
  const [otp1, setotp] = useState(new Array(6).fill(""));
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  const [counter, setCounter] = useState(60);
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  async function submit() {
    try {
      let otp = parseInt(otp1.join(""));
      if (otp.toString().length === 6) {
        const { data } = await verifyOtp({ otp, phone, hash });
        dispatch(setAuth(data));
        history.goBack();
      } else {
        setError("Please Enter 6 digits OTP");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setotp([...otp1.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
    if (element.value.length === 0) {
      if (element.previousElementSibling) {
        element.previousElementSibling.focus();
      } else {
        element.focus();
      }
    }
  };

  async function resend() {
    try {
      const { data } = await sendOtp({ phone });
      console.log(data);
      setCounter(60);
      dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    } catch (err) {
      console.log("resend", err.message);
    }
  }

  function goback() {
    onPrev();
  }

  return (
    <Card title="Enter OTP">
      <div
        style={{
          marginBottom: "1.5px",
          marginTop: "-10px",
          letterSpacing: "1px",
        }}
      >
        OTP Sent to {phone}
      </div>
      <div className={`${style.userInput}`}>
        {otp1.map((data, index) => {
          return (
            <input
              type="text"
              className={`${style.otp_input}`}
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
            />
          );
        })}
      </div>
      <button
        text="VERIFY"
        onClick={submit}
        className={`${style.button} root_button`}
      >
        Verify
      </button>
      {error ? (
        <p style={{ color: "red", fontSize: "12px", marginTop: "10px" }}>
          {error}
        </p>
      ) : (
        ""
      )}

      <p className={`${style.resend}`}>
        {counter > 0
          ? counter > 9
            ? `Resend OTP in 00:${counter} `
            : `Resend OTP in 00:0${counter} `
          : `Didn't receive the otp?`}
        {counter > 0 ? (
          ""
        ) : (
          <span className={`${style.resend_button}`} onClick={resend}>
            Resend OTP
          </span>
        )}
      </p>
      <div
        className="flex items-center justify-center bg-gray-100 px-2 py-1.5 "
        style={{ borderRadius: "42px", cursor: "pointer" }}
        onClick={goback}
      >
        <img
          src="./images/leftarrow.svg"
          alt="go back"
          style={{ width: "11px" }}
        />

        <button
          style={{ fontSize: "14px", marginLeft: "5px" }}
          className="text-gray-700"
        >
          Go back
        </button>
      </div>
    </Card>
  );
};

export default StepOtp;
