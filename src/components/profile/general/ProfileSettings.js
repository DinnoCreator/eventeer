import classes from "../general/ProfileSettings.module.css";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate ("/settings")
  }
  return (
    <>
      <div className="container">
        <div className={`container hstack grid-container ${classes.head}`}>
          <div onClick={handleBack} className={`${classes.backIcon}`}>
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div className={`grid-item ${classes.header}`}>
            <h2>Profile</h2>
          </div>
          <div className={`ms-auto ${classes.backIcon}`}>
          <h4>Done</h4>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={`container grid-container ${classes.dp}`}>
          <div></div>
          <div className="grid-item">
            <img
              alt="tr"
              src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
            />
            <h3>Change profile picture</h3>
          </div>
        </div>
        <div className={`container ${classes.form}`}>
        <div className="form-floating">
        <input class="form-control roboroboS shadowB" type="text" aria-label="default input example"/>
        <label>First name</label>
        </div>
        <div className={`form-floating ${classes.formPush}`}>
        <input class="form-control roboroboS shadowB" type="text" aria-label="default input example"/>
        <label>Last name</label>
        </div>
        <div className={`form-floating ${classes.formPush}`}>
        <input class="form-control roboroboS shadowB" type="text" aria-label="default input example"/>
        <label>User name</label>
        </div>
        </div>
      </div>
        <hr className={classes.hr}/>
        <div className={`container ${classes.formPush}`}>
          <div className={`container`}>
            
        <div className={`form-floating ${classes.dn}`}>
            <h5>display name</h5>
            <select
              name="Acctype"
              className="form-select  roboroboS shadowB"
              aria-label="Default select example"
            >
              <option>Birth name</option>
              <option>User name</option>
            </select>
          </div>
          </div>
        </div>
    </>
  );
};

export default ProfileSettings;
