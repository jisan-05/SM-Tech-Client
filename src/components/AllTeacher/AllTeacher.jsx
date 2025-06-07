import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaFacebook, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const AllTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/teachers`);
        setTeachers(res.data);
      } catch (err) {
        console.error("Failed to fetch teachers", err);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h3 className="text-sm font-medium text-[#07a698] uppercase tracking-wider">Our Instructors</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Meet Our Expert Instructors</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Learn from industry professionals with real-world experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Optimized Image Container */}
            <div className="relative h-60 w-full overflow-hidden bg-gray-100">
              <img
                src={teacher.photoURL || "/default-instructor.jpg"}
                alt={teacher.name}
                loading="lazy"

                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.src = "/default-instructor.jpg";
                }}
              />
            </div>
            
            {/* Rest of the card content remains the same */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                  <p className="text-[#07a698] font-medium">{teacher.designation}</p>
                  <p className="text-sm text-gray-500 mt-1">{teacher.specialization}</p>
                </div>
                <div className="flex space-x-2">
                  {teacher.whatsapp && (
                    <a 
                      href={teacher.whatsapp.includes('http') ? teacher.whatsapp : `https://wa.me/${teacher.whatsapp}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition"
                    >
                      <FaWhatsapp size={18} />
                    </a>
                  )}
                  {teacher.facebook && (
                    <a 
                      href={teacher.facebook.includes('http') ? teacher.facebook : `https://facebook.com/${teacher.facebook}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition"
                    >
                      <FaFacebook size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <FaGraduationCap className="mr-2 text-[#07a698]" />
                  <span>{teacher.education || "Masters in Computer Science"}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaBriefcase className="mr-2 text-[#07a698]" />
                  <span>{teacher.experience || "10+ years industry experience"}</span>
                </div>
              </div>

              <div className="mt-4 flex-1">
                <p className="text-sm text-gray-600 line-clamp-3">
                  {teacher.bio || "Passionate educator with extensive industry knowledge and practical teaching experience."}
                </p>
              </div>

              {teacher.skills?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {teacher.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-[#07a698]/10 text-[#07a698] text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllTeacher;