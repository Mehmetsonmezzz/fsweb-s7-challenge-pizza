import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import FormPages from "./pages/FormPage/FormPages";
import CheckOrder from "./pages/Success/CheckOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/FormPages" component={FormPages} />
        <Route path="/CheckOrder" component={CheckOrder} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
