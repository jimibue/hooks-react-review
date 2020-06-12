import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./useState/Counter";
import EffectCounter from "./useEffect/Counter";
import Posts from "./post/Posts";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Toggler from "./useState/Toggler";

function App() {
  return (
    <div style={{ background: "#f3f3fc", minHeight: "100vh" }}>
      <NavBar />
      <div style={{ margin: "10px 40px" }}>
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route exact path="/effectCounter" component={EffectCounter} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/toggler" component={Toggler} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
