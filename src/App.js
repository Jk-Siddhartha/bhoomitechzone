import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

const App = () => {
  const courseData = [
    {
      title: "Technology Studies",
      description:
        "Technology Studies is an interdisciplinary field that explores the impact, use, and development of technology in various domains. It encompasses subjects like computer science, engineering, sociology, and ethics. Students in this field learn about emerging technologies, their applications, and how they shape our society.",
      icon: "fas fa-laptop-code", // Replace this with the actual Font Awesome icon CSS class for Technology Studies
    },
    {
      title: "Frontend Developer",
      description:
        "A Frontend Developer is responsible for implementing the visual and interactive elements of a website or web application. They work with HTML, CSS, and JavaScript to create user interfaces and ensure a smooth user experience. Frontend Developers collaborate with designers and backend developers to bring designs to life and create functional web applications.",
      icon: "fas fa-code", // Replace this with the actual Font Awesome icon CSS class for Frontend Developer
    },
    {
      title: "Backend Developer",
      description:
        "A Backend Developer is responsible for building and maintaining the server-side of web applications. They work with databases, server logic, and APIs to ensure the smooth functioning of web applications. Backend Developers handle data storage, security, and performance, allowing frontend developers to focus on user interfaces and experiences.",
      icon: "fas fa-database", // Replace this with the actual Font Awesome icon CSS class for Backend Developer
    },
    {
      title: "Full Stack Developer",
      description:
        "A Full Stack Developer is proficient in both frontend and backend development. They have the skills to work on the entire web application stack, from the user interface to the server-side logic and database management. Full Stack Developers are versatile and can handle different aspects of web development, making them valuable assets in building complete and robust web applications.",
      icon: "fas fa-laptop", // Replace this with the actual Font Awesome icon CSS class for Full Stack Developer
    },
    {
      title: "HTML",
      description:
        "HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages and web applications. HTML provides the structure and content of a webpage, defining elements like headings, paragraphs, images, links, and more.",
      icon: "fab fa-html5", // Replace this with the actual Font Awesome icon CSS class for HTML
    },
    {
      title: "CSS",
      description:
        "CSS stands for Cascading Style Sheets. It is used to style the presentation of HTML elements on a web page. CSS allows developers to control the layout, colors, fonts, and other visual aspects of a website.",
      icon: "fab fa-css3", // Replace this with the actual Font Awesome icon CSS class for CSS
    },
    {
      title: "JavaScript",
      description:
        "JavaScript is a high-level programming language used to create interactive and dynamic elements on web pages. It enables developers to add behavior, interactivity, and functionality to websites.",
      icon: "fab fa-js", // Replace this with the actual Font Awesome icon CSS class for JavaScript
    },
    {
      title: "ReactJS",
      description:
        "ReactJS is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of applications efficiently. ReactJS is widely used for building single-page applications (SPAs).",
      icon: "fab fa-react", // Replace this with the actual Font Awesome icon CSS class for ReactJS
    },
    {
      title: "Java",
      description:
        "Java is a versatile and widely-used programming language known for its platform independence. It is used in various domains, including web development, mobile app development, and enterprise applications.",
      icon: "fab fa-java", // Replace this with the actual Font Awesome icon CSS class for Java
    },
    {
      title: "Python",
      description:
        "Python is a powerful and easy-to-read programming language. It is widely used for web development, scientific computing, data analysis, artificial intelligence, and more. Python's simplicity and large community make it an excellent choice for beginners.",
      icon: "fab fa-python", // Replace this with the actual Font Awesome icon CSS class for Python
    },
    {
      title: "SQL",
      description:
        "SQL stands for Structured Query Language. It is used to manage and manipulate relational databases. SQL allows developers to create, update, and retrieve data from databases, making it a crucial skill for backend development and data analysis.",
      icon: "fas fa-database", // Replace this with the actual Font Awesome icon CSS class for SQL
    },
    {
      title: "Node.js",
      description:
        "Node.js is a server-side runtime environment that allows developers to build scalable and real-time applications. It uses JavaScript as its scripting language and is widely used for building server-side applications and APIs.",
      icon: "fab fa-node-js", // Replace this with the actual Font Awesome icon CSS class for Node.js
    },
    {
      title: "C++",
      description:
        "C++ is a powerful and general-purpose programming language. It is an extension of the C programming language and is used for system/application software, game development, embedded systems, and more.",
      icon: "fab fa-cuttlefish", // Replace this with the actual Font Awesome icon CSS class for C++
    },
    {
      title: ".NET",
      description:
        ".NET is a free, open-source developer platform for building different types of applications. It supports multiple programming languages and frameworks, making it a versatile choice for web, desktop, and mobile development.",
      icon: "fas fa-code", // Replace this with the actual Font Awesome icon CSS class for .NET
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage courseData={courseData} />} exact />
        <Route
          path="/about"
          element={<About courseData={courseData} />}
          exact
        />
        <Route path="/career" element={<Career />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route
          path="/services"
          element={<Services courseData={courseData} />}
          exact
        />
      </Routes>
    </Router>
  );
};

export default App;
