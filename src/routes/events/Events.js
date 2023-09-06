import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Loading from "../../components/loading/Loading";

import "./Events.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Events extends React.Component{
    constructor() {
        super();
        this.state = {
            data: {},
            isLoading: true,
        };
    };

    apiDomain = "https://ntueeegarage.pythonanywhere.com/api/";

    componentDidMount() {
        fetch(this.apiDomain+"events/")
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
                    <div className="events-page">
                        {/* put your code below */}
                        <div className="event-contents" data-aos="fade-up">
                            <h1 className="event-heading">Events</h1>
                            <br/>
                            <Gallery data = {{
                                content: this.state.data,
                                titlePosition: "botOut",
                                slug: "events"
                            }}/>
                            <br/>
                        </div>
                        
                        {/* put your code above */}
                        

                    </div>
                }   
                </main>
                <br/>
                {this.state.isLoading === false ? <Footer/> : <p></p>}
                
            </div>
        );
    };
};

export default Events;