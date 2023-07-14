import classes from "../profile/ProfileView.module.css";
import classes1 from "../purchased/tickets/Tickets.module.css";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useCallback, useState } from "react";
import Footer from "../../Layout/Footer";
import RolesBody from "./profileComponents/rolesBody";
import { neat } from "../../utilities/textUtil";

const ProfileView = ({ profile, roles }) => {
  const navigate = useNavigate();
  const [switchh, switchhSet] = useState(false);

  const handleSwitch = () => {
    !switchh ? switchhSet(true) : switchhSet(false);
  };
  const count = roles.filter(function (item) {
    if (item.regime_status === "ongoing") {
      return true;
    } else {
      return false;
    }
  }).length;
  const countIn = roles.filter(function (item) {
    if (item.regime_status === "ended") {
      return true;
    } else {
      return false;
    }
  }).length;
  const img1 =
    "https://media.istockphoto.com/id/1412446063/photo/multiracial-smiling-friends-enjoying-on-the-boat.jpg?s=612x612&w=is&k=20&c=SSIv0T1DBO9z60EnM_FhVFVUvkXP4vWj54793--xGLY=";

  const handleSettings = () => {
    return navigate("/settings");
  };
  return (
    <>
      <div className="smartContainer">
        {/* <div className={`container`}>
                <div className={`${classes.settings}`} onClick={handleSettings}>
                <i className="fa-solid fa-gear"></i>
                </div>
            </div> */}
        <div className={`container grid-container ${classes.dp}`}>
          <div></div>
          <div className="grid-item">
            {/* <img
                alt="tr"
                src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
                /> */}
            <AccountCircleIcon
              className="reventlify"
              sx={{ fontSize: "180px" }}
            />
            <h3>{neat(profile.clientName)}</h3>
            <h6>
              {" "}
              <i className="fa-solid fa-location-dot"></i> No location set.
            </h6>
            <div>
              <div
                className={` ${classes.btn}`}
                onClick={() => navigate("/regimecreate")}
              >
                Create Regime
              </div>
            </div>
            <div>
              <div className={` ${classes.btn} ${classes.btn1}`}>
                Join Regime
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`container center ${classes.active}`}>
          <h4>Active Regimes: 1</h4>
        </div> */}

        {switchh ? (
          <div className="container">
            <div className={`container hstack ${classes1.pad}`}>
              <h2>
                Inactive Regime{countIn > 1 ? "s" : ""}: {countIn}
              </h2>
              <h2
                className={`ms-auto ${classes1.switch}`}
                style={{ color: "#7165E3" }}
                onClick={handleSwitch}
              >
                <i className="fa-solid fa-clock-rotate-left"></i>
              </h2>
            </div>
            <RolesBody roles={roles} status={"ended"} />
          </div>
        ) : (
          <div className="container">
            <div className={`container hstack ${classes1.pad}`}>
              <h2>
                Active Regime{count > 1 ? "s" : ""}: {count}
              </h2>
              <h2
                className={`ms-auto ${classes1.switch}`}
                onClick={handleSwitch}
              >
                <i className="fa-solid fa-clock-rotate-left"></i>
              </h2>
            </div>
            <RolesBody roles={roles} status={"ongoing"} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProfileView;
