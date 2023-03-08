import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { AppCustomers } from "./pages/AppCustomers";
import { AppProducts } from "./pages/AppProducts";
import "./App.css";
import { LatestPurchaces } from "./pages/LatestPurchaces";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/customers">
            <AppCustomers />
          </Route>
          <Route exact path="/products">
            <AppProducts />
          </Route>
          <Route path="/customers/:id">
            <LatestPurchaces />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
