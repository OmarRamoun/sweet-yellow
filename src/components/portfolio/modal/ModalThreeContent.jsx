import React from "react";

const ModalThreeContent = () => {
  return (
    <div className="slideshow" style={{
      maxHeight: "88vh",
    }}>
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Covid19 - Tracker</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Details </span>:{" "}
              <span className="ft-wt-600 uppercase">A covid-19 tracker that displays all today's statistics about confirmed cases, deaths, and recoveries for each country and by total.</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Technologies</span>:{" "}
              <span className="ft-wt-600 uppercase">REACT, React-Routers,Redux, Bootstrap</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://deploy-preview-1--nostalgic-stonebraker-4650fb.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  corona@github
                </a>
              </span>
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Source </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/MrRamoun/corona/tree/develop"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">freelance</span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/projects/corona.png" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThreeContent;
