import { useState } from "react";

const PricingInput = ({ pricingHandler }) => {
  const [regimePricingC, setRegimePricingC] = useState([
    {
      saved: false,
      pricingTotalSeats: "",
      pricingAmount: "",
      pricingName: "",
      pricingAffiliateAmount: "",
    },
  ]);

  const [no, setNo] = useState(2);

  const formAdd = () => {
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
      console.log(`index: ${index}`);
      if (!value.saved) {
        return (
          <form
            key={index}
            onSubmit={(e) => {
              e.preventDefault();
              pricingHandler((current) => [
                ...current,
                {
                  pricingTotalSeats: value.pricingTotalSeats,
                  pricingAmount: value.pricingAmount,
                  pricingName: value.pricingName,
                  pricingAffiliateAmount: value.pricingAffiliateAmount,
                },
              ]);
              value.complete = true;
              value.saved = true;
            }}
          >
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
                  required
                  onChange={(e) => {
                    value.pricingName = e.target.value;
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pricingAmount" className="form-label">
                  Pricing Amount
                </label>
                <input
                  type="number"
                  className="form-control shadowB"
                  autoComplete="off"
                  id="pricingAmount"
                  aria-describedby="pricingAmountHelp"
                  required
                  onChange={(e) => {
                    value.pricingAmount = e.target.value;
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
                  required
                  onChange={(e) => {
                    value.pricingTotalSeats = e.target.value;
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pricingAffiliateAmount" className="form-label">
                  Pricing Affiliate Amount
                </label>
                <input
                  type="number"
                  className="form-control shadowB"
                  autoComplete="off"
                  id="pricingAffiliateAmount"
                  aria-describedby="pricingAffiliateAmountSeatsHelp"
                  required
                  onChange={(e) => {
                    value.pricingAffiliateAmount = e.target.value;
                  }}
                />
              </div>
              <button className="btnct reventlifyBg white mr-1" type="submit">
                Save
              </button>
              <div
                className="btnct reventlifyBg white"
                onClick={() => {
                  setRegimePricingC(
                    regimePricingC.filter((v, ind) => ind !== index)
                  );
                }}
              >
                delete
              </div>
            </div>
          </form>
        );
      } else {
        return (
          <div id={`${index}`} key={index}>
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
                Pricing Amount
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
                id="pricingTotalSeats"
                aria-describedby="pricingTotalSeatsHelp"
                value={regimePricingC[index].pricingTotalSeats}
                required
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pricingAffiliateAmount" className="form-label">
                Pricing Affiliate Amount
              </label>
              <input
                type="number"
                className="form-control shadowB"
                autoComplete="off"
                id="pricingAffiliateAmount"
                aria-describedby="pricingAffiliateAmountSeatsHelp"
                value={regimePricingC[index].pricingAffiliateAmount}
                required
                readOnly
              />
            </div>
            <div className="btnct reventlify">Saved</div>
          </div>
        );
      }
    });
  };
  console.log(no);
  return (
    <>
      <div className="container">
        <div
          className="btnct reventlifyBg white"
          type="button"
          onClick={formAdd}
        >
          add
        </div>
        {valueAdder()}
      </div>
    </>
  );
};

export default PricingInput;
