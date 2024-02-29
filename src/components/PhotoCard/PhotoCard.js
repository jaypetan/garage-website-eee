import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import styles from "./PhotoCard.module.css";
import Typography from "../typography/Typography";

const Card = ({ image, text, to }) => {
  console.log(to);
  const cardContent = (
    <div className={styles.card}>
      <img className={styles["card-image"]} loading="lazy" src={image} />
      <div className={styles["text-overlay"]}>
        <Typography variant={"body"}>{text}</Typography>
      </div>
    </div>
  );

  return to ? (
    <Link to={to} className={styles.card}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default Card;
