import React from "react";
import "./about.css";
import About_Logo from "../../images/about-me.png";
import inspiration_Logo from "../../images/inspiration.png";
import solution_Logo from "../../images/solution.png";
import empowering_Logo from "../../images/empowering.png";
import how_Logo from "../../images/how-to.png";

const About = () => {
  return (
    <div className="about">
      <section>
        <img className="left_image" src={About_Logo} alt="" />
        <div className="description">
          <h3>About Me</h3>
          <p>
            Greetings, I am Muhammad Haseeb, an enthusiastic student web
            developer currently dedicated to pursuing a Bachelor's degree in
            Computer Science in Pakistan. My fulfillment lies in the creation of
            purposeful and effective web solutions. The trajectory of my journey
            in the realm of web development has culminated in the conception of
            this website.
            </p>
        </div>
      </section>
      <section>
        <div className="description">
          <h3>The Inspiration</h3>
          <p>
            The inspiration behind this project came from a desire to simplify
            the web development process. Recognizing that many developers prefer
            to avoid the complexities of frameworks like Bootstrap, I envisioned
            a platform where individuals could effortlessly discover and
            implement their favorite web components without the overhead.
          </p>
        </div>
        <img className="right_image" src={inspiration_Logo} alt="" />
      </section>
      <section>
        <img className="left_image" src={solution_Logo} alt="" />
        <div className="description">
          <h3>Your One-Stop Solution</h3>
          <p>
            Welcome to this platform designed with simplicity in mind. Whether
            you're a seasoned developer or just starting your journey, here
            you'll find a collection of carefully curated web components. No
            need to deal with excessive frameworks or unnecessary complications
            — just browse, select your preferred component, and seamlessly
            integrate it into your project.
          </p>
        </div>
      </section>
      <section>
        <div className="description">
          <h3>Empowering the Developer Community</h3>
          <p>
            As a solo creator, my goal is to empower the developer community by
            providing easy access to valuable resources. This website is not
            just a collection of components; it's a testament to the idea that
            web development should be accessible to all, regardless of the tools
            they choose to use.
          </p>
        </div>
        <img className="right_image" src={empowering_Logo} alt="" />
      </section>
      <section>
        <img className="left_image" src={how_Logo} alt="" />
        <div className="description">
          <h3>How to Use This Website</h3>
          <p>
            Navigate through the user-friendly interface, explore the variety of
            components available, and simply copy and paste the provided HTML,
            CSS, and JavaScript code into your project. Effortless integration,
            minimal overhead.
          </p>
        </div>
      </section>

      <div className="final_section">
        <p>
          Thank you for being a part of this journey. I hope this platform
          enhances your web development experience and contributes to the growth
          of our shared community.
        </p>
        <p>Happy coding!</p>
        <p>Muhammad Haseeb</p>
        <span>
          <a href="https://muhammadhaseeb007.netlify.app/" target="blank">
            Portfolio
          </a>{" "}
          |{" "}
          <a
            target="blank"
            href="https://www.linkedin.com/in/muhammad-haseeb-b4544a257"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </div>
  );
};

export default About;
