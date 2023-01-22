import classes from "../signup/SignUpView.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUpView = () => {
  // form data
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [pWord, setPWord] = useState("");

  // error messages and status
  const [loginError, setLoginError] = useState("");
  const [dip, setDip] = useState("none");
  const [success, setSuccess] = useState("none");
  const [signup, setSignup] = useState("block");


  // handle loading on submit
  const [loading, setLoading] = useState(false);

  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash")
  const pass = useRef();

  let navigate = useNavigate();

  //password visibility handler
  const showPassword = () => {
    setshow(!show);
    show ? setEye("fa-eye-slash") : setEye("fa-eye");
    pass.current.type = show ? "password" : "text";
  };

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //api call for sending the user data to the backend
      await fetch("http://localhost:5000/signuptest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          fName,
          lName,
          pWord,
        }),
      }).then((res) => {
        if (res.status !== 200) {
          setDip("block");
          setLoading(false);
          return setLoginError(
            "Email in use by another user..."
          );
        } else {
          setLoading(false);
          setSuccess("block");
          setSignup("none")
          setTimeout(() => {
            navigate("/login")
          }, 3000);
        }
      });
    } catch (error) {
      
    }
  }

  return (
    <>
    {/* successful message */}
      <div className={`center`} style={{display: success}}>
        <div className={`${classes.first} ${classes.cool} ${classes.compName}`}><h1>S</h1></div>
        <div className={`${classes.second} ${classes.cool} ${classes.compName}`}><h1>u</h1></div>
        <div className={`${classes.third} ${classes.cool} ${classes.compName}`}><h1>c</h1></div>
        <div className={`${classes.fourth} ${classes.cool} ${classes.compName}`}><h1>c</h1></div>
        <div className={`${classes.fifth} ${classes.cool} ${classes.compName}`}><h1>e</h1></div>
        <div className={`${classes.sixth} ${classes.cool} ${classes.compName}`}><h1>s</h1></div>
        <div className={`${classes.seventh} ${classes.cool} ${classes.compName}`}><h1>s</h1></div>
        <div className={`${classes.eight} ${classes.cool} ${classes.compName}`}><h1>f</h1></div>
        <div className={`${classes.ninth} ${classes.cool} ${classes.compName}`}><h1>u</h1></div>
        <div className={`${classes.tenth} ${classes.cool} ${classes.compName}`}><h1>l...</h1></div>
      </div>

    {/* sign up handler */}
      <div className={` mt-5 ${classes.bod}`} style={{display: signup}}>
        <h1>Reventlify</h1>
        <h3>Never miss the fun...</h3>
        <div className="container">
        {loginError && ( // then if changed flag is false show error message.
            <div className="container" style={{ color: "red", display: { dip } }}>
              <span>{loginError}</span>
            </div>
          )}
          <form className="container"  onSubmit={onSubmitForm}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                autoComplete="off"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="labfname" className="form-label">
                First name
              </label>
              <input 
                type="text" 
                className="form-control"
                autoComplete="off" 
                id="labfname"
                value={fName}
                required
                onChange={(e) => setFName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="lablname" className="form-label">
                Last name
              </label>
              <input 
                type="text" 
                className="form-control"
                autoComplete="off" 
                id="lablname"
                value={lName}
                required
                onChange={(e) => setLName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <span className={`d-flex ${classes.white}`}>
                <input
                  type="password"
                  className="form-control me-2"
                  autoComplete="off"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                  minLength="8"
                  ref={pass}
                  value={pWord}
                  required
                  onChange={(e) => setPWord(e.target.value)}
                />
                <button className={`btn ${classes.eye}`} onClick={showPassword} type="button">
                  <i className={`fa-regular ${eye}`}></i>
                </button>
              </span>
              <div id="emailHelp" className="form-text">min. 8 characters</div>
            </div>
            <div className="d-grid gap-2 ">
            <button className={`shadowB btn ${classes.login}`} type="submit">
              {loading ? (
                <>
                  Proccessing...
                </>
              ) : (
                <>Signup</>
              )}</button>
            </div>

            <hr />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpView;
