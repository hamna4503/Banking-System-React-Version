import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary bg-green">
          <div className="container-fluid">
            <Link className="navbar-brand text-white green-hover" to="/">
              HLB BANK
            </Link>
            <button
              className="navbar-toggler text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white green-hover"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white green-hover" href="/view">
                    View Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white green-hover"
                    href="/history"
                  >
                    Transfer History
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
