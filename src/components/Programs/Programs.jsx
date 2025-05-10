// // React Tab start
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// // React Tab End

// import ProgramCard from "../ProgramCard/ProgramCard";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Programs = () => {
//   const [courses, setCourses] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axios(`${import.meta.env.VITE_API_URL}/course`);
//       setCourses(data);
//     };
//     getData();
//   }, []);
//   return (
//     <Tabs>
//       <TabList>
//         <Tab>Computer Science & Engineering</Tab>
//         <Tab>Civil Engineering</Tab>
//         <Tab>Textile Engineering</Tab>
//         <Tab>Mechanical Engineering</Tab>
//         <Tab>Electrical Engineering</Tab>
//       </TabList>

//       {/* Computer */}
//       <TabPanel>
//         {courses.map((course) => {
//           if (course.category === "computer") {
//             return <ProgramCard course={course} key={course._id} />;
//           }
//         })}
//       </TabPanel>

//       {/* Civil */}
//       <TabPanel>
//         {courses.map((course) => {
//           if (course.category === "civil") {
//             return <ProgramCard course={course} key={course._id} />;
//           }
//         })}
//       </TabPanel>

//       {/* Textile */}
//       <TabPanel>
//         {courses.map((course) => {
//           if (course.category === "textile") {
//             return <ProgramCard course={course} key={course._id} />;
//           }
//         })}
//       </TabPanel>

//       {/* Mechanical */}
//       <TabPanel>
//         {courses.map((course) => {
//           if (course.category === "mechanical") {
//             <ProgramCard course={course} key={course._id} />;
//           }
//         })}
//       </TabPanel>

//       {/* Electrical */}
//       <TabPanel>
//         {courses.map((course) => {
//           if (course.category === "electrical") {
//             return <ProgramCard course={course} key={course._id} />;
//           }
//         })}
//       </TabPanel>
//     </Tabs>
//   );
// };

// export default Programs;

// With Design
// React Tab start
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// React Tab End

import ProgramCard from "../ProgramCard/ProgramCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Programs = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/course`);
      setCourses(data);
    };
    getData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Explore Our Programs
      </h1>

      <Tabs className="react-tabs">
        <TabList className="flex flex-wrap gap-2 justify-center mb-12">
          <Tab
            className="px-6 py-3 rounded-full border border-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-50 focus:outline-none
                         ui-selected:bg-gradient-to-r ui-selected:from-blue-600 ui-selected:to-purple-600 ui-selected:text-white ui-selected:border-transparent
                         ui-selected:shadow-lg"
          >
            Computer Science & Engineering
          </Tab>

          <Tab
            className="px-6 py-3 rounded-full border border-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-50 focus:outline-none
                         ui-selected:bg-gradient-to-r ui-selected:from-blue-600 ui-selected:to-purple-600 ui-selected:text-white ui-selected:border-transparent
                         ui-selected:shadow-lg"
          >
            Civil Engineering
          </Tab>

          <Tab
            className="px-6 py-3 rounded-full border border-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-50 focus:outline-none
                         ui-selected:bg-gradient-to-r ui-selected:from-blue-600 ui-selected:to-purple-600 ui-selected:text-white ui-selected:border-transparent
                         ui-selected:shadow-lg"
          >
            Textile Engineering
          </Tab>

          <Tab
            className="px-6 py-3 rounded-full border border-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-50 focus:outline-none
                         ui-selected:bg-gradient-to-r ui-selected:from-blue-600 ui-selected:to-purple-600 ui-selected:text-white ui-selected:border-transparent
                         ui-selected:shadow-lg"
          >
            Mechanical Engineering
          </Tab>

          <Tab
            className="px-6 py-3 rounded-full border border-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-50 focus:outline-none
                         ui-selected:bg-gradient-to-r ui-selected:from-blue-600 ui-selected:to-purple-600 ui-selected:text-white ui-selected:border-transparent
                         ui-selected:shadow-lg"
          >
            Electrical Engineering
          </Tab>
        </TabList>

        {/* Computer */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              if (course.category === "computer") {
                return <ProgramCard course={course} key={course._id} />;
              }
            })}
          </div>
        </TabPanel>

        {/* Civil */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              if (course.category === "civil") {
                return <ProgramCard course={course} key={course._id} />;
              }
            })}
          </div>
        </TabPanel>

        {/* Textile */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              if (course.category === "textile") {
                return <ProgramCard course={course} key={course._id} />;
              }
            })}
          </div>
        </TabPanel>

        {/* Mechanical */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              if (course.category === "mechanical") {
                return <ProgramCard course={course} key={course._id} />;
              }
            })}
          </div>
        </TabPanel>

        {/* Electrical */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              if (course.category === "electrical") {
                return <ProgramCard course={course} key={course._id} />;
              }
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Programs;
