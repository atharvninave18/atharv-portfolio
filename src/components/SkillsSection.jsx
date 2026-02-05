// src/components/Skills/Skills.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SkillsInfo } from "../constant";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = SkillsInfo.map((cat) => cat.title.toLowerCase());

  // If "all", flatten all skills into one array
  const filteredSkills =
    activeCategory === "all"
      ? SkillsInfo.flatMap((cat) => cat.skills)
      : SkillsInfo.find(
          (cat) => cat.title.toLowerCase() === activeCategory
        )?.skills || [];

  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-[12vw] font-sans "
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          A snapshot of the technologies and tools I’ve worked with across
          frontend, backend, and more.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "px-4 py-1.5 rounded-full border text-xs sm:text-sm font-medium transition-colors capitalize",
            activeCategory === "all"
              ? "bg-primary text-white border-primary"
              : "bg-transparent text-foreground/70 border border-border hover:border-primary hover:text-primary"
          )}
        >
          All
        </button>

        {categories.map((category, key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-1.5 rounded-full border text-xs sm:text-sm font-medium transition-colors capitalize",
              activeCategory === category
                ? "bg-primary text-white border-primary"
                : "bg-transparent text-foreground/70 border border-border hover:border-primary hover:text-primary"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-2 bg-white dark:bg-white/10 border border-border rounded-xl px-4 py-2 text-sm sm:text-base text-foreground/80 hover:border-primary transition-colors"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.03 }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
