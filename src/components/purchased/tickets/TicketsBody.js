import { textShrink } from "../../../utilities/textUtil";
import classes from "../tickets/Tickets.module.css";
import { useNavigate } from "react-router-dom";

const TicketsBody = ({ tickets, status }) => {
  const navigate = useNavigate();

  const count = tickets.filter(function (item) {
    if (item.regime_status === status) {
      return true;
    } else {
      return false;
    }
  }).length;

  const splicer = () => {
    return tickets.map((item) => {
      if (item.regime_status === status) {
        return (
          <div
            className={`stripFlexGeneral ${classes.ticketStrip} mt-3`}
            key={item.ticket_id}
            onClick={() => {
              return navigate(`/ticket/${item.ticket_id}`);
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
                {/* <p>{item.regime_name}</p> */}
                <p>{textShrink(item.regime_name)}</p>
              </div>
              <div className="stripFlexChild">
                <p>
                  <i
                    style={{
                      color: "white",
                      backgroundColor: "#55CCF8",
                    }}
                    className="fa-solid fa-champagne-glasses"
                  ></i>
                  <span className={classes.ID}>#{item.ticket_id}</span>
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
        <h1 className="center mt-5"> Nothing to show</h1>
      </>
    );
  }
};

export default TicketsBody;
