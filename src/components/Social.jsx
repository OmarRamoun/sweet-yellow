import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-github",
    link: "https://www.github.com/OmarRamoun",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/OmarRamoun" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/OmarRamoun",
  },
  { iconName: "fa fa-angellist", link: "https://angel.co/OmarRamoun" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
