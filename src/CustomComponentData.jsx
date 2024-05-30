export const buttonsData = {
  UIA_Button_1: {
    html: (
      <button className="UIA_Button_1" id="UIA_Button_1">
        Click me!
      </button>
    ),
    htmlCode:
      '<button id="UIA_Button_1" class="UIA_Button_1" >Click me!</button>',
    name: "ButtonNew",
    unMountCode: `
    const myButton = document.getElementById("UIA-Button-1");
    myButton.removeEventListener("click", handleClick);`,
    javaCode: `    const myButton = document.getElementById("UIA_Button_1");

    const handleClick = () => {
      alert("Button clicked! JavaScript is working.");
    };

    myButton.addEventListener("click", handleClick);`,
    cssCode: `
   
    
    .UIA_Button_1 {
      width:150px;
      background-color: #3498db;
      color: #ffffff;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
   .UIA_Button_1:hover {
      background-color: #2980b9;
    }
    
   .UIA_Button_1:active {
      background-color: #21618c;
    }
    
    @media (max-width: 600px) {
     .UIA_Button_1 {
        font-size: 14px;
        padding: 8px 16px;
      }
    }
     `,
  },
  UIA_Button_2: {
    html: (
      <button className="UIA_Button_2" id="UIA_Button_2">
        Click me
      </button>
    ),
    htmlCode:
      '<button class="UIA_Button_2" id="UIA_Button_2">Click me</button>',
    name: "ButtonNew",
    unMountCode: `
    const myButton = document.getElementById("UIA_Button_2");
    myButton.removeEventListener("click", handleClick);`,
    javaCode: `   `,
    cssCode: `
    .UIA_Button_2 {
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      color: #ffffff;
      background: linear-gradient(to right, #3498db, #6e45e2);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
      z-index: 1;
    }

    .UIA_Button_2:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #3498db, #6e45e2);
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    .UIA_Button_2:hover:before {
      opacity: 1;
    }

    .UIA_Button_2:hover {
      box-shadow: 0 0 10px rgba(110, 69, 226, 0.8);
      transform: scale(1.05);
    }

    .UIA_Button_2:active {
      background: linear-gradient(to right, #21618c, #6e45e2);
      box-shadow: 0 0 5px rgba(110, 69, 226, 0.8);
      transform: scale(0.95);
    }
     `,
  },
  UIA_Button_3: {
    html: (
      <button className="UIA_Button_3" id="UIA-Button">
        Click Me!
      </button>
    ),
    htmlCode:
      '  <button class="UIA_Button_3" id="UIA_Button_3">Click Me!</button>',
    name: "ButtonNew",
    unMountCode: ``,
    javaCode: `   `,
    cssCode: `
   
    .UIA_Button_3 {
      background: rgb(255, 255, 255);
      border: none;
      border-radius: 20px;
      padding: 5px 10px;
      font-size: 16px;
      cursor: pointer;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.149);
      transition: all 0.2s ease-in-out;
    }
    .UIA_Button_3:hover{
      transform: scale(1.05);
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.388);
    }
    .UIA_Button_3:active{
      transform: scale(0.95);
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.388);
    }
     `,
  },
};

