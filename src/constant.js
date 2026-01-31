// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";
import gammastackLogo from "./assets/company_logo/gammastack_logo.png";
import sourcebaeLogo from "./assets/company_logo/sourcebae_logo.png";

// Education Section Logo's

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";
import adminDashboard from "./assets/work_logo/dashboard_admin.png";
import chatApp from "./assets/work_logo/chat-app.png";
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      // { name: 'C', logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      //{ name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  // {
  //   id: 0,
  //   img: webverseLogo,
  //   role: "Fullstack Developer",
  //   company: "Webverse Digital",
  //   date: "April 2024 - Present",
  //   desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React JS",
  //     "TypeScript",
  //     "Node JS",
  //     "Tailwind CSS",
  //     "MongoDb",
  //     "Redux",
  //     " Next Js",
  //   ],
  // },
  {
    id: 1,
    img: gammastackLogo,
    role: "Fullstack Engineer",
    company: "GammaStack",
    date: "June 2024 - Present",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: sourcebaeLogo,
    role: "Frontend Intern",
    company: "Sourcebae",
    date: "Feb 2024 - May 2024",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  // {
  //   id: 0,
  //   img: glaLogo,
  //   school: "GLA University, Mathura",
  //   date: "Sept 2022 - July 2024",
  //   grade: "7.81 CGPA",
  //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
  //   degree: "Master of Computer Applications - MCA",
  // },
  // {
  //   id: 1,
  //   img: davvlogo,
  //   school: "Institue of Engineering & Technology,DAVV,Indore",
  //   date: "Sept 2020 - Aug 2024",
  //   grade: "8.1 CGPA",
  //   desc: "I completed my Bachelor's degree in Information Technology from IET DAVV  College, Indore. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at IET DAVV  College allowed me to work on projects that applied theoretical concepts to real-world problems.",
  //   degree: "Bachelor of Engineering - BE",
  // },
  // {
  //   id: 2,
  //  // img: vpsLogo,
  //   school: "Sunflower School, Sausar",
  //   date: "Apr 2019 - March 2020",
  //   grade: "87.2%",
  //   desc: "I completed my class 12 education from Sunflower  School, Sausar under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
  //   degree: "CBSE(XII) - PCM ",
  // },
  // {
  //   id: 3,
  //   //img: vpsLogo,
  //   school: "Subhash Montessori Public School, Sausar",
  //   date: "Apr 2017 - March 2018",
  //   grade: "81.8%",
  //   desc: "I completed my class 10 education from Subhash Montessori Public School, Sausar, under the CBSE board, where I studied Science with Computer.",
  //   degree: "CBSE(X), Science with Computer Application",
  // },
];
export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: gammastackLogo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: gammastackLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: gammastackLogo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: gammastackLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] ;
export const projects = [
  {
    id: 1,
    title: "Casino Gaming Admin Dashboard",
    description:
      "An interactive casino gaming admin dashboard built with React and TypeScript to monitor player statistics, manage games, and track performance insights using mock data. The platform includes modular UI components, theme toggling, and data visualization for an intuitive and scalable admin experience.",

    image: adminDashboard,
    tags: ["React.js", "MUI", "Nivo Charts", "Formik", "Yup", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
   {
  id: 3,
  title: "Realtime Chat Application",
  description:
    "A responsive realtime chat application built with React, Node.js, and Socket.io, enabling instant messaging, typing indicators, and user presence tracking. Features include chat rooms, message persistence, and an intuitive UI optimized for seamless communication.",
  image: chatApp,
  tags: ["React", "Node.js", "Socket.io", "Express"],
  demoUrl: "#",
  githubUrl: "#",
}
,
  // {
  //   id: 2,
  //   title: "Movie Recommendation App",
  //   description:
  //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
  //   image: movierecLogo,
  //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
  //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
  // },
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];
