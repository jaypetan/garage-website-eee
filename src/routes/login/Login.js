import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_DOMAIN } from "../../utils/Constants";
import Transition from "../../components/transition/Transition";
import PageTemplate from "../../components/pageTemplate/PageTemplate";
import Typography from "../../components/typography/Typography";
import BackButton from "../../components/BackButton/BackButton";
import axios from 'axios';

import styles from "./Login.module.css";
import Button from "../../components/button/Button";

// Keep in mind:
// CSRF
function Login() {
  const [matric, setMatric] = useState('');
  const [passcode, setPasscode] = useState('');
  const navigate = useNavigate();

  // Following code imported from garage-shop repo
  const handlePasscodeChange = (e) => {
    // Ensure passcode is in the format DDMM (e.g., 1234)
    const inputPasscode = e.target.value;
    const formattedPasscode = inputPasscode.replace(/\D/g, '').slice(0, 4); // Only allow digits, max length 4
    setPasscode(formattedPasscode);
  };

  const handleSubmit = async () => {
    const config = {
      redirect: "follow",
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    };

    console.log(`Attempting to log in with matric: ${matric} and passcode: ${passcode}`);
    
    try {
      const response = await axios.post(
        API_DOMAIN, 
        {matric: matric, passcode:passcode, type:"userdata"}, 
        config,
      );

      console.log('Response:', response); //Debug line
      
      // Following code imported from garage-shop repo
      // Check for successful login response 
      if (response.data.status === "DATA RETRIEVAL SUCCESSFUL") {
        // If the data retrieval is successful, navigate to the Profile page
        navigate('/database', { 
          state: { user: response.data.info, 
          //points: response.data.info.currentInnocredit, 
          passcode: passcode
        } });
      } else {
        // TODO: Handle unsuccessful login
        //setLoginError("Wrong username or passcode.");
        //setShowModal(true);

      }
    } catch (error) {
      console.error("Error logging in", error)
    }
  };

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

          <form className={styles["form"]} onSubmit={(e) => {e.preventDefault()}}>

            <Typography variant="body">{"Matriculation Number:"}</Typography>
            <div>
              <input 
                type="text" 
                placeholder="eg. U123456789A"
                value={matric}
                onChange={(e) => setMatric(e.target.value)}
              />
            </div>

            <Typography variant="body">{"Passcode (DDMM):"}</Typography>
            <div>
              <input 
                type="text" 
                placeholder="eg. 1911"
                value={passcode}
                onChange={handlePasscodeChange}
              />
            </div>

            <Button onClick={handleSubmit}>
              {"Login"}
            </Button>
            
          </form>

        </div>
      </PageTemplate>
    </Transition>
  );
}

export default Login;
