import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div
        className="about_container"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <h2>About Me</h2>

        <div className="inner">
          <div className="about_text">
            <div>
              <p>
              My name is Mohamed Amine Garbouz. Even as a child,
               I was fascinated by how websites and applications are created.
               I often wondered how a simple click could trigger so many processes.
                This curiosity sparked my interest in the world of computer science
                and motivated me to pursue this career path.
              </p>
              <p>
                I do this because I love turning ideas
                into <a>reality through code</a>.  I have a deep passion for designing 
                high-quality user interfaces that
                create a &nbsp;<a>dynamic user experience</a>.
              </p>
              <p>
              Over the past year, I’ve focused on learning cutting-edge technologies and honing my skills.
               I’ve developed some projects that you can check out on my{" "}
                <a
                  href="https://github.com/MrGarbouz"
                  rel="amine garbouz github"
                  target="_blank"
                >
                  Github
                </a>{" "}
                page.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <ul className="skill-list">
              <li>JavaScript </li>
              <li>HTML & CSS</li>
              <li>React</li>
              <li>Sql & NoSql</li>
              <li>php</li>
              <li>Laravel</li>
              <li>java ee</li>
              <li>WordPress</li>
            </ul>
          </div>

          <div className="about_pic">
            <div className="wrapper">
              <img src="/image/office_13.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
