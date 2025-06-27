import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import personImage from "../assets/testimonial.webp";
import { SiPython } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiSparkling2Line } from "@remixicon/react"; 


import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "S VENU",
  role: "Full Stack Web Developer",
  subheading:
    "Full-stack developer in progress — passionate about crafting clean UIs, writing smart backend logic, and turning ideas into functional, real-world web apps."
}

export const PROJECTS = [
  {
    id: 1,
    title: "🚀 Movie Explorer",
    description:
      "A dynamic web app that lets users explore trending, top-rated, and genre-based movies using a public movie API. Includes responsive design, movie details, ratings, and a clean UI.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    imgSrc: project1,
    link: "https://venu1011.github.io/Movie-Explorer/",
  },
  {
    id: 2,
    title: "📝 Fake Review Detector",
    description:
      "A Python-based machine learning project that detects fake product reviews using NLP. It analyzes patterns in text to classify reviews as genuine or suspicious.",
    techStack: ["Python", "Machine Learning", "NLP","HTML","CSS"],
    imgSrc: project2,
    link: "https://venu1011.github.io/Fake-Review-Detector/",
  },
  {
    id: 3,
    title: "🧁 Recipe Finder",
    description:
      "Searches and displays recipes using a public API. Features include search filters, favorites, dark mode, and smooth responsive design.",
    techStack: ["HTML", "CSS","JavaScript","API"],
    imgSrc: project3,
    link: "https://venu1011.github.io/Recipe-Finder/",
  },
  {
    id: 4,
    title: "🌦️ Weather Now",
    description:
      "Real-time weather app showing current weather, forecast, humidity, wind, and more. Includes dark mode and mobile-friendly design.",
    techStack: ["HTML", "CSS", "OpenWeather API"],
    imgSrc: project4,
    link: "https://venu1011.github.io/WEATHER-NOW/",
  },
  {
    id: 5,
    title: "🧩 Personal Portfolio Website",
    description:
      "A responsive portfolio built with React, styled using Tailwind CSS, and animated with GSAP. Clean design, smooth transitions, and crafted to reflect my work and personality.",
    techStack: ["React", "TailWind CSS", "Gsap Animation"],
    imgSrc: project5,
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "🎯 Guess the Number Game",
    description:
      "A fun and interactive number guessing game where users try to guess a randomly generated number. Provides real-time feedback, tracks attempts, and resets easily for replay. Great for practicing JavaScript logic and DOM manipulation.",
      techStack:["HTML","CSS","JavaScript"],
    imgSrc: project6,
    link: "https://venu1011.github.io/Guess-The-Number-Game/ ",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Python",
    icon: <SiPython className="text-yellow-600" />,
  },
  {
  name: "GSAP",
  icon: <RiSparkling2Line className="text-green-500" />,
},
{
  name: "GitHub",
  icon: <FaGithub className="text-white dark:text-gray-300" />,
},
{
  name: "Git",
  icon: <FaGitAlt className="text-orange-500" />,
}

  
];

export const EXPERIENCES = [
  {
    yearRange: "2023",
    role: "🧑‍💻 Web Development Intern",
    company: "Internshala Trainings",
    description:
      "Completed an 8-week certified internship focused on front-end and full-stack web development.Learned and applied HTML, CSS, Bootstrap, JavaScript, and basics of React and back-end integration",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB","HTML","CSS"],
  },
    {
    yearRange: "2023-Present",
    role: "🧪 Independent Full-Stack Developer",
    company: "Self-driven Projects",
    description:
      "Designed and built multiple full-stack projects from scratch using React, Tailwind CSS, JavaScript, and Python.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  }
  
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    institution: "Siddharth Institute Of Engineering & Technology",
    duration: "2022 - 2026",
    description:
      "Currently pursuing a degree in CSE with a strong focus on web development, Python programming, and software engineering fundamentals. Worked on multiple real-world projects including full-stack web apps and machine learning tools. Passionate about clean code, UI design, and building problem-solving solutions through tech.",
  },
  {
    id: 2,
    degree: "Higher Secondary (Class XII)",
    institution: "Board of Intermediate Education Andhra Pradesh",
    duration: "2020 - 2022",
    description:
      "Studied core science subjects with emphasis on Mathematics, Physics, and Computer Science. Developed a growing interest in programming and started exploring basic HTML, Python, and logic building during this time",
  },
  {
    id: 3,
    degree: "Secondary School (Class X)",
    institution: "ZPHS Lingapuram",
    duration: "2020",
    description:
      "Built foundational knowledge across subjects and participated in school-level science and tech activities. This stage helped shape early curiosity in computers and logical thinking.",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
