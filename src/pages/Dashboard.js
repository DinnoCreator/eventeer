import PopularEvents from "../components/popular/PopularEvents";
import Categories from "../components/cathegories/Categories";
import WelcomeBoard from "../components/welcome/WelcomeBoard";
import Footer from "../Layout/Footer";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <WelcomeBoard />
      <Categories />
      <PopularEvents />
      <Footer />
    </>
  );
};

export default Dashboard;
