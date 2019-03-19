export const landingPageIcons = [
  {
    title: "Github",
    link: "https://github.com/SegevHaviv",
    icon: "fab fa-github"
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/segev-haviv-a8429912a/",
    icon: "fab fa-linkedin"
  },
  {
    title: "freeCodeCamp",
    link: "https://www.freecodecamp.org/segev_haviv",
    icon: "fab fa-free-code-camp"
  },
  {
    title: "Stack Overflow",
    link: "https://stackoverflow.com/users/7658879/s-haviv",
    icon: "fab fa-stack-overflow"
  }
];

export const projectsCategories = {
  ALL: "All",
  REACT: "React",
  JAVA: "Java",
  MACHINELEARNING: "Machine Learning"
};

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "My personal portfolio, developed with React, Material UI and the recently released hooks.",
    avatar: require("./assets/images/portfolio.png"),
    gitHubLink: "https://github.com/SegevHaviv/portfolio",
    codePenLink: "",
    liveDemo: "",
    category: projectsCategories.REACT
  },
  {
    title: "Calculator",
    description: "Simple React calculator, used recently released hooks.",
    avatar: require("./assets/images/calculator.png"),
    gitHubLink: "https://github.com/SegevHaviv/Calculator-ReactJS",
    codePenLink: "",
    liveDemo: "https://segevhaviv.github.io/Calculator-ReactJS/",
    category: projectsCategories.REACT
  },

  {
    title: "Image Proccessing",
    description:
      "Machine learning algorithm to auto color a black and white pictures. Using Keras & TensorFlow.",
    avatar: require("./assets/images/autoColor.png"),
    gitHubLink: "https://github.com/SegevHaviv/Image-Proccessing-Project",
    codePenLink: "",
    liveDemo: "",
    category: projectsCategories.MACHINELEARNING
  },
  {
    title: "Sentiment Analysis",
    description:
      "Machine learning algoritghm which by given it a review of a movie it can determine if it's positive, negative or netural. Using NLTK algorithms. ",
    avatar: require("./assets/images/nltk.png"),
    gitHubLink: "https://github.com/SegevHaviv/NLTK-Sentiment-Analysis",
    codePenLink: "",
    liveDemo: "",
    category: projectsCategories.MACHINELEARNING
  },
  {
    title: "Sokoban",
    description:
      "Sokoban game using Client-Server TCP/IP protocol. The entire project is event-driven development on MVC architecture. All the projects are according to the acceptable design patterns and OOP principles. ",
    avatar: require("./assets/images/sokoban.png"),
    gitHubLink: "https://github.com/SegevHaviv/Sokoban-Game",
    codePenLink: "",
    liveDemo: "",
    category: projectsCategories.JAVA
  },
  {
    title: "Lazy (Android)",
    description:
      "Motion detection program which detects hands movements and according to that controls the smart-phone / TV functions. The detection is being done by machine learning image proccessing algorithm.",
    avatar: require("./assets/images/lazy.png"),
    gitHubLink: "https://github.com/SegevHaviv/Lazy",
    codePenLink: "",
    liveDemo: "",
    category: projectsCategories.JAVA
  },
  {
    title: "Traveler (Android)",
    description:
      "Application that allows users to post their experiences from trips around the world. Using Firebase and based on VM architecture.",
    avatar: require("./assets/images/traveler.png"),
    gitHubLink: "https://github.com/SegevHaviv/Traveler",
    codePenLink: "",
    liveDemo: "",
    category: projectsCategories.JAVA
  }
];

export const NAVBAR_INDEX = {
  LANDING_PAGE: 0,
  PROJECTS: 1,
  RESUME: 2,
  CONTACT: 3
};
