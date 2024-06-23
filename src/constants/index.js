import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  instagram,
  github1,
  gmail,
  linkedin,
  x,
  css,
  reactjs,
  youtube,
  redux,
  synapse,
  one_fit,
  tshirt,
  tailwind,
  nodejs,
  nextjs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React Native Development",
    icon: mobile,
  },
  {
    title: "Full-Stack SAAS Development",
    icon: backend,
  },

  {
    title: "Autmoation Software Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Next.js",
  //   icon: nextjs,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Footox Footwear Limted",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2022 - April 2023",
    points: [
      "Architected and coded server-side features for an e-commerce website, driving a 40% increase in sales within six months.",
      "Implemented robust security measures, optimized performance, and enhanced user experience for a seamless and secure application environment.",
      "Wrote clean, well-documented code following best practices and industry standards.",
      " Utilized AWS and Google Cloud Platform for scalable development.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Saas Website",
    company_name: "ELVDrive",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2023 - Oct 2023",
    points: [
      "Developed a scalable and responsive SAAS website using React and Next.js, enhancing user engagement and accessibility.",
      "Implemented state management with Redux to maintain a consistent and efficient user experience across the application.",
      "Collaborated with the design team to translate wireframes and mockups into high-quality, interactive web pages.",
      "Optimized the website's performance by utilizing Next.js's server-side rendering and React's lifecycle methods.",
      "Conducted comprehensive testing using Jest and Enzyme, ensuring robust functionality and reducing bugs in production.",
    ],
  },
];

const testimonials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/jainaman26/",
    image: instagram,
    size: "w-24 h-24",
  },
  {
    name: "Gmail",
    link: "mailto:amangodha26@gmail.com",
    image: gmail,
    size: "w-24 h-24",
  },
  {
    name: "X",
    link: "https://x.com/octocatr26",
    image: x,
    size: "w-40 h-40",
  },
  {
    name: "Linkedin",
    link: "www.linkedin.com/in/aman-2610-jain",
    image: linkedin,
    size: "w-24 h-24",
  },
  {
    name: "GitHub",
    link: "https://github.com/OctoCat-r",
    image: github1,
    size: "w-24 h-24",
  },
];

const projects = [
  {
    name: "Synapse",
    description:
      "Synapse, a SaaS platform for automating lead generation across Drive, Slack, Notion, and Discord. Built with Next.js, Clerk, and Prisma, Synapse streamlines lead collection and management, boosting business productivity and efficiency.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "SAAS",
        color: "pink-text-gradient",
      },
    ],
    image: synapse,
    source_code_link: "https://github.com/OctoCat-r/Synapse.git",
    app_link: "https://synapse-automation.vercel.app",
  },
  {
    name: "Youtube Clone",
    description:
      "A exact clone to the original youtube using youtube API where you can wtach videos for free. ",
    tags: [
      {
        name: "API Calling",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/OctoCat-r/YoutubeClone.git",
    app_link: "https://youtube-clone-y3w7.onrender.com/",
  },

  {
    name: "ONE-FIT",
    description:
      "One-Fit, an AI workout assistant using React.js for a dynamic UI, Tailwind CSS for a modern design, and integrated real-time pose detection with MoveNet and a dense neural network for accurate posture correction.",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Generative AI",
        color: "pink-text-gradient",
      },
    ],
    image: one_fit,
    source_code_link: "https://github.com/OctoCat-r/One-Fit.git",
    app_link: "https://onefit-assistant.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
