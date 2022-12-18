import PopularEvents from "../components/popular/PopularEvents";
import Categories from "../components/cathegories/Categories";
import WelcomeBoard from "../components/welcome/WelcomeBoard";
import Footer from "../Layout/Footer";

const Dashboard = () => {
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
