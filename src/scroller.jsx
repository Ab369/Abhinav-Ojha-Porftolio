
function Scroller(){
   
    const arr=['Web Development','Data Structures', 'Algortithms', 'Computer Fundamentals']

    return(
        <>
        <div className="inf-scroll flex flex-col gap-2 max-lg:px-4 max-sm:hidden">
        <div className="marquee-group">
             <div className="marquee-row animate-scroller1 ">
               {
                arr.map((text)=>{
                  return(
                    <TextComp text={text}></TextComp>
                  )
                })
               }
             </div>
             <div className="marquee-row animate-scroller1 ">
               {
                arr.map((text)=>{
                  return(
                    <TextComp text={text} className='textComp'></TextComp>
                  )
                })
               }
             </div>
             <div className="marquee-row animate-scroller1 ">
               {
                arr.map((text)=>{
                  return(
                    <TextComp text={text} className='textComp'></TextComp>
                  )
                })
               }
             </div>

        </div>
        <div className="marquee-group">
             <div className="marquee-row animate-scroller2">
               {
                arr.map((text)=>{
                  return(
                    <TextComp text={text}></TextComp>
                  )
                })
               }
             </div>
             <div className="marquee-row animate-scroller2">
               {
                arr.map((text)=>{
                  return(
                    <TextComp text={text}></TextComp>
                  )
                })
               }
             </div>
             <div className="marquee-row animate-scroller2">
               {
                arr.map((text)=>{
                  return(
                    <TextComp text={text}></TextComp>
                  )
                })
               }
             </div>
             </div>
        </div>
        </>
    )
}

function TextComp({text}){
    return(
        <span>
            <p className="font-oswald text-7xl font-bold text-zinc-400">{text}</p>
        </span>
    )
}

export default Scroller;