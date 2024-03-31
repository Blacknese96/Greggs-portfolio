import Contact from "../components/Contact";
import HappyClient from "../components/HappyClient";
import HeroBanner from "../components/HeroBanner";
import MyNewExp from "../components/MyNewExp";
// import MyEdu from "../components/MyEdu";
import MyService from "../components/MyService";
import MySkill from "../components/MySkill";


const Home = () => {
  return (
   <div className="w-full overflow-hidden">
      <HeroBanner/>
      <MyService/>
      <MySkill/>
      <MyNewExp/>
      {/* <MyEdu/> */}
      <HappyClient/>
      <Contact/>
   </div>
  );
};

export default Home;
