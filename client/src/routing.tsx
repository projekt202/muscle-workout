import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MusclePage from './pages/muscle';
import VideoPage from './pages/video';
import { Header } from "./components";

export default function Routing() {
  return (
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/">
          <MusclePage />
        </Route>
        <Route path="/video/:id" component={VideoPage} />
      </Switch>
    </Router>
  );
}
