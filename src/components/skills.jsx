import { div } from "framer-motion/client";

function Skills(){

    const skills=[
        {
            title:'CSS',
            description:'Styling',
            logo:'./assets/css-3.png'
        },
        {
            title:'JavaScript',
            description:'Interactions',
            logo:'src/assets/js.png'
        },
        {
            title:'React.js',
            description:'Library',
            logo:'src/assets/react.png'
        },
        {
            title:'Node.js',
            description:'Runtime',
            logo:'src/assets/nodejs.png'
        },
        {
            title:'Express.js',
            description:'Server',
            logo:'src/assets/expressjs_logo_icon_169185.png'
        },
        {
            title:'MongoDB',
            description:'Database',
            logo:'src/assets/mongodb_original_wordmark_logo_icon_146425.png'
        },
        {
            title:'C++',
            description:'Programming',
            logo:'src/assets/c-.png'
        },
        {
            title:'Postman',
            description:'API',
            logo:'src/assets/postman.248x256.png'
        },
        {
            title:'Tailwind',
            description:'CSS',
            logo:'src/assets/tailwind-css.256x154.png'
        },
        {
            title:'DSA',
            description:'Coding',
            logo:'src/assets/data-structure.png'
        },
        {
            title:'Python',
            description:'Programming',
            logo:'src/assets/python.png'
        },
        {
            title:'Github',
            description:'Collabaration',
            logo:'src/assets/github.png'
        }

    ]
    return(
          <div className="lg:px-20 lg:mt-40 md:mt-32 md:px-10 px-4">
            <h1 className="md:text-4xl text-xl w-fit border-b-2 border-zinc-400 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-semibold">Skills/Tools I have worked on</h1>
          <div className="grid lg:grid-cols-6 lg:gap-5 my-7 md:grid-cols-4 md:gap-2 grid-cols-2 gap-2">
            {
                skills.map((skill)=>{
                    return(
                        <SkillComp skill={skill}></SkillComp>
                    )
                })
            }
          </div>
          </div>
    )
}

function SkillComp({skill}){
   return(
    <span className="flex gap-2 items-center border-2 border-zinc-300 p-2 rounded-md">
        <div className=" border-zinc-600  border-4"><img src={skill.logo} alt="js-image" className="lg:w-7 lg:h-7 w-5 h-5" /></div>
        <div className="skill-text">
            <p className="lg:text-xl md:text-sm">{skill.title}</p>
            <p className="text-xs">{skill.description}</p>
        </div>
    </span>
   )
}

export default Skills;