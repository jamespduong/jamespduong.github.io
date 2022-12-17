import React from "react";
import { SocialLinks } from "./social-links";

export const Copyright = () => {
  return (
    <div className="footer">
      <div>
        <p>Contact: james.duong93@gmail.com</p>
        <p>Copyright © 2022 James Duong</p>
      </div>
      <SocialLinks />
    </div>
  );
};
