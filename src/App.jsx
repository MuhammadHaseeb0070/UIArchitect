import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Garage from "./components/Garage/Garage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isElements, setisElements] = useState(false);
  const [garage, setGarage] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme == "light") {
      document.documentElement.style.setProperty("--light-color", "#f5f5f5");
      document.documentElement.style.setProperty(
        "--dark-color",
        "#303030" // Example colors for different themes
      );
      document.documentElement.style.setProperty(
        "--light-shadow",
        " 3px 2px 10px rgba(255, 255, 255, 0.305)" // Example colors for different themes
      );
      document.documentElement.style.setProperty(
        "--dark-shadow",
        " 3px 2px 10px rgba(0, 0, 0, 0.305)" // Example colors for different themes
      );
      console.log("light theme detected");
    } else {
      document.documentElement.style.setProperty(
        "--light-color",
        "#303030" // Example colors for different themes
      );
      document.documentElement.style.setProperty(
        "--dark-color",
        "#f5f5f5" // Example colors for different themes
      );
      document.documentElement.style.setProperty(
        "--dark-shadow",
        " 3px 2px 10px rgba(255, 255, 255, 0.305)" // Example colors for different themes
      );
      document.documentElement.style.setProperty(
        "--light-shadow",
        " 3px 2px 10px rgba(0, 0, 0, 0.305)" // Example colors for different themes
      );
    }
  }, [theme]);

  function toggleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function toggleElements() {
    console.log("toggles");
    setisElements(!isElements);
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the default path '/' */}
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar
                theme={theme}
                toggleTheme={toggleTheme}
                isElements={isElements}
                toggleElements={toggleElements}
              ></Navbar>
              <div className="body">
                <Sidebar
                theme={theme}
                  isElements={isElements}
                  setElements={setisElements}
                  setGarage={setGarage}
                ></Sidebar>
                <Hero  theme={theme}/>
              </div>
            </div>
          }
        />

        {/* Route for the '/Garage' path */}
        <Route
          path="/Garage"
          element={
            <div className="App">
              <Navbar
                theme={theme}
                toggleTheme={toggleTheme}
                isElements={isElements}
                toggleElements={toggleElements}
              ></Navbar>
              <div className="body">
                <Sidebar
                theme={theme}
                  garageState={garage}
                  setGarage={setGarage}
                  isElements={isElements}
                  setElements={setisElements}
                ></Sidebar>
                <Garage garageState={garage} setGarage={setGarage} />
              </div>
            </div>
          }
        />
           <Route
          path="/About"
          element={
            <div className="App">
              <Navbar
                theme={theme}
                toggleTheme={toggleTheme}
                isElements={isElements}
                toggleElements={toggleElements}
              ></Navbar>
              <div className="body">
                <Sidebar
                theme={theme}
                  garageState={garage}
                  setGarage={setGarage}
                  isElements={isElements}
                  setElements={setisElements}
                ></Sidebar>
               <About></About>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
