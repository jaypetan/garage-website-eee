import { Link } from "react-router-dom"; // Import Link from React Router
import styles from "./PhotoCard.module.css";
import Typography from "../typography/Typography";
import Image from "../image/Image";

const Card = ({ image, topText, bottomText, to }) => {
  const cardContent = (
    <div className={styles["card-wrapper"]}>
      <div className={styles.card}>
        <div className={styles["card-image"]}>
          <Image src={image} alt={topText ?? bottomText} />
        </div>
        <div className={styles["text-overlay"]}>
          <Typography variant={"smallHeading"}>{topText}</Typography>
        </div>
      </div>
      {bottomText && (
        <Typography variant={"smallHeading"} className={styles["bottom-text"]}>
          {bottomText}
        </Typography>
      )}
    </div>
  );

  return to ? (
    <Link to={to} className={styles["link"]}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default Card;
