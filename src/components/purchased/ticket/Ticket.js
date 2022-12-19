import classes from "../ticket/Ticket.module.css";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/");
  }

    return (
        <div className="container">
            <div className="container">
            </div>
            <div className={`container grid-container ${classes.options}`}>
            <div className={`${classes.optionsIcon}`} onClick={handleBack}>
            <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className={`grid-item ${classes.ID}`}>
            <h3>#04512365741</h3>
            </div>
            </div>
        </div>
    );
}

export default Ticket;