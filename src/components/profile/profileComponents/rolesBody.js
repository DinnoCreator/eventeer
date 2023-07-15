import classes from "../../purchased/tickets/Tickets.module.css";
import { useNavigate } from "react-router-dom";
import truncate from "lodash.truncate";
import { neat } from "../../../utilities/textUtil";

const RolesBody = ({ roles, status }) => {
  const navigate = useNavigate();

  const count = roles.filter(function (item) {
    if (item.regime_status === status) {
      return true;
    } else {
      return false;
    }
  }).length;

  const splicer = () => {
    return roles.map((item) => {
      if (item.regime_status === status) {
        return (
          <div
            className={`stripFlexGeneral ${classes.ticketStrip} mt-3`}
            key={item.regime_id}
            onClick={() => {
              return navigate(`/regime/${item.regime_id}`);
            }}
          >
            <div className="stripFlexGeneralChild1">
              <img
                src={item.regime_media}
                className="shrink"
                alt="event photo"
              />
            </div>
            <div
              className={`stripFlexGeneralChild stripFlex ${classes.ticketStripInfo}`}
            >
              <div className="stripFlexChild">
                <p>{neat(truncate(item.regime_name, {
                        'length': 26,
                        'separator': /,? +/
                      }))}</p>
              </div>
              <div className="stripFlexChild">
                <p>
                  {/* <i
                    style={{
                      color: "white",
                      backgroundColor: "#55CCF8",
                    }}
                    className="fa-solid fa-champagne-glasses"
                  ></i> */}
                  <span className={classes.ID}>Role: {item.regime_role}</span>
                </p>
              </div>
            </div>
          </div>
        );
      }
    });
  };
  if (Number(count) > 0) {
    return <>{splicer()}</>;
  } else {
    return (
      <>
        <h1 className="center mt-5 italic locationCol"> Nothing to show</h1>
      </>
    );
  }
};

export default RolesBody;
