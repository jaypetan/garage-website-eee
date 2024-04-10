import React from "react";

import Typography from "../typography/Typography";
import BackButton from "../BackButton/BackButton";
import styles from "./heroImage.module.css";

const HeroImageDetail = ({ heading, src, subheading }) => {
  return (
    <div className={styles.heading}>
      <div className={styles["heading-space"]}>
        <Typography variant="heading">{heading}</Typography>
        <BackButton />
        <div className={styles["subheader-space"]}>
            <Typography variant={"smallHeading"}>{subheading}</Typography>
        </div>
      </div>
      <img
        src={src}
        className={styles["hero-image"]}
        alt={"image of '" + subheading + "'"}
      />
    </div>
  );
};

export default HeroImageDetail;
