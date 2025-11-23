import { Github, Linkedin, Mail, FileText, Code, Database, Layout, Server, Wrench } from "lucide-react";

export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
    name: "Ediz Arkın Kobak",
    role: "Senior Computer Engineering Student",
    bio: "I craft immersive digital experiences with a focus on performance and aesthetics. Specializing in React, modern CSS, and creative interactions.",
    image: "/src/assets/images/profile.jpg",
    resumeLink: "/Kobak, Ediz Arkın - Resume, _04_09_2025.pdf",
};

export const TECH_STACK = [
    {
        category: "Web Development",
        icon: Layout,
        skills: [
            { name: "Java Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        ]
    },
    {
        category: "Software Development",
        icon: Code,
        skills: [
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
        ]
    },
    {
        category: "Database Systems",
        icon: Database,
        skills: [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        ]
    },
    {
        category: "Data Science",
        icon: Server,
        skills: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { name: "Numpy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
            { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        ]
    },
    {
        category: "Deep Learning / Gen AI",
        icon: Wrench,
        skills: [
            { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
            { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        ]
    },
    {
        category: "DevOps & Tools",
        icon: Wrench,
        skills: [
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        ]
    },
    {
        category: "Creative Tools",
        icon: Layout,
        skills: [
            { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
            { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
            { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
        ]
    }
];

export const PROJECTS = [
    {
        title: "MultiCommSim",
        description: "Designed and implemented a TCP-based communication simulator enabling multiple client-server peers over a single IP and port using Dockerized containers. Authored requirements and design documents, implemented backend logic in Java, and developed a modular React + TailwindCSS UI. Delivered an Optimization Report after decentralizing routing logic into individual containers, improving scalability and integration with satellite simulators.",
        techStack: ["Java", "Docker", "React", "TailwindCSS", "Flask"],
        demoLink: "#",
        githubLink: "#",
        image: "/src/assets/images/multicommsim.jpg",
    },
    {
        title: "PyDBControl",
        description: "Developed PyDBControl, a modular Python library for PostgreSQL database operations with centralized logging and dynamic SQL handling. Restructured the codebase into scalable components (connection, execution, table management) and finalized the project as an installable Python package. Authored a comprehensive Final Delivery Report and validated the library through external testing environments.",
        techStack: ["Python", "PostgreSQL"],
        demoLink: "#",
        githubLink: "#",
        image: "/src/assets/images/pydbcontrol.jpg",
    },
    {
        title: "OmnIDE",
        description: "Developed an integrated assignment management environment featuring assignment creation, batch submission evaluation, and result tracking. Implemented a cross-platform Electron application with React + TypeScript frontend, FastAPI backend, and SQLite database; automated student code evaluation with output comparison.",
        techStack: ["React (TS)", "FastAPI", "Electron", "SQLite", "TailwindCSS"],
        demoLink: "#",
        githubLink: "#",
        image: "/src/assets/images/omnide.jpg",
    },
    {
        title: "Class Assignment System",
        description: "Collaborated on optimizing course assignment using the Best-Fit algorithm. The system imports data from CSV files into an SQLite database, handles course management, scheduling, and lists students and schedules. Developed a user-friendly desktop application.",
        techStack: ["SQL", "SQLite", "Java", "JavaFX"],
        demoLink: "#",
        githubLink: "#",
        image: "/src/assets/images/class_assignment.jpg",
    },
    {
        title: "BOOKSHOOK",
        description: "Developed and deployed a desktop library management application named BOOKSHOOK for the course project for CE 216, which handles book addition, editing, deletion, cover management, and supports importing/exporting libraries in JSON format.",
        techStack: ["Java", "JavaFX"],
        demoLink: "#",
        githubLink: "#",
        image: "/src/assets/images/bookshook.jpg",
    },
];

export const PUBLICATIONS = [
    {
        title: "Optimizing React Rendering Performance",
        venue: "Medium / Dev.to",
        date: "2024",
        link: "#",
    },
    {
        title: "The Future of UI: Glassmorphism & Neumorphism",
        venue: "UX Collective",
        date: "2023",
        link: "#",
    },
];

export const SOCIAL_LINKS = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:arkinediz@gmail.com", label: "Email" },
];
