import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

// export const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 px-4 relative">
//       {" "}
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           About <span className="text-primary"> Me</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

//             <p className="text-muted-foreground">
//               With over 2+ years of experience in web development, I specialize
//               in creating responsive, accessible, and performant web
//               applications using modern technologies.
//             </p>

//             <p className="text-muted-foreground">
//               I'm passionate about creating elegant solutions to complex
//               problems, and I'm constantly learning new technologies and
//               techniques to stay at the forefront of the ever-evolving web
//               landscape.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
//               <a href="#contact" className="cosmic-button">
//                 {" "}
//                 Get In Touch
//               </a>

//               {/* <a
//                 href="https://drive.google.com/file/d/1bVb6mjF9yzwi0fdo0BR9GSuFVJyGCSrZ/view?usp=drive_link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
//               >
//                 Download CV
//               </a> */}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Code className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg"> Web Development</h4>
//                   <p className="text-muted-foreground">
//                     Creating responsive websites and web applications with
//                     modern frameworks.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <User className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">UI/UX Design</h4>
//                   <p className="text-muted-foreground">
//                     Designing intuitive user interfaces and seamless user
//                     experiences.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Briefcase className="h-6 w-6 text-primary" />
//                 </div>

//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">Project Management</h4>
//                   <p className="text-muted-foreground">
//                     Leading projects from conception to completion with agile
//                     methodologies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="  text-xl md:text-xl font-bold mb-12 text-center">
               About <span className="text-primary"> Me</span>
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                With over 2+ years of experience in web development, I specialize
               in creating responsive, accessible, and performant web
              applications using modern technologies.
              </p>
              <p>
                I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
               techniques to stay at the forefront of the ever-evolving web
               landscape.
              </p>
            
            </div>

          
          </div>

  
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
