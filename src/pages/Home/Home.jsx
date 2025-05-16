import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
// import Trusted from "../../components/Trusted/Trusted";
import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses";
import Subscribe from "../../components/Subscribe/Subscribe";
import WhyChoseUs from "../../components/WhyChoseUs/WhyChoseUs";
import ScrollToTop from 'react-scroll-to-top';
import ScrollToTopButton from "../../components/ScrollButton/ScrollButton";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto flex items-center">
        <AboutUs />
      </div>
      {/* <div>
        <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto ">
          <Trusted></Trusted>
        </div>
      </div> */}
      <div className="bg-[#f5f7f8]">
        <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto ">
          <FeaturedCourses />
        </div>
          
      </div>
      <div className="bg-[#182428] py-24">
        <WhyChoseUs></WhyChoseUs>
      </div>
      <div className="bg-[#142E2C] pt-20 pb-12">
        <Subscribe></Subscribe>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
