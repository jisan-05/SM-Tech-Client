// import electrical from "../../assets/Electrical.jpg";
// import mechanical from "../../assets/Mechanical.jpg";
// import civil from "../../assets/Civil.jpg";
// import Computer from "../../assets/Computer.jpg";
// import textile from "../../assets/Textile.jpg";

// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

// import "./Banner.css";
// import PrimaryButton from "../Button/PrimaryButton";
// import SecondaryButton from "../Button/SecondaryButton";

// const Banner = () => {
//   return (
//     <div className="h-[500px] md:h-[700px]">
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         speed={600}
//         parallax={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Parallax, Pagination, Navigation, Autoplay]}
//         className="mySwiper"
//       >
//         {/* Electrical */}
//         <SwiperSlide className="">
//           {/* BG Image Code Start */}
//           <div
//             slot="container-start"
//             className="parallax-bg "
//             style={{
//               backgroundImage: `url(${electrical})`,
//             }}
//             data-swiper-parallax="-23%"
//           ></div>
//           {/* BG Image Code end */}

//           <div className="flex flex-col items-center justify-center h-[500px] md:h-[700px]">
//             <div
//               className=" text-2xl md:text-4xl font-bold my-7"
//               data-swiper-parallax="-300"
//             >
//               Electrical
//             </div>
//             <div
//               className="subtitle font-bold px-4 py-2  rounded-2xl bg-green-400 my-2 text-2xl"
//               data-swiper-parallax="-200"
//             >
//               Learn. Grow. Succeed.
//             </div>
//             <div className="text" data-swiper-parallax="-100">
//               <p className="text-center">
//                 Master the fundamentals of electricity and power systems. Our
//                 hands-on courses are designed to equip you with practical skills
//                 to lead in today’s energy-driven world.
//               </p>
//             </div>
//             <div className="flex gap-5 mt-5">
//               <PrimaryButton buttonText="Get Started"></PrimaryButton>
//               <SecondaryButton buttonText="Our Courses"></SecondaryButton>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Mechanical */}
//         <SwiperSlide>
//           {/* BG Image Code Start */}
//           <div
//             slot="container-start"
//             className="parallax-bg "
//             style={{
//               backgroundImage: `url(${mechanical})`,
//             }}
//             data-swiper-parallax="-23%"
//           ></div>
//           {/* BG Image Code end */}

//           <div className="flex flex-col items-center justify-center h-[500px] md:h-[700px]">
//             <div
//               className="text-2xl md:text-4xl font-bold my-7"
//               data-swiper-parallax="-300"
//             >
//               Mechanical
//             </div>
//             <div
//               className="subtitle font-bold px-4 py-2  rounded-2xl bg-green-400 my-2 text-2xl"
//               data-swiper-parallax="-200"
//             >
//               Build Skills. Drive Innovation.
//             </div>
//             <div className="text" data-swiper-parallax="-100">
//               <p className="text-center">
//                 From engines to automation, explore the mechanics that move the
//                 world. Learn from industry experts and get real-world experience
//                 that powers your engineering journey.
//               </p>
//             </div>
//             <div className="flex gap-5 mt-5 z-0">
//               <SecondaryButton buttonText="Our Courses" />
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Civil */}
//         <SwiperSlide>
//           {/* BG Image Code Start */}
//           <div
//             slot="container-start"
//             className="parallax-bg "
//             style={{
//               backgroundImage: `url(${civil})`,
//             }}
//             data-swiper-parallax="-23%"
//           ></div>
//           {/* BG Image Code end */}

//           <div className="flex flex-col items-center justify-center h-[500px] md:h-[700px]">
//             <div
//               className="text-2xl md:text-4xl font-bold my-7 "
//               data-swiper-parallax="-300"
//             >
//               Civil
//             </div>
//             <div
//               className="subtitle font-bold px-4 py-2  rounded-2xl bg-green-400 my-2 text-2xl"
//               data-swiper-parallax="-200"
//             >
//               Build Your Future, Brick by Brick.
//             </div>
//             <div className="text" data-swiper-parallax="-100">
//               <p className="text-center">
//                 Shape the cities of tomorrow with in-courseh training in
//                 structural design, construction, and surveying. Build a solid
//                 foundation for a career in civil engineering.
//               </p>
//             </div>
//             <div className="flex gap-5 mt-5">
//               <PrimaryButton buttonText="Get Started"></PrimaryButton>
//               <SecondaryButton buttonText="Our Courses"></SecondaryButton>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Computer */}
//         <SwiperSlide>
//           {/* BG Image Code Start */}
//           <div
//             slot="container-start"
//             className="parallax-bg "
//             style={{
//               backgroundImage: `url(${Computer})`,
//             }}
//             data-swiper-parallax="-23%"
//           ></div>
//           {/* BG Image Code end */}

