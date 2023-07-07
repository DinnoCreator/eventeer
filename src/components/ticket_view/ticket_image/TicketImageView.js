import classes from "../ticket_image/TicketImageView.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const TicketImageView = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    return navigate("/dashboard");
  }
    return(
        <div className={classes.img} 
        style={{
            backgroundImage: `url(${location.state.img})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
          }}>
            <div className={`container`}>
            <div className={`container hstack ${classes.options}`}>
            <div className={`${classes.optionsIcon}`} onClick={handleBack}>
            <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className={`ms-auto ${classes.optionsIcon}`}>
            <i className="fa-regular fa-bookmark"></i>
            </div>
            </div>
            </div>
            <div className={classes.imgInfo}>
              <div className="container">
                <div className={`container ${classes.pad}`}>
                  <div className={`${classes.imgInfoHolder}`}>
                  <h1 className="mb-3">Calabar Pool Party Calabar Pool Party Calabar Pool Party</h1>
                  <img src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large" alt="profile_image"/>
                  <h3>Edidiong Obodom </h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default TicketImageView;