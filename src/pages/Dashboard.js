import PopularEvents from "../components/popular/PopularEvents";
import Categories from "../components/cathegories/Categories";
import WelcomeBoard from "../components/welcome/WelcomeBoard";
import Footer from "../Layout/Footer";
import { useEffect, useState, useCallback  } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const getUser = useCallback(async () => {
    try {
      await fetch("http://localhost:5000/user", {
        method: "GET",
        headers: { authorization: sessionStorage.getItem("token") },
      })
        .then((res) => {
          if (res.status !== 200) {
            return navigate("/login");
          } else {
            return res.json();
          }
        })
        .then(function (jsonData) {
          setIsAuthenticating(false);
          setName(jsonData.firstName);
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
    return(
      <>
        <div className={`center`}>
        <div className={`cool compName`}><h1>R</h1></div>
        <div className={`second cool compName`}><h1>e</h1></div>
        <div className={`third cool compName`}><h1>v</h1></div>
        <div className={`fourth cool compName`}><h1>e</h1></div>
        <div className={`fifth cool compName`}><h1>n</h1></div>
        <div className={`sixth cool compName`}><h1>t</h1></div>
        <div className={`seventh cool compName`}><h1>l</h1></div>
        <div className={`eight cool compName`}><h1>i</h1></div>
        <div className={`ninth cool compName`}><h1>f</h1></div>
        <div className={`tenth cool compName`}><h1>y</h1></div>
      </div>
      </>
    );
  } else {
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
