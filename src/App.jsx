import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Scroller from "./components/scroller";
import Projects from "./components/projects";
import Footer from "./components/footer";

import { useState } from "react";
function App()
{

  
  //for opening/closing navbar 
  //moved it here for ctivating blur on small screens when nav is open
  const[navOpen,setNavOpen]=useState(true);

  return(
    <>
    <div className="lg:px-16 md:px-8">
    <Navbar navOpen={navOpen} setNavOpen={setNavOpen}/>
    <div className={(navOpen?'max-md:blur-md':'max-md:blur-0')}>
    <Hero/>
    <About/>
    <Skills/>
    <Scroller/>
    <Projects/>
    <Footer/>
    </div>
    </div>
    </>
  )
  
}

export default App;