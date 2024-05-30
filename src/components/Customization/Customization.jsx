import React, { useEffect, useRef, useState } from "react";
import copyPng from "../../images/copy.png";
import "./customization.css";
import closePng from "../../images/close.png";

const Customization = ({ element, setCustomization }) => {
  const codeExecuted = useRef(false);

  useEffect(() => {
    if (!codeExecuted.current) {
      eval(element.javaCode);
      codeExecuted.current = true;
    }

    // Cleanup the event listener on component unmount
    return () => {
      // Your cleanup logic here if needed
    };
  }, [element.javaCode]);

  function closeCustomization() {
    setCustomization(false);
  }

  function copyCSSCode() {
    navigator.clipboard.writeText(element.cssCode);
  }
  function copyHTMLCode() {
    navigator.clipboard.writeText(element.htmlCode);
  }
  function copyJsCode() {
    navigator.clipboard.writeText(element.javaCode);
  }

  return (
    <div className="customization">
      <img
        className="closeButton"
        onClick={closeCustomization}
        src={closePng}
        alt=""
      />
      <span className="elementDisplayHeading">Element Display</span>
      <div className="part1">
        <div className="elementDisplay">
          {element.html}
          <style>{element.cssCode}</style>
        </div>
        {/* <div className="customizationTools">
          <div className="toolBox">
            <p className="toolBoxName">Size</p>
            <div className="styleInput">
              <label htmlFor="sizeInputX">X</label>
              <input className="sizeInputX inputSlider" type="range" />
            </div>
            <div className="styleInput">
              <label htmlFor="sizeInputY">Y</label>
              <input className="sizeInputY inputSlider" type="range" />
            </div>
          </div>
        </div> */}
      </div>

      <div className="note">
        <p>
          Note: For further testing and to check responsiveness, please copy the
          provided HTML, CSS, and JS code and paste it into the respective
          sections on this{" "}
          <a
            href="https://codepen.io/pen/"
            target="blank"
          >
            CodePen link
          </a>
        </p>
      </div>
  
      <div className="codePart">
        <div className="htmlCode code">
          <header>
            <span>HTML</span>{" "}
            <img onClick={copyHTMLCode} src={copyPng} alt="" />
          </header>

          <p>
            <code>{element.htmlCode}</code>
          </p>
        </div>
        <div className="cssCode code">
          <header>
            <span>CSS</span> <img onClick={copyCSSCode} src={copyPng} alt="" />
          </header>

          <p>
            <code>{element.cssCode}</code>
          </p>
        </div>
        <div className="jsCode code">
          <header>
            <span>JavaScript</span>{" "}
            <img onClick={copyJsCode} src={copyPng} alt="" />
          </header>

          <p>
            <code>{element.javaCode}</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customization;
