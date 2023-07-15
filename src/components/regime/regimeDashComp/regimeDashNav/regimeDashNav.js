import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import classes from "../../RegimeView.module.css";

const RegimeDashNav = () => {
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
              <span className={`${classes.creator}`}>
                {" "}
                Creator <i className="fa-solid fa-chevron-right"></i>
              </span>
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
                  <span className={`${classes.creator1}`}>
                    {" "}
                    <i className="fa-solid fa-chevron-left"></i> Creator
                  </span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className={`${classes.link}`} to="/tickets">
                    Regime info
                  </Link>
                  <Link className={`${classes.link}`} to="/profile">
                    Admins
                  </Link>
                  <Link className={`${classes.link}`} to="/profile">
                    Scan clients
                  </Link>
                  <Link className={`${classes.link}`} to="/profile">
                    Withdrawal
                  </Link>
                  <hr></hr>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default RegimeDashNav;
