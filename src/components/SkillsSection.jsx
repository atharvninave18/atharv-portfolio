// src/components/Skills/Skills.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils";
import { SkillsInfo } from "../constant";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = SkillsInfo.map((cat) => cat.title.toLowerCase());
  const filteredSkills =
    activeCategory === "all"
      ? SkillsInfo
      : SkillsInfo.filter((cat) => cat.title.toLowerCase() === activeCategory);

  return (
    <section
      id="skills"
      className="py-12 px-4 sm:px-6 md:px-8 lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          <span className="text-primary">Skills</span>
        </h2>
       
        <p className="text-gray-400 mt-3 text-base sm:text-lg font-medium px-2 sm:px-0">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "px-3 py-1 rounded-full border text-xs sm:text-sm font-medium transition-colors duration-300 capitalize",
            activeCategory === "all"
              ? "bg-[#8245ec] text-white border-[#8245ec] shadow-sm"
              : "bg-transparent text-gray-300 border border-gray-700 hover:border-[#8245ec] hover:bg-[#8245ec]/10"
          )}
        >
          All
        </button>

        {categories.map((category, key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-3 py-1 rounded-full border text-xs sm:text-sm font-medium transition-colors duration-300 capitalize",
              activeCategory === category
                ? "bg-[#8245ec] text-white border-[#8245ec] shadow-sm"
                : "bg-transparent text-gray-300 border border-gray-700 hover:border-[#8245ec] hover:bg-[#8245ec]/10"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-4 sm:gap-5 justify-center">
        {filteredSkills.map((category) => (
          <div
            key={category.title}
            className="backdrop-blur-md px-4 sm:px-6 py-4 sm:py-6 w-full sm:w-[48%] md:w-[32%] lg:w-[30%] rounded-2xl border border-white/20 shadow-[0_0_15px_1px_rgba(130,69,236,0.2)] bg-transparent"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-3 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={800}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 border border-gray-700 rounded-2xl py-2 px-2 text-center bg-transparent"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                    <span className="text-xs sm:text-sm text-gray-300 break-words max-w-[60px] sm:max-w-[80px]">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};
