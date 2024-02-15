import React from "react";

import "./Footer.css";
import Typography from "../Typography/Typography";

// import icons
import linkedin from "../../icons/linkedin.png";
import instagram from "../../icons/instagram.png";
import github from "../../icons/github.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="texts">
          <Typography variant="body">Garage@EEE</Typography>
          <div>
            <Typography variant="body">
              50 Nanyang Ave, Nanyang Technological University
            </Typography>
            <Typography variant="body">Singapore, S639798</Typography>
          </div>
          <div>
            <Typography variant="body">
              School of Electrical and Electronic Engineering
            </Typography>
            <Typography variant="body">S1-B3c-26</Typography>
          </div>
        </div>
        <div className="social-media">
          <Typography variant="body">Follow us on:</Typography>
          <div className="media-buttons">
            {/* links are just mock ups */}
            <a
              className="linkedin"
              href="https://www.linkedin.com/company/garage-eee/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="garage linkedin link" />
            </a>
            <a
              className="instagram"
              href="https://www.instagram.com/garage_at_eee/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="garage instagram link" />
            </a>
            <a
              className="github"
              href="https://github.com/Garage-at-EEE"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="garage github link" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
