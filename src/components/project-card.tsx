import React, { useState } from "react";
import { GrNext } from "react-icons/gr";

const projects = [
  {
    title: "jLearn",
    description: "Web app to help language learning",
    link: "https://jlearn.netlify.app",
  },
];
const maxProjects = projects.length;
const hasMoreThanOneProject = maxProjects > 1;

export const ProjectCard = () => {
  const [index, setIndex] = useState(0);
  const { title, description, link } = projects[index];

  const handleNextClick = () => {
    const nextIndex = index + 1;
    setIndex(nextIndex === maxProjects ? 0 : nextIndex);
  };

  const handleLinkClick = (url: string) => {
    return window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="hover" onClick={() => handleLinkClick(link)}>
        View
      </button>
      {hasMoreThanOneProject && (
        <GrNext
          className="project-card-nav-icon"
          size={28}
          onClick={handleNextClick}
        />
      )}
    </div>
  );
};
