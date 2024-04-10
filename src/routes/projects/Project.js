import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Loading from "../../components/loading/Loading";
import Typography from "../../components/typography/Typography";

import "./Project.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Project extends React.Component{
    constructor() {
        super();
        this.state = {
            data: {},
            isLoading: true,
        };
    };

    apiDomain = "https://ntueeegarage.pythonanywhere.com/api/";

    componentDidMount() {
        fetch(this.apiDomain+"projects/")
            .then(res => res.json())
            .then(data => this.setState({data: data, isLoading: false}))
            .then(() => console.log(this.state))
        AOS.init({
            duration: 1500,
        });
        window.addEventListener('load', AOS.refresh);
    }
    
    render() {
        return(
            <div className="projects-page">
                <Header/>
                    {this.state.isLoading === true ? (<Loading/> ):(
                    <main className="project-main">
                        <div className="project-contents" data-aos= "fade-ep">
                        <div className="header-wrapper">
                            <Typography variant="heading">Projects</Typography>
                            <Link className="upper-back-botton-a" to="/">
                                <button className="upper-back-button"> 
                                    Back  
                                </button>
                            </Link>
                        </div>
                        <div className="carousel-wrapper">
                            <Gallery data = {{
                                content: this.state.data,
                                titlePosition: "botOut",
                                slug: "projects"
                            }}/>
                        </div>
                        <div className="back-botton-box">
                            <Link to="/">
                                <button className="back-button"> 
                                    Back  
                                </button>
                            </Link>
                        </div>   
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </main>
                    )}
                <br/>
                {this.state.isLoading === false ? <Footer/> : <p></p>}
            </div>
        )
    }
}

export default Project;