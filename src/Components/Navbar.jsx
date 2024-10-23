import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <span className="badge bg-light text-dark fs-4">SDP News</span>
          </a>
          <button
            className="navbar-toggler"
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
                <a className="nav-link">Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Sport</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Entertainment</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
