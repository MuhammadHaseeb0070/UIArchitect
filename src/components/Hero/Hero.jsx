import React from 'react';
import './hero.css'
import dark_logo from '../../images/logo-dark.png';
import light_logo from '../../images/logo-light.png';

const Hero = ({theme}) => {
  return (
   <div className="hero">
    <div className="intro">
        <h3>UI Architect</h3>
        <p>Stop coding from scratch. Architect your UI <br /> with ease using our custom built elements</p>
    </div>
    {theme === "light" ? (
       <img src={ dark_logo} alt="" />
        ) : (
          <img src={ light_logo} alt="" />
        )}
    
   </div>
  )
}

export default Hero