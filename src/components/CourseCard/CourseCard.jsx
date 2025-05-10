import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, course_title, course_description, course_instructor } = course;
  return (
    <div>
      {/* ---------------- card ------------- */}
      <div className="card bg-base-100 w-full shadow-sm px-10 py-10 group">
        <figure className="overflow-hidden rounded-xl">
          <div className="w-full md:h-56">
            <img
              className="group-hover:scale-105 w-full h-full object-cover transition duration-500 ease-in-out"
              alt="Course Image"
            />
          </div>
        </figure>
        <div className="pt-8 space-y-3 ">
          <h2 className="card-title">{course_title}</h2>
          <p>{course_description}</p>
          <div className="divider">Instructor: {course_instructor}</div>
          <div className="card-actions flex justify-between items-center">
            <Link
              to={`/course/${_id}`}
              className="btn w-full btn-neutral bg-[#07a698] hover:bg-[#01998c] border-none rounded-3xl px-6 py-2 text-white"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
