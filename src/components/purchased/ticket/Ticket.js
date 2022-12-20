import classes from "../ticket/Ticket.module.css";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/tickets");
  };
  const location = "eleven eleven calabar";

  return (
    <div className="container">
      <div className={`container hstack grid-container ${classes.options}`}>
        <div className={`${classes.optionsIcon}`} onClick={handleBack}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className={`grid-item ${classes.ID}`}>
          <h3>#04512365741</h3>
        </div>
        <div className={`${classes.optionsIcon} ms-auto`} onClick={handleBack}>
        <i class="fa-solid fa-share-nodes"></i>
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
        <div className={`container ${classes.info}`}>
          <div className={`container`}>
          {/* <div className={`${classes.header}`}> */}
          <h3>Calabar Pool Party</h3>
          {/* </div> */}
          <div className={`row ${classes.content}`}>
          <div className={`col-6 ${classes.date}`}>
              <p className={`${classes.go}`}>Date</p>
              <p className={`${classes.p2}`}>December 24, 2022</p>
            </div>
          <div className={`col-6 ${classes.date} ${classes.left}`}>
              <p className={`${classes.go}`}>Time</p>
              <p className={`${classes.p2}`}>8:00 PM</p>
            </div>
          </div>
          <div className={`row ${classes.content}`}>
          <div className={`col-6 ${classes.date}`}>
              <p className={`${classes.go}`}>Place</p>
              <p className={`${classes.p2}`}>Marina Resort Calabar, CRS NIG</p>
            </div>
          <div className={`col-6 ${classes.date} ${classes.left}`}>
              <p className={`${classes.imgInfoIcon}`}>
              <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.google.com/maps/search/${location}`}
            >
               <i class="fa-solid fa-diamond-turn-right">

               </i>
               </a>
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
