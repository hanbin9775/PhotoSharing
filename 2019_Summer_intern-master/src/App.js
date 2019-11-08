import React, { Component } from "react";
import Home from "./components/Home";
import Company from "./components/Company";
import Press from "./components/Press";
import Relations from "./components/Relations";
import GroupForm from "./components/GroupForm";
import GroupInfoList from "./components/GroupInfoList";
import Folder from "./components/Folder";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";


window.n1=0;
window.k=0;
window.n2=0;
window.k2=0;
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />
          <Route path="/press" component={Press} />
          <Route path="/relations" component={Relations} />
          <Route path="/Folder" component={Folder} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
