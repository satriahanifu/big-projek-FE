import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Catalogue from "./pages/Catalogue";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop/:id" component={Shop} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/cart" component={Cart} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
