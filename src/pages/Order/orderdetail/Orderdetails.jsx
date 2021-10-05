import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrder } from "../../../actions/order.action";
import moment from "moment";
import Footer from "../../../components/Footer/Footer";

export default function Orderdetails(props) {
  const { order } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.auth);
  const [loader, setLoader] = useState(true);
  const [step, setStep] = useState(0);

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
  useEffect(() => {
    if (!loader) {
      const b = order.orderStatus[1].isCompleted === true;
      const c = order.orderStatus[2].isCompleted === true;
      const d = order.orderStatus[3].isCompleted === true;
      if (d) setStep(3.5);
      else if (c) setStep(2);
      else if (b) setStep(1);
      else setStep(0);
    }
  }, [loader]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const product = () => {};
  return (
    <>
      {!loader ? (
        <>
          <div className="bg-gray-50 w-screen">
            <main className="max-w-2xl w-screen mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                <div className="flex sm:items-baseline sm:space-x-4">
                  <div className="text-xl  text-gray-900 sm:text-xl">
                    <span className="font-thin">Order</span> #{order.order_id}
                  </div>
                  <a
                    href="#"
                    className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block"
                  >
                    View invoice<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
                <p className="text-sm text-gray-600">
                  Order Placed on{" "}
                  <time
                    dateTime={`${moment(order.createdAt).format("YYYY-MM-DD")}`}
                    className="font-medium text-gray-900"
                  >
                    {moment(order.createdAt).format("MMM Do,YYYY")}
                  </time>
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden"
                >
                  View invoice<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
              <div className="border-t border-gray-200  py-6 px-4 mt-4 sm:px-6  lg:p-8 ">
                <h4 className="sr-only">Status</h4>
                <p className="text-sm font-medium text-gray-900">
                  {order.orderStatus[3].isCompleted ? (
                    <>
                      {" "}
                      {order.orderStatus[3].type} on{" "}
                      <time
                        dateTime={moment(order.orderStatus[3].date).format(
                          "MMM Do"
                        )}
                      >
                        {moment(order.orderStatus[3].date).format(
                          "MMM Do,YYYY"
                        )}
                      </time>
                    </>
                  ) : (
                    <>
                      {" "}
                      {order.orderStatus[0].type} on{" "}
                      <time
                        dateTime={moment(order.orderStatus[0].date).format(
                          "MMM Do"
                        )}
                      >
                        {moment(order.orderStatus[0].date).format(
                          "MMM Do,YYYY"
                        )}
                      </time>
                    </>
                  )}{" "}
                </p>
                <div className="mt-6" aria-hidden="true">
                  <div className="bg-gray-200 rounded-full ">
                    <div
                      className="h-2  rounded-full"
                      style={{
                        width: `calc((${step} * 2 + 1) / 8 * 100%)`,
                        background: "#26a541",
                      }}
                    />
                  </div>
                  <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                    <div className="text-green-600">
                      {order.orderStatus[0].type}
                    </div>
                    <div
                      className={classNames(
                        order.orderStatus[1].isCompleted === true
                          ? "text-green-600"
                          : "",
                        "text-center"
                      )}
                    >
                      {order.orderStatus[1].type}
                    </div>
                    <div
                      className={classNames(
                        order.orderStatus[2].isCompleted === true
                          ? "text-green-600"
                          : "",
                        "text-center"
                      )}
                    >
                      {order.orderStatus[2].type}
                    </div>
                    <div
                      className={classNames(
                        order.orderStatus[3].isCompleted === true
                          ? "text-green-600"
                          : "",
                        "text-right"
                      )}
                    >
                      {order.orderStatus[3].type}
                    </div>
                  </div>
                </div>
              </div>
              {/* Products */}
              <section aria-labelledby="products-heading" className="mt-6">
                <h2 id="products-heading" className="sr-only">
                  Products purchased
                </h2>

                <div className="space-y-8">
                  {order.items.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg"
                    >
                      <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                        <div className="sm:flex lg:col-span-7">
                          <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1  rounded-lg overflow-hidden sm:aspect-none sm:w-72 sm:h-40">
                            <img
                              src={`${process.env.REACT_APP_API_URL}${product.productId.productImage}`}
                              alt={product.imageAlt}
                              className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                            />
                          </div>

                          <div className="mt-6 sm:mt-0 sm:ml-6">
                            <h3 className="text-base font-medium text-gray-900">
                              {product.productId.name}
                            </h3>
                            <p className="mt-2 text-sm font-medium text-gray-900">
                              ₹{product.price}
                            </p>
                            <p className="mt-3 text-sm text-gray-500">
                              {product.productId.description}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:col-span-5">
                          <dl className="grid grid-cols-2 gap-x-6 text-sm">
                            <div>
                              <dt className="font-medium text-gray-900">
                                Delivery address
                              </dt>
                              <dd className="mt-3 text-gray-500">
                                <span className="block font-bold">
                                  {order.address.address.firstname}{" "}
                                  {order.address.address.lastname}
                                </span>
                                <span className="block">
                                  {order.address.address.address}{" "}
                                </span>
                                <span className="block">
                                  {order.address.address.pincode}{" "}
                                  {order.address.address.city}
                                </span>
                                <span className="block">
                                  {order.address.address.state}
                                </span>
                              </dd>
                            </div>
                            <div>
                              <dt className="font-medium text-gray-900">
                                Shipping updates
                              </dt>
                              <dd className="mt-3 text-gray-500 space-y-3">
                                <p className="font-thin">mittal@gmail.com</p>
                                <p>{user.phone}</p>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Billing */}
              <section aria-labelledby="summary-heading" className="mt-16">
                <h2 id="summary-heading" className="sr-only">
                  Billing Summary
                </h2>

                <div className="bg-gray-100 py-6 px-4 sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                  <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                    <div>
                      <dt className="font-medium text-gray-900">
                        Billing address
                      </dt>
                      <dd className="mt-3 text-gray-500">
                        <span className="block">
                          {order.address.address.firstname}&nbsp;
                          {order.address.address.lastname}
                        </span>
                        <span className="block">
                          {order.address.address.pincode}{" "}
                          {order.address.address.city}
                        </span>
                        <span className="block">
                          {order.address.address.state}
                        </span>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-900">
                        Payment information
                      </dt>
                      {order.paymentType === "cod" ? (
                        <div className="mt-3">Cash On Delivery</div>
                      ) : (
                        <div className="mt-3">
                          <dd className="-ml-4 -mt-4 flex flex-wrap">
                            <div className="ml-4 mt-4 flex-shrink-0">
                              <svg
                                aria-hidden="true"
                                width={36}
                                height={24}
                                viewBox="0 0 36 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-auto"
                              >
                                <rect
                                  width={36}
                                  height={24}
                                  rx={4}
                                  fill="#224DBA"
                                />
                                <path
                                  d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                                  fill="#fff"
                                />
                              </svg>
                              <p className="sr-only">Visa</p>
                            </div>
                            <div className="ml-4 mt-4">
                              <p className="text-gray-900">Ending with 4242</p>
                              <p className="text-gray-600">Expires 02 / 24</p>
                            </div>
                          </dd>
                        </div>
                      )}
                    </div>
                  </dl>

                  <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                    <div className="pb-4 flex items-center justify-between">
                      <dt className="text-gray-600">Subtotal</dt>
                      <dd className="font-medium text-gray-900">
                        ₹{order.totalAmount}
                      </dd>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-gray-600">Shipping</dt>
                      <dd className="font-medium text-gray-900">FREE</dd>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <dt className="font-medium text-gray-900">Order total</dt>
                      <dd className="font-medium text-gray-700">
                        ₹{order.totalAmount}
                      </dd>
                    </div>
                  </dl>
                </div>
              </section>
            </main>
          </div>
          <Footer />
        </>
      ) : (
        ""
      )}
    </>
  );
}
