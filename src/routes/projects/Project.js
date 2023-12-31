import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Loading from "../../components/loading/Loading";

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
            <div>
                <Header/>
                <main>
                    {this.state.isLoading === true ? <Loading/> :
                    <div className="projects-page">
                        {/* put your code below */}
                        <div className="project-contents" data-aos="fade-up">
                            <span className="header-wrapper">
                                <h1 className="project-heading">Projects</h1>
                                {window.innerWidth > 900 ? 
                                <button className="upper-back-button">
                                    Back
                                </button>
                                :
                                <p></p>
                            
                            }
                                
                            </span>
                            <br/>
                            <Gallery data = {{
                                content: this.state.data,
                                titlePosition: "botOut",
                                slug: "projects"
                            }}/>
                            <br/>
                            <Link className="back-button-a" to="/">
                                <button className="back-button">
                                    Back
                                </button>
                            </Link>
                            <br/>
                        </div>
                        <br/>
                        {/* put your code above */}
                        <br/>
                    </div>
                }   
                </main>
                {this.state.isLoading === false ? <Footer/> : <p></p>}
            </div>
        );
    };
};

export default Project;