import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { sendOtp } from "../../../helpers/http/index";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../store/auth";
import style from "./StepPhone.module.css";

const StepPhone = ({ onNext, onDouble }) => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  function keypress(e) {
    const re = /[0-9]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  async function submit() {
    //server request
    const { data } = await sendOtp({ phone });
    // console.log(data);
    if (data.user === null) {
      dispatch(setOtp({ phone: data.phone, hash: data.hash }));
      onDouble();
    } else {
      dispatch(setOtp({ phone: data.phone, hash: data.hash }));
      onNext();
    }
  }

  return (
    <Card title="Enter your Phone Number">
      <div className={`${style.phone_input}`}>
        <div className={`${style.country_code}`}>
          <input
            type="text"
            placeholder="+91"
            readOnly
            data-label="+91"
            className="bg-white"
          />
        </div>
        <div className={`${style.mobile}`}>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength="10"
            onKeyPress={keypress}
          />
        </div>
      </div>
      {phone.length < 10 ? (
        <>
          <input
            type="submit"
            value="SUBMIT"
            disabled
            className="disable_button"
          />
        </>
      ) : (
        <Button text="Submit" onClick={submit} />
      )}
    </Card>
  );
};

export default StepPhone;
