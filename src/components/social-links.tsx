import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const links = [
  {
    Icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/james-duong-9168a89a/",
  },
  {
    Icon: AiFillGithub,
    link: "https://github.com/jpduong",
  },
];

export const SocialLinks = () => {
  const handleClick = (link: string) => {
    return window.open(link, "_blank", "noopener,noreferrer");
  };

  const renderLinks = () => {
    return links.map(({ Icon, link }) => (
      <Icon
        className="hover"
        size={18}
        key={link}
        onClick={() => handleClick(link)}
      />
    ));
  };

  return <div className="social-links">{renderLinks()}</div>;
};
