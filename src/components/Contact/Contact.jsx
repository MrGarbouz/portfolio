import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container" data-aos="fade-up" data-aos-duration="700">
          <div className="contact_inner">
            <h2 className="numbered_heading">Whats's Next?</h2>
            <h2 className="title">Get In Touch</h2>

            <p>
              My inbox is always open. Whether you have a question or just want
              to say hello, I'll try my best to get back to you! Feel free to
              mail me about any relevant job updates.
            </p>

            <a className="email_link" href="mailto:aminegarbouz01@gmail.com">
              Say Hello
            </a>
          </div>
        </div>
      </section>

      <div className="footer">
        <div>
          <a className="copyright" href="">
            <div className="designer">
              Inspired from Brittany Chiang <br />
              <br />
              Revised by Mohamed Amine Garbouz.
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;

const StarIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-star"
    >
      <title>Star</title>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

const ForkIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-git-branch"
    >
      <title>Git Fork</title>
      <line x1="6" y1="3" x2="6" y2="15"></line>
      <circle cx="18" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
  );
};
