import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getOrders } from "../../../actions/order.action";
import Footer from "../../../components/Footer/Footer";
import style from "./orders.module.css";
import moment from "moment";

const Orders = () => {
  const { orders } = useSelector((state) => state.order);
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <div>
        {isAuth ? (
          <>
            {orders.length > 0 ? (
              <>
                <div>
                  <div className={`${style.order}`}>
                    <div className={`${style.order_cnt}`}>
                      <div className={`${style.order_heading_cnt}`}>
                        <div className={`${style.order_heading}`}>
                          All Orders
                        </div>
                      </div>
                      <div className={`${style.order_container}`}>
                        {orders.map((order, index) => {
                          return (
                            <div
                              className={`${style.order_item} ${style.order_width}`}
                              key={index}
                            >
                              <div
                                className={`${style.order_item_cnt} shadow-lg`}
                              >
                                <div className={`${style.order_item_details}`}>
                                  <div className={`${style.order_hd}`}>
                                    <div className={`${style.order_status}`}>
                                      <div
                                        className={`${style.order_status_h}`}
                                      >
                                        {order.orderStatus[3].isCompleted ===
                                        true
                                          ? order.orderStatus[3].type
                                          : order.orderStatus[2].isCompleted ===
                                            true
                                          ? order.orderStatus[2].type
                                          : order.orderStatus[1].isCompleted ===
                                            true
                                          ? order.orderStatus[1].type
                                          : order.orderStatus[0].isCompleted ===
                                            true
                                          ? order.orderStatus[0].type
                                          : ""}
                                      </div>
                                    </div>
                                    <span>
                                      {order.orderStatus[3].isCompleted === true
                                        ? order.orderStatus[3].type
                                        : order.orderStatus[0].type}{" "}
                                      on{" "}
                                      {order.orderStatus[3].isCompleted === true
                                        ? moment(
                                            order.orderStatus[3].date
                                          ).format("MMM Do,h:mm A")
                                        : moment(order.createdAt).format(
                                            "MMM Do,h:mm A"
                                          )}
                                    </span>
                                  </div>

                                  <div className={`${style.item_detail}`}>
                                    <div className={`${style.item_qty}`}>
                                      Order Id :
                                    </div>
                                    &nbsp;
                                    <div className={`${style.item_desc}`}>
                                      {order.order_id}
                                    </div>
                                  </div>
                                </div>
                                <div className={`${style.order_view_details}`}>
                                  <div
                                    className={`${style.order_details_button}`}
                                  >
                                    <Link
                                      to={`/order_details?order_id=${order.order_id}`}
                                    >
                                      <button className={`${style.order_btn}`}>
                                        <span>view detail</span>
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              "No Order found"
            )}
          </>
        ) : (
          "Login To see your orders"
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Orders;
