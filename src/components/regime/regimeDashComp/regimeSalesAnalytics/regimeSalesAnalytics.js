import classes from "../../RegimeView.module.css";

const RegimeSalesAnalytics = () => {
  return (
    <div className={`container shadowB ${classes.strip}`}>
      <div className={`container hstack ${classes.details}`}>
        <div>
          <h3>Sales</h3>
          <h6>Today</h6>
        </div>
        <div className="ms-auto">
          <i className="fa-solid fa-arrow-trend-up"></i>
          <p>N37,000.00</p>
        </div>
      </div>
    </div>
  );
};

export default RegimeSalesAnalytics;
