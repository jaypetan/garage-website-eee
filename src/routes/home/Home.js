import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel"
import Loading from "../../components/loading/Loading";

import { getData } from "../../data";

import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Home extends React.Component{
    constructor() {
        super();
        let mockData = getData();
        this.state = {
            data: mockData,
            isLoading: true,
        };
    };

    apiDomain = "https://ntueeegarage.pythonanywhere.com/api/";

    componentDidMount() {
        fetch(this.apiDomain+"home/")
            .then(res => res.json())
            .then(data => this.setState({data: data, isLoading: false}))
            .then(() => console.log(this.state))
        AOS.init({
            duration: 1500,
        });
        AOS.refresh();
    }

    render() {
        return(
            <div id="home">
                <Header/>
                <main>
                {this.state.isLoading === true ? <Loading/> : 
                <div className="section-container">
                    {/* Insert your code below */}
                    <div className="section-wrapper banner-wrapper">
                        <div className="banner" data-aos="zoom-in">
                        <h1 data-aos="fade-up">Garage</h1>
                        <p data-aos="fade-up">@EEE</p>
                        <div className="transparant-cover"></div>
                        </div>
                    </div>
                    <div className="section-wrapper about">
                        <section className="container">
                        {/* Intro section */}
                        <h2>About</h2>
                        <br/>
                        <p>
                            Garage@EEE is a student-led maker space in the School of Electrical and Electronic Engineering. We provide the environment, materials, and funding for students to develop their ideas, alongside their technical skills. Aided by our strong industry connections and extensive alumni network, Garage@EEE creates not only engineers of today, but thinkers, entrepreneurs, and world leaders of tomorrow.
                        </p>
                        </section>
                        <div className="section-transpararant-cover"></div>
                    </div>
                    <div className="section-wrapper">
                        <section className="container">
                            {/* Ambassadors section */}
                            <h2>Ambassadors</h2>
                            <p>
                                The Ambassador Track focuses on giving students a platform to learn and grow. Students will get to propose and facilitate unique initiatives for the NTU community. The Ambassador Track consists of 6 portfolios as shown below:
                            </p>
                            <br/>
                            <div style={{width:"100%"}}>
                                <Carousel data={{
                                    content: this.state.data.Ambassador,
                                    slug: "ambassadors"
                                }}/>
                            </div>
                        </section>
                    </div>
                    <div className="section-wrapper innovators-wrapper">
                        <section className="container innovators">   
                            {/* Innovators section */}
                                <h2>Innovators</h2>   
                                <br/>
                                <p>
                                    The Innovator Track focuses on exposing eager and passionate students to the Start-Up maker community, promoting an entrepreneurial mindset, and bringing student self-initiated ideas to reality by providing proper guidance and learning opportunities.
                                </p>
                                <p>
                                    Kick-start your own start-up HERE with your friends from ANY schools. You will have the chance to get up to 2.5k of funding, receive mentorships, gain connections, have access to facilities, and many more benefits.
                                </p>
                                <br/>

                                <br/>
                                <a href={this.state.data.InnovatorRegistration[0].regIsOpen ? this.state.data.InnovatorRegistration[0].regLink : "#"} className="reg-link" target="_blank">
                                    <button className="btn">
                                        {this.state.data.InnovatorRegistration[0].regIsOpen ? "Register" : "Registration Closed"}
                                    </button>  
                                </a>
                                    
                        </section>
                        <div className="section-transpararant-cover"></div>
                    </div>
                    <div className="section-wrapper">
                        {/* Project Showcase */}
                        <section className="container">
                            <h2>project showcase</h2>
                            <br/>
                            <div style={{width:"100%"}}>
                                <Carousel className="home-carousel" data={{
                                    content: this.state.data.Project,
                                    slug: "projects"
                                }}/>
                            </div>
                            <br/>
                            <a className="view-all-a" href={this.host}>
                                <button className="view-all">
                                    View All
                                </button>
                            </a>
                            
                        </section>
                    </div>
                    <div className="section-wrapper events-wrapper">
                        {/* Events Showcase */}
                        <section className="flagship-events container">
                            <h2 className="section-title">our events</h2>
                            <br/>
                            <div style={{width:"100%"}}>
                                <Carousel className="home-carousel" data={{
                                        content: this.state.data.Event,
                                        slug: "events"
                                    }}/>
                            </div>
                            <br/>
                            <a className="view-all-a" href={"/events"}>
                                <button className="view-all">
                                    View All
                                </button>
                            </a>
                        </section>
                        <div className="section-transpararant-cover"></div>
                    </div>
                    {/* Insert your code above */}
                    <Footer/>
                </div>
            }
                </main>
                
            </div>
        );
    };
};

export default Home;