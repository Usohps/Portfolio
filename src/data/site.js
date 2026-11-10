import resumeUrl from "../assets/my Resume.pdf";
import { projects } from "./projects";

// Everything personal lives here so copy can be edited in one place.
export const profile = {
  brand: "COZYDEV",
  firstName: "Princewill",
  lastName: "Samuel",
  role: "Software Developer",
  location: "Abuja, Nigeria",
  email: "usohps@gmail.com",
  resumeUrl,
  resumeFileName: "Princewill-Samuel-Resume.pdf",
  focus: ["fintech platforms", "responsive web apps", "mobile-first interfaces"],
  intro:
    "I build fast, responsive interfaces for web and mobile — with over five years of experience turning complex products into experiences that feel effortless.",
  bio: [
    "I'm a software developer with over five years of experience in demanding environments, focused on responsive client interfaces and better interaction on web and mobile applications.",
    "My recent work spans fintech and health: multi-currency wallets, bill-payment platforms, bank-connectivity APIs and analytics dashboards — built mostly with React, Vue and Tailwind CSS, with Node.js and MongoDB when a project calls for full-stack work.",
  ],
};

export const socials = [
  { name: "GitHub", icon: "github", url: "https://github.com/Usohps" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/princewill-usoh-526912211/",
  },
  { name: "Medium", icon: "medium", url: "https://medium.com/@usohps" },
  { name: "Email", icon: "mail", url: "mailto:usohps@gmail.com" },
];

export const capabilities = [
  {
    icon: "code",
    title: "Interface engineering",
    text: "Pixel-perfect, reusable UI taken from design mockup to production with React and Vue.",
  },
  {
    icon: "phone",
    title: "Responsive by default",
    text: "Layouts and interactions that hold up from small phones to wide desktop screens.",
  },
  {
    icon: "link",
    title: "API integration",
    text: "Authentication flows, payments and data-heavy dashboards wired cleanly to backend APIs.",
  },
];

export const stack = [
  {
    group: "Frontend",
    items: ["React", "Vue.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    group: "Workflow",
    items: ["Git & GitHub", "Vercel", "Responsive design", "Performance"],
  },
];

export const articles = [
  {
    title: "The Importance of Proper File Structure in Development",
    topic: "Architecture",
    url: "https://medium.com/@usohps/the-importance-of-proper-file-structure-in-programming-421de3af2794",
  },
  {
    title: "Developing a Programmer's Mindset",
    topic: "Mindset",
    url: "https://medium.com/@usohps/developing-a-programmers-mindset-how-to-think-like-a-programmer-d8a3befc56ef",
  },
  {
    title: "Troubleshooting Routing Challenge with ReactJS Hosted on Vercel",
    topic: "Debugging",
    url: "https://medium.com/@usohps/troubleshooting-routing-challenge-at-production-environment-which-prompts-a-404-error-page-on-37d856b2cf75",
  },
  {
    title: "How to Achieve Scalability and Efficiency in Websites",
    topic: "Performance",
    url: "https://medium.com/@usohps/how-to-achieve-a-scalable-and-efficient-website-fb7933508a30",
  },
  {
    title: "The Benefits of Responsive Design to Company Growth",
    topic: "Responsive design",
    url: "https://medium.com/@usohps/responsive-design-its-importance-and-contribution-to-company-s-growth-9a9fae992c28",
  },
];

export const mediumUrl = "https://medium.com/@usohps";

// Derived from real data so the numbers never drift from the content.
export const stats = [
  { value: "5+", label: "Years building" },
  {
    value: String(new Set(projects.map((p) => p.url)).size),
    label: "Products shipped",
  },
  { value: String(articles.length), label: "Articles published" },
];
