import classes from "../../RegimeView.module.css";

const RegimeParticipants = () => {
  return (
    <div className={`container shadowB ${classes.strip}`}>
      <div className={`container hstack ${classes.details}`}>
        <div>
          <h3>People going</h3>
          <h6>Total</h6>
        </div>
        <div className="ms-auto">
          <img
            alt="tr"
            src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
            className={`${classes.bodrad}`}
          />
          <img
            alt="tr"
            src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
            className={`${classes.bodrad}`}
          />
          <div className={`${classes.fake}`}>+2</div>
          <p>5,000</p>
        </div>
      </div>
    </div>
  );
};

export default RegimeParticipants;
