import React from "react";
import { experiences } from "../constant"; // make sure the path is correct

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-8 lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
      
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My
          <span className="text-primary"> Experience </span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {experiences.map((exp, index) => {
          const isRight = index % 2 === 0; // alternate sides
          return (
            <div
              key={exp.id}
              className={`flex flex-col sm:flex-row items-center mb-16 relative`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Card */}
              <div
                className={`
                  w-full sm:max-w-md px-4 py-4 rounded-2xl border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] bg-gray-900 backdrop-blur-md
                  transform transition-transform duration-300 hover:scale-105
                  ${isRight ? "sm:ml-auto sm:translate-x-1" : "sm:mr-auto sm:translate-x-[-1px]"} mt-8 sm:mt-0
                `}
              >
                {/* Role & Company */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400">{exp.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {exp.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
