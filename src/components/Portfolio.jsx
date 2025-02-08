import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    GRAPHIC: "Graphics",
    VISION: "Vision",
    PHOTOS: "Others",
  };

  const projectsData = [
    {
      title: "Procedural Terrain and Volumetric Clouds",
      projectInfo:[        "A group of C++ and OpenMP-based system for generating customizable terrain and volumetric clouds, utilizing noise generation techniques for realistic detail and incorporating Raymarching to automate dynamic scene rendering with optimized parallel performance.",
      ],
      technologies: "C++, Python, Open-MP",
      // industry: "Computer Graphics",
      date: "Dec 10, 2024",
      url: [{
        name: "github repo URL",
        link: "https://github.com/aman190202/Clouds",
      }],
      client: "Brown University",
      thumbImage: {
        type: "gif",
        source: "images/projects/sunset.gif",
      },
      sliderImages: [
        "images/projects/sunset.gif",
        "images/projects/spin.gif",
        "images/projects/falling.gif",
        
      ],
      categories: [filters.GRAPHIC],
    },
    {
      title: "Renderers (ONGOING)",
      projectInfo:[        "Exploring advanced rendering techniques, including CUDA-supported path tracing for photorealistic lighting, ray tracing for light-object interactions, texture mapping for surface realism, and OpenGL real-time rendering for interactive, GPU-accelerated graphics. ",
      ],
      client: "Brown University",
      technologies: "C++, Qt, OpenGL",
      // industry: "Computer Graphics",
      date: "Since Sep, 2024",
      url: [{
        name: "Still packing up",
        link: "https://github.com/amk09",
      }],
      thumbImage: {
        type: "image",
        source: "images/projects/shadow_test.png",
      },
      sliderImages: [
        "images/projects/reflections_complex.png",
        "images/projects/chess.gif",
        "images/projects/cornell_box_milestone.png",
      ],
      categories: [filters.GRAPHIC],
    },
    {
      title: "Deep Learning-based Computer Vision Projects",
      projectInfo: [
        "A collection of deep learning-based computer vision projects covering speech recognition, medical imaging, and AI-driven interaction.",
        "One project is a deep learning-based lip-reading system that transcribes lip movements into text using advanced computer vision, enabling real-time, accurate speech-to-text conversion.",
        "Another project focuses on Colorectal Cancer classification, applying deep learning to histology images for improved diagnostics. To enhance usability, a chatbot is integrated, providing a user-friendly interface for assisting with classification."
      ],

      client: "Brown University",
      technologies: "Python",
      industry: "Computer Vision",
      date: "Dec 13, 2024",
      url:[{
        name: "github repo URL",
        link: "https://github.com/amk09/Lip",
      },
      {
        name: "paper link",
        link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12596/125960Y/Colorectal-cancer-classification-based-on-histology-images--comparison-between/10.1117/12.2672689.short",
      },
    ] ,

      thumbImage: {
        type: "gif",
        source: "images/projects/image11.gif",
      },
      
      sliderImages: [
        "images/projects/lip_mod.png",
        "images/projects/some.gif",
      ],
      categories: [filters.VISION],
    },
    {
      title: "Digital Artworks",
      projectInfo:
        ["I enjoy drawing digital art in my free time, focusing on animal features and imaginary creatures. All artworks are my own designs, blending realism and fantasy to create unique forms (expect for the last one, she is my dog Missy!). Here are some of my original pieces.",
          "I am onboarding to overcome the laziness to produce more high-quality drawings."
        ],
      
      client: "Independet Artwork",
      technologies: "Huion",
      industry: "Art & Design",
      date: "TBD",
      url: [],


      thumbImage: {type: "image",
        source: "images/projects/cb.png",
} ,


      sliderImages: [
        "images/projects/cb.png",
        "images/projects/em.png",
        "images/projects/loves.png",
        "images/projects/grad.jpeg",
        "images/projects/cr.jpeg",
        "images/projects/barb.jpeg",
        "images/projects/missy.png",
      ],
      url: [],
      categories: [filters.PHOTOS],
    },
    {
      title: "Project Title 5",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-5.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Project Title 6",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-6.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Project Title 7",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-7.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN, filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        {/* <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        /> */}
                        {project.thumbImage.type === "image" && (
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage.source}
                          alt=""
                        />
                      )}

                      {project.thumbImage.type === "gif" && (
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage.source}
                          alt=""
                        />
                      )}

                      {project.thumbImage.type === "video" && (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="img-fluid d-block portfolio-image"
                        >
                          <source src={project.thumbImage.source} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}

                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
