import React, { useEffect, useRef } from "react";
import expenseTrackerApp from "../images/expense-tracker-app.png";
import newsApp from "../images/news-app.png";
import restCountriesApi from "../images/rest-countries-api.png";
import textEditor from "../images/text-editor-app.png";
import theShoeCompany from "../images/the-shoe-company.png";
import weatherApp from "../images/weather-app.png";
import todoApp from "../images/To-Do App.png";
import { useInView } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {}, [isInView]);

  const projects = [
    {
      id: 1,
      src: todoApp,
      para: "MERN Stack ToDo App",
      demoLink: "https://react-todo-app-rho-beige.vercel.app/",
      codeLink: "https://github.com/Aftab1112/React-Todo-App",
    },
    {
      id: 2,
      src: restCountriesApi,
      para: "Countries API",
      demoLink: "https://where-in-the-world-are-you.netlify.app/",
      codeLink: "https://github.com/Aftab1112/Country-API_React",
    },
    {
      id: 3,
      src: newsApp,
      para: "News App",
      demoLink: "https://github.com/Aftab1112/News-App",
      codeLink: "https://github.com/Aftab1112/News-App",
    },
    {
      id: 4,
      src: textEditor,
      para: "Text Editor App",
      demoLink: "https://aftab1112.github.io/Text-Editor-App/",
      codeLink: "https://github.com/Aftab1112/Text-Editor-App",
    },
    {
      id: 5,
      src: expenseTrackerApp,
      para: "Expense Tracker App",
      demoLink: "https://expense-tracker-neon-beta.vercel.app/",
      codeLink: "https://github.com/Aftab1112/Expense-Tracker-React",
    },
    {
      id: 6,
      src: theShoeCompany,
      para: "The Shoe Company",
      demoLink: "https://the-shoe-company.vercel.app/",
      codeLink: "https://github.com/Aftab1112/The-Shoe-Company",
    },
  ];

  const openDemoLink = (link) => {
    window.open(link, "_blank");
  };

  const openCodeLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      ref={ref}
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full  md:pt-16 pb-3 md:pb-0">
        <Fade direction="left" triggerOnce>
          <div className="pb-8 flex flex-col justify-center items-center mt-5 md:mt-0">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 py-3 text-center ">
              My Recent Projects
            </p>
          </div>
        </Fade>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb:mb-0">
          {projects.map(({ id, src, para, demoLink, codeLink }, i) => (
            <motion.div
              initial={{ opacity: 0, translateY: 500 }}
              animate={isInView ? { opacity: 1, translateY: 0 } : ""}
              animateOnce
              transition={{
                duration: 0.3,
                delay: i * 0.2,
              }}
              key={id}
              className="hover:project-box  rounded-lg border border-gray-600  duration-300 "
            >
              <img src={src} className="rounded-2xl  p-3  " alt="projectpic" />
              <p className="text-center text-gray-200 cursor-default font-medium">
                {para}
              </p>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => openDemoLink(demoLink)}
                  className="project-btn w-1/2 px-6 py-3 m-4 rounded-lg font-semibold duration-150 "
                >
                  Demo
                </button>
                <button
                  onClick={() => openCodeLink(codeLink)}
                  className="code-btn w-1/2 px-6 py-3 m-4 rounded-lg font-semibold duration-150    "
                >
                  Code
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
