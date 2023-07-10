import { neat } from "../../../utilities/textUtil";
import classes from "../ticket_interest/Ticketinterest.module.css";
import truncate from "lodash.truncate";
import { useNavigate } from "react-router-dom";

const TicketInterest = ({
  regimeStartDate,
  regimeStartTime,
  regimeEndTime,
  regimeAddress,
  regimeCity,
  regimePricings,
  regimeName,
  regimeId,
  affiliate,
  regimeImg,
}) => {
  const navigate = useNavigate();
  const location = `${regimeAddress} ${regimeCity}`;
  return (
    <div className={classes.imgInfo}>
      <div className="container">
        <div className={`container ${classes.mag}`}>
          <ul className={`${classes.ul}`}>
            {regimePricings.map((pricing) => {
              return (
                <li
                  key={pricing.pricing_id}
                  className="mb-2 stuff"
                  onClick={() => {
                    navigate("/purchase", {
                      state: {
                        regimeName,
                        regimeId,
                        affiliate,
                        regimeImg,
                        pricingId: pricing.pricing_id,
                        priceName: pricing.pricing_name,
                        priceAmount: pricing.pricing_amount,
                      },
                    });
                  }}
                >
                  <span className={`reventlify`}>
                    {truncate(pricing.pricing_name, {
                      length: 25,
                      separator: /,? +/,
                    })}
                  </span>
                  &nbsp; -&nbsp;
                  {Number(pricing.pricing_amount) === 0
                    ? `Free`
                    : `N${Number(pricing.pricing_amount).toLocaleString()} `}
                  &nbsp;&nbsp;
                  <span className={`${classes.priceName}`}>
                    {Number(pricing.pricing_amount) === 0
                      ? `Get ticket`
                      : `Buy`}
                  </span>
                  {/* <button className={`btn ${classes.buy}`}>BUY</button> */}
                </li>
              );
            })}
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
              <div className={`bold`}>
                {regimeStartTime} - {regimeEndTime}
              </div>
            </div>
          </div>
          <div className={` ${classes.flexTDCR}`}>
            <div className={`${classes.directionA}`}></div>
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
              <div className={`${classes.go}`}>
                {neat(
                  truncate(regimeAddress, {
                    length: 25,
                    separator: /,? +/,
                  })
                )}
              </div>
              <div className={`bold`}>
                {neat(
                  truncate(regimeCity, {
                    length: 25,
                    separator: /,? +/,
                  })
                )}
              </div>
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
