import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrder } from "../../../actions/order.action";

const Orderdetails = (props) => {
  const { order } = useSelector((state) => state.order);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    async function fetch() {
      try {
        const payload = {
          orderId: props.location.search.split("=")[1],
        };
        await getOrder(payload);
        setLoader(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  return (
    <>
      {!loader ? (
        <>
          {order.items.map((item) => {
            return (
              <div>
                <div>Hi</div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Orderdetails;
