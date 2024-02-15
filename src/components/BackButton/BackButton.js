import "./BackButton.css";
import { useNavigate } from "react-router-dom";
import chevronLeft from "../../icons/arrow_back_ios.svg";
import Typography from "../Typography/Typography";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button className="detail-header-button" onClick={goBack}>
      <img src={chevronLeft} alt="back-button" />
      <Typography variant="body">Back</Typography>
    </button>
  );
};

export default BackButton;
