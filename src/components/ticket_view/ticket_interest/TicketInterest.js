import classes from "../ticket_interest/Ticketinterest.module.css";

const TicketInterest = () => {
  const location = "eleven eleven calabar";
  return (
    <div className={classes.imgInfo}>
      <div className="container">
        <div className={`container ${classes.mag}`}>
          <ul className={`${classes.ul}`}>
            <li className="mb-2 stuff">
              <span className={`reventlify`}>Regular</span>&nbsp;
              -&nbsp;
              <span className={`${classes.priceAmount} ${classes.go}`}>N2,000</span> &nbsp;&nbsp;
              <span className={`${classes.priceName}`}>Buy</span>
              {/* <button className={`btn ${classes.buy}`}>BUY</button> */}
            </li>
            <li className="stuff">
              <span className={`reventlify`}> Vip</span>&nbsp;
              -&nbsp;
              <span className={`${classes.priceAmount} ${classes.go}`}>N10,000</span> &nbsp;&nbsp;
              <span className={`${classes.priceName}`}>Buy</span>
              {/* <button className={`btn ${classes.buy}`}>BUY</button> */}
            </li>
          </ul>
        </div>
        <div className={`${classes.pad} ${classes.flexTDP} container`}>
          <div className={`${classes.flexTDCL}`}>
            <div className={`${classes.icon}`}>
              <i className="fa-regular fa-clock"></i>
            </div>
          </div>
          <div className={`${classes.flexTDCC}`}>
            <div>
              <div className={`${classes.go}`}>December 24, 2022</div>
              <div className={`bold`}>8:00 - 10:00 PM</div>
            </div>
          </div>
          <div className={` ${classes.flexTDCR}`}>
            <div className={`${classes.directionA}`}>
            </div>
          </div>
        </div>
        <div className={`${classes.pad} ${classes.flexTDP} container`}>
          <div className={`${classes.flexTDCL}`}>
            <div className={`${classes.icon}`}>
              <i className="fa-solid fa-location-dot"></i>
            </div>
          </div>
          <div className={`${classes.flexTDCC}`}>
            <div>
              <div className={`${classes.go}`}>Eleven Eleven, Calabar</div>
              <div className={`bold`}>Marina Resort</div>
            </div>
          </div>
          <div className={` ${classes.flexTDCR}`}>
            <div className={`${classes.direction}`}>
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://www.google.com/maps/search/${location}`}
              >
                <i className="fa-solid fa-diamond-turn-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInterest;
