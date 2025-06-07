import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "./Banner.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LazyBackground from "./LazyBackground";  // adjust path if needed

const Banner = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/course`);
      setCourses(data);
    };
    getData();
  }, []);

  return (
    <div className="h-[50vh] md:h-[70vh] relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        speed={800}
        parallax={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={courses.length >= 3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            {/* Lazy background image wrapper */}
            <LazyBackground
              slot="container-start"
              src={course.course_banner}
              className="parallax-bg relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
              data-swiper-parallax="-23%"
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </LazyBackground>

            {/* Banner Content */}
            <div className="flex flex-col items-center justify-center h-[50vh] md:h-[70vh] relative z-10 px-4">
              <motion.div
                className="text-2xl md:text-4xl font-bold my-7 text-white text-center"
                data-swiper-parallax="-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {course.course_title}
              </motion.div>

              <motion.div
                className="subtitle font-bold px-4 text-lg md:text-2xl text-green-400 shadow-lg text-center"
                data-swiper-parallax="-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {course.tagline}
              </motion.div>

              <motion.div
                className="text text-white max-w-2xl text-center"
                data-swiper-parallax="-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-sm md:text-base leading-relaxed">
                  {course.course_description}
                </p>
              </motion.div>

              <motion.div
                className="flex gap-5 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="relative group">
                  <Link
                    to={`/course/${course._id}`}
                    className="px-6 py-2 border border-white text-white rounded-full font-medium transition-all duration-300 group-hover:bg-white group-hover:text-[#07a698] cursor-pointer"
                  >
                    <span className="inline-block transition-all duration-300 group-hover:-translate-x-2 group-hover:text-transparent">
                      Course Outline
                    </span>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300">
                      →
                    </span>
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:left-4 transition-all duration-300">
                      See More
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-button-prev !text-white !opacity-80 hover:!opacity-100 !transition-all !duration-300"></div>
      <div className="swiper-button-next !text-white !opacity-80 hover:!opacity-100 !transition-all !duration-300"></div>
    </div>
  );
};

export default Banner;
