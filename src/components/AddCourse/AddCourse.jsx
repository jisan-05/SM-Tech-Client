import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { imageUpload } from "../../utils/utils";




import "react-datepicker/dist/react-datepicker.css";


const AddCourse = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const course_title = form.course_title.value;
        const course_description = form.description.value;
        const course_duration = form.course_duration.value;
        const course_instructor = form.course_instructor.value;
        const enrollment_deadline = startDate;
        const course_price = form.course_price.value;

         // image Upload system 

        const banner_image = e.target.banner_image.files[0];

        const course_banner = await imageUpload(banner_image);

        const courseData = {
            course_title,
            course_instructor,
            enrollment_deadline,
            category,
            course_price,
            course_duration,
            course_description,
            course_banner
        };
       

        console.log(courseData);
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/course`,
                courseData
            );
            console.log(data);
            toast.success("New Course Added Successfully");
            e.target.reset()
        } catch (err) {
            console.log(err);
            toast.error("Something are wrong! Tray Again");
        }
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

                        <div className="flex flex-col gap-2 ">
                            <label
                                className="text-gray-700 "
                                htmlFor="category"
                            >
                                Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                className="border p-2 rounded-md"
                            >
                                <option value="electrical">
                                    Electrical Engineering
                                </option>
                                <option value="mechanical">
                                    Mechanical Engineering
                                </option>
                                <option value="civil">Civil Engineering</option>
                                <option value="computer">
                                    Computer Science & Engineering
                                </option>
                                <option value="textile">
                                    Textile Engineering
                                </option>
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
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            id="description"
                            placeholder="SM-Tech Will provide you best guidance. Here you get................"
                            name="description"
                        ></textarea>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Add Course
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddCourse;
