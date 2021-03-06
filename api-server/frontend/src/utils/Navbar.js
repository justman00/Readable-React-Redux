import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="header">
      <nav>
        <div className="iconca">Readable</div>
        <div className="links">
          <Link to="#">Home</Link>
          <Link to="/">Explore</Link>
          <Link to="/form">Add Article</Link>
        </div>
      </nav>
    </header>
  );
}
