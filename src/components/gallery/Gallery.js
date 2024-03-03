/***********************/
/* Carousel Component */
/* props: {
    content: {
        id,
        name,
        desc,
        link,
        img
    }, 
    // content for display

    title_potision: "top" || "bot" 
    // determine position of item title
} */
/***********************/

import React from "react";

import "./Gallery.css";
import CarouselItem from "../tile/Tile";

function Carousel(props) {
  const titlePosition = props.data.titlePosition;
  const contentList = props.data.content.map((item) => (
    <CarouselItem
      data={{
        itemContent: item,
        titlePosition: titlePosition,
        slug: props.data.slug,
      }}
      key={item.name}
    />
  ));

  return (
    // by brandon 6/9/2022
    <div className="carousel">
      <div className="row gy-4">{contentList}</div>
    </div>
    // modification ends
  );
}

export default Carousel;
