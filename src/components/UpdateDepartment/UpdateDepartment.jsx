import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { imageUpload } from "../../utils/utils";
import { useLoaderData } from "react-router-dom";

const UpdateDepartment = () => {
    const [isLoading, setIsLoading] = useState(false);

    const department = useLoaderData();
    const { _id, title, description, photoURL, category } = department;
    console.log(department);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const category = e.target.category.value;

        const image = e.target.image.files[0];
        const photoURL = await imageUpload(image);

        const departmentData = {
            title,
            description,
            photoURL,
            category,
        };
        console.log(departmentData);

        try {
            await axios.put(
                `${import.meta.env.VITE_API_URL}/updateDepartment/${_id}`,
                departmentData
            );
            toast.success("Update Successfully");
            setIsLoading(false);
            e.target.reset();
        } catch {
            toast.error("something went wrong");
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-16 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Update Department 
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Department Name
                    </label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={title}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="e.g. Civil Engineering"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2 ">
                    <label className="text-gray-700 " htmlFor="category">
                        Category
                    </label>
                    <select
                        required
                        defaultValue={category}
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
                        <option value="textile">Textile Engineering</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        defaultValue={description}
                        name="description"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        rows="4"
                        placeholder="Brief description of the department"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Department Banner Image
                    </label>
                    <label htmlFor="image" className="block mb-2 text-sm">
                        Select Banner Image:
                    </label>
                    <input
                        required
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer"
                >
                    Update Department{" "}
                    {isLoading ? (
                        <span className="loading loading-infinity loading-xl"></span>
                    ) : (
                        ""
                    )}
                </button>
            </form>
        </div>
    );
};

export default UpdateDepartment;
