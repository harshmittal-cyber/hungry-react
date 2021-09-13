import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Address from "../CheckoutSteps/Address/Address";
import Payment from "../CheckoutSteps/Payment/Payment";

const steps = {
  1: Address,
  2: Payment,
};

const Checkout = (props) => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const { isAuth } = useSelector((state) => state.auth);
  const { cartTotalItems } = useSelector((state) => state.cart);
  const { from } = { from: { pathname: "/cart" } };
  if (!isAuth) {
    return <Redirect to={from} />;
  }

  if (isAuth && cartTotalItems < 1) {
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

export default Checkout;
