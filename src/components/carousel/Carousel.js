import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./Carousel.css";
import "@splidejs/react-splide/css";

function Carousel(props) {
  const width = useWindowDimensions().width;
  const contentList = props.data.content;
  const tilesRenderList = [];

  // dynamically generate perPage prop for the carousel
  let SplidePageNum = (pageWidth) => {
    if (pageWidth > 1100) {
      return 3;
    } else if (pageWidth > 600) {
      return 2;
    } else if (pageWidth > 0) {
      return 1;
    }
  };

  let imgSrc = "";
  for (let i = 0; i < contentList.length; i++) {
    let content = contentList[i];
    imgSrc = content.displayImageUrl;
    //imgSrc = "https://drive.google.com/uc?export=view&id=" + imgSrc.substring(31, imgSrc.length)

    tilesRenderList.push(
      <SplideSlide key={i}>
        <Link
          to={props.data.slug + "/" + content.pk}
          className="card h-100 border-0 rounded-5"
        >
          <img src={imgSrc} className="card-img-top card-img" alt="..." />
          <div className="card-body p-4 card-title-wrapper">
            <div className="h3 position-relative top-50 start-50 translate-middle card-title">
              {content.name}
            </div>
          </div>
        </Link>
      </SplideSlide>
    );
  }

  return (
    <div className="carousel">
      <Splide
        hasTrack={false}
        aria-label="a carousel"
        options={{
          type: "loop",
          perPage: SplidePageNum(width),
          perMove: 1,
          gap: "3rem",
          autoplay: true,
        }}
      >
        <SplideTrack>{tilesRenderList}</SplideTrack>
      </Splide>
    </div>
  );
}

export default Carousel;
