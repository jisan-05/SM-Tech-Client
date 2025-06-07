import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, course_title, course_description, course_instructor, course_banner } = course;
  
  return (
    <div className="h-full"> {/* Added h-full */}
      <div className="card bg-base-100 w-full lg:w-[95%] shadow-sm  group h-full flex flex-col">
        <figure className="overflow-hidden rounded-t-xl flex-shrink-0"> {/* Added flex-shrink-0 */}
          <div className="w-full md:h-56">
            <img
              src={course_banner}
              loading="lazy"

              className="group-hover:scale-105 w-full h-full object-cover transition duration-500 ease-in-out"
              alt="Course Image"
            />
          </div>
        </figure>
        <div className="pt-8 space-y-1 flex flex-col flex-grow px-4 py-4 lg:px-8 lg:py-8"> {/* Added flex classes */}
          <h2 className="card-title">{course_title}</h2>
          <p className="flex-grow"> {/* Added flex-grow to description */}
            {course_description}
          </p>
          <p className="mt-0.5"><span className="font-bold">Instructor :</span> {course_instructor}</p>
          <div className="divider"></div>
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