import { useState } from "react";

const TicketDescription = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState("animate")

  const handleShow = () => {
    if (!show) {
        setShow(true);
        window.scrollTo({ top: document.body.offsetHeight, left: 0, behavior: "smooth" });
        return setAnimate("animate-remove");
    } else {
        setShow(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return setAnimate("animate");
    }
  }

  if (!show) {
    return (
        <div className="container center mt-2">
        <div className={animate} onClick={handleShow}>
        <h4 style={{ color: "#7165E3", marginBottom: "0" }}>
          Event Description
        </h4>
        <h4 style={{ color: "#7165E3", marginTop: "0" }}>
          <i className="fa-solid fa-caret-down"></i>
        </h4>
        </div>
      </div>
    )
  }
   else {
     return(
        <div className="container center mt-2">
        <div className={animate} onClick={handleShow}>
        <h4 style={{ color: "#7165E3", marginBottom: "0" }}>
          Event Description
        </h4>
        <h4 style={{ color: "#7165E3", marginTop: "0" }}>
          <i className="fa-solid fa-caret-up"></i>
        </h4>
        </div>
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
    );}
}

export default TicketDescription;