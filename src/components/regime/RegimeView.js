import { useState, useEffect, useCallback } from "react";
import classes from "../regime/RegimeView.module.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import RegimeDashNav from "./regimeDashComp/regimeDashNav/regimeDashNav";
import RegimeBal from "./regimeDashComp/regimeBal/regimeBal";
import RegimeSalesAnalytics from "./regimeDashComp/regimeSalesAnalytics/regimeSalesAnalytics";
import RegimeParticipants from "./regimeDashComp/regimeParticipants/regimeParticipants";
import RegimeActivity from "./regimeDashComp/regimeActivity/regimeActivity";
import RegimeAffiliate from "./regimeDashComp/regimeAffiliate/regimeAffiliate";
import { Link } from "react-router-dom";
import { api } from "../../link/API";

const RegimeView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();

  // states
  const [staticDetails, setStaticDetails] = useState("");
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);
  const [found, setFound] = useState(false);

  const getStaticDetails = useCallback(async () => {
    try {
      await fetch(`${api}/user/regime/dashboard/static/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: sessionStorage.getItem("token"),
        },
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setStaticDetails(data);
          setFound(true);
          return setFetching(false);
        } else if (res.status === 404) {
          setError(data);
          setFound(false);
          return setFetching(false);
        } else {
          return navigate("/login", {
            state: {
              prevPath: pathname,
            },
          });
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  }, [navigate, pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getStaticDetails();
  }, [getStaticDetails]);

  if (fetching && !found) {
    return (
      <>
        <div className={`center`}>
          <div className={`cool compName`}>
            <h1>R</h1>
          </div>
          <div className={`second cool compName`}>
            <h1>e</h1>
          </div>
          <div className={`third cool compName`}>
            <h1>v</h1>
          </div>
          <div className={`fourth cool compName`}>
            <h1>e</h1>
          </div>
          <div className={`fifth cool compName`}>
            <h1>n</h1>
          </div>
          <div className={`sixth cool compName`}>
            <h1>t</h1>
          </div>
          <div className={`seventh cool compName`}>
            <h1>l</h1>
          </div>
          <div className={`eight cool compName`}>
            <h1>i</h1>
          </div>
          <div className={`ninth cool compName`}>
            <h1>f</h1>
          </div>
          <div className={`tenth cool compName`}>
            <h1>y</h1>
          </div>
        </div>
      </>
    );
  } else if (!fetching && found) {
    return (
      <>
        <RegimeDashNav />
        <RegimeBal regimeName={staticDetails.regime_name} />
        <RegimeAffiliate regAffiliate={staticDetails.regime_affiliate} />
        <div className="container">
          <RegimeSalesAnalytics />
          <RegimeParticipants />
          <RegimeActivity />
        </div>
      </>
    );
  } else if (!fetching && !found) {
    return (
      <div className="centerFlexV">
        <div>
          <h1 className="center locationCol italic"> {error} </h1>
          <div className="centerFlex mt-3">
            <Link className={`${classes.link} reventlify`} to="/dashboard">
              <i className="fa-solid fa-chevron-right reventlify"></i> &nbsp;
              <span className="reventlify">To Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default RegimeView;
