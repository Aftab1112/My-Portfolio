import Typewriter from "typewriter-effect";
import React from "react";
import myImage from "../images/my-image.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            Hello , I'm
          </h2>
          <h2 className="text-4xl sm:text-4xl font-bold text-white h-20 w-[270px] ">
            <Typewriter
              options={{
                strings: ["AFTAB", "A FRONT-END DEVELOPER"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-gray-500 py-3 text-xl max-w-md  ">
            Forward-thinking student with a passion for Front-End Development.
          </p>
          <div>
            <button className="group text-white text-xl w-fit px-4 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to to-blue-800 cursor-pointer hover:boxshadow duration-500">
              Projects
              <span className="group-hover:rotate-90   p-2 duration-300 ">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={myImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-1/2 hover:image duration-300 mb-[100px] md:mb-0 "
          />
        </div>
      </div>
    </div>
  );
}
