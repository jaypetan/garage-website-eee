import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LinkPreview from "../../components/link-preview/LinkPreview";
import Loading from "../../components/loading/Loading";
import ImageGallery from "../../components/image-gallery/ImageGallery";
import Typography from "../../components/typography/Typography";

import "./ProjectDetail.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectDetail(){
    const params = useParams()
    const id = params.id
    const [{state, isLoading}, setState] = useState({state: {}, isLoading: true});

    const apiDomain = "https://ntueeegarage.pythonanywhere.com/api/";

    useEffect(() => {
        const url = apiDomain + "projects/" + String(id);

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setState(currentState => ({
                    state: json,
                    isLoading: false,
                }));
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
        AOS.init({
            duration: 1500,
        });
        window.addEventListener('load', AOS.refresh);
    }, []);

        return(
            <div className="detail-page">
                <Header/>
                    {isLoading === true ? (<Loading/> ):(
                    <main className="detail-main">
                        <div className="main-wrapper" data-aos="fade-up">
                        {/* put your code below */}
                        <div className="detail-header-box">
                            <Typography variant="heading">{state.name}</Typography>
                            <Link to="/projects"><button className="upper-back-button"> Back  </button></Link>
                        </div>
                        <div className="subheader">
                            <Typography variant="smallHeading">{state.desc}</Typography>
                        </div>
                        <img 
                            src={state.displayImageUrl} 
                            className="display-image"
                            alt={"image of '" + state.name + "'"}>
                        </img>
                        
                        <br/>
                        <br/>

                        <LinkPreview link={String(state.link)}/>
                        <br/>
                        <div className="article">
                            <Typography variant="body">{state.article}</Typography>
                        </div>
                        <br/>
                        <div className="gallery-box">
                            <div className="gallery-header">
                                <Typography variant="smallHeading">Gallery</Typography>
                            </div>
                            {state.contentVideoUrl ? 
                            <video className="video" controls>
                                <source src={state.contentVideoUrl} type="video/mp4"/>
                                <source src={state.contentVideoUrl} type="video/ogg"/>
                                Your browser does not support the video tag.
                            </video>
                            :
                            <p></p>
                            }
                            {state.contentImages ?
                                <ImageGallery images={state.contentImages}/>
                            :
                             <p></p>
                            }
                        </div>
                        </div>
                        <br/>
                        <br/>
                        {/* put your code above */}
                    </main>                    
                )}
                <br/>
                {isLoading === false ? <Footer/> : <p></p>}
            </div>
        );
};

export default ProjectDetail;