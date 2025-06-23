import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBolt,
  FaHardHat,
  FaCogs,
  FaFan,
} from "react-icons/fa";

const AboutUsTwo = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-[#07a698]">SM-Tech</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of engineers through quality
            education and practical training.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our <span className="text-[#07a698]">Mission</span>
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                At SM-Tech, we bridge the gap between academic theory and
                industry practice by providing specialized training in
                engineering disciplines.
              </p>
              <p className="text-gray-600 text-lg">
                Our goal is to produce technically competent professionals who
                can meet the challenges of today's competitive job market.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-[#07a698]">Specializations</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Computer Science */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#07a698]">
              <div className="text-[#07a698] mb-4">
                <FaLaptopCode className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Computer Science & Engineering
              </h3>
              <p className="text-gray-600">
                Programming, AI, Data Structures, Algorithms, Database Systems,
                and Software Development
              </p>
            </div>

            {/* Electrical Engineering */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#07a698]">
              <div className="text-[#07a698] mb-4">
                <FaBolt className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Electrical Engineering</h3>
              <p className="text-gray-600">
                Circuits, Power Systems, Electronics, Control Systems, and
                Renewable Energy
              </p>
            </div>

            {/* Civil Engineering */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#07a698]">
              <div className="text-[#07a698] mb-4">
                <FaHardHat className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Civil Engineering</h3>
              <p className="text-gray-600">
                Structural Design, Surveying, Construction Management, and
                Transportation Engineering
              </p>
            </div>

            {/* Mechanical Engineering */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#07a698]">
              <div className="text-[#07a698] mb-4">
                <FaCogs className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mechanical Engineering</h3>
              <p className="text-gray-600">
                Thermodynamics, CAD, Manufacturing, Robotics, and Fluid
                Mechanics
              </p>
            </div>

            {/* Textile Engineering */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#07a698]">
              <div className="text-[#07a698] mb-4">
                <FaFan className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Textile Engineering</h3>
              <p className="text-gray-600">
                Fabric Technology, Sustainable Materials, Process Engineering,
                and Quality Control
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#07a698] rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose <span className="text-white">SM-Tech?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaChalkboardTeacher className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-white/90">
                Industry professionals with years of teaching and practical
                experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practical Focus</h3>
              <p className="text-white/90">
                70% hands-on training with modern equipment and software
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Placement</h3>
              <p className="text-white/90">
                Strong industry connections and placement assistance
              </p>
            </div>
          </div>
        </div>

        {/* Test */}
        <div className="bg-[#07a698] py-8 px-4 mt-5 rounded-xl">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {/* Student Counter */}
            <div className="opacity-0  animate-[fadeInUp_1s_ease-out_0.1s_forwards]">
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-white/90">Students Trained</p>
            </div>

            {/* Instructor Counter */}
            <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              <p className="text-4xl font-bold text-white">20+</p>
              <p className="text-white/90">Expert Instructors</p>
            </div>

            {/* Fields Counter */}
            <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
              <p className="text-4xl font-bold text-white">5</p>
              <p className="text-white/90">Engineering Fields</p>
            </div>

            {/* Satisfaction Counter */}
            <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
              <p className="text-4xl font-bold text-white">95%</p>
              <p className="text-white/90">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AboutUsTwo;
