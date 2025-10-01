import React from "react";
import { experiences } from "../constant"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-[8vw] md:px-[5vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
       
         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary"> EXPERIENCE </span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Horizontal Scroll Timeline */}
      <div className="flex items-center justify-center overflow-x-auto space-x-6 py-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex-shrink-0 w-72 p-3 rounded-2xl border border-white/20 bg-gray-900 backdrop-blur-md shadow-[0_0_15px_1px_rgba(130,69,236,0.3)] hover:scale-105 transform transition-transform duration-300"
          >
            {/* Logo + Role + Company in one row */}
            <div className="flex items-center space-x-3 mb-3">
              {/* Company Logo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role and Company */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {experience.role}
                </h3>
                <h4 className="text-sm text-gray-300">{experience.company}</h4>
              </div>
            </div>

            {/* Date */}
            <p className="text-xs text-gray-500 mb-2">{experience.date}</p>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-2 line-clamp-3">
              {experience.desc}
            </p>

            {/* Skills */}
            <div>
              <h5 className="font-medium text-white text-sm">Skills:</h5>
              <ul className="flex flex-wrap mt-1">
                {experience.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="bg-[#8245ec] text-gray-300 px-2 py-1 text-xs rounded-lg mr-2 mb-1 border border-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
