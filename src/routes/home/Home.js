import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";

import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Grid from "../../components/grid/Grid";
import Card from "../../components/photo-card/PhotoCard";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoading: true,
    };
  }

  apiDomain = "https://ntueeegarage.pythonanywhere.com/api/";

  componentDidMount() {
    // Check if data is available in local storage
    const storedData = localStorage.getItem("cachedData");
    if (storedData) {
      // If data is available in local storage, update the state and exit
      this.setState({ data: JSON.parse(storedData), isLoading: false });
    } else {
      // If data is not available in local storage, make an API call
      fetch(this.apiDomain + "home/")
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
      <div id="home">
        <Header />
        <main>
          {this.state.isLoading === true ? (
            <Loading />
          ) : (
            <div className="section-container">
              {/* Insert your code below */}
              <div
                className="section-wrapper banner-wrapper"
                style={{ paddingTop: 5 }}
              >
                <div className="banner">
                  <h2>STUDENT LED</h2>
                  <div className="banner-space">
                    <h2>MAKERSPACE</h2>
                    <p>Scroll to find out more</p>
                  </div>
                  <div className="banner-image"></div>
                </div>
              </div>
              <div className="section-wrapper">
                <section className="container">
                  {/* Intro section */}
                  <h2>About</h2>
                  <br />

                  <p>
                    Garage@EEE is a student-led maker space in the School of
                    Electrical and Electronic Engineering. We provide the
                    environment, materials, and funding for students to develop
                    their ideas, alongside their technical skills. Furthermore,
                    we run creative initiatives to provide opportunities for our
                    ambassadors to enhance other holistic skills. Aided by our
                    strong industry connections and extensive alumni network,
                    Garage@EEE creates not only engineers of today, but
                    thinkers, entrepreneurs, and world leaders of tomorrow.
                  </p>
                  <br />

                  <br />
                  <h3>Our Objective</h3>
                  <p>
                    To encourage innovation and cultivate the spirit of
                    entrepreneurship amongst students in the School of EEE, NTU.{" "}
                    <br />
                    <br /> To instill a passion for engineering ideation across
                    students in the EEE community.
                  </p>
                </section>
              </div>
              <div className="section-wrapper">
                <section className="container">
                  {/* Ambassadors section */}
                  <h2>MEMBER TRACKS</h2>
                  <br />
                  <br />
                  <h3>Ambassadors</h3>
                  <p>
                    The Ambassador Track focuses on giving students a platform
                    to learn and grow. Students will get to propose and
                    facilitate unique initiatives for the NTU community. The
                    Ambassador Track consists of 6 portfolios, namely Branding &
                    Marketing, Business Development, Operations, Start-Up,
                    Training & Development and Welfare. Students also ensure
                    that Garage will be a efficient and impactful makerspace.
                  </p>
                  <br />
                  <div style={{ width: "100%" }}>
                    <Grid columns={3}>
                      {this.state.data.Ambassador.map((card, index) => (
                        <div key={index}>
                          <Card
                            image={card.displayImageUrl}
                            text={card.name}
                            to={"ambassadors/" + card.pk}
                          />
                        </div>
                      ))}
                    </Grid>
                  </div>
                </section>
              </div>
              <div className="section-wrapper">
                <section className="container innovators">
                  {/* Innovators section */}
                  <Grid columns={2}>
                    <div>
                      <Card
                        image={
                          "https://drive.google.com/uc?id=15J4Z0FeEEuiiquRaUU0-PWFqPy-PNdDt"
                        }
                        text={""}
                      />
                    </div>
                    <div>
                      <h3>Innovators</h3>
                      <br />
                      <p>
                        The Innovator Track focuses on exposing eager and
                        passionate students to the Start-Up maker community,
                        promoting an entrepreneurial mindset, and bringing
                        student self-initiated ideas to reality by providing
                        proper guidance and learning opportunities. Therefore,
                        we encourage you to come with a start up idea in mind
                        and bedazzle the minds of the panel so that you can
                        realise your ideas right here at the Garage!
                        Applications close on 24th September 2021
                      </p>
                      <br />
                      <h4>Innovator's Track Recruitment</h4>
                      <br />
                      <p>
                        Kick-start your own start-up HERE with your friends from
                        ANY schools. You will have the chance to get up to 2.5k
                        of funding, receive mentorships, gain connections, have
                        access to facilities, and many more benefits.
                      </p>
                      <p>Applications close on 24th September 2021</p>
                      <br />
                      <a
                        href={
                          this.state.data.InnovatorRegistration[0].regIsOpen
                            ? this.state.data.InnovatorRegistration[0].regLink
                            : "#"
                        }
                        className="reg-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn">
                          {this.state.data.InnovatorRegistration[0].regIsOpen
                            ? "Register"
                            : "Registration Closed"}
                        </button>
                      </a>
                    </div>
                  </Grid>
                </section>
              </div>
              <div className="section-wrapper">
                {/* Project Showcase */}
                <section className="container">
                  <h2>project showcase</h2>
                  <br />
                  <div style={{ width: "100%" }}>
                    <Grid columns={3}>
                      {this.state.data.Project.map((card, index) => (
                        <div key={index}>
                          <Card
                            image={card.displayImageUrl}
                            to={"projects/" + card.pk}
                          />
                          <p>{card.name}</p>
                        </div>
                      ))}
                    </Grid>
                  </div>
                  <br />
                  <Link className="view-all-a" to="/projects">
                    <button className="view-all">View All</button>
                  </Link>
                  <br />
                </section>
              </div>
              <div className="section-wrapper">
                {/* Events Showcase */}
                <section className="flagship-events container">
                  <h2 className="section-title">our events</h2>
                  <br />
                  <div style={{ width: "100%" }}>
                    <Grid columns={3}>
                      {this.state.data.Event.map((card, index) => (
                        <div key={index}>
                          <Card
                            image={card.displayImageUrl}
                            to={"events/" + card.pk}
                          />
                          <p>{card.name}</p>
                        </div>
                      ))}
                    </Grid>
                    {/* <Carousel
                      className="home-carousel"
                      data={{
                        content: this.state.data.Project,
                        slug: "projects",
                      }}
                    /> */}
                  </div>
                  <br />
                  <Link className="view-all-a" to="/events">
                    <button className="view-all">View All</button>
                  </Link>
                  <br />
                </section>
              </div>
              {/* Insert your code above */}
              <Footer />
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default Home;
