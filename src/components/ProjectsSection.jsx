// import { ArrowRight, ExternalLink, Github } from "lucide-react";
// import { projects } from "../constant";



// export const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           {" "}
//           Featured <span className="text-primary"> Projects </span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects. Each project was carefully
//           crafted with attention to detail, performance, and user experience.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, key) => (
//             <div
//               key={key}
//               className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               <div className="p-6">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex space-x-3">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <Github size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             className="cosmic-button w-fit flex items-center mx-auto gap-2"
//             target="_blank"
//             href="https://github.com/atharvninave18"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

// import { github, preview } from "../assets";
import { PROJECTS } from "../constant";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { cn } from "../utils/libs";
import { fadeIn, textVariant } from "../utils/motion";
 import { ArrowRight, ExternalLink, Github } from "lucide-react";
// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 10,
        scale: 1,
        speed: 250,
      }}
      className="bg-card p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        {/* Project image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

      </div>
 <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, tagIdx) => (
                     <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                       {tag.name}
                     </span>
                  ))}
                </div>
      {/* Project info */}
      <div className="mt-2">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Tags */}
      {/* <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div> */}

     
      <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-3">
                    <a
                      // href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />                     </a>
                    <a
                      // href={project.githubUrl}
                       target="_blank"
                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
                     >
                       <Github size={20} />                     </a>
                   </div>
               </div>
    </Tilt>
  </motion.div>
);

// Works Section
export const ProjectsSection = () => {
  return (
     <section id="projects" >
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
           Featured <span className="text-primary"> Projects </span>
         </h2>

         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
         crafted with attention to detail, performance, and user experience.
        </p>
        </motion.div>

        {/* Description */}
       

        {/* Project cards */}
        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
   </section>
  );
};

