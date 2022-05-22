import React from "react";
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

const experienceContent = [
  {
    year: "2021 - 2022",
    position: "Full-stack Developer",
    compnayName: "Xoommit",
    details: [
      'Participated in the creation of a css-in-js library for serving demanding project requirements.',
      'Designed and developed a React-based delivery platform, increasing web traffic by 30% and boosting online sales within days of launch',
    ],
  },
  {
    year: "2020 - 2021",
    position: "Mentor Junior Developers",
    compnayName: "Microverse",
    details: [
      'Provided advice and tips on maintaining motivation in a remote job to junior web developer',

      'Assisted developers on how to overcome the challenges of remote working (e.g., distractions, poor working environment, communicating with other remote workers professionally)',
    ]
  },
  {
    year: "2020 - 2022",
    position: "Code Reviewer",
    compnayName: "Microverse",
    details: [
      'Proposed improvements to code organization to improve code quality and overall performance.',

      'Provided one-on-one technical support for developers who were stuck',
    ]
  },
  {
    year: "2018 - 2020",
    position: "Software Engineer",
    compnayName: "AlexLab",
    details: [
      'Adapted to new frameworks fast to deliver Full-fledged Apps.',

      'Refactored monolithic codebase, increasing test coverage by 150% and speeding up internal processes by a factor of 2',

      'Improved customer satisfaction by decreasing the load time of an e-commerce website by 1 second which turn an additional 5% in online revenue and boosted conversions by 9%.',
    ]
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          {
            val.details.map((val, i) => (
              <p className="mb-3" key={i}> - {val}</p>
            ))
          }
          {/* <ReactMarkdown className="open-sans-font" children={val.details} remarkPlugins={[remarkGfm]} /> */}
        </li>
      ))}
    </ul>
  );
};

export default Experience;
