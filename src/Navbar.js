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


      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="imgg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-typing-on-key-board-laptop-with-cup-of-coffee-on-wooden-table-1530275820.jpg?crop=0.668xw:1.00xh;0.170xw,0&resize=768:*" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="imgg" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





      {/* <img
        className="imgg"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-typing-on-key-board-laptop-with-cup-of-coffee-on-wooden-table-1530275820.jpg?crop=0.668xw:1.00xh;0.170xw,0&resize=768:*"
        alt="badimage"
      ></img> */}
      <div class="card-custom card text-center">
        <div class="card-header">
          <b>
            <span style={{ color: "orange" }}>About</span>
          </b>{" "}
          Patshala:
        </div>
        <div class="card-body">
          <p class="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque
            provident repellendus nihil, non, id libero ipsam nam error
            necessitatibus quasi odit fuga facilis?
          </p>
          <a href="/#" class="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
