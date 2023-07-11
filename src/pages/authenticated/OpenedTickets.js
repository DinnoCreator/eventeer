import Tickets from "../../components/purchased/tickets/Tickets";
import Footer from "../../Layout/Footer";
import { useEffect } from "react";

const OpenedTickets = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Tickets />
      <div style={{ height: "200px" }}></div>
      <Footer />
    </>
  );
};

export default OpenedTickets;
