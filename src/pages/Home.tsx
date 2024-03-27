import HeroBanner from "../components/HeroBanner";
import MyService from "../components/MyService";
import MySkill from "../components/MySkill";


const Home = () => {
  return (
   <div className="w-full overflow-hidden">
      <HeroBanner/>
      <MyService/>
      <MySkill/>
   </div>
  );
};

export default Home;
