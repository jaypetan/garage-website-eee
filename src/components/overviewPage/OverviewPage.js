import BackButton from "../../components/BackButton/BackButton";
import Grid from "../../components/grid/Grid";
import Card from "../../components/PhotoCard/PhotoCard";
import Typography from "../../components/typography/Typography";

import styles from "./OverviewPage.module.css";

const OverviewPage = ({ heading, data }) => {
  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["heading-space"]}>
        <Typography variant="heading">{heading}</Typography>
        <BackButton />
      </div>
      {data && (
        <>
          <Grid>
            {data.map((card, index) => (
              <Card
                key={card.name}
                image={card.coverPic}
                to={`${index}/`}
                bottomText={card.name}
              />
            ))}
          </Grid>
          {/* <button onClick={() => window.scrollTo(0, 0)}>
            <Typography variant="body">Back to top</Typography>
          </button> */}
        </>
      )}
    </div>
  );
};

export default OverviewPage;
