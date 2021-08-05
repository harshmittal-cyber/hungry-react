import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
// import Navbar from "./components/Navbar";
import Enquiry from "./pages/Enquiry";
import Giftcard from "./pages/Giftcard";
import Navi from "./components/navi";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Navi />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/enquiry">
            <Enquiry />
          </Route>
          <Route path="/gift-card">
            <Giftcard />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
