import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChevronLeft } from "../../icons/arrow_back_ios.svg";
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
      startIcon={<ChevronLeft />}
      variant="outlined"
    >
      Back
    </Button>
  );
};

export default BackButton;
