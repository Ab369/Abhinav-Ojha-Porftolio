import { useEffect, useState } from "react";
import resume from '../assets/Abhinav_Ojha_Software_engineering_resume.pdf'
import pi from '../assets/ab.png'
function Hero(){
    const[scrollClass,setScrollClass]=useState(' lg:flex');

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>50)
                setScrollClass(' lg:hidden');
            else
             setScrollClass(' lg:flex');
        })
    },[])
    
return(
    
    <>
    <div id="home" className="hero md:mt-28 lg:grid grid-cols-2 lg:px-24 lg:py-12 justify-center items-center flex
    md:p-10 mt-20 p-6">

        <div className="text-banner flex flex-col items-start md:gap-10 gap-6">
            <span className="hero-text lg:text-6xl md:text-5xl text-2xl">
            <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-5xl text-2xl font-black md:leading-snug">Programmer with a keen interest in developing dynamic web applications.</p>
            </span>
            <button onClick={() => {
         window.open('https://drive.google.com/file/d/1g1CEU_1R2Teu5qUg8rLS2Fug8bJO5lUK/view?usp=sharing')
    }} 

    className="bg-red-300 text-black flex justify-center md:p-3 md:text-xl rounded-xl p-2 active:scale-95 hover:bg-zinc-400">Resume
            <span class="material-symbols-outlined">north_east</span>
            </button>
        </div>

        <div className="img-banner w-full lg:flex justify-center hidden">
         <img className="w-2/3 bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px]" src={pi} alt="image-banner" />
        </div>
    </div>


    {/* scrollY for removing scroll Down on scrolling */}
    <div className={"hidden flex-col justify-center items-center"+scrollClass}>
    <p>Scroll Down</p>
    <span className="material-symbols-outlined animate-bounce">
    keyboard_double_arrow_down
    </span>
    </div>
    </>
)
}

export default Hero;