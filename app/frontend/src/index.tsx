import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/app.scss";
import { Navbar } from "./components/organisms/Navbar";
import { PostMessage } from "./components/pages/PostMessage";
import { SoundList } from "./components/pages/SoundList";
import { NavLinks } from "./components/organisms/NavLinks";

export function App(): JSX.Element {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/post-message">
          <PostMessage></PostMessage>
        </Route>
        <Route path="/">
          <SoundList></SoundList>
        </Route>
      </Switch>
      <NavLinks></NavLinks>
    </Router>
  );
}

window.onload = () => {
  if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
  }
};
