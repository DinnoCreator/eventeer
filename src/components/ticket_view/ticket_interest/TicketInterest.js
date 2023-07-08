import classes from "../ticket_interest/Ticketinterest.module.css";

const TicketInterest = ({
  regimeStartDate,
  regimeStartTime,
  regimeEndTime,
  regimeAddress,
  regimeCity,
  regimePricings
}) => {
  const location = "eleven eleven calabar";
  return (
    <div className={classes.imgInfo}>
      <div className="container">
        <div className={`container ${classes.mag}`}>
          <ul className={`${classes.ul}`}>
            {
              regimePricings.map((pricing) => {
                return (
                  <li className="mb-2 stuff">
                    <span className={`reventlify`}>{pricing.pricing_name}</span>&nbsp;
                    -&nbsp;

                    {Number(pricing.pricing_amount) === 0 ? `Free` : (`N ${Number(pricing.pricing_amount).toLocaleString()} `)}
                    &nbsp;&nbsp;
                    <span className={`${classes.priceName}`}>
                      {Number(pricing.pricing_amount) === 0 ? `Get ticket` : `Buy`}

                    </span>
                    {/* <button className={`btn ${classes.buy}`}>BUY</button> */}
                  </li>
                )
              })
            }
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
              <div className={`${classes.go}`}>{regimeStartDate}</div>
              {/* <div className={`${classes.go}`}>December 24, 2022</div> */}
              <div className={`bold`}>{regimeStartTime} - {regimeEndTime}</div>
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
              <div className={`${classes.go}`}>{regimeAddress}</div>
              <div className={`bold`}>{regimeCity}</div>
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
