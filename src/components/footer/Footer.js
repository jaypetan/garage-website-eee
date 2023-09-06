import React from "react";

import "./Footer.css";

// import icons
import facebook from "../../icons/facebook.svg"
import linkedin from "../../icons/linkedin.svg"
import instagram from "../../icons/instagram.svg"
import github from "../../icons/github.svg"


class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="texts">
                    <h4>Garage@EEE</h4>
                    <br/>
                    <p>
                        50 Nanyang Ave, Nanyang Technological University Singapore, S639798
                    </p>
                    <br/>
                    <p>
                        School of Electrical and Electronic Engineering S1-B3c-26
                    </p>
                    <br />
                    <p>© Copyright 2022</p>
                    <p>All rights reserved.</p>
                </div>
                <div className="social-media">
                    <p>
                        Follow us on:
                    </p>
                    <div className="media-buttons">
                        {/* links are just mock ups */}
                        <a className="facebook" href="https://www.facebook.com/GARAGEATEEE/" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="garage facebook link" />
                        </a>
                        <a className="linkedin" href="https://www.linkedin.com/company/garage-eee/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="garage linkedin link" />
                        </a>
                        <a className="instagram" href="https://www.instagram.com/garage_at_eee/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="garage instagram link" />
                        </a>
                        <a className="github" href="https://github.com/Garage-at-EEE" target="_blank" rel="noreferrer">
                            <img src={github} alt="garage github link" />
                        </a>
                    </div>
                </div>
            </footer>
        )
    };
};

export default Footer;