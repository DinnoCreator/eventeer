import classes from "../welcome/Welcomeboard.module.css";
import classes2 from "../purchased/tickets/Tickets.module.css";
import { useState } from "react";
import { api } from "../../link/API";
import { BeatLoader } from "react-spinners";
import { neat, textShrink } from "../../utilities/textUtil";
import { useNavigate } from "react-router-dom";
import truncate from "lodash.truncate";

const WelcomeBoard = ({ searchHandler, name }) => {
  const [searchClick, setSearchClick] = useState(false);
  const [searchCharacters, setSearch] = useState();
  const [searchType, setSearchType] = useState("events");
  const [items, setItem] = useState([]);
  let navigate = useNavigate();
  // handle loading on submit
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchDtata] = useState("");
  const [dip, setDip] = useState("none");
  const clicker = (e) => {
    e.preventDefault();
    setSearch("");
    setItem([]);
    searchClick ? setSearchClick(false) : setSearchClick(true);
    searchClick ? searchHandler(false) : searchHandler(true);
  };
  const cathegoryButtonE = () => {
    if (searchType === "events") {
      return {
        backgroundColor: "#7165E3",
        color: "white",
      };
    } else {
      return {
        backgroundColor: "white",
        color: "#7165E3",
      };
    }
  };
  const cathegoryButtonP = () => {
    if (searchType === "people") {
      return {
        backgroundColor: "#7165E3",
        color: "white",
      };
    } else {
      return {
        backgroundColor: "white",
        color: "#7165E3",
      };
    }
  };
  const cathegoryButtonA = () => {
    if (searchType === "affiliate enabled events") {
      return {
        backgroundColor: "#7165E3",
        color: "white",
      };
    } else {
      return {
        backgroundColor: "white",
        color: "#7165E3",
      };
    }
  };
  const display = () => {
    if (items.length === 0 && !loading && searchType === "events") {
      return <h1 className="mt-5 center">Search for event</h1>;
    } else if (items.length === 0 && !loading && searchType === "people") {
      return <h1 className="mt-5 center">Search for people</h1>;
    } else if (
      items.length === 0 &&
      !loading &&
      searchType === "affiliate enabled events"
    ) {
      return (
        <h1 className="mt-5 center">
          Search for affiliate enabled events
        </h1>
      );
    } else if (loading) {
      return (
        <BeatLoader
          className="center mt-5"
          color="#7165E3"
          loading={true}
          size={"32"}
        />
      );
    } else if (items === "No result found" && !loading) {
      return <h1 className="mt-5 center">No result found</h1>;
    } else if (
      items.length !== 0 &&
      !loading &&
      searchType === "people"
    ) {
      return items.map((item) => {
        return (
          <div className={`stripFlexGeneral ${classes2.ticketStrip} mt-3`}>
            <div className="stripFlexGeneralChild1">
              <img src={item.client_photo} className="shrink" alt="client photo" />
            </div>
            <div
              className={`stripFlexGeneralChild stripFlex ${classes2.ticketStripInfo}`}
            >
              <div className="stripFlexChild">
                {/* <p>{item.regime_name}</p> */}
                <p>{textShrink(item.client_name)}</p>
              </div>
              <div className="stripFlexChild">
                <p>
                  <i
                    style={{
                      color: "white",
                      backgroundColor: "#55CCF8",
                    }}
                    class="fa-solid fa-champagne-glasses"
                  ></i>
                  <span className={classes2.ID}>{item.client_id.toUpperCase()}</span>
                </p>
              </div>
            </div>
          </div>
        );
      });
    } else if (
      items.length !== 0 &&
      !loading &&
      searchType !== "people"
    ) {
      return items.map((item) => {
        return (
          <div className={`stripFlexGeneral ${classes2.ticketStrip} mt-3`}>
            <div className="stripFlexGeneralChild1">
              <img src={item.regime_media} className="shrink" alt="event photo" />
            </div>
            <div
              className={`stripFlexGeneralChild stripFlex ${classes2.ticketStripInfo}`}
            >
              <div className="stripFlexChild">
                {/* <p>{item.regime_name}</p> */}
                <p>{textShrink(item.regime_name)}</p>
              </div>
              <div className="stripFlexChild">
                <p>
                  <i
                    style={{
                      color: "white",
                      backgroundColor: "#55CCF8",
                    }}
                    class="fa-solid fa-champagne-glasses"
                  ></i>
                  <span className={classes2.ID}>{item.regime_id.toUpperCase()}</span>
                </p>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //api call for sending the user data to the backend
      await fetch(`${api}/user/searchevents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          searchCharacters,
          searchType,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status !== 200) {
          setDip("block");
          setLoading(false);
          return setItem(data);
        } else {
          setLoading(false);
          return setItem(data);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (searchClick) {
    return (
      <>
        <div className="container mt-5 fixed-top">
          <br />
          <div className={`container ${classes.foc} roborobo shadowB edit`}>
            <i className="fa-solid fa-xmark stuff" onClick={clicker}></i>
            <form className={`d-flex `} onSubmit={onSubmitForm} role="search">
              <input
                className={`form-control me-2 b`}
                type="search"
                placeholder={`Search for ${searchType}...`}
                aria-label="Search"
                autoFocus
                required
                value={searchCharacters}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn b bGreen ba" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div>
            <div
              className="btnct mr-1 shadowB"
              style={cathegoryButtonE()}
              onClick={() => {
                setItem([])
                setSearchType("events")
              }}
            >
              Events
            </div>
            <div
              className="btnct mr-1 shadowB"
              style={cathegoryButtonP()}
              onClick={() => {
                setItem([])
                setSearchType("people")
              }}
            >
              People
            </div>
            <div
              className="btnct shadowB"
              style={cathegoryButtonA()}
              onClick={() => {
                setItem([])
                setSearchType("affiliate enabled events")
              }}
            >
              Affiliates
            </div>
          </div>
        </div>
        <div className="results container">{display()}</div>
      </>
    );
  } else if (!searchClick) {
    return (
      <>
        <div className={` ${classes.img}`}>
          <div className={`container ${classes.welcome}`}>
            {name === 'you are offline' ?
              <>
                <h5 className="stuff" onClick={() => { navigate('/login')}}>Login &nbsp;<i className="fa-solid fa-right-to-bracket"></i></h5>
                <h1>{neat(truncate(name))}</h1>
              </> :
              <>
                <h5>Welcome back</h5>
                <h1>{neat(name)}</h1>
              </>}
          </div>
          <div className="container">
            <div className={`container ${classes.foc} shadowB roboroboS edit`}>
              <form className={`d-flex `} role="search">
                <input
                  className={`form-control me-2 b`}
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  onFocus={clicker}
                />
                <button className="btn b bGreen ba" type="button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default WelcomeBoard;
