import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black  to-gray-800 p-4 text-white pb-16 md:pb-0 pt-5 md:pt-0"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pt-24">
        <Fade direction="bottom" delay={500} triggerOnce>
          <div className=" flex flex-col justify-center items-center">
            <p className="text-4xl font-bold inline border-b-4  border-gray-500 ">
              Contact
            </p>
            <p className="py-6 text-center">
              Submit the form below to get in touch with me
            </p>
          </div>
        </Fade>
        <motion.div
          initial={{ opacity: 0, translateY: 1500 }}
          animate={isInView ? { opacity: 1, translateY: 0 } : { opacity: 0 }}
          transition={{
            duration: 1,
          }}
          className="flex justify-center items-center "
        >
          <form
            action="https://getform.io/f/wbrdvddb"
            method="POST"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="talk-btn font-semibold text-white  px-6 py-3 my-8 mx-auto flex items-center  rounded-md tracking-wider ">
              Let's Talk
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
