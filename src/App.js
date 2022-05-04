import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Catalogue from "./pages/Catalogue";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Admin from "./pages/admin/Admin";
import Payment from "./pages/admin/Payment";
import Products from "./pages/admin/Products";
import Shipping from "./pages/admin/Shipping";
import Users from "./pages/admin/Users";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop/:id" component={Shop} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="" component={NotFound} /> */}
        <Route path="/admin" component={Admin} />
        <Route path="/payment" component={Payment} />
        <Route path="/products" component={Products} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/users/:id" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
