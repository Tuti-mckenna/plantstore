import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter as Router } from "react-router-dom";

import { Home } from "./Views/Home/Home";
import { Shop } from "./Components/Shop/Shop";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { CartPage } from "./Views/Cart/CartPage";
import { BuyForm } from "./Views/BuyForm/BuyForm";
import { BuyFinished } from "./Views/BuyForm/BuyFinished";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Shop} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={CartPage} />
          <Route path="/form" component={BuyForm} />
          <Route path="/thanks" component={BuyFinished} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
