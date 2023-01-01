import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-custom navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand bg" href="/#">
            Patshala: Educational ERP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <button type="button" class="btn btn-light btn-sm">
                  {/* <img
                  className="home"
                  src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                  alt="noimage1"
                /> */}
                  <a className="nav-link active" aria-current="page" href="/#">
                    Home
                  </a>
                </button>
              </li>
              <li className="nav-item mx-2">
                <button type="button" class="btn btn-light btn-sm">
                  {/* <img
                  className="home"
                  src="https://www.clipartmax.com/middle/m2i8i8H7K9N4b1i8_education-icon-education-icon/"
                  alt="noimage2"
                /> */}
                  <a className="nav-link active" href="/#">
                    Student Area
                  </a>
                </button>
              </li>
              <li className="nav-item mx-2">
                <button type="button" class="btn btn-light btn-sm">
                  {/* <img
                  className="home"
                  src="https://www.clipartmax.com/middle/m2i8i8H7K9N4b1i8_education-icon-education-icon/"
                  alt="noimage2"
                /> */}
                  <a className="nav-link active" href="/#">
                    Help
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img className="imgg"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-typing-on-key-board-laptop-with-cup-of-coffee-on-wooden-table-1530275820.jpg?crop=0.668xw:1.00xh;0.170xw,0&resize=768:*"
        
        alt="badimage"
      ></img>
    </>
  );
}

export default Navbar;
