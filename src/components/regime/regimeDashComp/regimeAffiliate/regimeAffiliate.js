import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import classes from "../../RegimeView.module.css";

const RegimeAffiliate = ({ regAffiliate }) => {
  const [affiliate, setAffiliate] = useState(regAffiliate);
  const handleAffiliate = () => {
    affiliate === "enabled"
      ? setAffiliate("disabled")
      : setAffiliate("enabled");
  };

  return (
    <div className="hstack fixed-bottom">
      <div className={`ms-auto btn ${classes.clickable}`}>
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            label={
              affiliate === "enabled"
                ? "Affiliate enabled"
                : "Affiliate disabled"
            }
            onChange={handleAffiliate}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default RegimeAffiliate;
