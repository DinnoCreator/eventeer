import classes from "../welcome/Welcomeboard.module.css";

const WelcomeBoard = (props) => {
  return (
    <>
      <div className={` ${classes.img}`}>
        <div className={`container ${classes.welcome}`}>
          <h5>Welcome back</h5>
          <h1>{props.firstname}</h1>
        </div>
        <div className="container">
        <div className="container shadowB roboroboS edit">
        <form className="d-flex" role="search">
        <input className={`form-control ${classes.foc} me-2 b`} type="search" placeholder="Search event..." aria-label="Search" />
        <button className="btn b bGreen ba" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeBoard;
