import { useEffect, useState } from "react"

function Projects(){
    const Projects=[
        {
          title:'Web devlopment1',
          description:'A web dev project',
          tags:['tag1','tag2','tag3'],
          image:'src/assets/camera.jpg'
        },
        {
          title:'Web devlopment2',
          description:'A web dev project',
          tags:['tag1','tag2','tag3'],
          image:'src/assets/camera.jpg'
        },
        {
          title:'Web devlopment3',
          description:'A web dev project',
          tags:['tag1','tag2','tag3'],
          image:'src/assets/camera.jpg'
        },
        {
          title:'Web devlopment4',
          description:'A web dev project',
          tags:['tag1','tag2','tag3'],
          image:'src/assets/camera.jpg'
        },
        {
          title:'Web devlopment5',
          description:'A web dev project',
          tags:['tag1','tag2','tag3'],
          image:'src/assets/camera.jpg'
        },
        {
          title:'Web devlopment6',
          description:'A web dev project',
          tags:['tag1','tag2','tag3'],
          image:'src/assets/camera.jpg'
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
    <div className="lg:mx-16 md:mx-12 mx-5 mt-28 flex flex-col gap-8">
        <p className="md:text-4xl text-xl w-fit border-b-2 border-zinc-400 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-semibold">Projects built by me</p>
    <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 md:gap-6">
      {
        projectShown.map((project)=>{
            return(
            <ProjectComp project={project}></ProjectComp>
            )
        })
      }
    </div>

    <button className="md:text-xl text-sm my-3 border-2 border-zinc-500 w-fit mx-auto px-2 py-1 rounded-lg active:scale-95 hover:scale-105 " onClick={()=>{
        setShowAll(!showAll);
    }}>{showAll?'Show less':'Show more'}</button>
    </div>
  )
}

function ProjectComp({project}){
  return(
    <div className="border-2 border-zinc-500 flex flex-col px-4 py-10 gap-10 bg-zinc-800 rounded-xl">

        <div className="img w-full">
            <img src={project.image} alt="project-image" className="object-contain rounded-xl"/>
        </div>

        <div className="bottom flex justify-between">
            <div className="left flex flex-col gap-1">
              <p className="title lg:text-3xl md:text-2xl text-xl">{project.title}</p>
              <p className="description lg:text-xl md:text-md">{project.description}</p>
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

            <div className="right flex lg:gap-4 gap-2 items-end lg:text-xl md:text-md text-sm">
                <button className="flex items-center lg:gap-2 gap-1 bg-red-300 text-black lg:px-2 lg:py-1 px-1 rounded-xl hover:scale-110">Repo<span className="material-symbols-outlined">north_east</span>
                </button>
                <button className="flex items-center gap-2 bg-red-300 text-black lg:px-2 lg:py-1 px-1 rounded-xl hover:scale-110">Visit<span className="material-symbols-outlined ">north_east</span>
                </button>
            </div>
        </div>
    </div>
  )
}

function Tags({tagName})
{
    return(
        <span className="bg-zinc-600 px-2 rounded-lg md:text-xs text-[10px]">{tagName}</span>
    )
}

export default Projects;