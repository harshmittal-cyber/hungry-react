import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Input from "../../../components/Input/TextInput";
import { setEmail } from "../../../store/userdata";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/auth";
const StepName = ({ onNext }) => {
  const name = useSelector((state) => state.userdata.name);

  const email = useSelector((state) => state.userdata.email);
  const dispatch = useDispatch();
  const [useremail, setUserEmail] = useState(email);

  async function submit() {
    if (!useremail) {
      return;
    }
    await dispatch(setEmail(useremail));
  }
  async function Continue() {
    try {
      if (email) {
        // const { data } = await activate({ name, email });

        if (data.auth) {
          dispatch(setAuth(data));
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Card title="Enter your  Email ">
      <Input
        value={useremail}
        placeholder="Enter Email"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={submit}>Verify</button>
      <Button text="Continue" onClick={Continue} />
    </Card>
  );
};

export default StepName;