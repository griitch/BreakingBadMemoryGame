import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "./game/Game";
import HomePage from "./HomePage";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/play">
          <Game />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
