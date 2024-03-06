import React from "react";
import RingLoader from "react-spinners/RingLoader";

export default function Loader() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <RingLoader
        color={"#03e9f4"}
        size={180}
        cssOverride={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
    </div>
  );
}
