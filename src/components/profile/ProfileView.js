import classes from "../profile/ProfileView.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer";

const ProfileView = () => {
    const navigate = useNavigate();
    const img1 =
    "https://media.istockphoto.com/id/1412446063/photo/multiracial-smiling-friends-enjoying-on-the-boat.jpg?s=612x612&w=is&k=20&c=SSIv0T1DBO9z60EnM_FhVFVUvkXP4vWj54793--xGLY=";
 
    const handleSettings = () => {
        return navigate("/settings");
    }
    return (
      <>
        <div className="container">
            <div className={`container`}>
                <div className={`${classes.settings}`} onClick={handleSettings}>
                <i className="fa-solid fa-gear"></i>
                </div>
            </div>
            <div className={`container grid-container ${classes.dp}`}>
                <div></div>
                <div className="grid-item">
                <img
                alt="tr"
                src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
                />
                <h3>Edidiong Obodom</h3>
                <h4> <i className="fa-solid fa-location-dot"></i> Calabar, CRS.</h4>
                <div>
                    <div className={` ${classes.btn}`}>Create Regime</div>
                </div>
                <div>
                    <div className={` ${classes.btn} ${classes.btn1}`}>Join Regime</div>
                </div>
                </div>
            </div>
                <div className={`container center ${classes.active}`}>
                    <h4>Active Regimes: 1</h4>
                </div>
                <div className={`hstack ${classes.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket")
            }}>
                <img src={img1} width="130x" alt="ticket" />
                <span className={`ms-auto ${classes.ticketStripInfo}`}>
                    <p>Calabar Pool Party</p>
                    <p>
                        <i 
                        style={{
                            color: "white",
                            backgroundColor: "#55CCF8"
                        }}
                        className="fa-solid fa-champagne-glasses"></i> 
                        <span className={classes.ID}>Role: Creator</span>
                    </p>
                </span>
            </div>
          </div>
          <Footer/>
      </>
    );
}

export default ProfileView;