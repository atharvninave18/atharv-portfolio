
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";



import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "../constant";
import SectionWrapper from "../hoc/SectionWrapper";

// Experience Card
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="experience-element"
    contentStyle={{
      background: "transparent",
      boxShadow: "none",
      padding: 0,
    }}
    contentArrowStyle={{ borderRight: "7px solid #8245ec" }}
    iconStyle={{
      background: "#1f2937",
      border: "4px solid #8245ec",
    }}
    icon={
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-6 h-6 sm:w-[70%] sm:h-[70%] object-cover rounded-full"
        />
      </div>
    }
  >
    {/* Card */}
    <div className="w-full p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
      
      {/* Header */}
      <div className="flex items-center justify-center sm:justify-start space-x-6">
        {/* Logo */}
        <div className="hidden sm:block w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-center sm:text-left">
            {experience.title}
          </h3>
          <h4 className="text-sm text-gray-300">{experience.company_name}</h4>
          <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
        </div>
      </div>

      {/* Points */}
      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, i) => (
          <li
            key={i}
            className="text-gray-400 text-sm tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>
      {/* <div className="mt-4">
                 <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                   {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
               </ul>
                           </div> */}
    </div>
  </VerticalTimelineElement>
);


// Experience Section
const Experience = () => {
  return (
         <section
         id="experience"
        className="py-32 relative overflow-hidden"
       >
   <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="  text-xl md:text-xl font-bold mb-12 text-center">
               Career <span className="text-primary">  Journey</span>
              </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
