import React from "react";

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

    apiDomain = "http://127.0.0.1:8000/api/";

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
                            <h1 className="project-heading">Projects</h1>
                            <br/>
                            <Gallery data = {{
                                content: this.state.data,
                                titlePosition: "botOut",
                                slug: "projects"
                            }}/>
                            <br/>
                        </div>
                        
                        {/* put your code above */}

                    </div>
                }   
                </main>
                {this.state.isLoading === false ? <Footer/> : <p></p>}
            </div>
        );
    };
};

export default Project;