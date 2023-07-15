import classes from "../../RegimeView.module.css";

const RegimeBal = ({ regimeName }) => {
  return (
    <div className={`container center ${classes.bal}`}>
      <h2>Bal: N25,000,000.00 </h2>
      {/* <div>Regime ID: {regimeid}</div>
          <div>Affiliate ID: {id}</div> */}
      <h4>{regimeName}</h4>
    </div>
  );
};

export default RegimeBal;
