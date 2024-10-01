import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Scroller from "./components/scroller";
import Projects from "./components/projects";
import Footer from "./components/footer";
import GlowButton from "./components/button";

function App()
{
  return(
    <>
    <div className="lg:px-16 md:px-8">
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Scroller/>
    <Projects/>
    <Footer/>
    </div>
    </>
  )
  
}

export default App;