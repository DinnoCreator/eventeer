import classes from "../profile/Generalsettings.module.css";
import EmailSettings from "./general/email/EmailSettings";
import PhoneSettings from "./general/phone/PhoneSettings";
import PassSettings from "./general/pass/PassSettings";
import AddressSettings from "./general/add/AddressSettings";
import { useNavigate } from "react-router-dom";

const GeneralSettings = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/profile");
  };

  const handleProfile = () => {
    return navigate("/settings/profile");
  };

  return (
    <>
      <div className="container">
        <div className={`container grid-container ${classes.head}`}>
          <div onClick={handleBack} className={`${classes.backIcon}`}>
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div className={`grid-item ${classes.header}`}>
            <h2>Settings</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container">
          <div className={`${classes.setTitle}`}>
            <p>Account Settings</p>
          </div>
        </div>
      </div>
      <div className={`${classes.setContent}`} onClick={handleProfile}>
        <div className={`container`}>
          <div className="container hstack">
            <p>
              <i class="fa-solid fa-circle-user"></i> &nbsp;&nbsp;Profile
            </p>
            <div className="ms-auto">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container">
          <div className={`${classes.setTitle}`}>
            <p>Contact Details</p>
          </div>
        </div>
      </div>
      <EmailSettings />
      <PhoneSettings />
      <AddressSettings/>
      <div className="container">
        <div className="container">
          <div className={`${classes.setTitle}`}>
            <p>Security Settings</p>
          </div>
        </div>
      </div>
      <PassSettings />

      <div className="container">
        <div className="container">
          <div className={`${classes.setTitle}`}>
            <p>App Settings</p>
          </div>
        </div>
      </div>
      <div className={`${classes.setContent}`}>
        <div className={`container`}>
          <div className="container hstack">
            <p>
              <i class="fa-solid fa-bell"></i> &nbsp;&nbsp;Notifications
            </p>
            <div className="ms-auto">
              <p className={classes.count}>0</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.setContent}`}>
        <div className={`container`}>
          <div className="container hstack">
            <p>
              <i class="fa-solid fa-right-from-bracket"></i> &nbsp;&nbsp;Logout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralSettings;
