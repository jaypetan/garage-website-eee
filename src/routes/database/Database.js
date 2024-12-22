import useFetch from "../../hooks/useFetch";
import { API_DOMAIN } from "../../utils/Constants";
import Transition from "../../components/transition/Transition";
import PageTemplate from "../../components/pageTemplate/PageTemplate";
import Typography from "../../components/typography/Typography";
import BackButton from "../../components/BackButton/BackButton";

import styles from "./Database.module.css";


function Database() {
  // const { data, isLoading } = useFetch({
  //   url: API_DOMAIN + "?type=home",
  // });

  return (
    <Transition>
      <PageTemplate>
        <div className={styles.content}>

          <div className={styles["heading-space"]}>
            <div>
              <Typography variant="heading">{"Garage Database"}</Typography>
            </div>
            <BackButton />
          </div>

          <Typography variant="body">{"Welcome to the database filled with items, this is just a Placeholder"}</Typography>
        </div>
      </PageTemplate>
    </Transition>
  );
}

export default Database;
