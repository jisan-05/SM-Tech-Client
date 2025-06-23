import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import ProgramCard from "../ProgramCard/ProgramCard";
import LoadingSpinner from "../Shared/LoadingSpinner";
import './Programs.css'

const Programs = () => {
    const [departments, setDepartments] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch department categories
    useEffect(() => {
        const fetchDepartments = async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/department`
            );
            setDepartments(data);

            const uniqueCategories = [
                ...new Set(
                    data.map((dep) => dep.category.toLowerCase().trim())
                ),
            ];
            setCategories(uniqueCategories);

            if (uniqueCategories.length > 0) {
                setSelectedCategory(uniqueCategories[0]); // Set default selected category
            }
        };

        fetchDepartments();
    }, []);

    // Fetch courses for selected category
    useEffect(() => {
        if (!selectedCategory) return;

        const fetchCourses = async () => {
            setLoading(true);
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/course`
            );
            const filtered = data.filter(
                (course) =>
                    course.category.toLowerCase().trim() === selectedCategory
            );
            setCourses(filtered);
            setLoading(false);
        };

        fetchCourses();
    }, [selectedCategory]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center pb-12 bg-teal-600 bg-clip-text text-transparent">
                Explore Our Programs
            </h1>

            <Tabs
                selectedIndex={categories.indexOf(selectedCategory)}
                onSelect={(index) => setSelectedCategory(categories[index])}
            >
                <TabList className="flex flex-wrap gap-3 justify-center mb-10">
                    {categories.map((category, idx) => (
                        <Tab
                            key={idx}
                            className="px-5 py-2 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-100 transition-all"
                        >
                            {category.replace(/(^|\s)\S/g, (l) =>
                                l.toUpperCase()
                            )}
                        </Tab>
                    ))}
                </TabList>

                {categories.map((category, idx) => (
                    <TabPanel key={idx}>
                        {loading ? (
                            <LoadingSpinner></LoadingSpinner>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {courses.length > 0 ? (
                                    courses.map((course) => (
                                        <ProgramCard
                                            key={course._id}
                                            course={course}
                                        />
                                    ))
                                ) : (
                                    <p className="text-center text-gray-500 col-span-full text-lg italic">
                                        No active courses available in this
                                        department.
                                    </p>
                                )}
                            </div>
                        )}
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default Programs;
