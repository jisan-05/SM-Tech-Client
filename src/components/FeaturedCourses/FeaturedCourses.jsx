import React from "react";
import CourseCard from "../CourseCard/CourseCard";

import electrical from "../../assets/Electrical.jpg";
import mechanical from "../../assets/Mechanical.jpg";
import civil from "../../assets/Civil.jpg";
import Computer from "../../assets/Computer.jpg";
import textile from "../../assets/Textile.jpg";

const FeaturedCourses = () => {
  return (
    <div className="py-30">
      <div>
        <button className="btn btn-outline border-gray-600 px-10 rounded-4xl flex mx-auto ">
          Top Class Courses
        </button>
        <p className="text-5xl font-semibold text-center mt-8">
          Explore Featured Courses
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 xl:gap-20">
        {/* Electrical */}
        <CourseCard
          img={electrical}
          title={"Electrical Engineering"}
          description={
            "Electrical engineering is a broad field that involves the study, design, and application of electricity, electronics, and electromagnetism."
          }
        />

        {/* Mechanical */}
        <CourseCard
          img={mechanical}
          title={"Mechanical Engineering"}
          description={
            "Mechanical engineering is a broad field that deals with the design, analysis, manufacturing, and maintenance of mechanical systems, machines, and devices."
          }
        />

        {/* Civil */}
        <CourseCard
          img={civil}
          title={"Civil Engineering"}
          description={
            "Civil engineering is a discipline focused on the design, construction, and maintenance of infrastructure like roads, bridges, buildings, and water systems."
          }
        />

        {/* Computer */}
        <CourseCard
          img={Computer}
          title={"Computer Science & Engineering"}
          description={
            "Computer Science and Engineering (CSE) is an interdisciplinary field that combines aspects of computer science, computer engineering, and software engineering."
          }
        />

        {/* Textile */}
        <CourseCard
          img={textile}
          title={"Textile Engineering"}
          description={
            "Textile engineering is a field that applies engineering principles to the design, production, and processing of textiles, from raw materials to finished products."
          }
        />
      </div>
    </div>
  );
};

export default FeaturedCourses;
