import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Omar" },
  { meta: "last name", metaInfo: "Ramoun" },
  { meta: "Age", metaInfo: "24 Years" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "phone", metaInfo: "+201095219204" },
  { meta: "Email", metaInfo: "omartarekramoun@gmail.com" },
  { meta: "langages", metaInfo: "French, English, German" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
