import React from 'react';
import { FaWhatsapp, FaFacebook, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const TeacherCard = ({teacher}) => {
  return (
    <div className="bg-white white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group relative">
      {/* Original Gradient Background on Hover (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
      
      <div className="relative z-10 p-6">
        {/* Profile Image - Larger Size */}
        <div className="flex justify-center mb-6">
          <img
            src={teacher.photoURL || "/default-instructor.jpg"}
            loading="lazy"

            alt={teacher.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            onError={(e) => {
              e.target.src = "/default-instructor.jpg";
            }}
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
          <p className="text-[#07a698] font-medium mt-1">{teacher.designation}</p>
          <p className="text-sm text-gray-500 mt-1">{teacher.specialization}</p>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          {teacher.whatsapp && (
            <a 
              href={teacher.whatsapp.includes('http') ? teacher.whatsapp : `https://wa.me/${teacher.whatsapp}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500 transition text-lg"
            >
              <FaWhatsapp />
            </a>
          )}
          {teacher.facebook && (
            <a 
              href={teacher.facebook.includes('http') ? teacher.facebook : `https://facebook.com/${teacher.facebook}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition text-lg"
            >
              <FaFacebook />
            </a>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <FaGraduationCap className="mr-2 text-[#07a698]" />
            <span>{teacher.education || "Masters in Computer Science"}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaBriefcase className="mr-2 text-[#07a698]" />
            <span>{teacher.experience || "10+ years experience"}</span>
          </div>
        </div>

        {teacher.skills?.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {teacher.skills.slice(0, 3).map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-[#07a698]/10 text-[#07a698] text-xs rounded-full">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherCard;