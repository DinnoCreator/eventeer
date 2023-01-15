import classes from "../ticket_interest/Ticketinterest.module.css";

const TicketInterest = () => {
  const location = "eleven eleven calabar";
  return (
    <div className={classes.imgInfo}>
      <div className="container">
        <div className={`container ${classes.mag}`}>
          <div className={`d-grid ${classes.but}`}>
            <button
              className={`btn btn-lg  shadowB ${classes.buy} roborobo`}
              type="button"
            >
              <i className="fa-regular fa-square-check"></i> Buy - N2,000.00
            </button>
          </div>
        </div>
        <div className={`container`}>
          <h3>
            24 <span className={`${classes.go}`}>people are going</span>
          </h3>
        </div>
        <div className={`container ${classes.pad}`}>
          <div className={`${classes.icon}`}>
            <i className="fa-regular fa-clock"></i>
            <span className={`${classes.date}`}>
              <p className={`${classes.go}`}>December 24, 2022</p>
              <p className={`${classes.p2}`}>8:00 - 10:00 PM</p>
            </span>
          </div>
        </div>
        <div className={`container hstack ${classes.pad}`}>
          <div className={`${classes.icon}`}>
            <i className="fa-solid fa-location-dot"></i>
            <span className={`${classes.date}`}>
              <p className={`${classes.go}`}>Eleven Eleven, Calabar</p>
              <p className={`${classes.p2}`}>Marina Resort</p>
            </span>
          </div>
          <div className={`ms-auto ${classes.direction}`}>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.google.com/maps/search/${location}`}
            >
              <i class="fa-solid fa-diamond-turn-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInterest;
