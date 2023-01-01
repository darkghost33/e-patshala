import React from "react";
import "./Header.css";
import img1 from './images/img2.gif'
import img2 from './images/img2.png'

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="logo1"
          src={img2}
          alt="logo1"
        />
      </div>
      <div className="header-right">
        <img src={img1} alt="logo2" />
      </div>
    </div>
  );
}

export default Header;
