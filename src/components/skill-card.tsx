import * as React from "react";
import { FaReact, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiJest,
  SiServerless,
  SiCypress,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";

const skills = [
  { label: "React", Icon: FaReact },
  { label: "Typescript", Icon: SiTypescript },
  { label: "NodeJs", Icon: SiNodedotjs },
  { label: "GraphQL", Icon: GrGraphQl },
  { label: "Mongodb", Icon: SiMongodb },
  { label: "Postgresql", Icon: DiPostgresql },
  { label: "Jest", Icon: SiJest },
  { label: "AWS", Icon: FaAws },
  { label: "Serverless", Icon: SiServerless },
  { label: "Cypress", Icon: SiCypress },
];

export const SkillCardsContainer = ({
  children,
}: {
  children: JSX.Element[];
}) => {
  return <div className="skill-card-container">{children}</div>;
};

export const SkillCards = () => {
  const renderSkillCards = () => {
    return skills.map(({ Icon, label }) => (
      <div className="skill card" key={label}>
        <Icon size={20} />
        <p>{label}</p>
      </div>
    ));
  };

  return <SkillCardsContainer>{renderSkillCards()}</SkillCardsContainer>;
};
