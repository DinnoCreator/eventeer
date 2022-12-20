import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container center white">
      <nav className="navbar navbar-expand fixed-bottom white shadowT">
      <ul className="navbar-nav myContainer">
        <li className="nav-item myContainer-fluid">
          <NavLink 
          style={({ isActive }) =>
          isActive
            ? {
                color: "#7165E3",
                fontSize: "20px"
              }
            : { color: "#828282" }
        }
          className="nav-link" to="/">
          <i className="fa-solid fa-magnifying-glass"></i><br/>
            <span>Explore</span>
          </NavLink>
        </li>
        <li className="nav-item myContainer-fluid">
          <NavLink 
          style={({ isActive }) =>
          isActive
            ? {
                color: "#7165E3",
                fontSize: "20px"
              }
            : { color: "#828282" }}
         className="nav-link" to="/tickets">
          <i className="fa-regular fa-square-check"></i><br/>
            <span>Ticket</span>
          </NavLink>
        </li>
        <li className="nav-item myContainer-fluid">
          <NavLink 
          style={({ isActive }) =>
          isActive
            ? {
                color: "#7165E3",
                fontSize: "20px"
              }
            : { color: "#828282" }} 
            className="nav-link" to="/saved">
          <i className="fa-regular fa-bookmark"></i><br/>
            <span>Saved</span>    
          </NavLink>
        </li>
        <li className="nav-item myContainer-fluid">
          <NavLink 
          style={({ isActive }) =>
          isActive
            ? {
                color: "#7165E3",
                fontSize: "20px"
              }
            : { color: "#828282" }}
             className="nav-link" to="/profile">
          <i className="fa-regular fa-user"></i><br/>
            <span>Profile</span>    
          </NavLink>
        </li>
      </ul>
    </nav>
      </div>
    </>
  );
};

export default Footer;
