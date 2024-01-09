import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const { pathname } = useLocation();

  useEffect(() => {
    setSelectedTab(pathname.replace("/", ""));
  }, [pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <div className="d-flex align-items-center">
            <div className="icon-text-container">
              <i className="bi bi-film" />
              <div className="web-name">
                <span className="text-color-light font-monospace">Movie</span>
                <span className="mingle font-monospace">Mingle</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="favorites"
                className={`nav-link ${
                  selectedTab === "favorites" ? "active" : ""
                }`}
              >
                <span className="text-color-light font-monospace">
                  Favorites
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
