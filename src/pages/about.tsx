// import React, { useEffect, useState } from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// type Skill = {
//   name: string;
//   level: number;
// };

// const SkillsDashboard: React.FC = () => {
//   const technicalSkills: Skill[] = [
//     { name: "HTML", level: 80 },
//     { name: "CSS", level: 70 },
//     { name: "React", level: 70 },
//     { name: "JavaScript", level: 40 },
//     { name: "Typescript", level: 50 },
//     { name: "HeroUI", level: 50 },
//   ];

//   const professionalSkills: Skill[] = [
//     { name: "Creativity", level: 70 },
//     { name: "Communication", level: 65 },
//     { name: "Problem Solving", level: 45 },
//     { name: "Teamwork", level: 85 },
//   ];

//   const [, setMoveSections] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMoveSections((prev) => !prev);
//     }, 3000); // Move sections every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-14 overflow-x-hidden">
//       <div className="container mx-auto px-4 md:px-6">
//         <h1 className="text-black text-3xl font-bold mb-16 text-center">Skills Dashboard</h1>

//         <div className="flex flex-col sm:flex-row justify-between w-full space-y-10 sm:space-y-0 sm:space-x-10">
//           {/* Technical Skills */}
//           <div className="w-full sm:w-1/3">
//             <h2 className="text-black text-xl font-semibold border-b border-black mb-16 text-center">
//               Technical Skills
//             </h2>
//             <div>
//               {technicalSkills.map((skill, index) => (
//                 <div key={index} className="mb-6">
//                   <div className="flex justify-between items-center">
//                     <p className="text-black text-sm mb-1">{skill.name}</p>
//                     <p className="text-black text-sm mb-1">{skill.level}%</p>
//                   </div>
//                   <div className="w-full bg-gray-300 rounded-full h-2">
//                     <div
//                       className="bg-blue-800 h-2 rounded-full"
//                       style={{ width: `${skill.level}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Professional Skills */}
//           <div className="w-full sm:w-1/3">
//             <h2 className="text-black text-xl font-semibold border-b border-black mb-10 text-center">
//               Professional Skills
//             </h2>

//             <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
//               {professionalSkills.map((skill, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <CircularProgressbar
//                     value={skill.level}
//                     text={`${skill.level}%`}
//                     styles={buildStyles({
//                       pathColor: "#1e3a8a",
//                       textColor: "#000",
//                       trailColor: "#e5e7eb",
//                     })}
//                   />
//                   <p className="text-black text-sm mt-2">{skill.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsDashboard;
