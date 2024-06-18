import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="font-AlbertSans mt-4">
      <span className="font-bold ">Connect.</span>

      <div className="font-medium mt-2">
        <p className="text-zinc-500">Connect with me on :</p>

        <span>
          <a
            rel="noreferrer"
            href="https://twitter.com/Ishanp249"
            target="_blank"
            className="social-link"
          >
            Twitter,
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            href="https://github.com/ishan249"
            target="_blank"
            className="social-link"
          >
            Github,
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ishan-patel-2b7062201/"
            target="_blank"
            className="social-link"
          >
            LinkedIn
          </a>
        </span>
      </div>

      <div className="font-medium mt-2">
        <p className="text-zinc-500">Email ID :</p>
        <span>
          <a
            rel="noreferrer"
            href="mailto:249patelishan@gmail.com"
            target="_blank"
            className="social-link ml-2"
          >
            249patelishan@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
