import * as React from "react";
import { Header } from "../components/header";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { SkillCards } from "../components/skill-card";

import { Copyright } from "../components/copyright";
import { ProjectCard } from "../components/project-card";
import { Section } from "../components/section";
import { Navbar } from "../components/navbar";

const IndexPage = () => {
  return (
    <Layout pageTitle="About">
      <Section>
        <Navbar />
        <Header title="About" />
        <p>
          Hi there. I’m James, a Full Stack Developer based in Sydney. I’m
          passionate in building aesthetic and optimised websites.
        </p>
      </Section>
      {/* <StaticImage
        alt="corgi, sleeping on the floor"
        src="../images/corgi.jpg"
      /> */}
      <Section>
        <Header title="Projects" />
        <ProjectCard />
      </Section>
      <Section>
        <Header title="Skills" />
        <SkillCards />
      </Section>
      <Copyright />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
