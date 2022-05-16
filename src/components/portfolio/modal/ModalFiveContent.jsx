import React from "react";

const ModalFiveContent = () => {
  return (
    <div className="slideshow" style={{
      maxHeight: "88vh",
    }}>
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Awesome Books</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Website</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Hobby</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://ramoun.me/Awesome-Books/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AwesomeBooks@github
                </a>
              </span>
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Source </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/MrRamoun/Awesome-Books"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="https://github.com/MrRamoun/Awesome-Books/raw/main/screenshot-desktop.png" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFiveContent;
