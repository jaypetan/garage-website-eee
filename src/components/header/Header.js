import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import wondering from "../../img/wondering.png"
import logo from "../../icons/garage-white.png";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {menuIsActive: false}
        this.wrapperRef = React.createRef();
        this.menuRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.menuIsActive ? this.setState({menuIsActive: false}) : this.setState({menuIsActive: true});
    }

    render() {
        return(
            <div>
                <header>
                    <Link to="/" className="logo">
                        <img src={logo} alt="Garage@EEE"/>
                    </Link>
                    
                    <div id="menu-icon-container" className={this.state.menuIsActive ? "change" : null}>
                        <div onClick={this.handleClick}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                </header>
                <div id="menu" style={{right: `${this.state.menuIsActive ? "0px" : "-300px"}`}}>
                    {/* insert hyperlinks below */}
                    <Link to="/"><h3>Home</h3></Link>
                    <hr/>
                    <Link to="/events"><h3>Events</h3></Link>
                    <hr/>
                    <Link to="/projects"><h3>Projects</h3></Link>
                    <hr/>
                    <img src={wondering} alt="" className="wondering-img"/>
                </div>
                
            </div>
            
        )
    };
};

export default Header;