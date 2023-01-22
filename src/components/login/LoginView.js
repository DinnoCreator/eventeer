import classes from "../login/LoginView.module.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

const LoginView = () => {
  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash")
  const pass = useRef();

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup")
  }

  //password visibility handler
  const showPassword = () => {
    setshow(!show);
    show ? setEye("fa-eye-slash") : setEye("fa-eye");
    pass.current.type = show ? "password" : "text";
  };

  return (
    <>
      <div className={` mt-5 ${classes.bod}`}>
        <h1>Reventlify</h1>
        <h3>Never miss the fun...</h3>
        <div className="container">
          <form className="container">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                autoComplete="off"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <span className={`d-flex ${classes.white}`}>
              <input
                type="password"
                className="form-control me-2"
                id="exampleInputPassword1"
                autoComplete="off"
                ref={pass}
              />
              <button className={`btn ${classes.eye}`} onClick={showPassword} type="button">
              <i className={`fa-regular ${eye}`}></i>
              </button>
              </span>
              <div id="emailHelp" className="form-text">min. 8 characters</div>
            </div>
            <div className={`d-grid gap-2 btn shadowB ${classes.login}`}>
              Login
            </div>
            
            <Link className={`${classes.forgot}`} to="/reset">Forgotten password?</Link>

            <hr/>
            <h4 className="center mb-3">or</h4>
            <div className={`d-grid gap-2 shadowB btn ${classes.signup}`} onClick={handleSignUp}>
              Signup
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginView;
