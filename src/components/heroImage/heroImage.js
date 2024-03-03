import React from "react";

import Typography from "../typography/Typography";
import BackButton from "../BackButton/BackButton";
import styles from "./heroImage.module.css";

const HeroImage = ({ heading, src }) => {
  return (
    <div className={styles.heading}>
      <div className={styles["heading-space"]}>
        <Typography variant="heading">{heading}</Typography>
        <BackButton />
      </div>
      <img
        src={src}
        className={styles["hero-image"]}
        alt={"image of '" + heading + "'"}
      />
    </div>
  );
};

export default HeroImage;
