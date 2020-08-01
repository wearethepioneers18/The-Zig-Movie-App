import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Navbar() {
  const navStyles = {
    color: "white",
  };

  return (
    <div className="nav">
      <nav className="navbar-dark">
        <Link style={navStyles} to={`/home`}>
          The Zig Movies
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
