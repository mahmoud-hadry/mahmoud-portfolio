/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";

// Splash Screen

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 0
};

// Summary And Greeting Section

const illustration = {
  animated: true // Used by Skills/Contact; Greeting always shows the portrait
};

const greeting = {
  username: "Mahmoud Elhadry",
  title: "Hi all, I'm Mahmoud",
  subTitle:
    " A passionate Software Engineer having technical expertise and knowledge in various software engineering concepts, programming languages, and development best practices. I build reliable software, backend services, and automation tools. I currently work at Ericsson as an Automated Operations Engineer, applying software engineering to network monitoring, auditing, and operational workflows.",
  resumeLink: `${import.meta.env.BASE_URL}Mahmoud_Elhadry_Software_Engineer_CV.pdf`,
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mahmoud-hadry",
  linkedin: "https://www.linkedin.com/in/mahmoudelhadry",
  gmail: "mahmoudhadry@outlook.com",
  medium: "https://medium.com/@mahmoudhadry",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I build",
  subTitle: "SOFTWARE ENGINEERING · AUTOMATION · WEB & MOBILE APPS",
  skills: [
    "Design and develop maintainable backend systems and REST APIs with PHP, Laravel, and Python.",
    "Automate data-intensive operational workflows, including KPI monitoring, scheduled jobs, file processing, network monitoring, and auditing.",
    "Build web interfaces with React and cross-platform mobile apps with React and Capacitor, reusing shared UI and APIs for installable iOS and Android experiences.",
    "Integrate applications with databases and services such as Firebase, Pusher, and payment gateways; work productively with AI-assisted tools (Cursor, Antigravity, and similar) to deliver reliable software faster."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Capacitor",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Faculty of Science, Al-Menoufia University",
      logo: new URL("./assets/images/mnf2.jpg", import.meta.url).href,
      subHeader: "Bachelor’s Degree in Mathematics and Computer Science",
      duration: "September 2011 - July 2017",
      descBullets: [
        "Coursework included data structures and algorithms, object-oriented programming, operating systems, databases, software engineering, computer networks, discrete mathematics, probability, and statistics."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Automated Operations Engineer",
      company: "Ericsson",
      companylogo: new URL("./assets/images/ericsson.png", import.meta.url).href,
      date: "March 2022 – Present",
      desc: "Ericsson · Smart Village, Egypt · Software engineering and automation focus",
      descBullets: [
        "Develop and maintain software solutions that support network monitoring, auditing, and operational workflows.",
        "Collaborate with cross-functional teams to define requirements and integrate solutions across operational systems.",
        "Improve system reliability through troubleshooting, performance optimization, testing, and maintainable documentation."
      ]
    },
    {
      role: "Backend Developer",
      company: "Brmaja",
      companylogo: new URL("./assets/images/brmaja.jpg", import.meta.url).href,
      date: "March 2020 – March 2022",
      desc: "New Cairo, Egypt",
      descBullets: [
        "Designed and developed REST APIs and backend services for web applications.",
        "Integrated third-party services and optimized SQL queries and database performance.",
        "Collaborated with frontend developers to deliver cohesive, reliable product features."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Mobimed",
      companylogo: new URL("./assets/images/mobimedLogo.jpg", import.meta.url).href,
      date: "November 2018 – February 2020",
      desc: "Nasr City, Egypt",
      descBullets: [
        "Built responsive web applications with PHP, Laravel, JavaScript, HTML, and CSS.",
        "Designed APIs and database structures to support product functionality.",
        "Delivered mobile-friendly, cross-browser experiences and maintained frontend and backend features."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false,
  display: true,
  projects: [
    {
      name: "employeeTasks",
      description:
        "Laravel application for organizing employees, departments, and task workflows.",
      url: "https://github.com/mahmoud-hadry/employeeTasks",
      language: "PHP"
    },
    {
      name: "chat",
      description:
        "Backend API for secure conversations between doctors and patients.",
      url: "https://github.com/mahmoud-hadry/chat",
      language: "PHP"
    },
    {
      name: "mahmoud-hadry.github.io",
      description:
        "Source code for this responsive React portfolio and its GitHub Pages deployment.",
      url: "https://github.com/mahmoud-hadry/mahmoud-hadry.github.io",
      language: "JavaScript"
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Selected Projects",
  subtitle:
    "Commercial products and internal tools I helped design, build, and maintain.",
  projects: [
    {
      image: new URL("./assets/images/earlyAlertLogo.png", import.meta.url).href,
      projectName: "Early Alert Monitoring Platform",
      projectDesc:
        "Designed and developed an enterprise monitoring platform that automates the collection, analysis, and evaluation of over 100 operational KPIs. Built a modular KPI engine with historical baseline comparison, anomaly detection, missing-data monitoring, and multi-channel alerting (Email/SMS). Optimized SQL queries and application performance to reduce execution time while implementing fault-tolerant processing, configurable thresholds, and scheduled background jobs to improve operational visibility and proactive incident detection."
    },
    {
      image: new URL("./assets/images/mobimedLogo.jpg", import.meta.url).href,
      projectName: "Mobimed",
      projectDesc:
        "Designed and developed a healthcare practice management platform that connects patients, doctors, and service providers across patient care workflows. Built Laravel backend services and REST APIs for appointments, profiles, and provider integrations, with secure database design to support reliable data handling. Delivered responsive web interfaces optimized for mobile and cross-browser use, improving usability while maintaining maintainable frontend and backend features for day-to-day clinical operations."
    },
    {
      image: new URL("./assets/images/arabie.jpg", import.meta.url).href,
      projectName: "Arabie",
      projectDesc:
        "Built backend services and product features for an e-learning platform that connects Arabic language tutors with non-Arabic-speaking students. Designed lesson and user management workflows, including scheduling, profiles, and learning-session support through maintainable API and database layers. Collaborated on feature delivery that improved tutor–student matching and platform usability while keeping the system flexible for expanding educational content and operational requirements."
    },
    {
      image: new URL("./assets/images/octopus logo.webp", import.meta.url).href,
      projectName: "Octopus",
      projectDesc:
        "Designed and developed a data automation and analysis tool that streamlines file processing, database operations, and third-party API integrations for recurring operational workloads. Implemented scheduled background jobs and analysis pipelines to reduce manual effort, with configurable processing flows for ingesting, transforming, and evaluating structured data. Focused on reliable automation, maintainable integrations, and clearer operational insights so teams could run data tasks consistently and at scale."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "",
      subtitle: "",
      image: new URL("./assets/images/codeInLogo.webp", import.meta.url).href,
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "",
      subtitle: "",
      image: new URL("./assets/images/googleAssistantLogo.webp", import.meta.url).href,
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },

    {
      title: "",
      subtitle: "",
      image: new URL("./assets/images/pwaLogo.webp", import.meta.url).href,
      imageAlt: "",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Writing",
  subtitle:
    "Practical notes on Laravel, backend engineering, and maintainable software.",
  displayMediumBlogs: false,
  blogs: [
    {
      url: "https://medium.com/@mahmoudhadry/10-essential-laravel-excel-file-handling-strategies-every-developer-should-master-80ef79775634",
      title:
        "10 Essential Laravel Excel File Handling Strategies Every Developer Should Master",
      description:
        "Practical patterns for validating, importing, and processing user-uploaded spreadsheets with Laravel Excel."
    },
    {
      url: "https://medium.com/@mahmoudhadry/10-unique-powerful-laravel-microservices-strategies-most-developers-dont-know-but-should-9c3ec1660f9c",
      title: "10 Powerful Laravel Microservices Strategies",
      description:
        "Approaches for designing Laravel services, integrations, and boundaries in distributed systems."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Let’s work together",
  subtitle:
    "Have a software engineering opportunity or a project to discuss? Send me a message.",
  number: "+201064025940",
  email_address: "mahmoudhadry@outlook.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
