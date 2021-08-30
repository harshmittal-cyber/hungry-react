import React, { useState } from "react";
// import styles from "./Login.module.css";
import StepPhone from "../AuthStep/StepPhone/StepPhone";
import StepOtp from "../AuthStep/StepOtp/StepOtp";

const steps = {
  1: StepPhone,
  2: StepOtp,
};

const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Login;
