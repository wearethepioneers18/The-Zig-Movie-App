import React from "react";
import "../styles/nav.css";

function Navbar() {
  const navStyles = {
    color: "white",
  };

  return (
    <div className="nav">
      <nav className="navbar-dark" style={navStyles}>
        The Zig Movies
      </nav>
    </div>
  );
}

export default Navbar;
