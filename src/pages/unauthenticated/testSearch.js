import { useState, useCallback, useEffect } from "react";
import classes from "../../components/welcome/WelcomeBoard";
// import classes2 from "../../components/purchased/tickets/TicketHistory.module.css";
import classes2 from "../../components/purchased/tickets/Tickets.module.css";
import { api } from "../../link/API";
import { BeatLoader } from "react-spinners";

const SearchTest = () => {
  const [searchClick, setSearchClick] = useState(false);
  const [searchCharacters, setSearch] = useState();
  const [items, setItem] = useState([]);
  // handle loading on submit
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchDtata] = useState("");
  const [dip, setDip] = useState("none");

  const clicker = (e) => {
    e.preventDefault();
    setSearch("");
    setItem([]);
    searchClick ? setSearchClick(false) : setSearchClick(true);
  };
  const display = () => {
    if (items.length === 0 && !loading) {
      return <h1 className="mt-5 center">Search for event</h1>;
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
    } else {
      return items.map((item) => {
        return (
          <div className={`hstack ${classes2.ticketStrip} mt-3`}>
            <img src={item.regime_media} className="shrink" alt="event" />
            <span className={`ms-auto ${classes2.ticketStripInfo}`}>
              <p>{item.regime_name}</p>
              <p>
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#55CCF8",
                  }}
                  class="fa-solid fa-champagne-glasses"
                ></i>
                <span className={classes2.ID}>{item.regime_id}</span>
              </p>
            </span>
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
      <div className="container mt-2">
        <div className={`container ${classes.foc} shadowB roboroboS edit`}>
          <i className="fa-solid fa-xmark" onClick={clicker}></i>
          <form className={`d-flex `} onSubmit={onSubmitForm} role="search">
            <input
              className={`form-control me-2 b`}
              type="search"
              placeholder="Search event..."
              aria-label="Search"
              autoFocus
              value={searchCharacters}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn b bGreen ba" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        {/* {loading ? (
          <BeatLoader
            className="center mt-5"
            color="#7165E3"
            loading={true}
            size={"32"}
          />
        ) : (
          display()
        )} */}
        {display()}
      </div>
    );
  } else if (!searchClick) {
    return (
      <div className="container mt-5">
        <div className={`container ${classes.foc} shadowB roboroboS edit`}>
          <form className={`d-flex `} role="search">
            <input
              className={`form-control me-2 b`}
              type="search"
              placeholder="Search event..."
              aria-label="Search"
              onFocus={clicker}
            />
            <button className="btn b bGreen ba" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default SearchTest;
