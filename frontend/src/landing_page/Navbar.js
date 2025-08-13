import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light border-bottom sticky-top" style={{backgroundColor: "#FFF"}}>
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="logo" style={{width: "20vh"}}/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
            <li class="nav-item p-2">
              <Link class="nav-link" aria-current="page" to="/signup">
                SignUp
              </Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
