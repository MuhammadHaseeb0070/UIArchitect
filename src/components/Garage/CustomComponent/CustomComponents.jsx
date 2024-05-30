import React, { useState, useRef, useEffect } from 'react';


const CustomComponents = ({ element}) => {
 
  return(
    <>
    {element.html}
    <style>{element.cssCode}</style>
    </>
  );

};


export default CustomComponents;
