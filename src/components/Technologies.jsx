import React, { useRef } from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import tailwind from "../images/tailwind.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import vite from "../images/vite.png";
import github from "../images/github.png";
import netlify from "../images/netlify-logo.svg";
import nodejs from "../images/nodejs-logo.svg";
import { motion, useInView } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const icons = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "TAILWIND  ",
      style: "shadow-cyan-600",
    },
    {
      id: 4,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-600",
    },
    {
      id: 5,
      src: react,
      title: "REACT JS",
      style: "shadow-cyan-400",
    },
    {
      id: 6,
      src: vite,
      title: "VITE",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: netlify,
      title: "NETLIFY",
      style: "shadow-teal-400",
    },
    {
      id: 9,
      src: nodejs,
      title: "NODE JS",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      ref={ref}
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full   "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full md:h-auto text-white pt-0 md:pt-24 ">
        <Fade direction="right" triggerOnce>
          <div className="flex flex-col mt-0  justify-center items-center">
            <p className="text-4xl font-bold border-b-4  border-b-gray-500 p-2 inline ">
              Technologies
            </p>
            <p className="py-6 text-center">
              These are the tools with which I am experienced.
            </p>
          </div>
        </Fade>

        <div className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {icons.map(({ id, src, title, style }, i) => (
            <motion.div
              initial={{ opacity: 0, translateY: 500 }}
              animate={
                isInView ? { opacity: 1, translateY: 0 } : { opacity: 0 }
              }
              transition={{
                duration: 0.3,
                delay: i * 0.2,
              }}
              key={id}
              className={
                " hover:scale-105 duration-200 p-5 cursor-pointer shadow-md  " +
                "" +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-center text-sm md:text-base">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
