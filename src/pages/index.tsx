import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const socialLinks = [
  { name: "Github", link: "https://github.com/jdonga" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/james-duong-9168a89a/",
  },
];

const IndexPage = () => {
  return (
    <Layout pageTitle="About">
      <StaticImage
        alt="corgi, sleeping on the floor"
        src="../images/corgi.jpg"
      />
      <h1>About</h1>
      <p>Hi, I build websites.</p>
      <h1>Links</h1>
      {socialLinks.map(({ name, link }) => (
        <li key={name}>
          <a href={link} target="_blank">
            {name}
          </a>
        </li>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
