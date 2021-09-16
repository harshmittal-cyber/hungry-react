import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../../../actions/order.action";

const Orders = () => {
  const { orders } = useSelector((state) => state.order);
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <div>
        {isAuth ? (
          <>
            {orders.length > 0 ? (
              <>
                {orders.map((order) => {
                  return (
                    <div style={{ marginBottom: 50 }}>
                      {order.orderStatus.map((status, index) => {
                        if (status.isCompleted) {
                          return <div key={index}>{status.type}</div>;
                        }
                      })}
                      {order.items.map((orderitem, index) => {
                        return (
                          <div key={index}>
                            <div>
                              {orderitem.price}&nbsp;
                              <span>{orderitem.productId.name}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </>
            ) : (
              "No Order found"
            )}
          </>
        ) : (
          "Login To see your orders"
        )}
      </div>
    </div>
  );
};

export default Orders;
