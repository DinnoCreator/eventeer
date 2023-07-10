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
import classes from "../purchaseModal/PurchaseModal.module.css";
import { BeatLoader } from "react-spinners";

function PurchaseModal() {
  const location = useLocation();
  let navigate = useNavigate();
  const rAmount = Number(location.state.priceAmount);
  const { regimeId, priceName, pricingId, affiliate, regimeImg } =
    location.state;
  // error messages and status
  const [postError, setPostError] = useState("");
  const [dip, setDip] = useState("none");
  const [buying, setBuying] = useState(false);
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
    setBuying(true);
    try {
      if (rAmount === 0) {
        setBuying(false);
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
            setBuying(false);
            return setPostError(data);
          } else if (res.status === 401 && res.status !== 200) {
            setBuying(false);
            return navigate("/login");
          } else {
            setBuying(false);
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
      <div
        style={{
          // backgroundImage: `url(${regimeImg})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <img
          className={classes.image}
          src={regimeImg}
          alt={location.state.regimeName}
          loading="lazy"
        />
      </div>
      <Modal show={true} onHide={handleClose} centered>
        {/* <Modal show={show} backdrop="static" centered> */}
        <Modal.Header style={{backgroundColor: "#f7f7f7c7"}}>
          <Modal.Title>
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {neat(location.state.regimeName)}
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#f7f7f7c7"}}>
          <div className="">
            {postError && ( // then if changed flag is false show error message.
              <div
                className="container"
                style={{ color: "red", display: { dip } }}
              >
                <span>{postError}</span>
              </div>
            )}
            <h3 className="center" style={{ color: "#828282" }}>
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
                className="btn shadowB white"
                style={{ backgroundColor: "#828282" }}
                onClick={handleClick2}
              >
                <RemoveIcon />
              </button>
              &nbsp;&nbsp;{counter}&nbsp;&nbsp;
              <button
                type="button"
                // className="btn btn-success"
                className="btn shadowB white"
                style={{ backgroundColor: "#828282" }}
                onClick={handleClick1}
              >
                <AddIcon />
              </button>
            </h1>
          </div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#f7f7f7c7"}}>
          <Button className={`btn shadowB bold`} onClick={getUser}>
            {buying ? (
              <>
                <BeatLoader color="#fff" loading={true} size={"12"} />
              </>
            ) : (
              <>Buy {counter} ticket{counter > 1 ? "s" : ""} !</>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PurchaseModal;
