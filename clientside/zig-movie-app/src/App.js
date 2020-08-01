import React from "react";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";

// Import API_KEY into ENV file

function App() {
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" exact component={Home} />
          <Route path="/moviedetails/:id" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
