import classes from "../ticket/Ticket.module.css";
import { useNavigate } from "react-router-dom";

const TicketSkeleton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/tickets");
  };
  return (
    <div className="container">
      <div className="smartContainer">
        <div className={`container hstack grid-container ${classes.options}`}>
          <div className={`${classes.optionsIcon}`} onClick={handleBack}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className={`grid-item ${classes.skeleton} ${classes.ID}`}>
            {/* <h3>#04512365741</h3> */}
          </div>
          <div
            className={`${classes.optionsIcon} ms-auto`}
            onClick={handleBack}
          >
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>

        <div className="container mt-4">
          <div className={`container ${classes.skeleton} ${classes.img}`}></div>
        </div>

        <div className="container">
          <div className={`container ${classes.info}`}>
            <div className={`container`}>
              <div className={`${classes.skeleton} ${classes.header}`}></div>
              <div className={`row mt-5 ${classes.content}`}>
                <div className={`col-6 ${classes.date}`}>
                  <p className={`${classes.go}`}>Date</p>
                  <p className={`${classes.skeleton} ${classes.p2}`}></p>
                </div>
                <div className={`col-6 ${classes.date} ${classes.left}`}>
                  <p className={`${classes.go}`}>Time</p>
                  <p className={`${classes.skeleton} ${classes.p2}`}></p>
                </div>
              </div>
              <div className={`mt-5 row ${classes.content}`}>
                <div className={`col-6 ${classes.date}`}>
                  <p className={`${classes.go}`}>Place</p>
                  <p className={`${classes.skeleton} ${classes.p2}`}></p>
                </div>
                <div className={`col-6 ${classes.date} ${classes.left}`}>
                  <div
                    className={`${classes.skeleton} ${classes.directionA}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`container mt-3 ${classes.skeleton}`}
            style={{
              width: "185px",
              height: "145px",
              display: "flex",
              justifyContent: "center",
              // backgroundColor: 'white'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TicketSkeleton;
