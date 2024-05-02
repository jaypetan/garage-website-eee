import Typography from "../typography/Typography";
import BackButton from "../BackButton/BackButton";
import styles from "./heroImage.module.css";
import Image from "../image/Image";

const HeroImage = ({ heading, src, subheading, objectFit = "cover" }) => {
  return (
    <div className={styles.heading}>
      <div className={styles["heading-space"]}>
        <div>
          <Typography variant="heading">{heading}</Typography>
          {subheading && (
            <Typography variant={"smallHeading"}>{subheading}</Typography>
          )}
        </div>
        <BackButton />
      </div>
      <Image
        objectFit={objectFit}
        src={src}
        className={styles["hero-image"]}
        alt={"image of '" + heading + "'"}
      />
    </div>
  );
};

export default HeroImage;
