import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialIcons from "./components/SocialIcons";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialIcons />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
