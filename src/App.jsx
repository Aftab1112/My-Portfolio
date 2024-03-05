import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialIcons />
    </div>
  );
}

export default App;
