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

const Social = ({ classNames, liStyle }) => {
  return (
    <ul
      className={`social list-unstyled pt-1 ${classNames}`}
    >
      {SocialShare.map((val, i) => (
        <li style={liStyle} key={i}>
          <a style={{color: '#fff'}} href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
