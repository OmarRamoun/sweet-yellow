import { toHaveAttribute } from "@testing-library/jest-dom/dist/matchers";
import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Social from "../Social";
import Skills from "./Skills";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="dashed text-capitalize custom-title mb-0 ft-wt-600">
                  personal info
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-4 btn-container d-flex align-items-start gap-4 text-light home-btn-container flex-column">
                <a className="button" href="pdf/omar_ramoun_resume.pdf" download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
                <Social
                classNames="d-flex align-items-center gap-3 mb-0 fs-5"
                liStyle={{
                  alignSelf: "center",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                  border: "1px solid #ffb400",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.3rem",
                }}
              />
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator" />

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
