import React from "react";

const ModalFourContent = () => {
  return (
    <div className="slideshow" style={{
      maxHeight: "88vh",
    }}>
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Space EArth</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Hobby</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Details </span>:{" "}
              <span className="ft-wt-600 uppercase">A webapp that offers users information about space travels classified between rockets, dragons, and missions.</span>
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
                  href="https://spacetravelsgaby.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  space-earth@github
                </a>
              </span>
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Source </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/MrRamoun/space-earth"
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
        <img src="https://github.com/gabyse1/space-travel/raw/dev/st-screenshot-desktop.png" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;
