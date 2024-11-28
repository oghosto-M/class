import Header from "@components/Header/Header";
import Hero from "../../components/Hero/Hero.jsx";
import Body from '../Home/Body.jsx'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Body/>
    </div>
  );
};

export default Home;
