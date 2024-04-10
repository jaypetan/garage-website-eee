import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./ImageGallery.css";
import "@splidejs/react-splide/css";

function Carousel(props) {
  const contentList = props.images;
  const tilesRenderList = [];

  for (let i = 0; i < contentList.length; i++) {
    tilesRenderList.push(
      <SplideSlide key={i}>
        <img src={props.images[i]} className="card card-img" alt="..." />
      </SplideSlide>
    );
  }

  return (
    <div className="carousel">
      <Splide
        aria-label="a carousel"
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          gap: "3rem",
          autoplay: true,
        }}
      >
        {tilesRenderList}
      </Splide>
    </div>
  );
}

export default Carousel;
