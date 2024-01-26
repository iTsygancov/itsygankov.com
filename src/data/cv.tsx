import { IconTelegram } from "@/components/icons/IconTelegram";
import { Github, Linkedin } from "lucide-react";

export const CV_DATA = {
  photoLink:
    "https://avatars.githubusercontent.com/u/93081413?s=400&u=8ba88fea28f7b3b4b76b8f35329fa29ccb97365c&v=4",
  name: "Igor Tsygankov",
  location: {
    title: "Georgia, Tbilisi",
    link: "https://maps.app.goo.gl/P4zb79Wm83oAuQRm9"
  },
  description:
    "Frontend Developer dedicated to crafting exceptional user experiences with a keen eye for detail.",
  summary:
    "Lead Frontend Developer with 7+ years of experience, excellent in JavaScript, TypeScript, React. I lead and mentor teams, conduct code reviews, and actively participate in projects to ensure seamless integration between frontend and backend components.",
  contact: {
    email: "info@itsygankov.com",
    social: [
      {
        name: "Telegram",
        url: "https://t.me/I_Tsygankov",
        icon: IconTelegram
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/igortsygankov",
        icon: Linkedin
      },
      {
        name: "Github",
        url: "https://github.com/iTsygancov",
        icon: Github
      }
    ]
  },
  work: [
    {
      title: "Lead Frontend Developer",
      company: "DAAC System Integrator",
      link: "https://daacdigital.com",
      time: "2023 - Present",
      description:
        "Lead the team, contribute, conduct code reviews, collaborate with the backend team and implement new technologies.",
      stack: ["Typescript", "React", "Next.js", "Zustand", "TailwindCSS"]
    },
    {
      title: "Software Engineer",
      company: "Wiley",
      link: "https://www.wiley.com",
      time: "2021 - 2023",
      description:
        "Built React interfaces, wrote tests, collaborated in Scrum and achieved higher test coverage, efficient Storybook implementation, contributed to a new user flow and removed legacy code to improve project performance.",
      stack: ["JavaScript", "React", "Webpack", "Redux-Saga", "SASS"]
    },
    {
      title:
        "Frontend Developer → Leading specialist in web development and web design",
      company: "Rendez-Vous",
      link: "https://www.rendez-vous.ru",
      time: "2019 - 2021",
      description:
        "Updated UI design, implemented React, and optimized solutions including a design system and a real-time workout tracking app.",
      stack: ["JavaScript", "React", "Webpack", "Redux", "SASS"]
    },
    {
      title: "Wev Developer",
      company: "Retroradiator",
      link: "https://retroradiator.ru",
      time: "2017 - 2019",
      description:
        "Administered and developed website on CMS 1C-Bitrix, implemented plugins and optimized SEO, including creating a successful online store and increasing conversions.",
      stack: ["JavaScript", "jQuery", "PHP", "Bootstrap"]
    }
  ],
  education: {
    title:
      "Moscow Technical School of Space Instrument Engineering N.E. Bauman Moscow State Technical University",
    time: "2009 - 2013",
    field: "Automatic Control Systems, Technician"
  },
  skills: [
    "Typescript",
    "Javascript",
    "React",
    "Next.js",
    "Redux",
    "Zustand",
    "Tailwind CSS"
  ],
  tools: ["VS Code", "Vim", "Git", "Node.js", "Vite", "Webpack", "Figma"],
  projects: [
    {
      title: "SpeedLink",
      link: "https://speedlink.vercel.app/",
      description:
        "Chrome extension designed to streamline web browsing experience with custom shortcuts",
      badges: ["Side project", "Typescript", "React", "Vite", "Tailwind CSS"]
    }
  ]
};
