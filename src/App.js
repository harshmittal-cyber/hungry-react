import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/ProductsMenu/Menu";
import Enquiry from "./pages/Enquiry/Enquiry";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import { useLoading } from "./hooks/loader";

function App() {
  const { loading } = useLoading();

  return loading ? (
    <div className="flex  animate-bounce items-center justify-center text-xl">
      loading...
    </div>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
