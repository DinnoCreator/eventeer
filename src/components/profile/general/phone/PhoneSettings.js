import classes from "../phone/PhoneSettings.module.css";
import { useState } from "react";

const PhoneSettings = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const isOpen = () => {
    if (open) {
      return (
        <>
          <div className={`${classes.setContent}`} onClick={handleOpen}>
            <div className={`container`}>
              <div className="container hstack">
                <p>
                <i className="fa-solid fa-phone"></i> &nbsp;&nbsp;Phone number
                </p>
                <div className="ms-auto">
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className={`container ${classes.emailc}`}>
              <div className="form-floating">
                <input
                  className="form-control roboroboS shadowB"
                  type="text"
                  aria-label="default input example"
                />
                <label>Current phone number</label>
              </div>
            </div>
          </div>
          <hr className={classes.hr} />
          <div className={`container ${classes.formPush}`}>
            <div className={`container`}>
              <div className={`${classes.form}`}>
                <div className={`form-floating ${classes.formPush}`}>
                  <input
                    className="form-control roboroboS shadowB"
                    type="text"
                    aria-label="default input example"
                  />
                  <label>New phone number</label>
                </div>

                <div>
                  <div className={` ${classes.btn}`}>
                    Change phone number
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (!open){
      return (
        <div className={`${classes.setContent}`} onClick={handleOpen}>
            <div className={`container`}>
              <div className="container hstack">
                <p>
                <i className="fa-solid fa-phone"></i> &nbsp;&nbsp;Phone number
                </p>
                <div className="ms-auto">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
      )
    }
  };
  return (
    <>
      {isOpen()}
    </>
  );
};

export default PhoneSettings;
