import React, { Component } from "react";
import "../jumbo.css";

export default class Jumbotron extends Component {
  render() {
    return (
      <header>
        <div className="jumbotron">
          <h1 className="display-4">The Zig Movies</h1>
          <p className="lead">Welcome to the world of movies and tv shows!</p>
          <hr className="my-4" />
        </div>
      </header>
    );
  }
}
