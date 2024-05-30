import React, { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import logo_light from "../../images/logo-light.png";
import logo_dark from "../../images/logo-dark.png";
import menuLogoDark from "../../images/menulogodark.png";
import menuLogoLight from "../../images/menulogolight.png";

const Navbar = ({ isElements, toggleElements, toggleTheme, theme }) => {
  const [menu, setMenu] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setMenu(false); // Close the menu when clicking outside the component
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  function setIsElements(event) {
    event.stopPropagation();
    toggleElements();
  }

  function setTheme() {
    toggleTheme();
  }

  function toggleMenu() {
    setMenu(!menu);
  }

  useEffect(() => {
    const navList = document.querySelector(".navList");
    if (menu) {
      navList.classList.add("active");
    } else {
      navList.classList.remove("active");
    }
  }, [menu]);

  return (
    <>
      <div className="navbar">
        {theme === "light" ? (
          <img src={logo_dark} alt="" />
        ) : (
          <img src={logo_light} alt="" />
        )}
        <ul className="navList" ref={componentRef}>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" onClick={(event) => setIsElements(event)}>
              Elements
            </Link>
          </li>
          <li>
            <Link className="link" to="/About">
              About
            </Link>
          </li>
        </ul>
        <div className="themeContainer">
          <p>Dark Mode</p>
          <input onChange={setTheme} className="themeButton" type="checkbox" />
        </div>

        {theme === "light" ? (
          <img
            ref={componentRef}
            onClick={toggleMenu}
            className="menuLogo"
            src={menuLogoDark}
            alt=""
          />
        ) : (
          <img
            ref={componentRef}
            onClick={toggleMenu}
            className="menuLogo"
            src={menuLogoLight}
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
