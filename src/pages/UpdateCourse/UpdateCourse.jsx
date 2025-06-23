import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";
import { cloudinaryUploadHd } from "../../utils/utils";

const UpdateCourse = () => {
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get(
                    `${import.meta.env.VITE_API_URL}/department`
                );
                const uniqueCategories = [
                    ...new Set(
                        data.map((dep) => dep.category.toLowerCase().trim())
                    ),
                ];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Failed to fetch department categories", error);
            }
        };

        fetchCategories();
    }, []);

    const course = useLoaderData();
    const {
        _id,
        category,
        course_description,
        course_duration,
        course_instructor,
        course_price,
        course_title,
        learn_bio,
        whatYoullLearn = [],
        dataToSend = [],
    } = course;

    // Set default learning points from loader data
    const [learningPoints, setLearningPoints] = useState(
        whatYoullLearn.length ? whatYoullLearn : [""]
    );

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

    // Set default curriculum from loader data
    const [curriculum, setCurriculum] = useState(
        dataToSend.length
            ? dataToSend.map((item) => ({ title: item.title }))
            : [{ title: "" }]
    );

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
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const course_title = form.course_title.value;
        const course_instructor = form.course_instructor.value;
        const enrollment_deadline = startDate;
        const category = form.category.value;
        const course_price = form.course_price.value;
        const course_duration = form.course_duration.value;
        const course_description = form.description.value;
        const banner_image = form.banner_image.files[0];
        const learn_bio = form.learn_bio.value;

        const dataToSend = curriculum.map((item, idx) => ({
            week: idx + 1,
            title: item.title,
        }));

        const whatYoullLearn = learningPoints.filter(
            (point) => point.trim() !== ""
        );

        try {
            const course_banner = await cloudinaryUploadHd(banner_image);

            const courseData = {
                course_title,
                course_instructor,
                enrollment_deadline,
                category,
                course_price,
                course_duration,
                course_banner,
                course_description,
                learn_bio,
                whatYoullLearn,
                dataToSend,
            };

            await axios.put(
                `${import.meta.env.VITE_API_URL}/updateCourse/${_id}`,
                courseData,
                { withCredentials: true }
            );

            toast.success("Course Updated Successfully");
            form.reset();
            navigate("/dashboardLayout/manageCourse");
        } catch (err) {
            console.error(err);
            toast.error("Course can't be updated now! Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
            <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 text-center">
                    Update Your Existing Course
                </h2>
                <hr />

                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label
                                className="text-gray-700"
                                htmlFor="course_title"
                            >
                                Course Title
                            </label>
                            <input
                                required
                                id="course_title"
                                defaultValue={course_title}
                                name="course_title"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 border rounded-md"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700"
                                htmlFor="course_instructor"
                            >
                                Instructor Name
                            </label>
                            <input
                                required
                                defaultValue={course_instructor}
                                id="course_instructor"
                                name="course_instructor"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 border rounded-md"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700">
                                Enrollment Deadline
                            </label>
                            <DatePicker
                                className="text-black border p-2 rounded-md"
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
                                <option value="">Select a category</option>
                                {categories.map((cat, idx) => (
                                    <option key={idx} value={cat}>
                                        {cat.replace(/(^|\s)\S/g, (l) =>
                                            l.toUpperCase()
                                        )}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                className="text-gray-700"
                                htmlFor="course_price"
                            >
                                Course Price
                            </label>
                            <input
                                required
                                id="course_price"
                                defaultValue={course_price}
                                name="course_price"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 border rounded-md"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700"
                                htmlFor="course_duration"
                            >
                                Course Duration
                            </label>
                            <input
                                required
                                defaultValue={course_duration}
                                id="course_duration"
                                name="course_duration"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 border rounded-md"
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
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-gray-700" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            required
                            defaultValue={course_description}
                            id="description"
                            name="description"
                            className="block w-full px-4 py-2 mt-2 border rounded-md"
                        ></textarea>
                    </div>

                    {/* What You'll Learn Bio */}
                    <div>
                        <label className="text-gray-700" htmlFor="learn_bio">
                            What You'll Learn Bio
                        </label>
                        <input
                            required
                            id="learn_bio"
                            name="learn_bio"
                            defaultValue={learn_bio}
                            placeholder="Write What You'll Learn in Bio ..."
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
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
                                        className="flex-1 block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md"
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

                    {/* Course Curriculum */}
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
                                        placeholder={`Curriculum ${index + 1}`}
                                        className="flex-1 block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md"
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
                        <button
                            type="submit"
                            disabled={loading}
                            className="cursor-pointer px-8 py-2.5 text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    Updating...
                                    <span className="loading loading-bars loading-md"></span>
                                </span>
                            ) : (
                                "Update Course"
                            )}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateCourse;
