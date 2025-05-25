import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
// import Trusted from "../../components/Trusted/Trusted";
import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses";
import Subscribe from "../../components/Subscribe/Subscribe";
import WhyChoseUs from "../../components/WhyChoseUs/WhyChoseUs";
import ScrollToTop from 'react-scroll-to-top';
import ScrollToTopButton from "../../components/ScrollButton/ScrollButton";
import StartJourney from "../../components/StartJourney/StartJourney";
import Teacher from "../../components/Teacher/Teacher";
import OurEvents from "../../components/OurEvents/OurEvents";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1500px] mx-auto flex items-center py-28">
        <AboutUs />
      </div>
      {/* <div>
        <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1500px] mx-auto ">
          <Trusted></Trusted>
        </div>
      </div> */}
      <div className="bg-[#f5f7f8]">
        <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1500px] mx-auto pt-28 pb-24">
          <FeaturedCourses />
        </div>
          
      </div>
      <div className="bg-[#182428]">
      <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1500px] mx-auto py-28">
        <WhyChoseUs></WhyChoseUs>
      </div>
      </div>

      <div className="bg-gray-50">
        <Teacher></Teacher>
      </div>
        
      <div>
        <StartJourney></StartJourney>
      </div>
      <div>
        <OurEvents></OurEvents>
      </div>
      <div className="bg-[#142E2C] py-20">
        <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1500px] mx-auto border-2 rounded-xl border-[#0e3a36] md:px-14 md:py-16 px-4">
          <Subscribe></Subscribe>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
