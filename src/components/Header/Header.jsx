import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="hero_section">
      <h5 data-aos="fade-up" data-aos-delay="800" data-aos-duration="700">
        Hi, my name is
      </h5>
      <h1 data-aos="fade-up" data-aos-delay="900" data-aos-duration="700">
        Amine.
      </h1>
      <h1 data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">
        I build things for the web.
      </h1>
      <p data-aos="fade-up" data-aos-delay="1100" data-aos-duration="700">
      I’m a student specializing in IT development with a focus on{" "}
        <span>backend</span>  development and creating websites from the ground up.
        Currently, Right now, I’m dedicated to honing my skills, working on projects, and gaining practical experience.{" "}
      </p>
      <div
        className="button"
        data-aos="fade-up"
        data-aos-delay="1200"
        data-aos-duration="700"
      >
        <a href="https://github.com/MrGarbouz" target="_blank">
          <button>Check out my github!</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
