// import { Fragment } from "react";
import React, { useState, useRef } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { neat } from "../../utilities/textUtil";
import { api } from "../../link/API";

function PurchaseModal() {
  const location = useLocation();
  let navigate = useNavigate();
  const rAmount = Number(location.state.priceAmount);
  const { regimeId, priceName, pricingId, affiliate } = location.state;
  // error messages and status
  const [postError, setPostError] = useState("");
  const [dip, setDip] = useState("none");
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(1);
  const [amount, setAmount] = useState(rAmount);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    if (counter === 10) {
      return;
    }
    // Counter state is incremented
    setCounter(counter + 1);
    setAmount(rAmount * (counter + 1));
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    if (counter === 1) {
      return;
    }
    // Counter state is decremented
    setCounter(counter - 1);
    setAmount(amount - rAmount);
  };

  const handleClose = () => {
    navigate(-1);
  };

  const buyOrGet = () => {
    if (rAmount === 0) {
      return <span>Get&nbsp;</span>;
    } else {
      return <span>Buy&nbsp;</span>;
    }
  };
  const freeOrNot = () => {
    if (rAmount === 0) {
      return <span>&nbsp;Free&nbsp;</span>;
    } else {
      return <span>&nbsp;</span>;
    }
  };
  const pName = () => {
    if (
      priceName.toLowerCase() === "ticket" ||
      priceName.toLowerCase() === "tickets" ||
      priceName.toLowerCase() === "free"
    ) {
      return <span>ticket</span>;
    } else {
      return <span>{priceName}&nbsp;ticket</span>;
    }
  };

  //state for showing modal on load
  // const [show, setShow] = useState(true);
  const getUser = async () => {
    try {
      if (rAmount === 0) {
        return;
      } else {
        await fetch(`${api}/user/buyticket`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            amount,
            pricingId,
            regimeId,
            affiliate,
          }),
        }).then(async (res) => {
          const data = await res.json();
          if (res.status !== 401 && res.status !== 200) {
            return setPostError(data);
          } else if (res.status === 401 && res.status !== 200) {
            return navigate("/login");
          } else {
            return window.location.replace(data);
          }
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <Modal show={true} onHide={handleClose} centered>
        {/* <Modal show={show} backdrop="static" centered> */}
        <Modal.Header>
          <Modal.Title>
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {neat(location.state.regimeName)}
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            {postError && ( // then if changed flag is false show error message.
              <div
                className="container"
                style={{ color: "red", display: { dip } }}
              >
                <span>{postError}</span>
              </div>
            )}
            <h3 className="center">
              {buyOrGet()}
              {counter}
              {freeOrNot()}
              {pName()}
              {counter > 1 ? "s" : ""}
            </h3>
            <strong>
              <h1 className="center">N{Number(amount).toLocaleString()}</h1>
            </strong>
            {/* <input
                            type="hidden"
                            ref={accNo}
                            value={location.state.accNo}
                        ></input>
                        <h3>{location.state.accNo}</h3>
                        <h3>{location.state.accName}</h3>
                        <h3>{location.state.accType}</h3> */}
            <h1 className="center">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClick2}
              >
                <RemoveIcon />
              </button>
              &nbsp;&nbsp;{counter}&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-success"
                onClick={handleClick1}
              >
                <AddIcon />
              </button>
            </h1>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={getUser}>
            Buy Ticket!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PurchaseModal;
