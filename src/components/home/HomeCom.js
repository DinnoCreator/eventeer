import classes from "../home/HomeCom.module.css";
import image from "../home/event.png";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
const HomeCom = () => {
  const navigate = useNavigate();

  const [getStarted, setGetStarted] = useState("none");
  const [companyName, setCompanyName] = useState("block");

  useEffect(() => {
    if (getStarted === "none") {
      setTimeout(() => {
        setGetStarted("grid");
        setCompanyName("none")
      }, 7000);
    }
  }, [getStarted]);
  
  const handleDirection = () => {
    return navigate("/dashboard");
  }

  return (
    <>
      <div className={`center`} style={{display: companyName}}>
        <div className={`${classes.first} ${classes.cool} ${classes.compName}`}><h1>R</h1></div>
        <div className={`${classes.second} ${classes.cool} ${classes.compName}`}><h1>e</h1></div>
        <div className={`${classes.third} ${classes.cool} ${classes.compName}`}><h1>v</h1></div>
        <div className={`${classes.fourth} ${classes.cool} ${classes.compName}`}><h1>e</h1></div>
        <div className={`${classes.fifth} ${classes.cool} ${classes.compName}`}><h1>n</h1></div>
        <div className={`${classes.sixth} ${classes.cool} ${classes.compName}`}><h1>t</h1></div>
        <div className={`${classes.seventh} ${classes.cool} ${classes.compName}`}><h1>l</h1></div>
        <div className={`${classes.eight} ${classes.cool} ${classes.compName}`}><h1>i</h1></div>
        <div className={`${classes.ninth} ${classes.cool} ${classes.compName}`}><h1>f</h1></div>
        <div className={`${classes.tenth} ${classes.cool} ${classes.compName}`}><h1>y</h1></div>
      </div>
      <div className={` center ${classes.bod}`} style={{display: getStarted}}>
        <div className="container">
          <h1>Discover Upcoming Events Near You</h1>
          <img className={`${classes.img}`} src={image} alt="eventimage" />
          <div className={`${classes.but}`}>
            <div className={classes.about}>
              Get Personalised recommendations for local events like concerts,
              festivals, workshop, games, and never miss the fun.
            </div>
            <div className={`btn btn-light roborobo ${classes.start}`} onClick={handleDirection}>
              <span>Get Started</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCom;
