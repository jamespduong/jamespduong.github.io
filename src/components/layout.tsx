import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { DarkModeToggle } from "./dark-mode-toggle";
import "../styles/global.css";
import { container, siteTitle } from "../styles/global.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container} data-sal="fade" data-sal-duration="2000">
      {/* <nav> */}
      <DarkModeToggle />
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      {/* <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav> */}
      <main>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
