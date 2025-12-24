import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="Logo" style={{width:"30%"}}/>
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
            
            <form class="d-flex" role="search">
                <ul class="navbar-nav  mb-2me-auto mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Singup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="about">
                  About
                </Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link active" to="products">
                  Product
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="pricing">
                  Pricing
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="support">
                  Support
                </Link>
              </li>
              {/* <FontAwesomeIcon icon={faBars}  /> */}
            </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
