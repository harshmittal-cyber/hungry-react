import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/ProductsMenu/Menu";
import Enquiry from "./pages/Enquiry/Enquiry";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/checkout";
import Orders from "./pages/Order/Orders/orders";
import Orderdetail from "./pages/Order/orderdetail/orderdetail";
import Page404 from "./pages/Page404/Page404";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoading } from "./hooks/loader";
import { getcartItems } from "./actions/cart.action";
import { getAddress } from "./actions/address.action";
import { getOrders } from "./actions/order.action";

function App() {
  const { loading } = useLoading();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    getcartItems();
    getAddress();
  }, [isAuth]);

  return loading ? (
    <div className="absolute top-52 left-52">loading...</div>
  ) : (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/menu" component={Menu} />
          <Route path="/enquiry" component={Enquiry} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/user/orders" component={Orders} />
          <Route path="/user/order_details" component={Orderdetail} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
