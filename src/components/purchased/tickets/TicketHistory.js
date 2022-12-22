import classes from "../tickets/TicketHistory.module.css";
import classes1 from "../tickets/Tickets.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketHistory = () => {
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);
    const navigate = useNavigate();
  const img1 =
    "https://media.istockphoto.com/id/1412446063/photo/multiracial-smiling-friends-enjoying-on-the-boat.jpg?s=612x612&w=is&k=20&c=SSIv0T1DBO9z60EnM_FhVFVUvkXP4vWj54793--xGLY=";

    const handleOpen = () => {
        (!open) ? setOpen(true) : setOpen(false);
    }
    const handleClose = () => {
        (!close) ? setClose(true) : setClose(false);
    }

    const isOpen = () => {
        if (!open) {
            return (
                <>
                <div className={`${classes.setContent}`} onClick={handleOpen}>
                <div className={`container`}>
                    <div className="container hstack">
                    <p>
                    <i class="fa-solid fa-right-to-bracket"></i> &nbsp;&nbsp;Opened
                    </p>
                    <div className="ms-auto">
                    <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    </div>
                </div>
                </div>
                </>
               
            );
        } else if (open){
    
            return (
            <>
            <div className={`${classes.setContent}`}  onClick={handleOpen}>
            <div className={`container`}>
                <div className="container hstack">
                <p>
                <i class="fa-solid fa-right-to-bracket"></i> &nbsp;&nbsp;Opened
                </p>
                <div className="ms-auto">
                <i class="fa-solid fa-chevron-up"></i>
                </div>
                </div>
            </div>
            </div>
            <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130x" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
          <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
          <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
          <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
            </>
        );
        } 
    }

    const isClosed = () => {
        if (!close) {
            return (
                
            <div className={`${classes.setContent}`}  onClick={handleClose}>
            <div className={`container`}>
                <div className="container hstack">
                <p>
                <i class="fa-solid fa-right-from-bracket"></i> &nbsp;&nbsp;Closed
                </p>
                <div className="ms-auto">
                <i class="fa-solid fa-chevron-down"></i>
                </div>
                </div>
            </div>
            </div>
            )
        } else if (close){
            return (
                
            <>
            <div className={`${classes.setContent}`}  onClick={handleClose}>
            <div className={`container`}>
                <div className="container hstack">
                <p>
                <i class="fa-solid fa-right-from-bracket"></i> &nbsp;&nbsp;Closed
                </p>
                <div className="ms-auto">
                <i class="fa-solid fa-chevron-up"></i>
                </div>
                </div>
            </div>
            </div>
            <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
            <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
            <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
            <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
            <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
            <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
            <div
            className={`hstack ${classes1.ticketStrip}`}
            onClick={() => {
              return navigate("/ticket");
            }}
          >
            <img src={img1} width="130px" alt="ticket" />
            <span className={`ms-auto ${classes1.ticketStripInfo}`}>
              <p>Calabar Pool Party</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes1.ID}>#04512365741</span>
              </p>
            </span>
          </div>
            </>
            );
        }
    }

    return (
        <>
        {isOpen()}
        {isClosed()}
        </>
    )
}

export default TicketHistory