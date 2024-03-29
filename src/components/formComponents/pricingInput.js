import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { neat } from "../../utilities/textUtil";
import trim from "lodash.trim";

const PricingInput = ({ pricingHandler, affiliateValue }) => {
  const [addError, setAddError] = useState(
    "Type the number 0 into the pricing amount input and save it, if you want to create a free ticket. Else type an amount greater than N49 into the input. "
  );
  const [dip, setDip] = useState("block");
  useEffect(() => {
    if (affiliateValue === `enabled`) {
      setAddError("");
      setDip("none");
    }
  }, []);
  const [regimePricingC, setRegimePricingC] = useState([
    {
      saved: false,
      pricingTotalSeats: "",
      pricingAmount: "",
      pricingName: "",
      pricingAffiliateAmount: "",
    },
  ]);

  const formAdd = () => {
    setAddError("");
    setDip("none");
    if (
      Number(regimePricingC[0].pricingAmount) === 0 ||
      regimePricingC[0].pricingAmount === ""
    ) {
      setAddError(
        `You can not add more pricing if the first pricing amount is free or zero.`
      );
      return setDip("block");
    }
    setDip("none");
    setRegimePricingC((current) => [
      ...current,
      {
        saved: false,
        pricingTotalSeats: "",
        pricingAmount: "",
        pricingName: "",
        pricingAffiliateAmount: "",
      },
    ]);
  };

  const valueAdder = () => {
    return regimePricingC.map((value, index) => {
      if (!value.saved) {
        return (
          <form
            className="mb-3"
            key={index}
            onSubmit={(e) => {
              e.preventDefault();
              if (affiliateValue === `disabled`) {
                pricingHandler((current) => [
                  ...current,
                  {
                    pricingTotalSeats: value.pricingTotalSeats,
                    pricingAmount: value.pricingAmount,
                    pricingName: value.pricingName,
                    pricingAffiliateAmount: 0,
                  },
                ]);
              } else {
                pricingHandler((current) => [
                  ...current,
                  {
                    pricingTotalSeats: value.pricingTotalSeats,
                    pricingAmount: value.pricingAmount,
                    pricingName: value.pricingName,
                    pricingAffiliateAmount: value.pricingAffiliateAmount,
                  },
                ]);
              }
              value.saved = true;
            }}
          >
            <h1 className="left" style={{ marginTop: 0, textAlign: `left` }}>
              {index + 1}.
            </h1>
            <div id={`${index}`}>
              <div className="mb-3">
                <label htmlFor="pricingName" className="form-label">
                  Pricing Name
                </label>
                <input
                  type="text"
                  className="form-control shadowB"
                  autoComplete="off"
                  id="pricingName"
                  aria-describedby="pricingNameHelp"
                  minLength="3"
                  maxLength="30"
                  required
                  onChange={(e) => {
                    value.pricingName = trim(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pricingAmount" className="form-label">
                  Pricing Amount in Naira
                </label>
                <input
                  type="number"
                  className="form-control shadowB"
                  autoComplete="off"
                  id="pricingAmount"
                  aria-describedby="pricingAmountHelp"
                  required
                  onChange={(e) => {
                    value.pricingAmount = trim(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pricingTotalSeats" className="form-label">
                  Pricing Total Seats
                </label>
                <input
                  type="number"
                  className="form-control shadowB"
                  autoComplete="off"
                  id="pricingTotalSeats"
                  aria-describedby="pricingTotalSeatsHelp"
                  min="1"
                  required
                  onChange={(e) => {
                    value.pricingTotalSeats = trim(e.target.value);
                  }}
                />
              </div>
              {affiliateValue === `enabled` ? (
                <div className="mb-3">
                  <label
                    htmlFor="pricingAffiliateAmount"
                    className="form-label"
                  >
                    Pricing Affiliate Amount in Naira
                  </label>
                  <input
                    type="number"
                    className="form-control shadowB"
                    autoComplete="off"
                    id="pricingAffiliateAmount"
                    min="50"
                    aria-describedby="pricingAffiliateAmountSeatsHelp"
                    required
                    onChange={(e) => {
                      value.pricingAffiliateAmount = trim(e.target.value);
                    }}
                  />
                </div>
              ) : (
                ``
              )}
              <button
                className="btnct reventlifyBg white mr-1 shadowB"
                type="submit"
              >
                Save
              </button>
              <div
                className="btnct reventlifyBg white shadowB"
                style={{ backgroundColor: "red", border: "1px solid red" }}
                onClick={() => {
                  setRegimePricingC(
                    regimePricingC.filter((v, ind) => ind !== index)
                  );
                }}
              >
                Delete
              </div>
            </div>
          </form>
        );
      } else {
        return (
          <>
            <div id={`${index}`} key={index}>
              <h1 className="left" style={{ marginTop: 0, textAlign: `left` }}>
                {index + 1}. {neat(regimePricingC[index].pricingName)}
              </h1>
              <div className="mb-3">
                <label htmlFor="pricingName" className="form-label">
                  Pricing Name
                </label>
                <input
                  type="text"
                  className="form-control shadowB"
                  autoComplete="off"
                  id="pricingName"
                  aria-describedby="pricingNameHelp"
                  value={regimePricingC[index].pricingName}
                  required
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pricingAmount" className="form-label">
                  Pricing Amount in Naira
                </label>
                <input
                  type="number"
                  className="form-control shadowB"
                  autoComplete="off"
                  id="pricingAmount"
                  aria-describedby="pricingAmountHelp"
                  value={regimePricingC[index].pricingAmount}
                  required
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pricingTotalSeats" className="form-label">
                  Pricing Total Seats
                </label>
                <input
                  type="number"
                  className="form-control shadowB"
                  autoComplete="off"
                  min="1"
                  id="pricingTotalSeats"
                  aria-describedby="pricingTotalSeatsHelp"
                  value={regimePricingC[index].pricingTotalSeats}
                  required
                  readOnly
                />
              </div>
              {affiliateValue === `enabled` ? (
                <div className="mb-3">
                  <label
                    htmlFor="pricingAffiliateAmount"
                    className="form-label"
                  >
                    Pricing Affiliate Amount in Naira
                  </label>
                  <input
                    type="number"
                    className="form-control shadowB"
                    autoComplete="off"
                    id="pricingAffiliateAmount"
                    min="50"
                    aria-describedby="pricingAffiliateAmountSeatsHelp"
                    value={regimePricingC[index].pricingAffiliateAmount}
                    required
                    readOnly
                  />
                </div>
              ) : (
                ``
              )}
              <div className="btnct reventlify mb-3">Saved</div>
            </div>
          </>
        );
      }
    });
  };
  return (
    <>
      <div>
        {addError && ( // then if changed flag is false show error message.
          <div style={{ color: "red", display: { dip } }}>
            <span>{addError}</span>
          </div>
        )}
        {valueAdder()}
        <div
          className="btncti reventlifyBg white mb-3 shadowB mr-1"
          style={{ borderRadius: `50%` }}
          type="button"
          onClick={formAdd}
        >
          <AddIcon />
        </div>
      </div>
    </>
  );
};

export default PricingInput;
