import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOrder } from "../../../actions/order.action";

const Orderdetails = (props) => {
  const { order } = useSelector((state) => state.order);

  useEffect(() => {
    const payload = {
      orderId: props.location.search.split("=")[1],
    };
    getOrder(payload);
  }, []);

  return (
    <div>
      <div>{order.order_id}</div>
    </div>
  );
};

export default Orderdetails;
