import classes from "../../RegimeView.module.css";

const RegimeActivity = () => {
  return (
    <div className={`container ${classes.activity}`}>
      <div className="container">
        <h3>Activity</h3>
      </div>
      <div>
        <h5>Ticket #123452637451 was purchased</h5>
        <h6>30 mins ago</h6>
      </div>
      <div>
        <h5>Ticket #123452637452 was purchased</h5>
        <h6>1 hour ago</h6>
      </div>
      <div>
        <h5>Ticket #123452637453 was purchased</h5>
        <h6>1 hour 30 mins ago</h6>
      </div>
      <div>
        <h5>Ticket #123452637454 was purchased</h5>
        <h6>2 hours ago</h6>
      </div>
    </div>
  );
};

export default RegimeActivity;
