import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import classes from "../regime/RegimeView.module.css";

const RegimeView = () => {
  const [affiliate, setAffiliate] = useState("disabled");
  const handleAffiliate = () => {
    affiliate === "enabled"
      ? setAffiliate("disabled")
      : setAffiliate("enabled");
  };
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
            <Navbar.Brand href="#">
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
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <div className={`container center ${classes.bal}`}>
        <h2>Bal: N25,000,000.00 </h2>
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
        <h6>1 hour ago</h6>
        </div>
        <div>
        <h5>Ticket #123452637451 was purchased</h5>
        <h6>1 hour ago</h6>
        </div>
        <div>
        <h5>Ticket #123452637451 was purchased</h5>
        <h6>1 hour ago</h6>
        </div>
        <div>
        <h5>Ticket #123452637451 was purchased</h5>
        <h6>1 hour ago</h6>
        </div>
      </div>
      </div>
    </>
  );
};

export default RegimeView;
