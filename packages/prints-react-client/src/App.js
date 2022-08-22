import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { ListContainer } from "./pages/list/ListContainer";
import { AboutContainer } from "./pages/about/AboutContainer";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ListContainer} />
      <Route path="/about" component={AboutContainer} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
