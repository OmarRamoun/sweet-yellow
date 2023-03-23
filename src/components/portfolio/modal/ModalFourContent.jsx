import React from "react";

const ModalFourContent = () => {
  return (
    <div className="slideshow" style={{
      maxHeight: "88vh",
    }}>
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Rene</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Details </span>:{" "}
              <span className="ft-wt-600 uppercase">A SaaS Project Management App Landing Website. The design is modern, beautiful and responsive. It displays your content nicely on Desktop, Laptop, iPad, iPhone, Android Mobile, and tablets.</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Technologies</span>:{" "}
              <span className="ft-wt-600 uppercase">React, Redux, StyledComponents, React-Routers</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://sea-turtle-app-ir2zt.ondigitalocean.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Renesaas.com
                </a>
              </span>
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Source </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/OmarRamoun/RENE"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/projects/rene.png" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;
