import React, { useState } from "react";
// import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import StepPhone from "../AuthStep/StepPhone/StepPhone";
import StepOtp from "../AuthStep/StepOtp/StepOtp";

const steps = {
  1: StepPhone,
  2: StepOtp,
};

const Login = (props) => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const { isAuth } = useSelector((state) => state.auth);
  const { from } = { from: { pathname: "/" } };

  if (isAuth) {
    return <Redirect to={from} />;
  }

  function onNext() {
    setStep(step + 1);
  }

  function onPrev() {
    setStep(step - 1);
  }

  return (
    <div>
      <Step onNext={onNext} onPrev={onPrev} />
    </div>
  );
};

export default Login;
