import classes from "../verify/Verify.module.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state;

  // verification code
  const [code, setCode] = useState("");    

  // error messages and status
  const [loginError, setLoginError] = useState(`A verification code has been sent to your email, please check your
  spam if you can't find it in your inbox and enter the verification
  code.`);
  const [color, setColor] = useState("green");
  const [success, setSuccess] = useState("none");
  const [verify, setVerify] = useState("block");

  // handle loading on submit
  const [loading, setLoading] = useState(false);


  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //api call for sending the user data to the backend
      await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          code
        }),
      }).then((res) => {
        if (res.status === 401) {
          setLoading(false);
          setColor("red")
          return setLoginError(
            "Email does not have a verification code, try to register again!"
          );
        } else if(res.status === 403) {
            setLoading(false);
            setColor("red");
            return setLoginError("Invalid verification code...");
        }else if(res.status === 411) {
            setLoading(false);
            setColor("red");
            return setLoginError("Something went wrong...");
        }
        else if (res.status === 200){
          setLoading(false);
          setSuccess("block");
          setVerify("none");
          setTimeout(() => {
            navigate("/login")
          }, 3000);
        }
      });
    } catch (error) {
      console.error(error);
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

    {/* Verify email */}
      <div className={` mt-5 ${classes.bod}`} style={{display: verify}}>
        <h1>Reventlify</h1>
        <h3>Never miss the fun...</h3>
        <div className="container">
        {loginError && ( // then if changed flag is false show error message.
            <div className="container" style={{ color: color}}>
              <span>{loginError}</span>
            </div>
          )}
          <div className="container" style={{ color: "green" }}>
            <span>
              
            </span>
          </div>
          <form className="container"  onSubmit={onSubmitForm}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                autoComplete="off"
                value={email}
                aria-describedby="emailHelp"
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="verificationcode" className="form-label">
                Verification code
              </label>
                <input
                  type="text"
                  className="form-control me-2"
                  minLength="5"
                  maxLength="5"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  id="verificationcode"
                  autoComplete="off"
                  required
                />
            </div>
            <div className="d-grid gap-2 ">
            <button className={`btn shadowB ${classes.login}`} type="submit">
              {loading ? (
                <>
                  <div
                  style={{ display: "inline-block" }} className="load"></div>
                </>
              ) : (
                <>Verify email</>
              )}
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Verify;
