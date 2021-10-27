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
import { getOrders } from "./actions/order.action";
import { getCategories } from "./actions/menu.action";

function App() {
  const { loading } = useLoading();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    getcartItems();
    getAddress();
    getOrders();
  }, [isAuth]);

  useEffect(() => {
    getCategories();
  }, []);

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
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/menu" component={Menu} />
          <Route path="/enquiry" component={Enquiry} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/user/orders" component={Orders} />
          <Route path="/order_details" component={Orderdetails} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
