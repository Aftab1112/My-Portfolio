import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:h-auto  md:pt-52 ">
        <div className="pb-8 flex justify-center items-center   md:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-center   md:mt-0">
            About Me
          </p>
        </div>
        <p className="text-xl    ">
          Hello, I am Aftab Reshamwale, currently in my final year of study in
          the B.E. CSE department. I am passionate about frontend development,
          particularly in React and JavaScript. I am self-taught in these
          languages and have completed several projects using them, which I
          regularly upload to GitHub. I am dedicated and honest in my work
          ethic, and I enjoy exploring and learning new concepts on a daily
          basis. My future aspiration is to transition into full-stack
          development.
        </p>

        <br />
        <p className="text-xl">
          Please take a moment to explore my projects on GitHub and feel free to
          provide advice and corrections to help me improve my frontend skills.
        </p>
      </div>
      <br />
    </div>
  );
}
