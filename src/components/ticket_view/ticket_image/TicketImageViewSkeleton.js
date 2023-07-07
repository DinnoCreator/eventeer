import { useNavigate } from "react-router-dom";
import classes from "../ticket_image/TicketImageView.module.css";

const TicketImageViewSkeleton = ({img, icon, color}) => {
    const navigate = useNavigate();
    const handleBack = () => {
      return navigate("/dashboard");
    }
    return (
        <div className={`${classes.skeleton} ${classes.img}`}
            style={{
                // backgroundImage: `url(${img})`,
                // // backgroundImage: `url(${externalImage})`,
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center',
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
                    <div className={`container hstack ${classes.pad}`}>
                        <div className={`${classes.imgInfoHolder}`}>
                            <div className={`${classes.skeleton} ${classes.eventTitle}`}></div>
                            <div className={`${classes.skeleton} ${classes.imge} mr-1`}></div>
                            <div className={`${classes.skeleton} ${classes.eventCreator}`}></div>
                        </div>
                        <div className={`ms-auto ${classes.skeleton} ${classes.imgInfoIcon}`}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketImageViewSkeleton;