import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MusclePage from './pages/muscle';
import VideoPage from './pages/video';

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MusclePage />
        </Route>
        <Route path="/video/:id" component={VideoPage} />
      </Switch>
    </Router>
  );
}
