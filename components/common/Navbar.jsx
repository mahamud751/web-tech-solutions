import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-body-tertiary"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div className="container p-lg-4">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img src="/assets/logo.png" alt="" style={{ width: "120px" }} />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
              <li className="nav-item">
                <Link
                  href={"/"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-lg-3">
                <Link className="nav-link" href={"/about"}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/service"}>
                  Our Services
                </Link>
              </li>
              <li className="nav-item ps-lg-3">
                <Link className="nav-link" href={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
