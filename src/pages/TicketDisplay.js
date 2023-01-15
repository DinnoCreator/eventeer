import TicketImageView from "../components/ticket_view/ticket_image/TicketImageView";
import TicketInterest from "../components/ticket_view/ticket_interest/TicketInterest";
import { useEffect } from "react";

const TicketDisplay = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* <div class="mapouter">
            <div class="gmap_canvas">
                <iframe title="Campus Tour" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=marian ,calabar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <a href="https://formatjson.org/">format json</a>
            </div>
        </div> */}
      <TicketImageView />
      <TicketInterest />
      <div className="container center mt-2">
        <h4 style={{ color: "#7165E3", marginBottom: "0" }}>
          Event Description
        </h4>
        <h4 style={{ color: "#7165E3", marginTop: "0" }}>
          <i class="fa-solid fa-caret-down"></i>
        </h4>
        <div className="container">
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            lacinia tincidunt mattis. In congue vestibulum pulvinar. Nullam
            dictum diam non nibh consequat, ac molestie lectus ultricies. Aenean
            accumsan dictum sollicitudin. Sed at neque porta augue lobortis
            laoreet. Etiam arcu tortor, cursus in erat sit amet, porta
            vestibulum est. Duis urna turpis, facilisis vitae aliquet at,
            imperdiet vitae magna. Fusce lectus leo, maximus sit amet mauris
            vitae, bibendum pretium dui. Praesent vel massa tincidunt, convallis
            sem ut, feugiat nulla. Etiam lobortis ut est vel euismod. Integer
            varius turpis et nibh tempus, ac sollicitudin nisi viverra. Quisque
            ornare nisi a augue commodo, sit amet tempor ipsum iaculis. Nam vel
            augue vitae velit posuere mattis. Nam lobortis efficitur turpis,
            quis venenatis elit mollis eu.
          </p>
        </div>
      </div>
    </>
  );
};

export default TicketDisplay;
