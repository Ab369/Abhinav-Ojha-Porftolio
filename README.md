## Table of contents
- [Table of contents](#table-of-contents)
- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview
This is my personal portfolio site fully responsive across all devices.


### Links
Live link : [Click here](https://abhinav-ojha-portfolio.vercel.app/)

## My process
- Made different React components and added them to main folder

### Built with

- ReactJS
- TailwindCSS
- Mobile-first workflow


### What I learned
Throughout this project i learned a number of new concepts
- using conditional classname by using state variable
   ```<div className={"md:h-20 absolute top-4 lg:w-11/12 md:w-full left-0 right-0 mx-auto h-14"+(navBlur==1?' blur-bar':'')}></div>```
- use of window object for managing navbar toggle
  ```useEffect(()=>{
    if(window.innerWidth<450)
    {
      setNavOpen(false);
    }
    },[])```
- adding infinite horizontal marquee by extending animate class in tailwind config file 
- Adding tilt-card effect using framer motion
- Creating glassmorphism effect on navbar using tailwind CSS
  ```.blur-bar{
  @apply isolate aspect-video w-96 rounded-xl bg-zinc-50/10 shadow-lg ring-1 ring-zinc-50/5 backdrop-blur-lg

   }```
  
## Author

- Linkedin - [https://www.linkedin.com/in/9abhinav/](https://www.linkedin.com/in/9abhinav/)
- Twitter - [https://twitter.com/Abhinav43358626](https://twitter.com/Abhinav43358626)


