import React from "react";

import "./LinkPreview.css";

function LinkPreview(props){

    let link = props.link
    let endProtocol = link.indexOf("//")
    if (endProtocol !== -1) {
        link = link.substring(endProtocol + 2)
    }
    let slashIndex = link.indexOf("/")
    if (slashIndex !== -1) {
        link = link.substring(0, slashIndex)
    }


    return(
        <a href={props.link} target="_blank" rel="noreferrer" className="link-preview">
            <img src={'https://icons.duckduckgo.com/ip3/' + link + ".ico"} alt="url's favicon"/>
            <span>
                <h3 className="link-visit">Visit Us</h3>
                <p className="link">{props.link}</p>
            </span>
        </a>
    )
};

export default LinkPreview;