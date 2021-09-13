import React, { useState, useEffect } from "react";
import style from "./Address.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createaddress } from "../../../helpers/http/index";
import { setAddress } from "../../../store/address";
import { getAddress } from "../../../actions/address.action";

const Address = ({ onNext }) => {
  const dispatch = useDispatch();
  const { useraddress } = useSelector((state) => state.Address);
  const addressarray = {
    name: useraddress.name ? useraddress.name : "",
    phone: useraddress.phone ? useraddress.phone : "",
    pincode: useraddress.pincode ? useraddress.pincode : "",
    locality: useraddress.locality ? useraddress.locality : "",
    address: useraddress.address ? useraddress.address : "",
    state: useraddress.state ? useraddress.state : "",
    city: useraddress.city ? useraddress.city : "",
    landmark: useraddress.landmark ? useraddress.landmark : "",
    alternatephone: useraddress.alternatephone
      ? useraddress.alternatephone
      : "",
  };
  const [values, setValues] = useState(addressarray);

  useEffect(() => {
    getAddress();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const payload = {
        address: {
          name: values.name,
          phone: values.phone,
          pincode: values.pincode,
          locality: values.locality,
          address: values.address,
          state: values.state,
          city: values.city,
          landmark: values.landmark,
          alternatephone: values.alternatephone,
        },
      };

      const res = await createaddress({ payload });

      if (res.status === 201) {
        setValues(addressarray);
        const { address } = res.data;
        address.address.id = address._id;
        dispatch(setAddress(address));
        onNext();
      }
    } catch (err) {
      console.log("address error", err);
    }
  };

  return (
    <div className={`${style.content}`}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={`${style.form_input_container}`}>
          <input
            type="text"
            value={values.name}
            name="name"
            placeholder="name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className={`${style.form_input_container}`}>
          <input
            type="text"
            value={values.phone}
            name="phone"
            placeholder="phone"
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </div>
        <div className={`${style.form_input_container}`}>
          <input
            type="text"
            value={values.pincode}
            name="pincode"
            placeholder="pincode"
            onChange={(e) => setValues({ ...values, pincode: e.target.value })}
          />
        </div>
        <div className={`${style.form_input_container}`}>
          <input
            type="text"
            value={values.locality}
            name="locality"
            placeholder="locality"
            onChange={(e) => setValues({ ...values, locality: e.target.value })}
          />
        </div>
        <div className={`${style.form_input_container}`}>
          <textarea
            type="text"
            value={values.address}
            name="address"
            placeholder="address"
            onChange={(e) => setValues({ ...values, address: e.target.value })}
          />
        </div>
        <div className={`${style.form_input_container}`}>
          <input
            type="text"
            value={values.state}
            name="state"
            placeholder="state"
            onChange={(e) => setValues({ ...values, state: e.target.value })}
          />
        </div>
        <div className={`${style.form_input_container}`}>
          <input
            type="text"
            value={values.city}
            name="city"
            placeholder="city"
            onChange={(e) => setValues({ ...values, city: e.target.value })}
          />
        </div>
        <div className={`${style.form_input_container}`}>
          <input
            type="text"
            value={values.landmark}
            name="landmark"
            placeholder="landmark"
            onChange={(e) => setValues({ ...values, landmark: e.target.value })}
          />
        </div>
        <div className={`${style.form_input_container}`}>
          <input
            type="text"
            value={values.alternatephone}
            name="alternatephone"
            placeholder="alternatephone"
            onChange={(e) =>
              setValues({ ...values, alternatephone: e.target.value })
            }
          />
        </div>
        <button className={`root_button`} type="submit">
          Save and Next
        </button>
      </form>
    </div>
  );
};

export default Address;
