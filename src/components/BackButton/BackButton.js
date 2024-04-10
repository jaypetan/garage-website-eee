import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";
import chevronLeft from "../../icons/arrow_back_ios.svg";
import Button from "../button/Button";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button
      className={styles["detail-header-button"]}
      onClick={goBack}
      startIcon={<img src={chevronLeft} alt="back-button" />}
      variant="outlined"
    >
      Back
    </Button>
  );
};

export default BackButton;
