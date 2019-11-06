import React, { Component } from "react";
import Home from "./components/Home";
import Service from "./components/Services";
import Company from "./components/Company";
import Press from "./components/Press";
import Relations from "./components/Relations";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Service} />
          <Route path="/company" component={Company} />
          <Route path="/press" component={Press} />
          <Route path="/relations" component={Relations} />
        </div>
      </HashRouter>
    );
  }
}

//test

export default App;
