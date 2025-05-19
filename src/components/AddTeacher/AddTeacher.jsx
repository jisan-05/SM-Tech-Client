import { useState } from "react";
import axios from "axios";
import { imageUpload } from "../../utils/utils";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const navigate = useNavigate();

  const handleAddSkill = () => {
    if (currentSkill && !skills.includes(currentSkill)) {
      setSkills([...skills, currentSkill]);
      setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const teacherData = {
      name: formData.get("name"),
      designation: formData.get("designation"),
      specialization: formData.get("specialization"),
      education: formData.get("education"),
      experience: formData.get("experience"),
      bio: formData.get("bio"),
      whatsapp: formData.get("whatsapp"),
      facebook: formData.get("facebook"),
      skills: skills,
    };

    try {
      const image = formData.get("image");
      if (image) {
        const photoURL = await imageUpload(image);
        teacherData.photoURL = photoURL;
      }

      await axios.post(`${import.meta.env.VITE_API_URL}/teachers`, teacherData, {
        withCredentials: true,
      });

      toast.success("Teacher added successfully!");
      e.target.reset();
      setSkills([]);
      // navigate("/dashboard/manageTeachers");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
      navigate("/dashboardLayout/manageTeacher")
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Teacher</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">Full Name*</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Sadia Rahman"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Designation*</label>
            <input
              type="text"
              name="designation"
              placeholder="e.g. Web Instructor"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Specialization*</label>
            <input
              type="text"
              name="specialization"
              placeholder="e.g. MERN Stack Developer"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Education */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Education*</label>
            <input
              type="text"
              name="education"
              placeholder="e.g. MSc in Computer Science"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Experience*</label>
            <input
              type="text"
              name="experience"
              placeholder="e.g. 5+ years industry experience"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Social Links */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">WhatsApp (Optional)</label>
            <input
              type="url"
              name="whatsapp"
              placeholder="https://wa.me/+88017******"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Facebook (Optional)</label>
            <input
              type="url"
              name="facebook"
              placeholder="https://facebook.com/username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Bio*</label>
          <textarea
            name="bio"
            rows="3"
            placeholder="Short professional bio..."
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Skills (Optional)</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              placeholder="Add a skill"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div key={skill} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full flex items-center">
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="ml-2 text-blue-400 hover:text-blue-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Profile Image*</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-spinner text-white"></span>
          ) : (
            "Add Teacher"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;