import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";
import BackButton from "../../components/back-button/BackButton";
import Typography from "../../components/typography/Typography";
import Gutter from "../../components/gutter/Gutter";
import HeroImage from "../../components/heroImage/heroImage";

import styles from "./AmbassadorDetail.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AmbassadorDetail() {
  const params = useParams();
  const id = params.id;
  const [{ state, isLoading }, setState] = useState({
    state: {},
    isLoading: true,
  });

  const apiDomain = "https://ntueeegarage.pythonanywhere.com/api/";

  useEffect(() => {
    const url = apiDomain + "ambassadors/" + String(id);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setState((currentState) => ({
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
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    // <main className="ambassador-page">
    <>
      <Header />
      {isLoading === true ? (
        <Loading />
      ) : (
        <>
          <Gutter>
            <div className={styles["main-wrapper"]} data-aos="fade-up">
              <HeroImage heading={state.name} src={state.displayImageUrl} />
              <Typography variant="body">{state.desc}</Typography>
            </div>
          </Gutter>
          <Footer />
        </>
      )}
    </>
    // </main>
  );
}

export default AmbassadorDetail;
