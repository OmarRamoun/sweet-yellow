import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const experienceContent = [
  {
    year: "2021 - 2022",
    position: "Full-stack Developer",
    compnayName: "Xoommit",
    details: ``,
  },
  {
    year: "2021 - 2022",
    position: "Mentor Junior Developers",
    compnayName: "Microverse",
    details:
    `✔️ Helped new students adapt to remote learning at Microverse.

✔️ Helped students overcome their self-doubts (including imposter syndrome). Helped students with personal issues and taught them how to overcome those kinds of problems in the future.

✔️ Gave Students technical help when needed.

✔️ Helped students build self-trust in themselves during learning blocks and tutorial rabbit holes.

✔️ Helped students by giving them advice about how to work and learn remotely and how to overcome the problems associated with remote working (e.g: distractions, bad working environment, communicating with other remote workers professionally).`,
  },
  {
    year: "2019 - 2021",
    position: "Software Engineer",
    compnayName: "AlexLab",
    details:
    `✔️ Adapted to new frameworks fast to deliver Full-fledged Apps.

✔️ Participated in the creation of a CSS-in-js library for serving    demanding projects requirements.

✔️ Worked with UX designers to design and build user interfaces and iterate based on user feedback.

✔️ Dealt with design software (Figma, Adobe xd, Photoshop, Illustrator).

✔️ Implemented different reverse-engineering techniques to work with vendor-software UI.

✔️ Used multiple C++ frameworks and libraries to implement UI Solutions.`,
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
          <ReactMarkdown className="open-sans-font" children={val.details} remarkPlugins={[remarkGfm]} />
        </li>
      ))}
    </ul>
  );
};

export default Experience;
