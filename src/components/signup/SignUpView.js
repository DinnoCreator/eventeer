import classes from "../signup/SignUpView.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../link/API";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import trim from "lodash.trim";

const SignUpView = () => {
  // form data
  const [email, setEmail] = useState("");
  const [name, setUName] = useState("");
  const [password, setPWord] = useState("");

  // email
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  // error messages and status
  const [loginError, setLoginError] = useState("");
  const [dip, setDip] = useState("none");

  // handle loading on submit
  const [loading, setLoading] = useState(false);

  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash");
  const pass = useRef();

  let navigate = useNavigate();

  //password visibility handler
  const showPassword = () => {
    setshow(!show);
    show ? setEye("fa-eye-slash") : setEye("fa-eye");
    pass.current.type = show ? "password" : "text";
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //api call for sending the user data to the backend
      await fetch(`${api}/auth/sendcode`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email
        }),
      })
        .then(async(res) => {
          const data = await res.json();
          if (res.status !== 200) {
            setDip("block");
            setLoading(false);
            return setLoginError(data);
          }  else if (res.status === 200) {
            setLoginError(
              "A code has been sent to your email. If you don't see the verification code in your inbox, please check your spam folder."
            )
            setLoading(false);
            return setVerifyEmail(true);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitFormVerify = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //api call for sending the user data to the backend
      await fetch(`${api}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, 
          email, 
          password, 
          verificationCode
        }),
      })
        .then(async(res) => {
          const data = await res.json();
          if (res.status !== 200) {
            setDip("block");
            setLoading(false);
            return setLoginError(data);
          }  else if (res.status === 200) {
            setLoading(false);
            return setEmailVerified(true);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  const toLogin = () => {
    navigate("/login");
  }
  // takes user back to homepage
  const handlePostBack = () => {
    return navigate("/");
  };

  const formDisplay = () => {
    if (!verifyEmail && !emailVerified) {
      return (
        <div className="container">
          {loginError && ( // then if changed flag is false show error message.
            <div
              className="container"
              style={{ color: "red", display: { dip } }}
            >
              <span>{loginError}</span>
            </div>
          )}
          <form className="container" onSubmit={onSubmitForm}>
            <motion.div
              className="limiter centerMargpartial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
            >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <motion.input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  autoComplete="off"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(trim(e.target.value))}
                  required
                  whileFocus={{ scale: 1.1 }}
                >
                {/* <input
                  type="email"
                  className="form-control"
                  autoComplete="off"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                /> */}
                </motion.input>
              </div>
            </motion.div>
            <motion.div
              className="limiter centerMargpartial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
            >
              <div className="mb-3">
                <label htmlFor="labusername" className="form-label">
                  Username
                </label>
                <motion.input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  id="labusername"
                  maxLength={30}
                  minLength={2}
                  required
                  onChange={(e) => setUName(trim(e.target.value))}
                  whileFocus={{ scale: 1.1 }}
                >
                {/* <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  id="labusername"
                  value={name}
                  required
                  onChange={(e) => setUName(e.target.value)}
                /> */}
                </motion.input>
              </div>
            </motion.div>
            <motion.div
              className="limiter centerMargpartial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
            >
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
                    required
                    onChange={(e) => setPWord(trim(e.target.value))}
                  />
                  <button
                    className={`btn ${classes.eye}`}
                    onClick={showPassword}
                    type="button"
                  >
                    <i className={`fa-regular ${eye}`}></i>
                  </button>
                </span>
                <div id="emailHelp" className="form-text">
                  min. 8 characters
                </div>
              </div>
            </motion.div>
            <motion.div
              className="limiter centerMargpartial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
            >
              <div className="d-grid gap-2 ">
                <button
                  className={`shadowB btn ${classes.login}`}
                  type="submit"
                >
                  {loading ? (
                    <>
                      <BeatLoader color="#fff" loading={true} size={"12"} />
                    </>
                  ) : (
                    <>Signup</>
                  )}
                </button>
              </div>
            </motion.div>

            <hr />
          </form>
        </div>
      );
    } else if (verifyEmail && !emailVerified) {
      return (
        <div className="container">
          {loginError && ( // then if changed flag is false show error message.
            <div
              className="container"
              style={{ color: "red", display: { dip } }}
            >
              <span>{loginError}</span>
            </div>
          )}
          <form className="container" onSubmit={onSubmitFormVerify}>
            <motion.div
              className="limiter centerMargpartial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
            >
              <div className="mb-3">
                <label htmlFor="vcode" className="form-label">
                  verification code
                </label>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  maxLength={5}
                  id="vcode"
                  required
                  onChange={(e) => setVerificationCode(trim(e.target.value))}
                />
              </div>
            </motion.div>
            <motion.div
              className="limiter centerMargpartial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
            >
              <div className="d-grid gap-2 ">
                <button
                  className={`shadowB btn ${classes.login}`}
                  type="submit"
                >
                  {loading ? (
                    <>
                      <BeatLoader color="#fff" loading={true} size={"12"} />
                    </>
                  ) : (
                    <>Verify Email</>
                  )}
                </button>
              </div>
            </motion.div>

            <hr />
          </form>
        </div>
      );
    } else if (verifyEmail && emailVerified) {
      setTimeout(() => {
        toLogin();
      }, 2500)
      return (
        <div className="box">
          <div className="success alert">
            <div className="alert-body">Registeration Successful !</div>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div className="container" onClick={handlePostBack}>
        <h5>
          <i className="fa-solid mt-2 fa-chevron-left"></i> Home
        </h5>
      </div>
      <div className={` mt-2 smartContainer ${classes.bod}`}>
        <h1>Reventlify</h1>
        <h3>Never miss the fun...</h3>
        {formDisplay()}
      </div>
    </>
  );
};

export default SignUpView;
