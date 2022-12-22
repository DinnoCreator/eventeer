import classes from "../tickets/Tickets.module.css";
import { useNavigate } from "react-router-dom";

const TicketsBody = () => {
  const navigate = useNavigate();
  const img1 =
    "https://media.istockphoto.com/id/1412446063/photo/multiracial-smiling-friends-enjoying-on-the-boat.jpg?s=612x612&w=is&k=20&c=SSIv0T1DBO9z60EnM_FhVFVUvkXP4vWj54793--xGLY=";

  return (
    <>
      <div
        className={`hstack ${classes.ticketStrip}`}
        onClick={() => {
          return navigate("/ticket");
        }}
      >
        <img src={img1} width="130x" alt="ticket" />
        <span className={`ms-auto ${classes.ticketStripInfo}`}>
          <p>Calabar Pool Party</p>
          <p>
            <i
              style={{
                color: "white",
                backgroundColor: "#55CCF8",
              }}
              class="fa-solid fa-champagne-glasses"
            ></i>
            <span className={classes.ID}>#04512365741</span>
          </p>
        </span>
      </div>
      <div
        className={`hstack ${classes.ticketStrip}`}
        onClick={() => {
          return navigate("/ticket");
        }}
      >
        <img src={img1} width="130px" alt="ticket" />
        <span className={`ms-auto ${classes.ticketStripInfo}`}>
          <p>Calabar Pool Party</p>
          <p>
            <i
              style={{
                color: "white",
                backgroundColor: "#55CCF8",
              }}
              class="fa-solid fa-champagne-glasses"
            ></i>
            <span className={classes.ID}>#04512365741</span>
          </p>
        </span>
      </div>
      <div
        className={`hstack ${classes.ticketStrip}`}
        onClick={() => {
          return navigate("/ticket");
        }}
      >
        <img src={img1} width="130px" alt="ticket" />
        <span className={`ms-auto ${classes.ticketStripInfo}`}>
          <p>Calabar Pool Party</p>
          <p>
            <i
              style={{
                color: "white",
                backgroundColor: "#55CCF8",
              }}
              class="fa-solid fa-champagne-glasses"
            ></i>
            <span className={classes.ID}>#04512365741</span>
          </p>
        </span>
      </div>
      <div
        className={`hstack ${classes.ticketStrip}`}
        onClick={() => {
          return navigate("/ticket");
        }}
      >
        <img src={img1} width="130px" alt="ticket" />
        <span className={`ms-auto ${classes.ticketStripInfo}`}>
          <p>Calabar Pool Party</p>
          <p>
            <i
              style={{
                color: "white",
                backgroundColor: "#55CCF8",
              }}
              class="fa-solid fa-champagne-glasses"
            ></i>
            <span className={classes.ID}>#04512365741</span>
          </p>
        </span>
      </div>
    </>
  );
};

export default TicketsBody;
