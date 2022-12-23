import classes from "../add/AddressSettings.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddressSettings = () => {
  const navigate = useNavigate();

  const [add, setAdd] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const handleCity = () => {
    return setAdd(true);
  };

  const address = () => {
    if (!add) {
      return (
        <div
          className={`form-floating ${classes.formPush}`}
          onClick={handleCity}
        >
          <input
            class="form-control roboroboS shadowB"
            type="text"
            value="Cross River"
            aria-label="default input example"
            readOnly
          />
          <label>State</label>
        </div>
      );
    } else {
      return (
        <div className={`form-floating ${classes.formPush}`}>
          <select
            class="form-select roboroboS shadowB"
            aria-label="Default select example"
          >
            <option selected>Change state</option>
            <option>ABUJA FCT</option>
            <option>ABIA</option>
            <option>ADAMAWA</option>
            <option>AKWA IBOM</option>
            <option>ANAMBRA</option>
            <option>BAUCHI</option>
            <option>BAYELSA</option>
            <option>BENUE</option>
            <option>BORNO</option>
            <option>CROSS RIVER</option>
            <option>DELTA</option>
            <option>EBONYI</option>
            <option>EDO</option>
            <option>EKITI</option>
            <option>ENUGU</option>
            <option>GOMBE</option>
            <option>IMO</option>
            <option>JIGAWA</option>
            <option>KADUNA</option>
            <option>KANO</option>
            <option>KATSINA</option>
            <option>KEBBI</option>
            <option>KOGI</option>
            <option>KWARA</option>
            <option>LAGOS</option>
            <option>NASSARAWA</option>
            <option>NIGER</option>
            <option>OGUN</option>
            <option>ONDO</option>
            <option>OSUN</option>
            <option>OYO</option>
            <option>PLATEAU</option>
            <option>RIVERS</option>
            <option>SOKOTO</option>
            <option>TARABA</option>
            <option>YOBE</option>
            <option>ZAMFARA</option>
          </select>
        </div>
      );
    }
  };

  const isOpen = () => {
    if (!open) {
      return (
        <div className={`${classes.setContent}`} onClick={handleOpen}>
          <div className={`container`}>
            <div className="container hstack">
              <p>
                <i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp;Residential
                addresses
              </p>
              <div className="ms-auto">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className={`${classes.setContent}`} onClick={handleOpen}>
            <div className={`container`}>
              <div className="container hstack">
                <p>
                  <i class="fa-solid fa-location-dot"></i>{" "}
                  &nbsp;&nbsp;Residential addresses
                </p>
                <div className="ms-auto">
                  <i class="fa-solid fa-chevron-up"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className={`container ${classes.form}`}>
              <div className="form-floating">
                <input
                  class="form-control roboroboS shadowB"
                  type="text"
                  aria-label="default input example"
                />
                <label>City</label>
              </div>
              {address()}
            </div>
          </div>
          <hr className={classes.hr} />
          <div className={`container ${classes.formPush}`}>
            <div className={`container`}>
              <div className={`form-floating`}>
                <input
                  class="form-control roboroboS shadowB"
                  value="Nigeria"
                  type="text"
                  aria-label="default input example"
                  readOnly
                />
                <label>Country</label>
              </div>
              <div>
                  <div className={` ${classes.btn}`}>
                    Change address
                  </div>
                </div>
            </div>
          </div>
        </>
      );
    }
  };

  return(
    <>
      {isOpen()}
    </>
  )
};

export default AddressSettings;
