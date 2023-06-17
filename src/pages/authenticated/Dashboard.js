import PopularEvents from "../../components/popular/PopularEvents";
import Categories from "../../components/cathegories/Categories";
import WelcomeBoard from "../../components/welcome/WelcomeBoard";
import Footer from "../../Layout/Footer";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../link/API";

const Dashboard = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [city, setCity] = useState("calabar");
  const [state, setState] = useState("cross river");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const getUser = useCallback(async () => {
    try {
      await fetch(`${api}/user/regimesonline`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
          city,
          state,
        }),
      })
        .then(async (res) => {
          if (res.status !== 200 && res.status !== 201 && res.status !== 202) {
            setIsAuthenticating(false);
            return navigate("/login");
          } else {
            return await res.json();
          }
        })
        .then((data) => {
          console.log(data);
          return setIsAuthenticating(false);
        });
    } catch (err) {
      console.error(err.message);
    }
  }, [navigate]);
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
        <WelcomeBoard firstname={name} />
        <Categories />
        <PopularEvents />
        <Footer />
      </>
    );
  }
};

export default Dashboard;
