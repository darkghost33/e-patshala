import React from "react";
import "./Navbar.css";
import home from "./images/home.png";
import student from "./images/student.png";
import help from "./images/help.png";

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
                <button type="button" className="btn btn-light btn-sm">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                      <img className="img-icon" src={home} alt="badimage"></img>
                    </li>
                    <li>
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/#"
                      >
                        Home
                      </a>
                    </li>
                  </ul>
                </button>
              </li>
              <li className="nav-item mx-2">
                <button type="button" className="btn btn-light btn-sm">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                      <img
                        className="img-icon"
                        src={student}
                        alt="badimage"
                      ></img>
                    </li>
                    <li>
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/#"
                      >
                        Student Area
                      </a>
                    </li>
                  </ul>
                </button>
              </li>
              <li className="nav-item mx-2">
                <button type="button" className="btn btn-light btn-sm">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                      <img className="img-icon" src={help} alt="badimage"></img>
                    </li>
                    <li>
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/#"
                      >
                        Quiz
                      </a>
                    </li>
                  </ul>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-typing-on-key-board-laptop-with-cup-of-coffee-on-wooden-table-1530275820.jpg?crop=0.668xw:1.00xh;0.170xw,0&resize=768:*"
              className="imgg d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              className="imgg d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="card-custom card text-center">
        <div className="card-header">
          <b>
            <span style={{ color: "orange" }}>About</span>
          </b>{" "}
          Patshala:
        </div>
        <div className="card-body">
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cumque
            provident repellendus nihil, non, id libero ipsam nam error
            necessitatibus quasi odit fuga facilis?
          </p>
          <a href="/#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

      <div className="card card2">
        <img
          src="https://i.pinimg.com/originals/2a/64/a0/2a64a0ebe6cf1ee2ac27878f920e46b2.gif"
          className="img3 card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">E-Pathsala : Ebooks</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            commodi unde eaque voluptatem, recusandae modi nam deleniti ullam
            expedita libero minima cumque ipsam. Quasi ducimus odit suscipit
            dignissimos qui doloremque!.
          </p>
          <a href="/#" className="btn btn-primary">
            View or Download Ebooks
          </a>
        </div>
      </div>

      <div className="card card2">
        <img
          src="https://cdn.iste.org/www-root/560x315-Online-Learning-Landing-Page-Main-Image.gif"
          className="img3 card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">E-Pathsala : Online Courses</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            commodi unde eaque voluptatem, recusandae modi nam deleniti ullam
            expedita libero minima cumque ipsam. Quasi ducimus odit suscipit
            dignissimos qui doloremque!.
          </p>
          <a href="/#" className="btn btn-primary">
          View or Download Online Courses
          </a>
        </div>
      </div>

      <div className="card card2">
        <img
          src="https://i.pinimg.com/originals/59/34/6b/59346b4b5c80cc5cf0c483a27dfdcb36.gif"
          className="img3 card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">E-Pathsala : Offline Access</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            commodi unde eaque voluptatem, recusandae modi nam deleniti ullam
            expedita libero minima cumque ipsam. Quasi ducimus odit suscipit
            dignissimos qui doloremque!.
          </p>
          <a href="/#" className="btn btn-primary">
          Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
