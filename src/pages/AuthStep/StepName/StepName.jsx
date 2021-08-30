import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Input from "../../../components/Input/TextInput";
import { setName } from "../../../store/userdata";
import { useDispatch, useSelector } from "react-redux";

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
      <Input
        value={fullname}
        placeholder="Enter Name"
        onChange={(e) => setFullName(e.target.value)}
      />

      <Button text="Continue" onClick={Continue} />
    </Card>
  );
};

export default StepName;
