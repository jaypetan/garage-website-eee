import useFetch from "../../hooks/useFetch";
import { API_DOMAIN } from "../../utils/Constants";
import Transition from "../../components/transition/Transition";
import PageTemplate from "../../components/pageTemplate/PageTemplate";
import Typography from "../../components/typography/Typography";
import BackButton from "../../components/BackButton/BackButton";
//NEEDS axios for authentication
// import axios from 'axios';

import styles from "./Database.module.css";
import Button from "../../components/button/Button";

// Keep in mind:
// Post/Redirect/Get
// CSRF Token
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

          <form className={styles["form"]}>

            <Typography variant="body">{"Matriculation Number:"}</Typography>
            <div>
              <input type="text" placeholder="eg. U123456789A"/>
            </div>

            <Typography variant="body">{"Passcode (DDMM):"}</Typography>
            <div>
              <input type="text" placeholder="eg. 1911"/>
            </div>

            <Button onClick={(e) => alert("Pressed!")}>
              {"Login"}
            </Button>
            
          </form>

        </div>
      </PageTemplate>
    </Transition>
  );
}

export default Database;
