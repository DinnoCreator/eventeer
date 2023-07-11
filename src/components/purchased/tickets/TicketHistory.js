import classes from "../tickets/TicketHistory.module.css";
import classes1 from "../tickets/Tickets.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TicketsBody from "./TicketsBody";

const TicketHistory = ({ tickets }) => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const img1 =
    "https://media.istockphoto.com/id/1412446063/photo/multiracial-smiling-friends-enjoying-on-the-boat.jpg?s=612x612&w=is&k=20&c=SSIv0T1DBO9z60EnM_FhVFVUvkXP4vWj54793--xGLY=";

  const handleOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };
  const handleClose = () => {
    !close ? setClose(true) : setClose(false);
  };

  const isOpen = () => {
    if (!open) {
      return (
        <>
          <div
            className={`${classes.setContent} roborobo shadowB`}
            onClick={handleOpen}
          >
            <div className={`container`}>
              <div className="container hstack">
                <p>
                  <i className="fa-solid fa-right-to-bracket"></i>{" "}
                  &nbsp;&nbsp;Open Tickets
                </p>
                <div className="ms-auto">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (open) {
      return (
        <>
          <div
            className={`${classes.setContent} roborobo shadowB`}
            onClick={handleOpen}
          >
            <div className={`container`}>
              <div className="container hstack">
                <p>
                  <i className="fa-solid fa-right-to-bracket"></i>{" "}
                  &nbsp;&nbsp;Open Tickets
                </p>
                <div className="ms-auto">
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
              </div>
            </div>
          </div>
          <TicketsBody tickets={tickets} status={"ongoing"} />
        </>
      );
    }
  };

  const isClosed = () => {
    if (!close) {
      return (
        <div
          className={`${classes.setContent} roborobo shadowB`}
          onClick={handleClose}
        >
          <div className={`container`}>
            <div className="container hstack">
              <p>
                <i className="fa-solid fa-right-from-bracket"></i>{" "}
                &nbsp;&nbsp;Closed Tickets
              </p>
              <div className="ms-auto">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (close) {
      return (
        <>
          <div
            className={`${classes.setContent} roborobo shadowB`}
            onClick={handleClose}
          >
            <div className={`container`}>
              <div className="container hstack">
                <p>
                  <i className="fa-solid fa-right-from-bracket"></i>{" "}
                  &nbsp;&nbsp;Closed Tickets
                </p>
                <div className="ms-auto">
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
              </div>
            </div>
          </div>
          <TicketsBody tickets={tickets} status={"ended"} />
        </>
      );
    }
  };

  return (
    <>
      {isOpen()}
      {isClosed()}
    </>
  );
};

export default TicketHistory;
