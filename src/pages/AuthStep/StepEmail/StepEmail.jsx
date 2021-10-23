import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { setEmail } from "../../../store/userdata";
import { useDispatch, useSelector } from "react-redux";
import style from "../StepName/StepName.module.css";

const StepName = ({ onNext, onPrev, onDoublePrev }) => {
  const email = useSelector((state) => state.userdata.email);
  const dispatch = useDispatch();
  const [Email, setemail] = useState(email);

  async function Continue() {
    if (!Email) {
      return;
    }
    await dispatch(setEmail(Email));
    onDoublePrev();
  }

  return (
    <Card title="Enter Your Email ">
      <div className={`${style.name_input}`}>
        <div className={`${style.name}`}>
          <input
            value={Email}
            placeholder="Enter Your Email"
            onChange={(e) => setemail(e.target.value)}
            className={`${style.input}`}
          />
        </div>
      </div>

      <Button text="Continue" onClick={Continue} />
    </Card>
  );
};

export default StepName;
