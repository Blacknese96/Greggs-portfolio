import HeroBanner from "../components/HeroBanner";
import MyEdu from "../components/MyEdu";
import MyService from "../components/MyService";
import MySkill from "../components/MySkill";


const Home = () => {
  return (
   <div className="w-full overflow-hidden">
      <HeroBanner/>
      <MyService/>
      <MySkill/>
      <MyEdu/>
   </div>
  );
};

export default Home;
