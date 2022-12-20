import classes from "../ticket/Ticket.module.css";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/");
  };

  return (
    <div className="container">
      <div className={`container grid-container ${classes.options}`}>
        <div className={`${classes.optionsIcon}`} onClick={handleBack}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className={`grid-item ${classes.ID}`}>
          <h3>#04512365741</h3>
        </div>
      </div>
      <div className="container">
        <div
          className={`container ${classes.img}`}
          style={{
            backgroundImage: `url(https://media.istockphoto.com/id/1412446063/photo/multiracial-smiling-friends-enjoying-on-the-boat.jpg?s=612x612&w=is&k=20&c=SSIv0T1DBO9z60EnM_FhVFVUvkXP4vWj54793--xGLY=)`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "250px",
            width: "100%",
          }}
        ></div>
      </div>
      <div className="container">
        <div className="container">
          <div className={`container hstack ${classes.info}`}>
          <div>
          <h3>Calabar Pool Party</h3>
          </div>
          <div className={`${classes.date}`}>
              <p className={`${classes.go}`}>Eleven Eleven, Calabar</p>
              <p className={`${classes.p2}`}>Marina Resort</p>
            </div>
          <div className={`ms-auto ${classes.date}`}>
              <p className={`${classes.go}`}>Eleven Eleven, Calabar</p>
              <p className={`${classes.p2}`}>Marina Resort</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
