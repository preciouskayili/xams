import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Examination from "./components/Examination";
import Team from "./components/Team";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Create from "./components/Create";
import NotFound from "./components/NotFound";
import Stats from "./components/Stats";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/examination/:id" exact component={Examination} />
          <Route path="/team" exact component={Team} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/create" exact component={Create} />
          <Route path="/stats" exact component={Stats} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
