import React from "react";
import { Link } from "@material-ui/core";
import { LinkedIn, Twitter, Instagram, GitHub } from "@material-ui/icons";
export const MySocialNetworks = () => {
  return (
    <div>
      <Link
        color="inherit"
        target="_blank"
        href="https://www.linkedin.com/in/senix-code-869b8a1ba/"
      >
        <LinkedIn />
      </Link>
      <Link color="inherit" target="_blank" href="https://github.com/senixcode">
        <GitHub />
      </Link>
      <Link
        color="inherit"
        target="_blank"
        href="https://twitter.com/senixcode"
      >
        <Twitter />
      </Link>
      <Link
        color="inherit"
        target="_blank"
        href="https://www.instagram.com/senixcode/"
      >
        <Instagram />
      </Link>
    </div>
  );
};
