import classes from "../email/EmailSettings.module.css";
import { useState } from "react";

const EmailSettings = () => {
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
                  <i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;Email address
                </p>
                <div className="ms-auto">
                  <i class="fa-solid fa-chevron-up"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className={`container ${classes.emailc}`}>
              <div className="form-floating">
                <input
                  class="form-control roboroboS shadowB"
                  type="email"
                  aria-label="default input example"
                />
                <label>Current email</label>
              </div>
            </div>
          </div>
          <hr className={classes.hr} />
          <div className={`container ${classes.formPush}`}>
            <div className={`container`}>
              <div className={`${classes.form}`}>
                <div className={`form-floating ${classes.formPush}`}>
                  <input
                    class="form-control roboroboS shadowB"
                    type="email"
                    aria-label="default input example"
                  />
                  <label>New email</label>
                </div>

                <div>
                  <div className={` ${classes.btn}`}>
                    Send verification code
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
                  <i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;Email address
                </p>
                <div className="ms-auto">
                  <i class="fa-solid fa-chevron-down"></i>
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

export default EmailSettings;
