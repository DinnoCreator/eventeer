import classes from "../home/HomeCom.module.css";
import image from "../home/event.png"

const HomeCom = () => {
    return(
        <>
          <div className={` center ${classes.bod}`}>
          <div className="container">
          <h1>Discover Upcoming Events Near You</h1>
          <img src={image} alt="eventimage"/>
          <div className={`${classes.but}`}>
          <div className="btn btn-light roborobo"><span>Get Started</span></div>
          </div>
          </div>
          </div>
        </>
    );
}

export default HomeCom;