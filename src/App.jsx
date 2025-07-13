import "./App.css";
import Contact from "./sections/Contact/Contact";
import Developer from "./sections/Developer/Developer";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Developer />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
