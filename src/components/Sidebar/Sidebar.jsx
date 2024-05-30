import React from "react";
import { useEffect, useRef } from "react";
import {  useNavigate } from "react-router-dom";
import "./sidebar.css";
import back_dark from "../../images/back-dark-logo.png";
import back_light from "../../images/back-light-logo.png";

const Sidebar = ({ isElements, setElements, setGarage, theme }) => {
  const initialRender = useRef(true);

  const navigate = useNavigate();

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setElements(false); // Close the menu when clicking outside the component
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      console.log("initial render");
      initialRender.current = false;
    } else {
      console.log("not initial render");
      if (isElements) {
        if (
          document.querySelector(".sideBar").classList.contains("slideOutClass")
        ) {
          document.querySelector(".sideBar").classList.remove("slideOutClass");
        }
        document.querySelector(".sideBar").classList.add("slideInClass");
      } else {
        if (
          document.querySelector(".sideBar").classList.contains("slideInClass")
        ) {
          document.querySelector(".sideBar").classList.remove("slideInClass");
        }
        document.querySelector(".sideBar").classList.add("slideOutClass");
      }
    }
  }, [isElements]);

  function toggleElements() {
    setElements();
  }
  function setGarageState(target) {
    setGarage(target);

    navigate("/Garage");
  }

  return (
    <div className="sideBar" ref={sidebarRef}>
      {theme === "light" ? (
     <img
     className="backButton"
     onClick={toggleElements}
     src={back_dark}
     alt=""
   />
      ) : (
        <img
        className="backButton"
        onClick={toggleElements}
        src={back_light}
        alt=""
      />
      )}

     
      <div className="sidebarHeader">
        <h3>UI Architect</h3>
      </div>
      <div className="Elements">
        <div
          onClick={() => setGarageState("Buttons")}
          className="elementOption"
        >
          Buttons
        </div>
        <div onClick={() => setGarageState("Cards")} className="elementOption">
          Cards
        </div>
        <div
          onClick={() => setGarageState("Carousels")}
          className="elementOption"
        >
          Carousel
        </div>
        <div
          onClick={() => setGarageState("Navbars")}
          className="elementOption"
        >
          Navbars
        </div>
        <div onClick={() => setGarageState("Clones")} className="elementOption">
          Clones
        </div>
        <div
          onClick={() => setGarageState("Footers")}
          className="elementOption"
        >
          Footers
        </div>
        <div onClick={() => setGarageState("Texts")} className="elementOption">
          Texts
        </div>
        <div onClick={() => setGarageState("Extras")} className="elementOption">
          Extras
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
