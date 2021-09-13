import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getOrders } from "../../../actions/order.action";

const Orders = () => {
  const { orders } = useSelector((state) => state.order);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <div>
        {orders.map((order) => {
          return (
            <>
              hey
              {/* {order.items.map((orderitem) => {
                return (
                  <Link
                    to={`/user/order_details?order_id=${order._id}&item_id=${orderitem._id}`}
                  >
                    <div>
                      <div>
                        {orderitem.price}
                        <br />
                        {orderitem.productId.name}
                      </div>
                    </div>
                  </Link>
                );
              })} */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