//           <div className="flex flex-col items-center justify-center h-[500px] md:h-[700px]">
//             <div
//               className="text-2xl md:text-4xl font-bold my-7 "
//               data-swiper-parallax="-300"
//             >
//               Computer
//             </div>
//             <div
//               className="subtitle font-bold px-4 py-2  rounded-2xl bg-green-400 my-2 text-2xl"
//               data-swiper-parallax="-200"
//             >
//               Code. Create. Conquer.
//             </div>
//             <div className="text" data-swiper-parallax="-100">
//               <p className="text-center">
//                 Dive into programming, networking, and cybersecurity with
//                 structured learning and interactive sessions. Future-proof your
//                 career with skills in high demand.
//               </p>
//             </div>
//             <div className="flex gap-5 mt-5">
//               <PrimaryButton buttonText="Get Started"></PrimaryButton>
//               <SecondaryButton buttonText="Our Courses"></SecondaryButton>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Textile */}
//         <SwiperSlide>
//           {/* BG Image Code Start */}
//           <div
//             slot="container-start"
//             className="parallax-bg "
//             style={{
//               backgroundImage: `url(${textile})`,
//             }}
//             data-swiper-parallax="-23%"
//           ></div>
//           {/* BG Image Code end */}

//           <div className="flex flex-col items-center justify-center h-[500px] md:h-[700px]">
//             <div
//               className="text-2xl md:text-4xl font-bold my-7 "
//               data-swiper-parallax="-300"
//             >
//               Textile
//             </div>
//             <div
//               className="subtitle font-bold px-4 py-2  rounded-2xl bg-green-400 my-2 text-2xl"
//               data-swiper-parallax="-200"
//             >
//               Fabric of Innovation.
//             </div>
//             <div className="text" data-swiper-parallax="-100">
//               <p className="text-center">
//                 Discover the science behind fabric and fashion. Learn advanced
//                 textile technology, design principles, and industry-grade
//                 manufacturing techniques.
//               </p>
//             </div>
//             <div className="flex gap-5 mt-5">
//               <PrimaryButton buttonText="Get Started"></PrimaryButton>
//               <SecondaryButton buttonText="Our Courses"></SecondaryButton>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;

// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
// import "./Banner.css";
// import PrimaryButton from "../Button/PrimaryButton";
// import SecondaryButton from "../Button/SecondaryButton";

// // Import your department images
// import electrical from "../../assets/Electrical.jpg";
// import mechanical from "../../assets/Mechanical.jpg";
// import civil from "../../assets/Civil.jpg";
// import Computer from "../../assets/Computer.jpg";
// import textile from "../../assets/Textile.jpg";

// const Banner = () => {
//   const departments = [
//     {
//       name: "Electrical",
//       image: electrical,
//       tagline: "Learn. Grow. Succeed.",
//       description:
//         "Master the fundamentals of electricity and power systems. Our hands-on courses are designed to equip you with practical skills to lead in today's energy-driven world.",
//       buttons: ["Get Started", "Our Courses"],
//     },
//     {
//       name: "Mechanical",
//       image: mechanical,
//       tagline: "Build Skills. Drive Innovation.",
//       description:
//         "From engines to automation, explore the mechanics that move the world. Learn from industry experts and get real-world experience that powers your engineering journey.",
//       buttons: ["Our Courses"],
//     },
//     {
//       name: "Civil",
//       image: civil,
//       tagline: "Build Your Future, Brick by Brick.",
//       description:
//         "Shape the cities of tomorrow with in-depth training in structural design, construction, and surveying. Build a solid foundation for a career in civil engineering.",
//       buttons: ["Get Started", "Our Courses"],
//     },
//     {
//       name: "Computer",
//       image: Computer,
//       tagline: "Code. Create. Conquer.",
//       description:
//         "Dive into programming, networking, and cybersecurity with structured learning and interactive sessions. Future-proof your career with skills in high demand.",
//       buttons: ["Get Started", "Our Courses"],
//     },
//     {
//       name: "Textile",
//       image: textile,
//       tagline: "Fabric of Innovation.",
//       description:
//         "Discover the science behind fabric and fashion. Learn advanced textile technology, design principles, and industry-grade manufacturing techniques.",
//       buttons: ["Get Started", "Our Courses"],
//     },
//   ];

