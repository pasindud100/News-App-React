import React from "react";

function Navbar({ setCategory }) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => setCategory("general")}>
            <span className="badge bg-light text-dark fs-4 ">SDP News</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("business")}>
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("health")}>
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("science")}>
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("sport")}>
                  Sport
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
