import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import classes from "../regime/RegimeView.module.css";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const RegimeView = () => {
  const [affiliate, setAffiliate] = useState("disabled");
  const handleAffiliate = () => {
    affiliate === "enabled"
      ? setAffiliate("disabled")
      : setAffiliate("enabled");
  };

  // const { regimeid } = useParams();
  // const { id } = useParams();

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          bg="light"
          expand={expand}
          className="container"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="/regime">
              <span className={`${classes.creator}`}> Creator <i className="fa-solid fa-chevron-right"></i></span>
              <img
                alt="tr"
                src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
                width="40px"
                className={`${classes.bodrad}`}
              />
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    alt="tr"
                    src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
                    width="50px"
                    className={`${classes.bodrad}`}
                  />
                  <span className={`${classes.creator1}`}> <i className="fa-solid fa-chevron-left"></i> Creator</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className={`${classes.link}`} to="/tickets">Regime info</Link>
                  <Link className={`${classes.link}`} to="/profile">Admins</Link>
                  <Link className={`${classes.link}`} to="/profile">Scan clients</Link>
                  <Link className={`${classes.link}`} to="/profile">Withdrawal</Link>
                  <hr></hr>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <div className={`container center ${classes.bal}`}>
        <h2>Bal: N25,000,000.00 </h2>
        {/* <div>Regime ID: {regimeid}</div>
        <div>Affiliate ID: {id}</div> */}
        <h4>Calabar pool party</h4>
      </div>

      <div className="hstack fixed-bottom">
        <div className={`ms-auto btn ${classes.clickable}`}>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label={
                affiliate === "enabled"
                  ? "Affiliate enabled"
                  : "Affiliate disabled"
              }
              onChange={handleAffiliate}
            />
          </FormGroup>
        </div>
      </div>

      <div className="container">
      <div className={`container shadowB ${classes.strip}`}>
        <div className={`container hstack ${classes.details}`}>
          <div>
            <h3>Sales</h3>
            <h6>Today</h6>
          </div>
          <div className="ms-auto">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <p>N37,000.00</p>
          </div>
        </div>
      </div>
      <div className={`container shadowB ${classes.strip}`}>
        <div className={`container hstack ${classes.details}`}>
          <div>
            <h3>People going</h3>
            <h6>Total</h6>
          </div>
          <div className="ms-auto">
            <img
              alt="tr"
              src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
              className={`${classes.bodrad}`}
            />
            <img
              alt="tr"
              src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large"
              className={`${classes.bodrad}`}
            />
            <div className={`${classes.fake}`}>
              +2
            </div>
            <p>5,000</p>
          </div>
        </div>
      </div>
      <div className={`container ${classes.activity}`}>
        <div className="container">
        <h3>Activity</h3>
        </div>
        <div>
        <h5>Ticket #123452637451 was purchased</h5>
        <h6>30 mins ago</h6>
        </div>
        <div>
        <h5>Ticket #123452637452 was purchased</h5>
        <h6>1 hour ago</h6>
        </div>
        <div>
        <h5>Ticket #123452637453 was purchased</h5>
        <h6>1 hour 30 mins ago</h6>
        </div>
        <div>
        <h5>Ticket #123452637454 was purchased</h5>
        <h6>2 hours ago</h6>
        </div>
      </div>
      </div>
    </>
  );
};

export default RegimeView;
