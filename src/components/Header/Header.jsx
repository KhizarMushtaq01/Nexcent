import React from "react";
import "./Header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const togglecolor = () => {
    setColorChange(!colorChange);
  };
  console.log(colorChange);

  const toggleNav = () => {
    setisOpen(!isOpen);
    setShowSideNav(!showSideNav);
  };
  return (
    <>
      <header>
        <div className="burger-query">
          <div className="logo-2">
            <img className="img-2" src="./public/Nexcent-icon.png" alt="" />
            <span className="nexcent">Nexcent</span>
          </div>
          <div className="burger" onClick={toggleNav}>
            {showSideNav ? (
              <svg className="cross"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#4caf4f"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M38.98242,6.9707c-0.52851,0.01247 -1.03058,0.23367 -1.39648,0.61523l-13.58594,13.58594l-13.58594,-13.58594c-0.37701,-0.38755 -0.89487,-0.60596 -1.43555,-0.60547c-0.81349,0.00101 -1.54534,0.49459 -1.85108,1.24844c-0.30574,0.75385 -0.12447,1.61777 0.4585,2.18515l13.58594,13.58594l-13.58594,13.58594c-0.52248,0.50163 -0.73294,1.24653 -0.55023,1.94741c0.18271,0.70088 0.73006,1.24823 1.43094,1.43094c0.70088,0.18271 1.44578,-0.02775 1.94741,-0.55023l13.58594,-13.58594l13.58594,13.58594c0.50163,0.52248 1.24653,0.73295 1.94742,0.55024c0.70088,-0.18271 1.24823,-0.73006 1.43094,-1.43094c0.18271,-0.70088 -0.02776,-1.44578 -0.55024,-1.94742l-13.58594,-13.58594l13.58594,-13.58594c0.59567,-0.57119 0.77939,-1.44958 0.46256,-2.21161c-0.31683,-0.76204 -1.06915,-1.25125 -1.8942,-1.23175z"></path>
                  </g>
                </g>
              </svg>
            ) : (
              <div>
                {" "}
                <div className="burgerbar"></div>
                <div className="burgerbar"></div>
                <div className="burgerbar"></div>
              </div>
            )}
          </div>
        </div>
        <nav className={`container ${showSideNav ? "active" : ""}`}>
          <div className="main">
            <div className="logo">
              <img img-1 src="./public/Nexcent-icon.png" alt="" />
              <span className="nexcent">Nexcent</span>
            </div>
            <div className="links">
              <ul className="items-container">
                <li>
                  {" "}
                  <NavLink
                    onClick={togglecolor}
                    to={"/Home"}
                    className={` ${colorChange ? "nav-active" : "white-color"}`}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to={"/Service"}
               className={` ${colorChange ? "nav-active" : "white-color"}`}>
                    Service
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to={"/Feature"}
               className={` ${colorChange ? "nav-active" : "white-color"}`}>
                    Feature
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to={"/Product"}
               className={` ${colorChange ? "nav-active" : "white-color"}`}>
                    Product
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to={"/Testimonial"}
               className={` ${colorChange ? "nav-active" : "white-color"}`}>
                    Testimonial
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to={"/FAQ"}
               className={` ${colorChange ? "nav-active" : "white-color"}`}>
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-btns">
              <button className="login">Login</button>
              <button className="signup">Sign up</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
