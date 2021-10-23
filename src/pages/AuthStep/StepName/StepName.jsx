import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { setName } from "../../../store/userdata";
import { useDispatch, useSelector } from "react-redux";
import style from "./StepName.module.css";

const StepName = ({ onNext }) => {
  const name = useSelector((state) => state.userdata.name);
  const dispatch = useDispatch();
  const [fullname, setFullName] = useState(name);

  async function Continue() {
    if (!fullname) {
      return;
    }
    await dispatch(setName(fullname));
    onNext();
  }

  return (
    <Card title="Enter Your Name ">
      <div className={`${style.name_input}`}>
        <div className={`${style.name}`}>
          <input
            value={fullname}
            placeholder="Enter Your Name"
            onChange={(e) => setFullName(e.target.value)}
            className={`${style.input}`}
          />
        </div>
      </div>
      {/* <Input
        value={fullname}
        placeholder="Enter Name"
        onChange={(e) => setFullName(e.target.value)}
      /> */}

      <Button text="Continue" onClick={Continue} />
    </Card>
  );
};

export default StepName;
