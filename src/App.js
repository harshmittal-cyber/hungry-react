import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/ProductsMenu/Menu";
import Enquiry from "./pages/Enquiry/Enquiry";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart/Cart";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/checkout";
import Orders from "./pages/Order/Orders/orders";
import Page404 from "./pages/Page404/Page404";
import Orderdetails from "./pages/Order/orderdetail/Orderdetails";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoading } from "./hooks/loader";
import { getcartItems } from "./actions/cart.action";
import { getAddress } from "./actions/address.action";

function App() {
  const { loading } = useLoading();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    getcartItems();
    getAddress();
  }, [isAuth]);

  return loading ? (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/images/hungrylogo.svg" alt="Hungry" />
    </div>
  ) : (
    <Router basename={window.location.pathname || ""}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/menu" exact component={Menu} />
          <Route path="/enquiry" exact component={Enquiry} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/user/orders" component={Orders} exact />
          <Route path="/order_details" exact component={Orderdetails} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
