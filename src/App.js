import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import Page404 from "./pages/Page404/Page404";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoading } from "./hooks/loader";
import { getcartItems } from "./actions/cart.action";
import { getAddress } from "./actions/address.action";
import { getOrders } from "./actions/order.action";
import { getCategories } from "./actions/menu.action";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const LazyCheckout = React.lazy(() => import("./pages/Checkout/checkout"));
const LazyMenu = React.lazy(() => import("./pages/ProductsMenu/Menu"));
const LazyEnquiry = React.lazy(() => import("./pages/Enquiry/Enquiry"));
const LazyCart = React.lazy(() => import("./pages/Cart/Cart/Cart"));
const LazyLogin = React.lazy(() => import("./pages/Login/Login"));
const LazyOrders = React.lazy(() => import("./pages/Order/Orders/orders"));
const LazyOrderdetails = React.lazy(() =>
  import("./pages/Order/orderdetail/Orderdetails")
);

// const LazyPage404 = React.lazy(() => import("./pages/Page404/Page404"));

function App() {
  const { loading } = useLoading();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) {
      getcartItems();
      getAddress();
      getOrders();
    }
  }, [isAuth]);

  return loading ? (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={`${process.env.REACT_APP_BASE_URL}/images/hungrylogo.svg`}
          alt="Hungry"
        />
      </div>
    </>
  ) : (
    <Router>
      <div className="App">
        <React.Suspense fallback={<ProgressBar />}>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/menu" exact component={LazyMenu} />
            <Route path="/enquiry" exact component={LazyEnquiry} />
            <Route path="/cart" exact component={LazyCart} />
            <Route path="/login" exact component={LazyLogin} />
            <Route path="/checkout" exact component={LazyCheckout} />
            <Route path="/user/orders" exact component={LazyOrders} />
            <Route path="/order_details" component={LazyOrderdetails} />
            {/* <Route component={LazyPage404} /> */}
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
