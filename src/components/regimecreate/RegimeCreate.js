import { useState, useRef } from "react";
import classes from "../regimecreate/RegimeCreate.module.css";
import { api } from "../../link/API";
import { useNavigate } from "react-router-dom";
import State from "../formComponents/State";
import { BeatLoader } from "react-spinners";
import PricingInput from "../formComponents/pricingInput";

const RegimeCreation = () => {
  const navigate = useNavigate();

  // state hooks
  const [display, setDisplay] = useState(true);
  const [nameChecker, setNameChecker] = useState(false);

  // form data
  const [regimeMediaBase64, setregimeMediaBase64] = useState("");
  const [regimeName, setRegimeName] = useState("");
  const [regimeCity, setRegimeCity] = useState("");
  const [regimeDescription, setRegimeDescription] = useState("");
  const [regimePricing, setRegimePricing] = useState([]);
  const [regimeAddress, setRegimeAddress] = useState("");
  const [regimeState, setRegimeState] = useState("");
  const [regimeCountry, setRegimeCountry] = useState("Nigeria");
  const [regimeWithdrawalPin, setRegimeWithdrawalPin] = useState("");
  const [regimeType, setRegimeType] = useState("");
  const [regimeAffiliate, setRegimeAffiliate] = useState("");
  const [regimeStartDate, setRegimeStartDate] = useState("");
  const [regimeStartTime, setRegimeStartTime] = useState("");
  const [regimeEndDate, setRegimeEndDate] = useState("");
  const [regimeEndTime, setRregimeEndTime] = useState("");
  const [data, setData] = useState("CROSS-RIVER");

  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash");
  const pass = useRef();

  //password visibility handler
  const showPassword = () => {
    setshow(!show);
    show ? setEye("fa-eye-slash") : setEye("fa-eye");
    pass.current.type = show ? "password" : "text";
  };

  // error messages and status
  const [loginError, setLoginError] = useState("");
  const [dip, setDip] = useState("none");

  // handle loading on submit
  const [loading, setLoading] = useState(false);

  const sendData = (data) => {
    setData(data);
  };

  
  const pricingHandler = (value) => {
    setRegimePricing(value);
  };

  // handle name check
  const nameCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const regimeName = regimeName;
    try {
      await fetch(`${api}/user/regimecheck`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
          regimeName,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setLoginError("");
          setLoading(false);
          return setNameChecker(true);
        } else if (res.status !== 200) {
          setLoading(false);
          setLoginError(data);
          return setDip("block");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  // handle name check
  const createRegimeApi = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const regimeName = regimeName;
    try {
      await fetch(`${api}/user/regimecheck`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
          regimeName,
          regimeType,
          regimeDescription,
          regimeAddress,
          regimePricing,
          regimeCity,
          regimeState,
          regimeCountry,
          regimeWithdrawalPin,
          regimeMediaBase64,
          regimeAffiliate,
          regimeStartDate,
          regimeStartTime,
          regimeEndDate,
          regimeEndTime,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setLoginError("");
          setLoading(false);
          return setNameChecker(true);
        } else if (res.status !== 200) {
          setLoading(false);
          setLoginError(data);
          return setDip("block");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(regimePricing);

  // converts image to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // handle image to be displayed to the client for clearity
  const handleDisplay = async (file) => {
    const base64 = await convertToBase64(file);
    setregimeMediaBase64(base64);
    return setDisplay(false);
  };

  // Handles the form body display
  const formBody = () => {
    if (!nameChecker) {
      return (
        <>
          <div className={`mt-3 ${classes.bod} smartContainer`}>
            <div className="container">
              {loginError && ( // then if changed flag is false show error message.
                <div
                  className="container"
                  style={{ color: "red", display: { dip } }}
                >
                  <span>{loginError}</span>
                </div>
              )}
              <PricingInput pricingHandler={pricingHandler}/>
              {/* <form className="container" onSubmit={nameCheck}>
                <div className="mb-3">
                  <label htmlFor="regimeName" className="form-label">
                    Enter Regime Name
                  </label>
                  <input
                    type="text"
                    className="form-control shadowB"
                    autoComplete="off"
                    id="regimeName"
                    aria-describedby="regimeNameHelp"
                    value={regimeName}
                    required
                    onChange={(e) => setRegimeName(e.target.value)}
                  />
                </div>

                <hr />

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
                      <>Check Name Availability</>
                    )}
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={`${classes.bod} smartContainer`}>
            <div className="container">
              {loginError && ( // then if changed flag is false show error message.
                <div
                  className="container"
                  style={{ color: "red", display: { dip } }}
                >
                  <span>{loginError}</span>
                </div>
              )}
              <form className="container">
                <div className="mb-3">
                  <label htmlFor="regimeName" className="form-label">
                    Enter Regime Name
                  </label>
                  <input
                    type="text"
                    className="form-control shadowB"
                    autoComplete="off"
                    id="regimeName"
                    aria-describedby="regimeNameHelp"
                    value={regimeName}
                    required
                    readOnly
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="regimeAddress" className="form-label">
                    Enter Regime Address
                  </label>
                  <input
                    type="text"
                    className="form-control shadowB"
                    autoComplete="off"
                    id="regimeAddress"
                    aria-describedby="regimeAddressHelp"
                    value={regimeAddress}
                    onChange={(e) => setRegimeAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="regimeCity" className="form-label">
                    Enter Regime City
                  </label>
                  <input
                    type="text"
                    className="form-control shadowB"
                    autoComplete="off"
                    id="regimeCity"
                    aria-describedby="rregimeCityHelp"
                    value={regimeCity}
                    onChange={(e) => setRegimeCity(e.target.value)}
                    required
                  />
                </div>
                <State sendData={sendData} />
                <div className="mb-3 mt-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Withdrawal 4Digit pin
                  </label>
                  <span className={`d-flex ${classes.white}`}>
                    <input
                      type="password"
                      className="form-control me-2"
                      autoComplete="off"
                      id="exampleInputPassword1"
                      aria-describedby="emailHelp"
                      minLength="4"
                      maxLength="4"
                      pattern="[0-9]+"
                      ref={pass}
                      value={regimeWithdrawalPin}
                      required
                      onChange={(e) => setRegimeWithdrawalPin(e.target.value)}
                    />
                    <button
                      className={`btn ${classes.eye}`}
                      onClick={showPassword}
                      type="button"
                    >
                      <i className={`fa-regular ${eye}`}></i>
                    </button>
                  </span>
                </div>
                <div className="d-grid gap-2 ">
                  <button
                    className={`shadowB btn ${classes.login}`}
                    type="submit"
                  >
                    {loading ? (
                      <>
                        <div
                          style={{ display: "inline-block" }}
                          className="load"
                        ></div>
                      </>
                    ) : (
                      <>Next</>
                    )}
                  </button>
                </div>

                <hr />
              </form>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <h2 className={`center mt-5 ${classes.h2}`}>Create a Regime</h2>

      <div className="flex justify-center mt-3">
        <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
          <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">
              Upload Regime Image(jpg,png,svg,jpeg)
            </label>
            <div className="flex items-center justify-center w-full">
              {/* <img
              className="flex flex-col w-full h-64"
              style={{ display: !display ? "block" : "none" }}
              src={regimeMediaBase64}
              alt="Please upload a jpg,png,svg, or jpeg pic."
            /> */}
              <div
                style={{
                  backgroundImage: `url(${regimeMediaBase64})`,
                  // backgroundImage: `url(${externalImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  display: !display ? "block" : "none",
                }}
                className={`h-64`}
              ></div>
              <label
                style={{ display: !display ? "none" : "block" }}
                className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300"
              >
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Select a photo
                  </p>
                </div>
                <input
                  onChange={(e) => {
                    const file = e.target.files[0];
                    handleDisplay(file);
                  }}
                  type="file"
                  accept=".jpeg, .png, .jpg, .svg"
                  className="opacity-0"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {formBody()}
    </>
  );
};

export default RegimeCreation;
