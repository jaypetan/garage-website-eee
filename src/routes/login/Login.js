import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { API_DOMAIN } from "../../utils/Constants";
import Transition from "../../components/transition/Transition";
import PageTemplate from "../../components/pageTemplate/PageTemplate";
import Typography from "../../components/typography/Typography";
import BackButton from "../../components/BackButton/BackButton";
//import axios from 'axios'; //npm install axios

import styles from "./Login.module.css";
import Button from "../../components/button/Button";


// Keep in mind:
// CSRF Token
function Login() {
  // const { data, isLoading } = useFetch({
  //   url: API_DOMAIN + "?type=home",
  // });
  const navigate = useNavigate();

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

            <Button onClick={() => {navigate('/database')}}>
              {"Login"}
            </Button>
            
          </form>

        </div>
      </PageTemplate>
    </Transition>
  );
}

export default Login;
