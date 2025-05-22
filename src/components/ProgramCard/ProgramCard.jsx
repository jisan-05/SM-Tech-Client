import { Link } from "react-router-dom";

const ProgramCard = ({ course }) => {
    const {
        _id,
        category,
        course_description,
        course_duration,
        course_instructor,
        course_price,
        course_title,
        enrollment_deadline,
        course_banner,
    } = course;

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-48 ">
                <img
                    className="w-full h-full object-cover"
                    src={course_banner}
                    alt=""
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100  text-xs font-bold px-2.5 py-0.5 rounded-full">
                        {category}
                    </span>
                    <div className="text-right">
                        <span className="text-sm text-gray-500">Deadline </span>
                        <p className="font-medium">
                            {new Date(enrollment_deadline).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className="space-y-3 mt-3">
                    <h4 className="text-xl font-semibold">{course_title}</h4>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                        {course_description}
                    </p>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="mr-4">{course_instructor}</span>

                    <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>{course_duration}</span>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-sm text-gray-500">Price</span>
                        <p className="text-2xl font-bold text-gray-800">
                            ${course_price}
                        </p>
                    </div>
                    <Link to={`/course/${_id}`}>
                    <button className="bg-[#07a698] hover:bg-[#01998c] text-white font-medium py-2 px-6 rounded-lg transition-all duration-300">
                        See Details
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
