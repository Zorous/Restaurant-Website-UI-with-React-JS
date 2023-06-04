import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <img
            className="mr-5"
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="maison orientale"
          />
          {/* <span className="logo-style">Maison Orientale</span> */}
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/service" className="nav-item nav-link">
            Service
          </Link>
          <Link to="/menu" className="nav-item nav-link">
            Menu
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
