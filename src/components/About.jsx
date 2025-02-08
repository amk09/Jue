import React from "react";
import resumeFile from "../documents/jue_han.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Jue
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Jue Han,</span> 
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            I am a first-year master's student at Brown University, currently majoring in Computer Science with a focus on the Visual Computing track. I completed my honor degree of Bachelor's at Boston University from 2021 to 2024, where I studied Mathematics, Computer Science, and Physics.
            </p>
            <p>
          I have a deep passion for computer vision and computer graphics, with particular interests in Visual Odometry, Image Processing, and 3D Reconstruction. My work spans both academic research and hands-on projects, including Differential Pose Estimation and multi-omics analysis in computational biology.
          </p>
          <p>
          Beyond my technical pursuits, I enjoy watching movies and drawing in my free time, finding inspiration in both visual storytelling and artistic expression. I am always eager to explore new intersections between vision, AI, and creative applications, and I look forward to contributing to innovative projects in this space.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Jue Han
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:amk06june@gmail.com">amk06june@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>21
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Providence,
                  Rhode Island
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
       
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
