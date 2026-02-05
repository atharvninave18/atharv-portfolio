// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   // Smooth scroll function
//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
//       <div className="container mx-auto text-center">
//         {/* Name / Logo */}
//         <h2 className="text-xl font-semibold text-purple-500">Atharv Ninave</h2>

//         {/* Navigation Links - Responsive */}
//         {/* <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 text-gradient">
//           {[
//             { name: "About", id: "about" },
//             { name: "Skills", id: "skills" },
//             // { name: "Experience", id: "experience" },
//             { name: "Projects", id: "projects" },
//             // { name: "Education", id: "education" },
//           ].map((item, index) => (
//             <button
//               key={index}
//               onClick={() => handleScroll(item.id)}
//               className="hover:text-purple-500 text-sm sm:text-base my-1 text-gradient"
//             >
//               {item.name}
//             </button>
//           ))}
//         </nav> */}

//         {/* Social Media Icons - Responsive */}
        
//         {/* Copyright Text */}
//        <p className="text-sm text-gray-400 mt-6">
//   © {new Date().getFullYear()} Atharv Ninave. All rights reserved.
// </p>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/atharvninave18", label: "GitHub" },
  { icon: Linkedin, href:"https://www.linkedin.com/in/atharv-ninave-3604b31b8", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/atharvv1809", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              AN<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Atharv Ninave. All rights reserved.
            </p>
          </div>

          {/* Links */}
          {/* <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav> */}

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
 export default Footer;