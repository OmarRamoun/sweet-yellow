import React from "react";

const skillsContent = [
  { skillClass: "p45", icon: "fa-brands fa-react", skillPercent: "45", skillName: "REACT" },
  { skillClass: "p95", icon: "fa-brands fa-vuejs", skillPercent: "95", skillName: "VUE" },
  { skillClass: "p95", icon: "fa-brands fa-bootstrap", skillPercent: "95", skillName: "BOOTSTRAP" },
  { skillClass: "p95", icon: "fa-brands fa-sass", skillPercent: "95", skillName: "SASS" },
  { skillClass: "p65", icon: "fa-brands fa-t", skillPercent: "65", skillName: "TYPESCRIPT" },
  { skillClass: "p89", icon: "fa-brands fa-js", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p66", icon: "fa-brands fa-python", skillPercent: "66", skillName: "PYTHON" },
  { skillClass: "p66", icon: "fa-regular fa-c", skillPercent: "66", skillName: "C++" },
  { skillClass: "p50", icon: "fa-regular fa-diagram-project", skillPercent: "50", skillName: "GRAPHQL" },
  { skillClass: "p50", icon: "fa-brands fa-node-js", skillPercent: "50", skillName: "Node.js" },
  { skillClass: "p50", icon: "fa-solid fa-server", skillPercent: "50", skillName: "Express.js" },
  { skillClass: "p50", icon: "fas fa-database", skillPercent: "50", skillName: "Mongo.DB" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 p100`}>
            <span style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}>
              <i className={`${val.icon} fa-2x`} />
            </span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
