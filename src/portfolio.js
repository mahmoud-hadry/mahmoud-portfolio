/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mahmoud Elhadry",
  title: "Hi all, I'm Mahmoud",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having technical expertise and knowledge in various software engineering concepts, programming languages, and development best practices."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DGuGK5FDjOb64oaRd1JECWmf4eT8mQxS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mahmoud-hadry",
  linkedin: "https://www.linkedin.com/in/mahmoudelhadry",
  gmail: "m.elhadry93@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/elhadry.8",
  medium: "https://medium.com/@m.elhadry93",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Skilled in developing robust, scalable, and secure backend systems using Laravel, a powerful PHP framework known for its elegant syntax and efficiency in building web applications."),
    emoji("⚡ Proficient in creating and consuming RESTful APIs within Laravel, enabling seamless integration with frontend applications and third-party services such as Firebase/ AWS / Pusher / Payment gateways."),
    emoji("⚡ Experienced in using Laravel's Eloquent ORM for efficient database management, including designing, migrating, and querying databases, ensuring data integrity and performance optimization and also query builder."),
    emoji("⚡ Knowledgeable in implementing middleware for request filtering, authentication, and authorization in Laravel applications, with a strong focus on security best practices, such as protection against SQL injection, XSS, and CSRF attacks."),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Ajax",
      fontAwesomeClassname: "fab fa-Ajax"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "composer",
      fontAwesomeClassname: "fab fa-composer"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fab fa-postman"
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Faculty of Science Al-Minofia University",
      logo: require("./assets/images/mnf2.jpg"),
      subHeader: "BACHELOR’S DEGREE IN MATHEMATICS AND COMPUTER SCIENCE",
      duration: "September 2011 - July 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Throughout my academic journey in Mathematics and Computer Science, I developed a strong foundation in both fields. My mathematics coursework encompassed a broad range of topics, including Calculus (I, II, III), Linear Algebra, Probability and Statistics, Discrete Mathematics, Differential Equations, and Numerical Analysis. This rigorous training equipped me with advanced analytical and problem-solving skills. In parallel, my computer science studies provided me with a comprehensive understanding of Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Software Engineering, Computer Networks, and Theory of Computation. This combination of mathematical precision and technical expertise has enabled me to approach complex problems with a methodical and structured mindset."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Ericsson",
      companylogo: require("./assets/images/ericsson.png"),
      date: "march 2022 – Present",
      desc: "Smart Village KM 28 Cairo/Alex Road, Egypt",
      descBullets: [
        "Execute full software development life cycle (SDLC).",
        "Develop layouts and documentation to identify requirements and solutions.",
        "Write well-designed, testable code.",
        "Integrate software components into a fully functional software system.",
        "Document and maintain software functionality.",
        "Troubleshoot, debug and upgrade existing systems."
      ]
    },
    {
      role: "Back-End Developer",
      company: "Brmaja",
      companylogo: require("./assets/images/brmaja.jpg"),
      date: "March 2020 – March 2022",
      desc: "the 5th settlement, Cairo, Egypt",
      descBullets: [
        "Collaborating with the front-end developers and other team members to establish objectives and design more functional, cohesive codes to enhance the user experience.",
        "Developing ideas for new features by monitoring industry developments and trends.",
        "Participating in continuing education and training to remain current on best practices, learn new programming languages, and better assist other team members."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Mobimed",
      companylogo: require("./assets/images/mobimedLogo.jpg"),
      date: "November 2018 – February 2020",
      desc: "Nasr City, Cairo, Egypt",
      descBullets: [
        "Developing front end.",
        "Developing back end.",
        "Ensuring cross-platform optimization for mobiles.",
        "Ensuring responsiveness of applications.",
        "Designing and developing APIs."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/mobimedLogo.jpg"),
      projectName: "Mobimed",
      projectDesc: "MobiMED is a medical practice full integrated system that includes Patient Care Management, it's a healthcare platform that connects users, doctors and service providers.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/arabie.jpg"),
      projectName: "Arabie",
      projectDesc: "Arabie is an e-learnning website that connects Arabic language tutors and non-Arabic speaking students easily, Presenting many astonishing features.",
      // footerLink: [
        // {
          // name: "Visit Website",
          // url: ""
        }
      // ]
    // }
    ,
    {
      image: require("./assets/images/octopus logo.webp"),
      projectName: "Octopus",
      projectDesc: "Octopus is a Data Automation and Analysis Tool provides advanced automation and analysis features for managing and processing data. With support for file processing, database management, API  integration and performing scheduled data analysis tasks.",
      // footerLink: [
        // {
          // name: "Visit Website",
          // url: ""
        }
      // ]
    // }
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
      subtitle:
        "",
      image: require("./assets/images/codeInLogo.webp"),
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
      subtitle:
        "",
      image: require("./assets/images/googleAssistantLogo.webp"),
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
      image: require("./assets/images/pwaLogo.webp"),
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
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

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
  podcast: [
    ""
  ],
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20-1151114585",
  email_address: "mahmoudhadry@outlook.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
