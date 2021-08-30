import React, { useState, useEffect } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Input from "../../../components/Input/TextInput";
import { verifyOtp } from "../../../helpers/http/index";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../../store/auth";
import { useHistory } from "react-router-dom";
import { sendOtp } from "../../../helpers/http/index";
import { setOtp } from "../../../store/auth";

const StepOtp = () => {
  const [otp, setotp] = useState("");
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  const [counter, setCounter] = useState(60);
  const history = useHistory();

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  async function submit() {
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      dispatch(setAuth(data));
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  }

  async function resend() {
    try {
      const { data } = await sendOtp({ phone });
      console.log("new data", data);
      dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    } catch (err) {
      console.log("resend", err.message);
    }
  }

  return (
    <Card title="Enter OTP">
      <div>OTP Sent to {phone}</div>
      <Input value={otp} onChange={(e) => setotp(e.target.value)} />
      {otp.length === 6 ? (
        <Button text="VERIFY" onClick={submit} />
      ) : (
        <input
          type="submit"
          value="VERIFY"
          disabled
          className="disable_button"
        />
      )}
      {counter > 10
        ? `Resend OTP in 00:${counter}`
        : `Resend OTP in 00:0${counter}`}
      {counter > 0 ? (
        <button disabled style={{ cursor: "not-allowed" }}>
          Resend OTP
        </button>
      ) : (
        <button onClick={resend}>Resend OTP</button>
      )}
    </Card>
  );
};

export default StepOtp;
