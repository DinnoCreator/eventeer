import classes from "../profile/ProfileSettings.module.css";
// import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
    // const navigate = useNavigate();
    return(
        <div className="container">
                  <div className={`container`}>
                      <div className={`${classes.settings}`}>
                      <i class="fa-solid fa-gear"></i>
                      </div>
                  </div>
                  <div className={`container grid-container ${classes.dp}`}>
                      <div></div>
                      <div className="grid-item">
                      <img
                      alt="tr"
                      src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
                      />
                      </div>
                  </div>
                      
                </div>
    )
}

export default ProfileSettings;