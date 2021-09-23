import React, { useState } from "react";
// import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import StepPhone from "../AuthStep/StepPhone/StepPhone";
import StepOtp from "../AuthStep/StepOtp/StepOtp";
import StepName from "../AuthStep/StepName/StepName";

const steps = {
  1: StepPhone,
  2: StepOtp,
  3: StepName,
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

  function onDoubleStep() {
    setStep(step + 2);
  }

  return (
    <div>
      <Step onNext={onNext} onPrev={onPrev} onDouble={onDoubleStep} />
    </div>
  );
};

export default Login;
