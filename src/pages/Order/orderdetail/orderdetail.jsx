import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../../actions/order.action";

const Orderdetail = (props) => {
  useEffect(() => {
    const payload = {
      orderId: props.location.search.split("&")[0].split("=")[1],
    };
    getOrder(payload);
    console.log(props);
    console.log(props.location.search);
  }, []);
  return (
    <div>
      <div>Hi i am your only order</div>
    </div>
  );
};

export default Orderdetail;
