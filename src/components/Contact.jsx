import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black  to-gray-800 p-4 text-white pb-16 md:pb-0 pt-5 md:pt-0"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pt-24">
        <div className=" flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500 ">
            Contact
          </p>
          <p className="py-6 text-center">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center ">
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

            <button className="text-white  bg-gradient-to-r from-cyan-600 to to-blue-800 px-6 py-3 my-8 mx-auto flex items-center  rounded-md tracking-wider duration-300 hover:boxshadow">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
