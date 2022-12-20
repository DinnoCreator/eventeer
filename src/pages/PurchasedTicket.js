import Ticket from "../components/purchased/ticket/Ticket";
import { useEffect } from "react";

const PurchasedTicket = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return(
        <>
          <Ticket/>
        </>
    );
}

export default PurchasedTicket;