import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { cloudinaryUploadHd } from "../../utils/utils";

const AddCourse = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [learningPoints, setLearningPoints] = useState([""]);
    const navigate = useNavigate();

    // new added start
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/department`)
            .then((res) => {
                const unique = [
                    ...new Set(
                        res.data.map((dep) => dep.category.toLowerCase().trim())
                    ),
                ];
                setCategories(unique);
            })
            .catch((err) => console.error("Failed to fetch categories:", err));
    }, []);
    // new added End

    const handleAddLearningPoint = () => {
        setLearningPoints([...learningPoints, ""]);
    };

    const handleRemoveLearningPoint = (index) => {
        const updatedPoints = [...learningPoints];
        updatedPoints.splice(index, 1);
        setLearningPoints(updatedPoints);
    };

    const handleLearningPointChange = (index, value) => {
        const updatedPoints = [...learningPoints];
        updatedPoints[index] = value;
        setLearningPoints(updatedPoints);
    };

    const [curriculum, setCurriculum] = useState([{ title: "" }]);

    const handleChange = (index, value) => {
        const updated = [...curriculum];
        updated[index].title = value;
        setCurriculum(updated);
    };

    const handleAddWeek = () => {
        setCurriculum([...curriculum, { title: "" }]);
    };

    const handleRemoveWeek = (index) => {
        const updated = [...curriculum];
        updated.splice(index, 1);
        setCurriculum(updated);
    };

    const handleFormSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const course_title = form.course_title.value;
        const course_description = form.description.value;
        const course_duration = form.course_duration.value;
        const course_instructor = form.course_instructor.value;
        const enrollment_deadline = startDate;
        const course_price = form.course_price.value;
        const learn_bio = form.learn_bio.value;

        const dataToSend = curriculum.map((item, idx) => ({
            week: idx + 1,
            title: item.title,
        }));

        // Filter out empty learning points
        const whatYoullLearn = learningPoints.filter(
            (point) => point.trim() !== ""
        );

        // image Upload system

        const banner_image = e.target.banner_image.files[0];

        const course_banner = await cloudinaryUploadHd(banner_image);

        const courseData = {
            course_title,
            course_instructor,
            enrollment_deadline,
            category,
            course_price,
            course_duration,
            course_description,
            course_banner,
            learn_bio,
            whatYoullLearn,
            dataToSend,
        };

        //console.log(courseData);
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/course`,
                courseData,
                { withCredentials: true }
            );
            //console.log(data);
            toast.success("New Course Added Successfully");
            navigate("/dashboardLayout/manageCourse");
            e.target.reset();
        } catch (err) {
            //console.log(err);
            toast.error("Something are wrong! Tray Again");
        }
        setLoading(false);
    };
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
            <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
                <h2 className="text-lg font-semibold text-gray-700 capitalize justify-center align-middle text-center ">
                    Add A Course
                </h2>
                <hr />

                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label
                                className="text-gray-700 "
                                htmlFor="course_title"
                            >
                                Course Title
                            </label>
                            <input
                                required
                                id="course_title"
                                placeholder="Computer Science & Engineering"
                                name="job_title"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 "
                                htmlFor="emailAddress"
                            >
                                Instructor Name
                            </label>
                            <input
                                required
                                id="course_instructor"
                                placeholder="Md. Meherul Islam"
                                type="text"
                                name="course_instructor"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            />
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <label className="text-gray-700">
                                Enrollment Deadline
                            </label>

                            {/* Date Picker Input Field */}
                            <DatePicker
                                className="text-black border p-2 rounded-md "
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700" htmlFor="category">
                                Category
                            </label>
                            <select
                                required
                                name="category"
                                id="category"
                                className="border p-2 rounded-md"
                            >
                                <option value="" disabled selected>
                                    Select a category
                                </option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat.replace(/(^|\s)\S/g, (l) =>
                                            l.toUpperCase()
                                        )}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                className="text-gray-700 "
                                htmlFor="min_price"
                            >
                                Course Price
                            </label>
                            <input
                                required
                                id="course_price"
                                placeholder="999"
                                name="course_price"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 "
                                htmlFor="min_price"
                            >
                                Course Duration
                            </label>
                            <input
                                required
                                id="course_duration"
                                name="course_duration"
                                placeholder="Give course duration in month"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <label
                                className="text-gray-700"
                                htmlFor="course_banner"
                            >
                                Course Banner (Image)
                            </label>
                            <input
                                required
                                type="file"
                                id="course_banner"
                                name="banner_image"
                                accept="image/*"
                                className=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-gray-700 " htmlFor="description">
                            Description
                        </label>
                        <textarea
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            id="description"
                            placeholder="SM-Tech Will provide you best guidance. Here you get................"
                            name="description"
                        ></textarea>
                    </div>
                    {/* What You'll Learn Bio  */}
                    <div>
                        <label className="text-gray-700 " htmlFor="min_price">
                            What You'll Learn Bio
                        </label>
                        <input
                            required
                            id="learn_bio"
                            name="learn_bio"
                            placeholder="Write What You'll Learn in Bio ... "
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        />
                    </div>

                    {/* What You'll Learn Section */}
                    <div className="mt-6">
                        <label className="text-gray-700 block mb-2">
                            What You'll Learn
                        </label>
                        <div className="space-y-3">
                            {learningPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        type="text"
                                        value={point}
                                        onChange={(e) =>
                                            handleLearningPointChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                        placeholder={`Learning point ${
                                            index + 1
                                        }`}
                                        className="flex-1 block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                    />
                                    {learningPoints.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveLearningPoint(index)
                                            }
                                            className="p-2 text-red-500 hover:text-red-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddLearningPoint}
                                className="mt-2 flex items-center text-blue-600 hover:text-blue-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Add Learning Point
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label className="text-gray-700 block mb-2">
                            Add Course Curriculum
                        </label>
                        <div className="space-y-3">
                            {curriculum.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        type="text"
                                        value={item.title}
                                        onChange={(e) =>
                                            handleChange(index, e.target.value)
                                        }
                                        placeholder={`Curriculum ${index + 1} `}
                                        className="flex-1 block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                    />
                                    {curriculum.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveWeek(index)
                                            }
                                            className="p-2 text-red-500 hover:text-red-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddWeek}
                                className="mt-2 flex items-center text-blue-600 hover:text-blue-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Add Curriculum
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        {loading ? (
                            <button className="cursor-pointer px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Add Course{" "}
                                <span className="loading loading-bars loading-md"></span>
                            </button>
                        ) : (
                            <button className="cursor-pointer px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Add Course
                            </button>
                        )}
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddCourse;
