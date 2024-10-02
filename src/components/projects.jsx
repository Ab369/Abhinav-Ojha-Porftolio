import { useEffect, useState } from "react"
import React, { useRef } from "react";
import cm from '../assets/projects/coursemaster.png'
import dk from '../assets/projects/dk.png'
import epp from '../assets/projects/epp.png'
import sg from '../assets/projects/sg.png'
import ss from '../assets/projects/ss.png'
import tte from '../assets/projects/tte.png'

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

function Projects(){
    const Projects=[
        {
          title:'CourseMaster',
          description:'MERN stack course site',
          tags:['mern','api','recoil'],
          image:cm,
          repo:'https://github.com/Ab369/CourseMaster' , 
          live:'https://coursemaster-admin.vercel.app/'
        },
        {
          title:'Texmoji',
          description:'Encrypts text to emoji',
          tags:['javascript','unicode'],
          image:tte,
          repo: 'https://github.com/Ab369/TextToEmojiConverter', 
          live:'https://text-to-emoji-converter.vercel.app/'
        },
        {
          title:'SongSurfer',
          description:'Plays locally saved song',
          tags:['javascript','audio'],
          image:ss,
          repo: 'https://github.com/Ab369/Song-Surfer-audio-player-', 
          live:'https://song-surfer-audio-player.vercel.app/'
        },
        {
          title:'SimonGame',
          description:'A memory game',
          tags:['Javascript','algorithm'],
          image:sg,
          repo:'https://github.com/Ab369/SimonGame-js-3',
          live:'https://simon-game-js-3.vercel.app/'
        },
        {
          title:'PerfPredict',
          description:'Employee performance prediction',
          tags:['ML','Flask'],
          image:epp,
          repo: 'https://github.com/Ab369/Employee-Performance-Prediction', 
          live:'https://github.com/Ab369/Employee-Performance-Prediction'
        },
        {
          title:'DrumKit',
          description:'Play the drums',
          tags:['DOM','audio','events'],
          image:dk,
          repo:'https://github.com/Ab369/Drum-kit-js-2' , 
          live:'https://drum-kit-js-2.vercel.app/'
        },
    ]

    //for showing limited/all projects based on show less/more button press
    const[showAll,setShowAll]=useState(false);

    // inside the useEffect hook. React's state management doesn't track updates to normal variables like projectShown—you need to use useState for such reactive values.
    // let projectShown=[]  hence cannot use this here
    let [projectShown,setProjectShown]=useState([]);  //hence declare as state variable

    useEffect(()=>{
        if(showAll)
        setProjectShown(Projects);
        else
        setProjectShown(Projects.slice(0,3));
    },[showAll])


  return (
    <div id="project" className="lg:mx-16 md:mx-6 mx-5 mt-28 flex flex-col lg:gap-20 md:gap-12 gap-8">
        <p className="md:text-4xl text-xl w-fit border-b-2 border-zinc-400 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-semibold">Projects built by me</p>
    <div className="grid lg:grid-cols-3 lg:gap-20  md:grid-cols-2 gap-6">
      {
        projectShown.map((project)=>{
            return(
            <TiltCard project={project}></TiltCard>
            )
        })
      }
    </div>

    <button className="md:text-xl text-sm mb-3 border-2 border-zinc-500 w-fit mx-auto px-2 py-1 rounded-lg active:scale-95 hover:scale-105 " onClick={()=>{
        setShowAll(!showAll);
    }}>{showAll?'Show less':'Show more'}</button>
    </div>
  )
}


//framer
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({project}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative lg:w-96  rounded-xl  "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className=" lg2:w-[450px] lg3:w-[350px] lg:w-[300px] inset-2 grid place-content-center rounded-xl bg-zinc-600 shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(50px)",
          }}
        >

      <div className="border-2 border-zinc-500 flex flex-col px-4 py-10 gap-10 bg-zinc-800 rounded-xl">
           <div className="img w-full lg:h-52 md:h-32 h-40">
            <img src={project.image} alt="project-image" className="object-contain rounded-xl"/>
        </div>

        <div className="bottom flex justify-between">
            <div className="left flex flex-col gap-1">
              <p className="title lg:text-2xl md:text-xl text-md">{project.title}</p>
              <p className="description lg:text-md md:text-md">{project.description}</p>
              <span className="tags flex lg:gap-2 gap-1">
                  {
                    project.tags.map((tagName)=>{
                        return(
                           <Tags tagName={tagName}></Tags>
                        )
                    })
                  }
              </span>
            </div>

            <div className="right flex flex-col gap-2 items-end lg:text-xl md:text-md text-sm">
                <button onClick={()=>{window.open(project.repo, '_blank', 'noopener, noreferrer')
}} className="flex items-center gap-1 bg-zinc-300 text-black lg:px-2 lg:py-1 px-1 rounded-xl hover:scale-110">Repo<span className="material-symbols-outlined">north_east</span>
                </button>

                <button onClick={()=>{window.open(project.live, '_blank', 'noopener, noreferrer')
}}className="flex items-center gap-2 bg-red-300 text-black lg:px-2 lg:py-1 px-1 rounded-xl hover:scale-110">Visit<span className="material-symbols-outlined ">north_east</span>
                </button>
            </div>
        </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

function Tags({tagName})
{
    return(
        <span className="bg-zinc-600 px-2 py-1 rounded-lg text-xs">{tagName}</span>
    )
}

export default Projects;


// function ProjectComp({project}){
//   return(
//     <div className="border-2 border-zinc-500 flex flex-col px-4 py-10 gap-10 bg-zinc-800 rounded-xl">

//         <div className="img w-full">
//             <img src={project.image} alt="project-image" className="object-contain rounded-xl"/>
//         </div>

//         <div className="bottom flex justify-between">
//             <div className="left flex flex-col gap-1">
//               <p className="title lg:text-3xl md:text-2xl text-xl">{project.title}</p>
//               <p className="description lg:text-xl md:text-md">{project.description}</p>
//               <span className="tags flex lg:gap-2 gap-1">
//                   {
//                     project.tags.map((tagName)=>{
//                         return(
//                            <Tags tagName={tagName}></Tags>
//                         )
//                     })
//                   }
//               </span>
//             </div>

//             <div className="right flex lg:gap-4 gap-2 items-end lg:text-xl md:text-md text-sm">
//                 <button className="flex items-center lg:gap-2 gap-1 bg-red-300 text-black lg:px-2 lg:py-1 px-1 rounded-xl hover:scale-110">Repo<span className="material-symbols-outlined">north_east</span>
//                 </button>
//                 <button className="flex items-center gap-2 bg-red-300 text-black lg:px-2 lg:py-1 px-1 rounded-xl hover:scale-110">Visit<span className="material-symbols-outlined ">north_east</span>
//                 </button>
//             </div>
//         </div>
//     </div>
//   )
// }