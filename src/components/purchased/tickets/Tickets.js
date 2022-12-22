import classes from "../tickets/Tickets.module.css";
import TicketsBody from "./TicketsBody";
import TicketHistory from "./TicketHistory";
import { useState } from "react";

const Tickets = () => {
    const [switchh, switchhSet] = useState(false);

    const handleSwitch = () => {
        (!switchh) ? switchhSet(true) : switchhSet(false);
    }
  if (!switchh) {
    return (
        <>
          <div className="container">
            <div className={`container hstack ${classes.pad}`}>
              <h2>4 open tickets...</h2>
              <h2 className={`ms-auto ${classes.switch}`} onClick={handleSwitch}>
                <i class="fa-solid fa-clock-rotate-left"></i>
              </h2>
            </div>
            <TicketsBody/>
          </div>
        </>
      );
  } else {
    return (
        <>
          <div className="container">
            <div className={`container hstack ${classes.pad}`}>
              <h2>Ticket history...</h2>
              <h2 className={`ms-auto ${classes.switch}`} style={{color: "#7165E3"}} onClick={handleSwitch}>
                <i class="fa-solid fa-clock-rotate-left"></i>
              </h2>
            </div>
            <TicketHistory/>
          </div>
        </>
      );
  }
};
export default Tickets;
