import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-center">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          facere alias accusantium tempora minima vitae vero quam aperiam
          voluptates numquam, aliquam deserunt id recusandae odit delectus
          eligendi. Molestiae beatae laudantium ut eligendi harum iste
          temporibus quisquam. Dolore facere necessitatibus, quibusdam eius
          praesentium tempore fugiat sequi sit cupiditate voluptate molestiae
          optio!
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          facere alias accusantium tempora minima vitae vero quam aperiam
          voluptates numquam, aliquam deserunt id recusandae odit delectus
          eligendi. Molestiae beatae laudantium ut eligendi harum iste
          temporibus quisquam. Dolore facere necessitatibus, quibusdam eius
          praesentium tempore fugiat sequi sit cupiditate voluptate molestiae
          optio!
        </p>
      </div>
    </div>
  );
}
