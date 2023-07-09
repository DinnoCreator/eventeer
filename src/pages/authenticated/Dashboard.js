import PopularEvents from "../../components/popular/PopularEvents";
import WelcomeBoard from "../../components/welcome/WelcomeBoard";
import Footer from "../../Layout/Footer";
import { useEffect, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import { api } from "../../link/API";
import MoreEvents from "../../components/moreevents/moreEvents";

const Dashboard = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  // const [cathegories, setCathegories] = useState('concert');
  // const [city, setCity] = useState("calabar");
  // const [state, setState] = useState("cross river");
  const [name, setName] = useState("you are offline");
  // const [photo, setPhoto] = useState("emptysring");
  // let navigate = useNavigate();

  const searchHandler = (booleanValue) => {
    setIsSearching(booleanValue);
  };
  const getUser = useCallback(async () => {
    try {
      await fetch(`${api}/user/whois`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: sessionStorage.getItem("token"),
        }
      })
        .then(async (res) => {
          const data = await res.json();
          if (res.status !== 200 && res.status !== 201 && res.status !== 202) {
            return setIsAuthenticating(false);
          } else {
            setName(data.userName);
            return  setIsAuthenticating(false);
          }
        })
        // .then((data) => {
        //   setName(data.userName);
        //   // setPhoto(data.userPhoto)
        //   return setIsAuthenticating(false);
        // });
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getUser();
  }, [getUser]);

  if (isAuthenticating) {
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
  } else if (!isAuthenticating) {
    return (
      <>
        <WelcomeBoard searchHandler={searchHandler} name={name} />
        {isSearching ? (
          ""
        ) : (
          <>
            {/* <Categories cathegories={cathegories} cathegoriesHandler={cathegoriesHandler} /> */}
            <PopularEvents />
            <MoreEvents />
            <div style={{height: "200px"}}></div>
            <Footer />
          </>
        )}
      </>
    );
  }
};

export default Dashboard;
