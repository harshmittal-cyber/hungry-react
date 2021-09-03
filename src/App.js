import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/ProductsMenu/Menu";
import Enquiry from "./pages/Enquiry/Enquiry";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/checkout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoading } from "./hooks/loader";
import { getcartItems } from "./actions/cart.action";

function App() {
  const { loading } = useLoading();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    getcartItems();
  }, [isAuth]);

  return loading ? (
    <div className="absolute top-52 left-52">loading...</div>
  ) : (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/enquiry">
            <Enquiry />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
