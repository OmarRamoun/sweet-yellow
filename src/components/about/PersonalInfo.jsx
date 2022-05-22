import React from "react";

const personalInfoContent = [
  { meta: "Name", metaInfo: "Omar Ramoun" },
  { meta: "Email", metaInfo: "ramoun@omarramoun.com" },
  { meta: "phone", metaInfo: "+201095219204" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "languages", metaInfo: "French, English, German" },
];

const PersonalInfo = () => {
  return (
    <ul className="d-flex flex-column about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i} className="mw-100 pb-1">
          <span className="title">{val.meta}: </span>
          <span className="value d-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
