// import { Fragment } from "react";
import React, { useState, useRef } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { neat } from "../../utilities/textUtil";
import { api } from "../../link/API";


function PurchaseModal() {
    const location = useLocation();
    let navigate = useNavigate();
    const rAmount = location.state.priceAmount;
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(1)
    const [amount, setAmount] = useState(rAmount)

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        if (counter === 10) {
            return;
        }
        // Counter state is incremented
        setCounter(counter + 1)
        setAmount(rAmount * (counter + 1))
    }

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        if (counter === 1) {
            return;
        }
        // Counter state is decremented
        setCounter(counter - 1)
        setAmount(amount - rAmount)
    }

    const handleClose = () => {
        navigate(-1)
    }

    //state for copy account number button
    const [copySuccess, setCopySuccess] = useState("");

    //state for showing modal on load
    const [show, setShow] = useState(true);

    const accNo = useRef(null);

    //copy to clipboard handler
    function copyToClipboard(e) {
        const copyText = accNo.current.value;
        navigator.clipboard.writeText(copyText);
        setCopySuccess(!copySuccess);
    }

    //sends to home
    function handleHome() {
        navigate("/");
    }
    //sends to create
    function handleCreate() {
        navigate("/create");
    }
    //sends to online banking sign up
    function handleOnline() {
        navigate("/dashboard");
    }
    //sends to customers accounts
    function handleAccounts() {
        navigate("/admindashboard");
    }

    //variable for copy accNo button display text
    const linkName = copySuccess ? "Copied!" : "Copy AccNumber";

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
            {/* <Modal show={show} backdrop="static" centered> */}
                <Modal.Header>
                    <Modal.Title>
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {neat(location.state.regimeName)}
                        </h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="centree">
                        <h3 className="center">Buy {counter} {location.state.priceName} ticket{counter > 1 ? 's' : ''}</h3>
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
                            </button>&nbsp;&nbsp;{counter}&nbsp;&nbsp;
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={handleClick1}
                            >
                                <AddIcon />
                            </button></h1>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleOnline}>
                        Buy Ticket!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default PurchaseModal;