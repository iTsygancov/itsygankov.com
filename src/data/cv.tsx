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
  summary: {
    description:
      "Lead Frontend Developer with 7+ years of experience, excellent in JavaScript, TypeScript, React. I lead and mentor teams, conduct code reviews, and actively participate in projects to ensure seamless integration between frontend and backend components.",
    details: [
      "Knowledge of JavaScript, jQuery, React, Redux, Node.js, TypeScript, Webpack, Git.",
      "Knowledge of HTML5, CSS3.",
      "Knowledge of SCSS / SASS CSS preprocessor and Bootstrap CSS framework.",
      "Experience in developing adaptive and cross-browser web applications.",
      "Experience in Figma, Adobe Photoshop, AdobeXD, Adobe Illustrator.",
      "Experience developing design systems for new or existing projects.",
      "Experience of working with CMS Bitrix.",
      "Constant desire to learn new technologies and improvement of already studied techniques."
    ]
  },
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
      company: "DAAC Digital",
      link: "https://daacdigital.com",
      time: "2023 - Present",
      description:
        "Lead the team, contribute, conduct code reviews, collaborate with the backend team and implement new technologies.",
      stack: ["Typescript", "React", "Next.js", "Zustand", "TailwindCSS"],
      print: {
        responsibilities: {
          title: "My responsibilities:",
          content: [
            "Active participation in projects as a Senior Frontend Developer, contribute expertise and technical guidance.",
            "Performing code reviews to ensure code quality, adherence to coding standards, and best practices.",
            "Estimating project iterations, considering factors such as scope, complexity, and resources required.",
            "Taking the lead in managing and coordinating the Frontend team, providing mentorship to junior developers, delegating tasks and ensuring efficient workflow.",
            "Developing applications using technologies such as JavaScript/TypeScript, HTML, CSS, SASS, React.js/Next.js, Redux, Webpack, and Git.",
            "Collaborating with the backend team to make architectural decisions and ensure seamless integration between frontend and backend components.",
            "Embracing new technologies and frameworks, utilizing them effectively in projects developed from scratch.",
            "Handling the responsibility of working on diverse projects spanning multiple domains, providing fresh challenges and opportunities for growth.",
            "Utilizing tools and technologies such as strapi.io and Spring Authorization Server as OAuth2 provider to enhance project functionalities and capabilities."
          ]
        }
      }
    },
    {
      title: "Software Engineer",
      company: "Wiley",
      link: "https://www.wiley.com",
      time: "2021 - 2023",
      description:
        "Built React interfaces, wrote tests, collaborated in Scrum and achieved higher test coverage, efficient Storybook implementation, contributed to a new user flow and removed legacy code to improve project performance.",
      stack: ["JavaScript", "React", "Webpack", "Redux-Saga", "SASS"],
      print: {
        responsibilities: {
          title: "My responsibilities:",
          content: [
            "Developing new interfaces in React stack (Classes / Hooks), Redux-Saga, Node.js, SASS, Webpack, Git.",
            "Writing unit tests (Jest, Enzyme).",
            "Writing and supporting of UI documentation (Storybook).",
            "Team work with frontend and backend developers, testers and analysts on the Scrum methodology.",
            "Conducting code reviews.",
            "Support, optimization and improvement of the company's existing solutions."
          ]
        },
        achievements: {
          title: "My achievements:",
          content: [
            "Increase project unit-test coverage from 60% to 85%, that helped to ensure the quality, reliability of the application and improved CI/CD processes.",
            "Successful implementation of Storybook in a project that leads to improved efficiency, better collaboration, and a higher quality end product.",
            "Participation in the creation of a new flow for users, which automatically allows you to transfer and retrieve information from services, such as ScholarOne and PHENOM, and web applications of partner companies in real time. ",
            "Removing all legacy code modules, that reduced the overall size of the codebase, improved the maintainability, performance, and future-proofing of a project."
          ]
        }
      }
    },
    {
      title:
        "Frontend Developer → Leading specialist in web development and web design",
      company: "Rendez-Vous",
      link: "https://www.rendez-vous.ru",
      time: "2019 - 2021",
      description:
        "Updated UI design, implemented React, and optimized solutions including a design system and a real-time workout tracking app.",
      stack: ["JavaScript", "React", "Webpack", "Redux", "SASS"],
      print: {
        responsibilities: {
          title: "My responsibilities:",
          content: [
            "Designing and developing clean and adaptive interfaces with minimal responsiveness.",
            "Development of new projects in the stack of HTML5, CSS, Sass, Bootstrap, JavaScript, jQuery, xQuery, SQL.",
            "Implementing React into new and existing projects.",
            "Supporting, optimizing and improving the company's existing solutions."
          ]
        },
        achievements: {
          title: "My achievements:",
          content: [
            "Creating a design system from scratch.",
            "Complete revision of the company's internal educational website with the application of the created design system.",
            "Introduction of new technologies into the design of the training site of the company: Bootstrap, jQuery with subsequent implementation of React.",
            "Creation of a web application 'Individual manager's tablet'. The application allows managers to plan upcoming lessons in real time, add notes, and see the progress and effectiveness of their subordinates.",
            "Creating the Learning Calendar web application. This application allows real-time tracking of employee enrollment for training, which avoids overcrowding of training groups."
          ]
        }
      }
    },
    {
      title: "Wev Developer",
      company: "RetroRadiator",
      link: "https://retroradiator.ru",
      time: "2017 - 2019",
      description:
        "Administered and developed website on CMS 1C-Bitrix, implemented plugins and optimized SEO, including creating a successful online store and increasing conversions.",
      stack: ["JavaScript", "jQuery", "PHP", "Bootstrap"],
      print: {
        responsibilities: {
          title: "My responsibilities:",
          content: [
            "Administration of sites based on CMS 1C-Bitrix, work with templates.",
            "Development of new company websites based on CMS 1C-Bitrix.",
            "Setup and implementation of third-party plugins.",
            "SEO promotion and internal optimization of websites."
          ]
        },
        achievements: {
          title: "My achievements:",
          content: [
            "Development of a new online store website.",
            "Increased the conversion rate of the appeals through the online store by 3 times.",
            "Complete overhaul of the filling logic of the site. Standardization and automation of the process of filling the site."
          ]
        }
      }
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
    },
    {
      title: "Doctrina eLearning platform",
      link: "https://doc.daacdigital.com/doctrina-auth/login",
      description: "Internal educational platform for DAAC Digital employees",
      badges: ["Typescript", "React", "Next.js", "Zustand", "Tailwind CSS"]
    },
    {
      title: "Wiley Research Exchange (ReX)",
      link: "https://authorservices.wiley.com/",
      description:
        "Platform that connects researchers, reviewers, and editors to streamline the publication process",
      badges: ["JavaScript", "React", "Webpack", "Redux-Saga", "SASS"]
    },
    {
      title: "Rendez-Vous eLearning platform",
      link: "https://do.rendez-vous.ru",
      description: "Internal educational platform for Rendez-Vous employees",
      badges: ["JavaScript", "React", "Webpack", "Redux", "SASS"]
    },
    {
      title: "RetroRadiator online store",
      link: "https://retroradiator.ru/",
      description: "Online store",
      badges: ["JavaScript", "jQuery", "PHP", "Bootstrap"]
    }
  ]
};
