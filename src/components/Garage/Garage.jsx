import React, { useState } from "react";
import { useEffect } from "react";
import "./garage.css";
import Customization from "../Customization/Customization";
import * as allData from "../../CustomComponentData";
import CustomComponent from "./CustomComponent/CustomComponents";

const Garage = ({ garageState, setGarage }) => {
  const [isCustomization, setCustomization] = useState(false);
  const [elementToSend, setElementToSend] = useState(null);

  function sendForCustomization(element) {
    console.log("click detected");
    setElementToSend(element);
    setCustomization(true);
  }
  useEffect(() => {
    makeComponents();
  }, [garageState]);
  
  useEffect(() => {
    const elements = document.querySelectorAll(".element, .element *");

    if (isCustomization) {
      // Disable all elements and their children
      elements.forEach((element) => {
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5"; // Optional: Add a visual indication for disabled state
      });
    } else {
      // Enable all elements and reset styles
      elements.forEach((element) => {
        element.style.pointerEvents = "auto";
        element.style.opacity = "1";
      });
    }
  }, [isCustomization]);

  function bringData() {
    if (garageState == "Buttons") {
      return allData.buttonsData;
    }else if (garageState == "Cards") {
      return allData.cardsData;
    } 
    else if (garageState == "Texts") {
      return allData.textsData;
    } 
    else if (garageState == "Extras") {
      return allData.extrasData;
    } 
    else if (garageState == "Clones") {
      return allData.clonesData;
    } 
    else if (garageState == "Navbars") {
      return allData.navbarsData;
    } 
    else if (garageState == "Footers") {
      return allData.footersData;
    } 
    else if (garageState == "Carousels") {
      return allData.carouselsData;
    } else {
      return null;
    }
  }
  function makeComponents() {
    const data = bringData();
    console.log("data", data);
    if (data != null) {
      return (
        <div className="garage">
          <h3>{garageState}</h3>
          {isCustomization && (
            <Customization
              element={elementToSend}
              setCustomization={setCustomization}
            />
          )}
          <div className="components">
            {Object.keys(data).map((Key) => (
            <div key={Key} className="elementCard">
              <p className="elementName">{`< ${Key} / >`}</p>
              <div
                className="element"
                onClick={() => sendForCustomization(data[Key])}
              >
                {console.log(data[Key].html)}
                <CustomComponent element={data[Key]} />
              </div>
            </div>
            ))}
          </div>
        </div>
      );
    }
    return null; // return null in case data is null
  }

  return (makeComponents())
};

export default Garage;
