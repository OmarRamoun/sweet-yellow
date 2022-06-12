import React, { useState } from "react";
import Modal from "react-modal";
import Index from "../../components/about/index";
import Social from "../../components/Social";
import "./hero.css";

const heroContent = {
  heroImage: "img/hero/darwin_center.jpg",
  heroMobileImage: "darwin",
  heroTitleName: "Ramoun",
  heroDesignation: "front-end engineer",
  heroDescriptions: `I'm a front‑end developer (with REACT experience) focused on
  crafting clean & user‑friendly experiences, I am passionate about
  building high-performing software that improves the lives of those
  around me.`,
  heroBtn: "DOWNLOAD CV",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage
              })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={`img/hero/${heroContent.heroMobileImage}.jpg`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <div className="btn-container d-flex align-items-center gap-4 text-light home-btn-container">
              <a className="button" href="pdf/omar_ramoun_resume.pdf" download>
                <span className="button-text">{heroContent.heroBtn}</span>
                <span className="button-icon fa fa-download"></span>
              </a>
              <Social
                classNames="d-flex align-items-center gap-3 mb-0 fs-5"
                liStyle={{
                  alignSelf: "center",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.3rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* <div className="col-12 mt-4">
        <a className="button" >
        </a>
      </div> */}
    </>
  );
};

export default Hero;
