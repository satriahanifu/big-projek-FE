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
import User from "./pages/admin/User";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// const ProtectedRoute = (routes) => {
//   return (
//     <Route {...routes} />
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop/:id" component={Shop} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="" component={NotFound} /> */}
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/payment" component={Payment} />
        <Route path="/admin/payment/add" component={Payment} />
        <Route path="/admin/payment/edit/:id" component={Payment} />
        <Route path="/admin/products" component={Products} />
        <Route path="/admin/shipping" component={Shipping} />
        <Route path="/admin/user/:id?" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
