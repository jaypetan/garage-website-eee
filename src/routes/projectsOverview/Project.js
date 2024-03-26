import React from "react"; 

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";
import Card from "../../components/PhotoCard/PhotoCard"; 
import Grid from "../../components/grid/Grid";
import BackButton from "../../components/BackButton/BackButton";
import Typography from "../../components/typography/Typography";
import { Link } from "react-router-dom";

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
    // Check if data is available in local storage
    const storedData = localStorage.getItem("cachedData");
    if (storedData) {
      // If data is available in local storage, update the state and exit
      this.setState({ data: JSON.parse(storedData), isLoading: false });
    } else {
      // If data is not available in local storage, make an API call
      fetch(this.apiDomain + "project/")
        .then((res) => res.json())
        .then((data) => {
          // Store the data in local storage for future use
          localStorage.setItem("cachedData", JSON.stringify(data));
          this.setState({ data, isLoading: false });
        })
        .then(() => console.log(this.state));

      AOS.init({
        duration: 1500,
      });
      AOS.refresh();
    }
  }

render() {
  return (
    <div className="projects-page">
        <Header/>
            {this.state.isLoading === true ? <Loading/> : 
            <div className="project-main">
                <div className="project-contents" data-aos = "fade-ep">
                <div className="project-header">
                    <Typography variant={"heading"}>Projects</Typography>
                    <BackButton />
                </div>                
                <div style={{ width: "100%" }}>
                    <Grid columns={3}>
                        {this.state.data.Project.map((card, index) => (
                            <div className="card-wrapper" key={index}>
                            <Card
                                image={card.displayImageUrl}
                                to={"/projects/" + card.pk}
                            />
                            <Typography variant={"smallHeading"}>{card.name}</Typography>
                            </div>
                        ))}
                    </Grid>
                </div>
                <div className="back-button-box">
                    <Link to="/">
                        <button className="back-button">
                            Back
                        </button>
                    </Link>
                </div>
            </div>
            </div>
            }
        <br/>
        {this.state.isLoading === false ? <Footer/> : <p></p>}
    </div>
  );
}}

export default Project;