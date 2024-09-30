
import { useEffect, useState } from "react";
import Navitems from "./navitems";
function Navbar()
{

  //for opening/closing navbar 
  const[navOpen,setNavOpen]=useState(true);

  
  
  //initially navbar is active in case of small screen but it must not be and become active on pressing toggle button. Corrected it here
  useEffect(()=>{
    if(window.innerWidth<450)
    {
      setNavOpen(false);
    }
  },[])

  
  //for blur navbar on scroll
  let[navBlur,setNavBlur]=useState(0)
  useEffect(()=>{
   window.addEventListener('scroll',()=>{
    if(window.scrollY>20)
    setNavBlur(1);
    else
    setNavBlur(0);

   })
  },[])

  return(
    <>
      <div className="header fixed top-0 left-0 w-full h-20 z-10">

        <div className={"md:h-20 absolute top-4 lg:w-11/12 md:w-full left-0 right-0 mx-auto h-14 max-md:hidden"+(navBlur==1?' blur-bar':'')}></div>

        <div className="navbar max-w-screen-2xl w-full h-20 flex justify-between items-center mx-auto md:mt-4 px-4 md:px-6 gap-3 ">
            <h1 className="lg:text-3xl md:text-2xl z-10">
                Abhinav Ojha.
            </h1>
           
            <div className="midbar z-10">
                <button className="menu-btn md:hidden" onClick={()=>{
                  //for toggle navigation using menu button
                  setNavOpen((prev)=>!prev)
                }}>
                    <span className="material-symbols-outlined p-2">{navOpen?'close':'menu'}</span>
                </button>
                <Navitems navOpen={navOpen}/>
            </div>

            <a className="contact btn btn-secondary justify-self-center md:text-xl max-md:hidden  bg-red-300 text-black rounded-2xl ring-inset ring-1 ring-zinc-50/5 hover:bg-zinc-50/15 active:scale-90 p-3 z-10" href="">Contact</a>  
      
        </div>
      </div>
    </>
  )
}

export default Navbar;