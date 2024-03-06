import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "technologies",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black/70 backdrop-blur-md z-10 px-4 ">
      <div>
        <Link
          to="home"
          smooth
          className="text-5xl  ml-2 cursor-pointer relative z-10 track tracking-wide  hover:tracking-[6px] duration-300"
        >
          AF<span className="text-blue-500 opacity-95 ">T</span>AB
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize text-gray-500 hover:text-white   duration-200 hover:rounded-lg hover:bg-inherit  text-xl hover:newlink"
          >
            <Link to={link} smooth duration={800}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className=" transition-top duration-500 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
          style={{ top: "80px" }}
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="hover:boxshadow px-4 cursor-pointer capitalize py-5 text-3xl  hover:text-white rounded-lg duration-200 "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={800}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
