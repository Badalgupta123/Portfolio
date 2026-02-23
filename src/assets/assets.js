import { FaLightbulb, FaDesktop, FaUsers, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaDatabase } from 'react-icons/fa';
import {

  SiExpress,


  SiCloudinary
} from "react-icons/si";

import profileImg from '../assets/profile.jpg';
import aboutImag from '../assets/about.jpg';
import projectImg1 from '../assets/studynotion.png';
import projectImg2 from '../assets/pixelhub.png';
import projectImg3 from '../assets/dalle.png';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/house.jpg';
import projectImg6 from '../assets/car2.jpg';
import { RiTailwindCssFill } from 'react-icons/ri';
import { MdDeviceHub } from 'react-icons/md';
import { DiJavascript, DiMongodb } from 'react-icons/di';


export const assets = {
  profileImg, aboutImag
}


export const aboutInfo = [
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'I create fast, scalable apps with seamless user experiences.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable code and build clear architectures.',
    color: 'text-blue'
  },
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I build complete solutions with React frontends and Java & Spring Boot backends.',
    color: 'text-purple'
  },
  {
    icon: FaUsers,
    title: 'Team Player',
    description: 'I collaborate effectively and value strong communication.',
    color: 'text-green'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'JavaScript', 'TypeScript', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['SpringBoot', 'Node.js', 'Express.js']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL', 'Postgresql', 'Firebase']
  },
  {
    title: 'Programming Languages',
    icon: FaCode,
    description: 'Writing efficient and clean code in multiple programming languages for diverse applications.',
    tags: ['C++', 'Java', 'JavaScript']
  },
  {
    title: 'Computer Fundamentals',
    icon: FaDesktop,
    description: 'Understanding the core concepts of computer science including programming paradigms, operating systems, databases, and networks.',
    tags: ['OOPS', 'Operating System', 'DBMS', 'Computer Networks']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Docker', 'Kubernetes', 'Visual Studio Code', ' IntelliJ']
  }
];



export const projects = [
  {
    title: "StudyNotion",
    description: "Developed a MERN-based EdTech platform supporting end-to-end course creation, consumption, and payments. Improved platform security with JWT and OTP authentication, optimized media management using Cloudinary, and enabled secure transactions through Razorpay integration.",
    image: projectImg1,
    tech: ["NodeJS", "ExpressJS", "React", "MongoDB", "TailwindCSS"],
    icons: [FaNodeJs, SiExpress, FaReact, DiMongodb, RiTailwindCssFill],
    demo: "https://study-notion-badalgupta123.vercel.app/",
    code: "https://github.com/Badalgupta123/StudyNotion",
  },
  {
    title: "PixelHub",
    description: "Built PixelHub, a responsive React.js application for browsing, searching, and downloading high-quality stock photos and videos. Implemented infinite scrolling, light/dark mode support, and a like feature to enhance user experience across devices.",
    image: projectImg2,
    tech: ["TailwindCSS", "React", "Responsive Web Design"],
    icons: [RiTailwindCssFill, FaReact, MdDeviceHub],
    demo: "https://pixel-hub-badal.vercel.app/",
    code: "https://github.com/Badalgupta123/",
  },
  {
    title: "AI Image Generator",
    description: "Created an AI-powered image creation application with MERN and OpenAI, featuring multi-image prompt generation, community sharing, and downloadable outputs, backed by secure APIs and optimized cloud media management.",
    image: projectImg3,
    tech: ["ReactJS", "TailwindCSS", "JavaScript", "Cloudinary", "MongoDB"],
    icons: [FaReact, RiTailwindCssFill, DiJavascript, SiCloudinary, DiMongodb],
    demo: "https://dalle-clone-project.vercel.app/",
    code: "https://github.com/Badalgupta123/DALL-E",
  },
  // {
  //   title: "Portfolio Website",
  //   description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
  //   image: projectImg4,
  //   tech: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
  //   icons: [FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "House Price Prediction",
  //   description: "Predicts house prices using XGBoost on the California Housing Dataset.",
  //   image: projectImg5,
  //   tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "XGBoost Regressor"],
  //   icons: [FaReact, FaNodeJs, FaDatabase],
  //   demo: "https://github.com/i-m-shivendra/House-Price-Prediction",
  //   code: "https://github.com/i-m-shivendra/House-Price-Prediction",
  // },
  // {
  //   title: "Car Price Prediction",
  //   description: "Created an AI-powered car price predictor for quick and accurate estimates.",
  //   image: projectImg6,
  //   tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Linear Regression", "Lasso Regression"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "https://github.com/i-m-shivendra/Car-Price-Prediction",
  //   code: "https://github.com/i-m-shivendra/Car-Price-Prediction",
  // }
];


export const workData = [
  {
    role: "Specialist Programmer ",
    company: "Infosys",
    duration: "Sept 2024 - Present",
    description:
      "I’m a Specialist Programmer at Infosys, specializing in scalable backend solutions with Spring Boot and dynamic frontend experiences with React. I currently work on high-impact projects for a leading global tech client.",
    color: "purple"
  }

];
