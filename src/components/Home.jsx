import Typewriter from "typewriter-effect";
import React from "react";
import myImage from "../images/my-image.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <motion.div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, translateX: -200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-4xl sm:text-4xl font-bold text-white ">
            Hello , I'm
          </h2>
          <h2 className="text-4xl sm:text-4xl font-bold text-white h-20 w-[270px] ">
            <Typewriter
              options={{
                strings: ["AFTAB", "A FRONT-END DEVELOPER"],
                autoStart: true,
                delay: 150,
                loop: true,
              }}
            />
          </h2>
          <p className="text-gray-500 py-3 text-xl max-w-md  ">
            Forward-thinking student with a passion for Front-End Development.
          </p>
          <div className="flex justify-center md:flex self-start">
            <button
              onClick={() =>
                scroller.scrollTo("projects", {
                  smooth: true,
                })
              }
              className="project-btn group tracking-wider font-semibold group text-white text-xl w-fit px-4 py-1 my-2 flex items-center rounded-md "
            >
              Projects
              <span className="group-hover:rotate-90  p-2 duration-150 ">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={myImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-1/2 hover:image duration-300 mb-16 md:mb-0 "
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
