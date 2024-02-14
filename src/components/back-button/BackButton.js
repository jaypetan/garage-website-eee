import "./BackButton.css";
import { useNavigate } from "react-router-dom";
import chevronLeft from "../../img/arrow_back_ios.svg";
import Typography from "../typography/Typography";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="detail-back-button">
      <button className="detail-header-button" onClick={goBack}>
        <img src={chevronLeft} alt="back-button" />
        <Typography variant="body">Back</Typography>
      </button>
    </div>
  );
};

export default BackButton;
