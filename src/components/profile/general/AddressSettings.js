import classes from "../general/AddressSettings.module.css";
import { useNavigate } from "react-router-dom";

const AddressSettings = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/settings");
  };
  return (
    <>
      <div className="container">
        <div className={`container hstack grid-container ${classes.head}`}>
          <div onClick={handleBack} className={`${classes.backIcon}`}>
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div className={`grid-item ${classes.header}`}>
            <h2>Address</h2>
          </div>
          <div className={`ms-auto ${classes.backIcon}`}>
            <h4>Done</h4>
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
          <div className={`form-floating ${classes.formPush}`}>
            <select class="form-select roboroboS shadowB" aria-label="Default select example">
              <option>ABUJA FCT</option>
              <option>ABIA</option>
              <option>ADAMAWA</option>
              <option>AKWA IBOM</option>
              <option>ANAMBRA</option>
              <option>BAUCHI</option>
              <option>BAYELSA</option>
              <option>BENUE</option>
              <option>BORNO</option>
              <option selected>CROSS RIVER</option>
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
        </div>
      </div>
    </>
  );
};

export default AddressSettings;
