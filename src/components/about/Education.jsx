import React from "react";

const educationContent = [
  {
    year: "2020",
    degree: "ENGINEERING DEGREE",
    institute: "Alexandria UNIVERSITY",
    details: `Graduated with a Bachelor Degree in Computer Engineering from Alexandria University.`,
  },
  {
    year: "2021",
    degree: "Full-Stack Web Development",
    institute: "MICROVERSE",
    details: `Spent 1800+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects in Ruby, Rails, JavaScript, React, and Redux.
    Developed skills in remote pair-programming, using GitHub, industry standard GitFlow, and daily stand-ups to communicate and collaborate
    with international remote developers`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
