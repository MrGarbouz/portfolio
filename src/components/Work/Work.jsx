import React from "react";
import "./Work.scss";



const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-github"
    >
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
};

const GithubIconBack = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-github"
    >
      <title>Backend</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
};




const Work = () => {
  return (
    <section className="work scroll-mt-10" id="work">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="700">
          Some Things I’ve Built
        </h2>

        <ul className="inner">
          <li className="work-item" data-aos="fade-up" data-aos-duration="700">
            <div className="project_content">
              <div className="pt-4">
                <p className="project_overline">Featured Project</p>
                <h3 className="project_title">
                  <a href="" target="_blank">
                  ForumFlux
                  </a>
                </h3>
                <div className="project_desc">
                  <p>
                  ForumFlux is a modern web application designed to facilitate communication and collaboration
                   between students and educators through an intuitive interface that offers discussion forums,
                    real-time private messaging, resource sharing capabilities, and personalized user profiles
                    <br />
                    all built with React, TypeScript, and Tailwind CSS to create a responsive experience that seamlessly
                     connects educational communities across desktop and mobile devices
                    <br />
                    bridging the gap between traditional classroom learning and digital collaboration.
                   
                 </p>
                </div>
                <ul className="project_techs">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind</li>
                  
                </ul>
                <div className="project_links">
                  <a
                    href="https://github.com/MrGarbouz/ForumFlex"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="project_image">
              <a href="" target="_blank">
                <div className="img">
                  <img src="/image/ForumFlex.png" alt="" />
                </div>
              </a>
            </div>
          </li>

          <li className="work-item" data-aos="fade-up" data-aos-duration="700">
            <div className="project_content">
              <div>
                <p className="project_overline">Featured Project</p>
                <h3 className="project_title">
                  <a href="" target="_blank">
Freelancer & Company Registration Form for IT Projects & Talent.
                  </a>
                </h3>
                <div className="project_desc">
                  <p>
                  focuses on creating a static web page containing a registration form for freelance developers and companies seeking IT projects
                   or talent. It includes three key tasks: structuring HTML for mandatory fields (marked with an asterisk),
                    implementing JavaScript to dynamically add skills using dropdown menus and an "Add" button, and validating
                     the form to display all submitted data in a dialog box. Mandatory fields cover profile title, country/city, phone,
                      availability, rate, and skills, with interactive elements to manage user inputs and ensure proper data collection.
                  </p>
                </div>
                <ul className="project_techs">
                  <li>html</li>
                  <li>JavaScript</li>
                  <li>css</li>
                  
                </ul>
                <div className="project_links">
                  <a
                    href="https://github.com/MrGarbouz/Freelancer---Company-Registration"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                 
                </div>
              </div>
            </div>
            <div className="project_image">
              <a href="" target="_blank">
                <div className="img">
                  <img src="/image/freelancer.png" alt="" />
                </div>
              </a>
            </div>
          </li>

          <li className="work-item" data-aos="fade-up" data-aos-duration="700">
            <div className="project_content">
              <div>
                <p className="project_overline">Featured Project</p>
                <h3 className="project_title">
                  <a href="" target="_blank">
                    Tic-tac-toe Game
                  </a>
                </h3>
                <div className="project_desc">
                  <p>
                    Player-1 starts playing the game and both the players make
                    their moves in consecutive turns. The player who makes a
                    straight 3-block chain wins the game.
                  </p>
                </div>
                <ul className="project_techs">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
                <div className="project_links">
                  <a
                    href="https://github.com/MrGarbouz/web_game"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                  
                    
                 
                </div>
              </div>
            </div>
            <div className="project_image">
              <a href="" target="_blank">
                <div className="img">
                  <img src="/image/xo.png" alt="" />
                </div>
              </a>
            </div>
          </li>

         

          
        </ul>
      </div>
    </section>
  );
};

export default Work;