//   return (
//     <div className="h-[500px] md:h-[700px] relative">
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//           "--swiper-pagination-bullet-size": "10px",
//           "--swiper-pagination-bullet-horizontal-gap": "6px",
//         }}
//         speed={800}
//         parallax={true}
//         pagination={{
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         loop={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         modules={[Parallax, Pagination, Navigation, Autoplay]}
//         className="mySwiper"
//       >
//         {departments.map((dept, index) => (
//           <SwiperSlide key={index}>
//             {/* Enhanced Background with Overlay */}
//             <div
//               slot="container-start"
//               className="parallax-bg relative"
//               style={{
//                 backgroundImage: `url(${dept.image})`,
//               }}
//               data-swiper-parallax="-23%"
//             >
//               <div className="absolute inset-0 bg-black/40"></div>
//             </div>

//             {/* Content with Animations */}
//             <div className="flex flex-col items-center justify-center h-[500px] md:h-[700px] relative z-10 px-4">
//               <motion.div
//                 className="text-2xl md:text-4xl font-bold my-7 text-white"
//                 data-swiper-parallax="-300"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 {dept.name}
//               </motion.div>

//               <motion.div
//                 className="subtitle font-bold px-4 py-2 rounded-2xl bg-[#07a698] my-2 text-xl md:text-2xl text-white shadow-lg"
//                 data-swiper-parallax="-200"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//               >
//                 {dept.tagline}
//               </motion.div>

//               <motion.div
//                 className="text text-white max-w-2xl text-center"
//                 data-swiper-parallax="-100"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//               >
//                 <p className="text-sm md:text-base leading-relaxed">
//                   {dept.description}
//                 </p>
//               </motion.div>

//               <motion.div
//                 className="flex gap-5 mt-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//               >
//                 {dept.buttons.includes("Get Started") && (
//                   <PrimaryButton buttonText="Get Started" />
//                 )}
//                 <SecondaryButton
//                   buttonText={
//                     dept.buttons.includes("Our Courses")
//                       ? "Course Outline"
//                       : "Watch More"
//                   }
//                 />
//               </motion.div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Arrows */}
//       <div className="swiper-button-prev !text-white !opacity-80 hover:!opacity-100 !transition-all !duration-300"></div>
//       <div className="swiper-button-next !text-white !opacity-80 hover:!opacity-100 !transition-all !duration-300"></div>
//     </div>
//   );
// };

// export default Banner;

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "./Banner.css";
import axios from "axios";

// Import your department images
import electrical from "../../assets/Electrical.jpg";
import mechanical from "../../assets/Mechanical.jpg";
import civil from "../../assets/Civil.jpg";
import Computer from "../../assets/Computer.jpg";
import textile from "../../assets/Textile.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Banner = () => {
  // Fetch Data for banner
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/course`);
      setCourses(data);
    };
    getData();
  }, []);

  return (
    <div className="h-[500px] md:h-[700px] relative">
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
        loop={true}
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
            {/* Enhanced Background with Overlay */}
            <div
              slot="container-start"
              className="parallax-bg relative"
              style={{
                backgroundImage: `url(${mechanical})`,
              }}
              data-swiper-parallax="-23%"
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content with Animations */}
            <div className="flex flex-col items-center justify-center h-[500px] md:h-[700px] relative z-10 px-4">
              <motion.div
                className="text-2xl md:text-4xl font-bold my-7  text-white"
                data-swiper-parallax="-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {course.course_title}
              </motion.div>

              <motion.div
                className="subtitle font-bold px-4 text-xl md:text-2xl text-green-400 shadow-lg"
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
                className="flex gap-5 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="relative group">
                  <Link
                    to={`/course/${course._id}`}
                    className="px-6 py-2 border border-white text-white rounded-full font-medium transition-all duration-300 group-hover:bg-white group-hover:text-[#07a698] cursor-pointer "
                  >
                    <span className="inline-block transition-all duration-300 group-hover:-translate-x-2 group-hover:text-transparent  ">
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

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev !text-white !opacity-80 hover:!opacity-100 !transition-all !duration-300"></div>
      <div className="swiper-button-next !text-white !opacity-80 hover:!opacity-100 !transition-all !duration-300"></div>
    </div>
  );
};

export default Banner;
