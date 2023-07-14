import Ticket from "../../components/purchased/ticket/Ticket";
import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { api } from "../../link/API";
import TicketSkeleton from "../../components/purchased/ticket/TicketSkeleton";

const PurchasedTicket = () => {
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(true);
  const [found, setFound] = useState(false);
  const [ticketDetails, setTicketDetails] = useState();
  const { pathname } = useLocation();
  const { id } = useParams();
  const getTicketDetails = useCallback(async () => {
    try {
      await fetch(`${api}/user/ticketowned/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: sessionStorage.getItem("token"),
        },
      }).then(async (res) => {
        const jsonData = await res.json();
        if (res.status === 200) {
          setTicketDetails(jsonData);
          setFound(true);
          return setIsFetching(false);
        } else if (res.status === 401 || res.status === 403) {
          setIsFetching(false);
          return navigate("/login", {
            state: {
              prevPath: pathname,
            },
          });
        } else {
          setFound(false);
          return setIsFetching(false);
        }
      });
    } catch (error) {}
  }, [id]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getTicketDetails();
  }, [getTicketDetails]);

  if (isFetching && !found) {
    return <TicketSkeleton />;
  } else if (!isFetching && found) {
    return (
      <>
        <Ticket ticketDetails={ticketDetails} />
        <div style={{ height: "200px" }}></div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="center mt-5">Ticket does not exist</h1>
      </>
    );
  }
};

export default PurchasedTicket;
