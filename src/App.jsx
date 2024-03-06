import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialIcons from "./components/SocialIcons";
import Technologies from "./components/Technologies";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <SocialIcons />
          <Technologies />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