export const navbarsData = {
  UIA_Navbar_1: {
    html: (
      <nav className="UIA_Navbar_1">
        <div className="logo">
          <div className="LogoText">Mark-X</div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div>
      </nav>
    ),
    htmlCode: `
    <nav class="UIA_Navbar_1">
    <div class="logo">
      <div class="LogoText">Mark-X</div>
    </div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div class="hamburger">
      <span class="bar1"></span>
      <span class="bar2"></span>
      <span class="bar3"></span>
    </div>
  </nav>
    `,
    name: "NavbarNew",
    unMountCode: `// Add any cleanup code here`,
    javaCode: `   
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const spans = document.querySelectorAll(".hamburger span");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");

      // Toggle classes or styles for hamburger spans
      spans.forEach((span) => {
        span.classList.toggle("cross"); // Add a class for the cross style
      });
    });
`,
    cssCode: `
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
   
    .UIA_Navbar_1 {
      justify-self:flex:start;
      align-self:flex-start;
      width: 100vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #000000;
      padding: 10px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
        position: relative;
        
    }

    .UIA_Navbar_1 > .logo {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .UIA_Navbar_1 > .logo > .LogoText {
      font-size: 30px;
      color: white;
    }

    .UIA_Navbar_1 > .logo img {
      height: 50px;
    }

    .UIA_Navbar_1 > .nav-links {
      display: flex;
      justify-content: space-evenly;
      width: 80%;
      max-width: 500px;
    }

    .UIA_Navbar_1 > .nav-links li {
      list-style: none;
    }

    .UIA_Navbar_1 > .nav-links a {
      color: #fff;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 18px;
      position: relative;
    }
    .UIA_Navbar_1 > .nav-links a::after {
      content: "";
      width: 0%;
      height: 3px;
      position: absolute;
      bottom: 0%;
      left: 0;
      border: none;
      border-radius: 5px;
      margin-bottom: -4px;
      background-color: aqua;
      left: 50%;
      transform: translate(-50%, 0);
      transition: all 0.3s ease-in-out;
    }
    .UIA_Navbar_1 > .nav-links a:hover::after {
      width: 100%;
      box-shadow: 0px 0px 10px 1px aqua;
    }

    .UIA_Navbar_1 > .nav-links a:hover {
      color: #fff;
      text-shadow: 0px 0px 5px aqua;
    }

    .UIA_Navbar_1 > .hamburger {
      display: none;
    }

    @media (max-width: 768px) {
  
      
      .UIA_Navbar_1 > .nav-links {
        position: absolute;
        opacity:0;
        right: -200px;
        top:58px;
        width: 120px;
        background-color: #333;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
        z-index: -1;
        box-shadow: 0px 0px 1px aqua;
        transition: all 0.3s ease;
      }
      .UIA_Navbar_1 > .logo {
        width: 50%;
      }
      .UIA_Navbar_1 > .logo > .LogoText {
        font-size: 25px;
      }

      .UIA_Navbar_1 > .nav-links li {
        opacity: 0;
        padding: 5px 0;
        transition: all 0.3s ease;
      }

      .UIA_Navbar_1 > .nav-links a {
        color: #fff;
        font-size: 14px;
      }

      .UIA_Navbar_1 > .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 40px;
        margin-right: 30px;
      }

      .UIA_Navbar_1 > .hamburger > span {
        width: 100%;
        height: 4px;
        border-radius: 5px;
        background-color: white;
        transition: all 0.5s ease-in-out;
      }
      .UIA_Navbar_1 > .hamburger > span:first-child {
        margin-bottom: 6px;
      }
      .UIA_Navbar_1 > .hamburger > span:last-child {
        margin-top: 6px;
      }

      .UIA_Navbar_1 > .hamburger > span.cross:last-child {
        transform: rotate(45deg); /* Rotate the top span */
        margin-top: 0px;
      }

      .UIA_Navbar_1 > .hamburger > span.cross:first-child {
        transform: translateY(50%) rotate(-45deg);
        margin-bottom: 0px; /* Rotate the bottom span */
      }

      .UIA_Navbar_1 > .hamburger > span.cross:nth-child(2) {
        display: none; /* Hide the middle span */
      }

      .UIA_Navbar_1 > .nav-active {
        right:0;
        opacity:1;
      }

      .UIA_Navbar_1 > .nav-active li {
        opacity: 1;
      }
    }
    `,
  },
    UIA_Navbar_2: {
      html: (
        <nav className="UIA_Navbar_2">
          <div className="logo">
            <span>Code-Nex Hub</span>
          </div>
          <ul className="UIA_Navbar_2_NavList" id="UIA_Navbar_2_navList">
            <li>
              <a href="" className="link">
                Home
              </a>
            </li>
            <li>
              <a href="" className="link">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="link">
                Workshops
              </a>
            </li>
            <li>
              <a href="" className="link">
                Tech Trends
              </a>
            </li>
            <li>
              <a href="" className="link">
                Contact
              </a>
            </li>
          </ul>
          <div className="hamburger" id="UIA_Navbar_2_hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      ),
      htmlCode: `
      <nav class="UIA_Navbar_2">
      <div class="logo">
          <span>Code-Nex Hub</span>
      </div>
    <ul class="UIA_Navbar_2_NavList" id="UIA_Navbar_2_UIA_Navbar_2_NavList">
      <li><a href="" class="link">Home</a></li>
      <li><a href="" class="link">Projects</a></li>
      <li><a href="" class="link">Workshops</a></li>
      <li><a href="" class="link">Tech Trends</a></li>
      <li><a href="" class="link">Contact</a></li>
    </ul>
    <div class="hamburger" id="UIA_Navbar_2_hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
      `,
      name: "Navbar2",
      unMountCode: `// Add any cleanup code here`,
      javaCode: `
      // Select all elements with the classname "link"
      const linkElements = document.querySelectorAll('.link');
      
      // Iterate over each link element and attach a click event listener
      linkElements.forEach(link => {
        link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default behavior
          // Handle click event for the link if needed
          console.log("Link clicked:", link.textContent);
        });
      });
      
      // Add event listener for hamburger icon
      document.getElementById("UIA_Navbar_2_hamburger").addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior
        document.getElementById("UIA_Navbar_2_hamburger").classList.toggle('UIA_Navbar_2_Hamburger_Active');
        document.getElementById("UIA_Navbar_2_navList").classList.toggle('UIA_Navbar_2_NavList-active');
        console.log("Hamburger toggled");
      });
      `
      
,      
      cssCode: `
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    
  }

  .UIA_Navbar_2 {
    align-self:flex-start;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #C4D6B0;
      position:relative;
  }

  .UIA_Navbar_2>.logo {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .UIA_Navbar_2>.logo>span {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 30px;
      color: #2E382E;
      cursor: pointer;
  }

  .UIA_Navbar_2>.UIA_Navbar_2_NavList {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
  }

  .UIA_Navbar_2>.UIA_Navbar_2_NavList>li {
      padding: 10px 0px;
      margin: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;

  }

  .UIA_Navbar_2>.UIA_Navbar_2_NavList>li>a {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      border: 1px solid #2E382E;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 2px 14px;
      border-radius: 2px;
      text-align: center;
      color: #2E382E;
      text-decoration: none;
      font-size: 19px;
      font-weight: 400;
      transition: all 0.3s ease-in-out;
      z-index: 2 !important;
  }
  .UIA_Navbar_2>.UIA_Navbar_2_NavList>li>a:hover {
  text-shadow:none;
  }

  .UIA_Navbar_2>.UIA_Navbar_2_NavList>li>a::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 100%;
      background-color: #2e382e30;
      left: 0;
      top: 0;
      z-index: -1 !important;
      transition: all 0.2s ease-in-out;
  }

  .UIA_Navbar_2>.UIA_Navbar_2_NavList>li>a:hover::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
  }

  .hamburger {
      display: none;
  }

  @media only screen and (max-width:900px) {
      .UIA_Navbar_2>.logo>span {
          font-size: 25px;
      }

      .UIA_Navbar_2>.UIA_Navbar_2_NavList>li>a {
          font-size: 14px;
          padding: 2px 10px;
      }

      .UIA_Navbar_2>.UIA_Navbar_2_NavList>li {
          padding: 5px 0px;
          margin: 3px 8px;

      }
  }

  @media only screen and (max-width:700px) {
  
    .UIA_Navbar_2>.logo>span {
      font-size: 20px;
  }

  .UIA_Navbar_2>.UIA_Navbar_2_NavList>li>a {
      font-size: 10px;
      padding: 2px 5px;
  }

  .UIA_Navbar_2>.UIA_Navbar_2_NavList>li {
      padding: 0;
      margin: 5px 8px;

  }
      .UIA_Navbar_2>.UIA_Navbar_2_NavList {
        opacity:0;
        height:auto;
        position: absolute;
          background-color: #c4d6b06d;
          width: 50%;
          flex-direction: column;
          right: 0;
          top: 40px;
          border-radius: 5px;
          transform:translateX(110%);
          transition: all 0.3s ease-in-out;
      }
      .UIA_Navbar_2>.hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          width: 30px;
          height: 40px;
          transition: all 0.5s ease-in-out;
      }

      .UIA_Navbar_2>.hamburger>span {
          width: 100%;
          height: 4px;
          background-color: #2e382ec1;
          border-radius: 5px;
          transition: all 0.5s ease-in-out;
      }

      .UIA_Navbar_2_Hamburger_Active {
          transform: rotate(-90deg);
      }


      .UIA_Navbar_2 {
          position: relative;
      }



      .UIA_Navbar_2_NavList-active {
        opacity:1 !important;
          transform:translateX(0%) !important;
      }

      
  }
      `,
    },
  // Add more navbar entries as needed
};
export const cardsData = {
  UIA_Card_1: {
    html: (
      <div className="UIA_Card_1">
        <div className="imageContainer">
          <img src="https://picsum.photos/id/26/300/200" alt="Card_IMAGE" />
        </div>
        <div className="part2">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <button>More</button>
        </div>
      </div>
    ),
    htmlCode: `
    <div class="UIA_Card_1">
    <div class="imageContainer">
      <img src="https://picsum.photos/id/26/300/200" alt="Card_IMAGE" />
    </div>
    <div class="part2">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <button>More</button>
    </div>
  </div>
    `,
    name: "NavbarNew",
    unMountCode: `// Add any cleanup code here`,
    javaCode: `   
  
`,
    cssCode: `
    .UIA_Card_1 {
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: white;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.27);
    }
    .UIA_Card_1 > .imageContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 200px;
      border-radius: 5px;
      overflow: hidden;
    }
    .UIA_Card_1 > .imageContainer > img {
      width: 100%;
      border-radius: 5px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    .UIA_Card_1 > .part2 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 8px;
    }
    .UIA_Card_1 > .part2 > p {
      width: 70%;
      font-size: 14px;
      font-weight: 450;
    }
    .UIA_Card_1 > .part2 > button {
      width: 20%;
      border: none;
      background-color: rgb(70, 200, 33);
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 5px;
      color: white;
      font-weight: 400;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
    }
    .UIA_Card_1 > .part2 > button:hover {
      box-shadow: 0px 4px  5px rgba(0, 0, 0, 0.325);
      margin-bottom: 2px;
    }
    .UIA_Card_1 > .part2 > button:active {
      box-shadow: 0px 0px  0px rgba(0, 0, 0, 0);
      margin-bottom: 0px;
    }
    `,
  },
  UIA_Card_2: {
    html: (
      <div className="UIA_Card_2">
        <h3>Microsoft Copilot</h3>
        <p>An AI companion that helps you write code and content.</p>
        <button>Learn more</button>
      </div>
    ),
    htmlCode: `
    <div class="UIA_Card_2">
    <h3>Microsoft Copilot</h3>
    <p>An AI companion that helps you write code and content.</p>
    <button>Learn more</button>
  </div>
    `,
    name: "NavbarNew",
    unMountCode: `// Add any cleanup code here`,
    javaCode: `   
    let button = document.querySelector(".UIA_Card_2 button");
    button.addEventListener("click", function () {
      alert("You clicked the button!");
    });
`,
    cssCode: `
    .UIA_Card_2 {
      background-color:white;
      width: 300px;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
      font-family: Arial, sans-serif;
      color: #333;
    }

    .UIA_Card_2 h3 {
      font-size: 24px;
      margin: 0;
    }

    .UIA_Card_2 p {
      font-size: 16px;
      margin: 10px 0;
    }

    .UIA_Card_2 button {
      background-color: #0078d4;
      border: none;
      border-radius: 5px;
      color: white;
      padding: 10px 20px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    .UIA_Card_2 button:hover {
      background-color: #065c9d;
      transform: scale(1.05);
    }
    `,
  },
  UIA_Card_3: {
    html: (
      <div className="UIA_Card_3">
        <div className="header">
          <h3>Microsoft Bing</h3>
          <p>A web search engine that helps you find what you need.</p>
        </div>
        <div className="UIA_Footer_1">
          <button>Search now</button>
          <span>Powered by AI</span>
        </div>
      </div>
    ),
    htmlCode: `
    <div class="UIA_Card_3">
    <div class="header">
      <h3>Microsoft Bing</h3>
      <p>A web search engine that helps you find what you need.</p>
    </div>
    <div class="UIA_Footer_1">
      <button>Search now</button>
      <span>Powered by AI</span>
    </div>
  </div>
  
    `,
    name: "NavbarNew",
    unMountCode: `// Add any cleanup code here`,
    javaCode: `   
    // This script adds a click event listener to the button
    let button = document.querySelector(".UIA_Card_3 button");
    button.addEventListener("click", function() {
      window.open("https://www.bing.com");
    });
    
`,
    cssCode: `
    .UIA_Card_3 {
      background-color:white;
      width: 300px;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 10px;
      margin: 20px auto;
      padding: 10px;
      font-family: Arial, sans-serif;
      color: #333;
      display: grid;
      grid-template-rows: 1fr auto;
    }
    
    .UIA_Card_3 .header {
      text-align: center;
    }
    
    .UIA_Card_3 h3 {
      font-size: 24px;
      margin: 0;
    }
    
    .UIA_Card_3 p {
      font-size: 16px;
      margin: 10px 0;
    }
    
    .UIA_Card_3 .UIA_Footer_1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .UIA_Card_3 button {
      background-color: #0078d4;
      border: none;
      border-radius: 5px;
      color: white;
      padding: 10px 20px;
      cursor: pointer;
      transition:all 0.2s ease-in-out
    }
    .UIA_Card_3 button:hover {
      background-color: #0078a4;
      transform:scale(1.05);
    }
    
    .UIA_Card_3 span {
      font-style: italic;
    }
    
    `,
  },
  // Add more navbar entries as needed
};
export const carouselsData = {
  UIA_Carousel_1: {
    html: (
      <div className="UIA_Carousel">
        <div className="slides">
          <img
            src="https://picsum.photos/300/200?random=1"
            alt="Random image 1"
          />
          <img
            src="https://picsum.photos/300/200?random=2"
            alt="Random image 2"
          />
          <img
            src="https://picsum.photos/300/200?random=3"
            alt="Random image 3"
          />
          <img
            src="https://picsum.photos/300/200?random=4"
            alt="Random image 4"
          />
          <img
            src="https://picsum.photos/300/200?random=5"
            alt="Random image 5"
          />
        </div>
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    ),
    htmlCode: `
    <div class="UIA_Carousel">
    <div class="slides">
      <img
        src="https://picsum.photos/300/200?random=1"
        alt="Random image 1"
      />
      <img
        src="https://picsum.photos/300/200?random=2"
        alt="Random image 2"
      />
      <img
        src="https://picsum.photos/300/200?random=3"
        alt="Random image 3"
      />
      <img
        src="https://picsum.photos/300/200?random=4"
        alt="Random image 4"
      />
      <img
        src="https://picsum.photos/300/200?random=5"
        alt="Random image 5"
      />
    </div>
    <div class="dots">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
    `,
    name: "NavbarNew",
    unMountCode: `// Add any cleanup code here`,
    javaCode: `   
    let dots = document.querySelectorAll(".UIA_Carousel .dots .dot");
    let slides = document.querySelector(".UIA_Carousel .slides");
    let index = 0;
    
    dots.forEach(function(dot, i) {
      dot.addEventListener("click", function() {
        index = i;
        slides.style.transform = "translateX(" + (-300 * index) + "px)";
        dots.forEach(function(dot) {
          dot.classList.remove("active");
        });
        dot.classList.add("active");
      });
    });
`,
    cssCode: `
    .UIA_Carousel {
      width: 300px;
      height: 200px;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
    }

    .UIA_Carousel .slides {
      display: flex;
      width: 1500px;
      transition: transform 0.5s ease;
    }

    .UIA_Carousel .slides img {
      width: 300px;
      height: 200px;
      object-fit: cover;
    }

    .UIA_Carousel .dots {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 10px;
      width: 100%;
    }

    .UIA_Carousel .dots .dot {
      height: 10px;
      width: 10px;
      margin: 0 5px;
      background-color: #ccc;
      border-radius: 50%;
      cursor: pointer;
    }

    .UIA_Carousel .dots .dot.active {
      background-color: #0078d4;
    }
    `,
  },
  // Add more navbar entries as needed
};
export const footersData = {
  UIA_Footer_1: {
    html: (
      <footer className="UIA_Footer_1">
        <div className="UIA_Footer_1-content">
          <p>© 2023 JabTV. All rights reserved.</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </footer>
    ),
    htmlCode: `
    <footer class="UIA_Footer_1">
    <div class="UIA_Footer_1-content">
      <p>© 2023 JabTV. All rights reserved.</p>
      <button class="contact-btn">Contact Us</button>
    </div>
  </footer>
    `,
    unMountCode: `// Add any cleanup code here`,
    javaCode: `   
    
  
`,
    cssCode: `
    /*  For making it attached on bottom use fixed property with bottom = 0 . */
    .UIA_Footer_1 {
      background: #111;
      width: 100vw;
      padding-top: 20px;
      color: #fff;
      display: flex;
      align-items:center;
      justify-content: center;
    }
    
    .UIA_Footer_1-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .UIA_Footer_1 p {
      margin: 0;
      font-size: 14px;
    }
    
    .contact-btn {
      margin: 10px 0;
      padding: 8px 20px;
      background: #ff4757;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
    }
    
    @media screen and (max-width: 768px) {
      .UIA_Footer_1-content {
        align-items: center;
      }
    
      .contact-btn {
        padding: 8px 10px;
      }
    }
    `,
  },
};
export const clonesData = {
  UIA_Clones_1: {
    html: (
      <section className="UIA_Clone_Fb">
        <div className="introduction">
          <h1>facebook</h1>
          <p>
            Facebook helps you connect and share <br />
            with the people in your life.
          </p>
        </div>
        <form>
          <input
            type="text"
            name=""
            id=""
            placeholder="Email address or phone number"
            className="inputUsername input"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Password"
            className="inputPaswword input"
          />

          <button className="loginbutton" id="loginbutton" disabled>
            Log in
          </button>
          <a className="forgottenPassword">Forgotten password?</a>
          <hr />
          <button className="createAccount" id="createAccount" disabled>
            Create new account
          </button>
        </form>
      </section>
    ),

    htmlCode: `

    <section class="UIA_Clone_Fb">
            <div class="introduction">
                <h1>facebook</h1>
                <p>Facebook helps you connect and share <br>with the people in your life.</p>
            </div>
            <form action="">
                    <input type="text" name="" id="" placeholder="Email address or phone number" class="inputUsername input">
                    <input type="text" name="" id="" placeholder="Password" class="inputPaswword input">

                    <button class="loginbutton" id="loginbutton">Log in</button>
                    <a class="forgottenPassword">Forgotten password?</a>
                    <hr>
                    <button class="createAccount" id="createAccount">Create new account</button>
            </form>
        </section>
    `,
    unMountCode: `// Add any cleanup code here`,
    javaCode: `   
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.querySelector('.UIA_Clone_Fb form');

      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        // You can add additional logic here if needed
      });
    });
  
`,
    cssCode: `
    /* Remove Disabled form buttons in form to make them work and js to stop prevent default submit*/
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.UIA_Clone_Fb {
    background-color: #f0f2f5;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 50px;
}

.UIA_Clone_Fb > .introduction {
    margin-right: 20px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5px 10px;
}

.UIA_Clone_Fb >.introduction>h1 {
    color: #1877f2;
    font-size: 60px;
    margin-top: -30px;
}

.UIA_Clone_Fb >.introduction>p {
    font-size: 20px;
}

.UIA_Clone_Fb >form {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 350px;
    padding: 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
}

.UIA_Clone_Fb >form>hr {
    width: 100%;
    height: 0.1px;
    margin-bottom: 20px;
    border: none;
    background-color: #dddfe2;
}

.UIA_Clone_Fb >form>.input {
    width: 100%;
    height: 30px;
    padding: 20px 15px;
    margin-bottom: 10px;
    border: 1px solid #dddfe2;
    border-radius: 6px;
    color: #1d2129;
}

.UIA_Clone_Fb > form> input::placeholder {
    color: rgb(176, 176, 176);
    font-weight: 500;
}

.UIA_Clone_Fb >form>.loginbutton {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 6px;
    color: white;
    background-color: #1877f2;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 15px;cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.UIA_Clone_Fb >form > .loginbutton:active {
    transform: scale(0.95);
 }
 .UIA_Clone_Fb >form > .loginbutton:hover {
    background-color: #3385f0;
 }

.UIA_Clone_Fb >form > .forgottenPassword {
    margin-bottom: 20px;
    color: #1877f2;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}


.UIA_Clone_Fb >form>.createAccount {
    width: 60%;
    background-color: #42b72a;
    border: none;
    padding: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.UIA_Clone_Fb >form>.createAccount:active {
    transform: scale(0.95);
}
.UIA_Clone_Fb >form>.createAccount:hover {
    background-color: #38ac20;
}

@media (width < 900px) {
  .UIA_Clone_Fb {
    flex-direction: column;
}

.UIA_Clone_Fb >.introduction {
    align-items: center;
    margin-bottom: 30px;
    margin-right: 0;
}
}
    `,
  },
};

export const extrasData = {
  UIA_QrCode_Generator: {
    html: (
      <div className="UIA_QrCode_Generator ">
        <div className="Heading">QR Code Generator</div>

        <div className="card">
          <div className="search">
            <h3>Enter your text or URL</h3>
            <input
              className="inputValue"
              type="text"
              placeholder="Text or URL"
            />
            {/* <img className="qrCode" src="/images/qrcode.png" alt="Generated QR Code"/> */}
            <button onclick="generateQrCode()">Generate QR Code</button>
          </div>
        </div>
      </div>
    ),
    htmlCode: `
    <!--To make it use it in your pc API connected will not work on Codepen and other platforms-->
    <div class="UIA_QrCode_Generator ">
    <div class="Heading">QR Code Generator</div>
    
    <div class="card">
      <div class="search">
        <h3>Enter your text or URL</h3>
        <input class="inputValue" type="text" placeholder="Text or URL" />
        <!-- <img class="qrCode" src="/images/qrcode.png" alt="Generated QR Code"> -->
        <button onclick="generateQrCode()">Generate QR Code</button>
      </div>
    </div>
    
  </div>
    `,
    unMountCode: `// Add any cleanup code here`,
    javaCode: `   
    //To make it use it in your pc API connected will not work on Codepen and other platforms
    let inputValue = document.querySelector('.inputValue');
    const apilink = "https://api.qrserver.com/v1/create-qr-code/?size= 9x1&data="
    let qrCode = document.querySelector('.qrCode');
    async function generateQrCode(){
        let response = await fetch(apilink+inputValue.value);
       
        if(response.status === 404){
            console.log("not found");
            qrCode.style.display='none';
        }
        else{
            qrCode.style.display='block';
            qrCode.src=apilink+inputValue.value;
        }
    }
`,
    cssCode: `
    
/*To make it use it in your pc API connected will not work on Codepen and other platforms*/
    * {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    box-sizing: border-box;

}

.UIA_QrCode_Generator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding:40px;
}

.UIA_QrCode_Generator>.Heading {
    font-size: 30px;
    color: rgb(50,50,50);
    margin-bottom: 10px;
}

.UIA_QrCode_Generator>.card {
    background-color: white;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 10px;
    padding: 20px 15px;
    width: 80vw;
    max-width: 350px;
}

.UIA_QrCode_Generator>.card >.search {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;

}

.UIA_QrCode_Generator>.card>.search>h3 {
    font-size: 13px;
    width: 70%;
    color: rgb(23, 26, 26);
}

.UIA_QrCode_Generator>.card>.search>input {
    width: 100%;
    height: 35px;
    border: 2px solid rgb(23, 26, 26);
    border-radius: 5px;
    color: rgb(23, 26, 26);
    padding: 5px 10px;
    margin-top: 15px;
}

.UIA_QrCode_Generator>.card>.search>input::placeholder {
    color: rgba(23, 26, 26, 0.636);
}

.UIA_QrCode_Generator>.card>.search>button {
    width: 100%;
    height: 35px;
    color: white;
    background: rgb(33, 188, 235);
    border: none;
    border-radius: 5px;
    margin-top: 30px;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
}
.UIA_QrCode_Generator>.card>.search>button:hover {
  transform:scale(1.02);
  backround:rgb(25,150,200);
}
.UIA_QrCode_Generator>.card>.search>button:active {
  transform:scale(0.98);
}

.UIA_QrCode_Generator>.card>.search.qrCode {
    display: none;
    align-self: center;
    width: 150px;
    height: 150px;
    margin-top: 30px;
}
    `,
  },
  // Add more navbar entries as needed
};
export const textsData = {
  UIA_Text_TypeWriter: {
    html: <div className="UIA_Text_TypeWriter" id="UIA_Text_TypeWriter"></div>,
    htmlCode: `
    <div class="UIA_Text_TypeWriter" id="UIA_Text_TypeWriter"></div>
    `,
    unMountCode: `// Add any cleanup code here`,
    javaCode: `   
    let textArray = [
      "Welcome to UI-Architect.",
      "I Am Muhammad Haseeb.",
      "This is a Text Element.",
      "Much is yet to come.",
    ];
    let index = 0;
    let currentStringIndex = 0;

    function typeString(text) {
      if (index < text.length) {
        // Skip spaces
        if (text[index] === " ") {
          document.getElementById("UIA_Text_TypeWriter").innerHTML +=
            "&nbsp;";
        } else {
          document.getElementById("UIA_Text_TypeWriter").innerText +=
            text[index];
        }

    
        index++;

        setTimeout(function () {
          typeString(text);
        }, 100);
      } else {
        setTimeout(function () {
          clearString(text);
        }, 800);
      }
    }

    function clearString(text) {
      if (index > 0) {
        document.getElementById("UIA_Text_TypeWriter").innerText =
          text.substring(0, --index);
        setTimeout(function () {
          clearString(text);
        }, 100);
      } else {
        setTimeout(function () {
          nextString();
        }, 500);
      }
    }

    function nextString() {
      index = 0;
      setTimeout(function () {
        initializeTypeWriter();
      }, 150);
    }

    function initializeTypeWriter() {
      if (currentStringIndex < textArray.length) {
        typeString(textArray[currentStringIndex]);
        currentStringIndex++;
      } else {
        currentStringIndex = 0;
        initializeTypeWriter();
      }
    }

    initializeTypeWriter();
`,
    cssCode: `
    *{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
  .UIA_Text_TypeWriter{display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      min-height: 50px;
      background-color: rgb(33, 33, 33);
      font-size: 30px;font-family: monospace;
      color: rgb(230, 230, 230);
  }
    `,
  },
  // Add more navbar entries as needed
};
