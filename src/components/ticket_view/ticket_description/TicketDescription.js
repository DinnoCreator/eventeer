import { useState } from "react";

const TicketDescription = ({ regimeDescription }) => {
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
    return (
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
            {regimeDescription}
          </p>
        </div>
      </div>
    );
  }
}

export default TicketDescription;