import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiWakatime } from "react-icons/si";
import { motion } from "framer-motion";

export default function SocialIcons() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aftabreshamwale/",
      style: "rounded-tr-lg",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Aftab1112",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:aftabreshamwale@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Wakatime
          <SiWakatime size={30} />
        </>
      ),
      href: "https://wakatime.com/@Aftab",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-lg",
      download: "true",
    },
  ];

  return (
    <motion.div
      initial={{ translateX: -200 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:flex flex-col top-[35%] left-0 fixed opacity-70 backdrop-blur-sm"
    >
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:rounded-lg duration-300 hover:ml-[-10px] ml-[-100px]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
