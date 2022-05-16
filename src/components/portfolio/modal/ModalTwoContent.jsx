import React from "react";

const ModalTwoContent = () => {
  return (
    <div className="slideshow" style={{
      maxHeight: "88vh",
    }}>
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Wonka Conference</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Wonka Organization</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Details </span>:{" "}
              <span className="ft-wt-600 uppercase">A website for the World Conference of family doctors.</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Technologies</span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, JS, Bootstrap</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://ramoun.me/Wonka-Conference"
                  target="_blank"
                  rel="noreferrer"
                >
                  wonkaConference@github
                </a>
              </span>
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Source </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/MrRamoun/Wonka-Conference"
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
        <img src="https://github.com/MrRamoun/Wonka-Conference/raw/develop/images/app_screenshot.png" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
