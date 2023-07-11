import classes from "../tickets/Tickets.module.css";
import TicketsBody from "./TicketsBody";
import TicketHistory from "./TicketHistory";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../link/API";

const Tickets = () => {
  const navigate = useNavigate();
  const [switchh, switchhSet] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [tickets, setTickets] = useState([]);

  const handleSwitch = () => {
    !switchh ? switchhSet(true) : switchhSet(false);
  };

  const count = tickets.filter(function (item) {
    if (item.regime_status === "ongoing") {
      return true;
    } else {
      return false;
    }
  }).length;
  // const count = 0;
  const getTickets = useCallback(async () => {
    try {
      await fetch(`${api}/user/ticketsowned`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: sessionStorage.getItem("token"),
        },
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setTickets(data);
          console.log(data);
          return setFetching(false);
        } else if (res.status === 401) {
          setFetching(false);
          return navigate("/login");
        } else {
          setTickets(data);
          console.log(data);
          return setFetching(false);
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const zeroCount = () => {
    if (count !== 0) {
      return <TicketsBody tickets={tickets} status={"ongoing"} />;
    } else {
      return <h1 className="center mt-5"> Nothing to show</h1>;
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getTickets();
  }, [getTickets]);
  if (!switchh && !fetching) {
    return (
      <>
        <div className="container">
          <div className={`container hstack ${classes.pad}`}>
            <h2>
              {count} open ticket{count > 1 ? "s" : ""}...
            </h2>
            <h2 className={`ms-auto ${classes.switch}`} onClick={handleSwitch}>
              <i className="fa-solid fa-clock-rotate-left"></i>
            </h2>
          </div>
          {zeroCount()}
        </div>
      </>
    );
  } else if (!switchh && fetching) {
    return (
      <>
        <div className={`center`}>
          <div className={`cool compName`}>
            <h1>R</h1>
          </div>
          <div className={`second cool compName`}>
            <h1>e</h1>
          </div>
          <div className={`third cool compName`}>
            <h1>v</h1>
          </div>
          <div className={`fourth cool compName`}>
            <h1>e</h1>
          </div>
          <div className={`fifth cool compName`}>
            <h1>n</h1>
          </div>
          <div className={`sixth cool compName`}>
            <h1>t</h1>
          </div>
          <div className={`seventh cool compName`}>
            <h1>l</h1>
          </div>
          <div className={`eight cool compName`}>
            <h1>i</h1>
          </div>
          <div className={`ninth cool compName`}>
            <h1>f</h1>
          </div>
          <div className={`tenth cool compName`}>
            <h1>y</h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className={`container hstack ${classes.pad}`}>
            <h2>Ticket history...</h2>
            <h2
              className={`ms-auto ${classes.switch}`}
              style={{ color: "#7165E3" }}
              onClick={handleSwitch}
            >
              <i className="fa-solid fa-clock-rotate-left"></i>
            </h2>
          </div>
          <TicketHistory tickets={tickets} />
        </div>
      </>
    );
  }
};
export default Tickets;
