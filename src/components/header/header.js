import React from 'react';
import './header.css';
import { IoCaretDown } from "react-icons/io5";

function header() {
  const showDropdown = () => {
    document.querySelector('.dropdown-content').style.display = 'block';
    document.querySelector('.dropdown-head').style.display = 'block';
    document.querySelector('.dropdown-icon').style.transform = 'rotate(180deg)';
    setTimeout(() => {
      document.querySelector('.dropdown-content').style.height = '160px';
      document.querySelector('.dropdown-head').style.height = '50px';
    })
  }

  const hideDropdown = () => {
    document.querySelector('.dropdown-content').style.display = 'none';
    document.querySelector('.dropdown-head').style.display = 'none';
    document.querySelector('.dropdown-icon').style.transform = 'rotate(0deg)';
    document.querySelector('.dropdown-content').style.height = '0px';
    document.querySelector('.dropdown-head').style.height = '0px';
  }

  return (
    <div className="upper_nav">
      <span className="logo"><a href="/"><img src={require("../../images/LOGO.jpg")} alt="Main Logo" /></a></span>

      <div className="fill">
        <span className="entry"><input type="search" placeholder="Search for products, brands and more" />
          <button className="button">
            <img src={require("../../images/search.png")} alt="Search" />
          </button></span>
      </div>

      <span className="sign"><a href="cart.html">CART</a><span className="items">0</span></span>

      <div id="dropdown" onMouseOver={showDropdown} onMouseOut={hideDropdown}>
        <span className="dropbtn">MORE<IoCaretDown className='dropdown-icon' /></span>
        <span className="dropdown-head"></span>
        <div className="dropdown-content">
          <a href="/">Membership</a>
          <a href="/">Login / Sign In</a>
          <a href="/">Feedback Form</a>
        </div>
      </div>
    </div>
  )
}

export default header