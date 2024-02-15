import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import Typography from "../../components/Typography/Typography";
import Gutter from "../../components/Gutter/Gutter";
import HeroImage from "../../components/HeroImage/HeroImage";

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
