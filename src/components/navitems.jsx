import { useRef } from "react";

const Navitems=({navOpen})=>
{
    const lastActiveLink=useRef();
    
    const items=[
        {
            label:'Home',
            link:'#home',
            className:'nav-link active',
            ref:lastActiveLink

        },
        {
            label:'About',
            link:'#about',
            className:'nav-link',
            ref:null
        },
        {
            label:'Skills',
            link:'#skill',
            className:'nav-link',
            ref:null
        },
        {
            label:'Projects',
            link:'#project',
            className:'nav-link',
            ref:null
        },
        {
            label:'Contact',
            link:'#contact',
            className:'nav-link md:hidden',
            ref:null
        },

    ]
     
    //for changing active reference once different button clicked
    const activeCurrentLink=((event)=>{
       lastActiveLink.current.classList.remove('active');
       event.target.classList.add('active')
       lastActiveLink.current=event.target
    })

  return(
    <nav className={'navitems '+(navOpen?'active':'')}>
        {
            items.map((e)=>{
                return(
                    <ItemComp item={e} activeCurrentLink={activeCurrentLink}></ItemComp>
                )
            })
        }
    </nav>
  )
}

function ItemComp({item,activeCurrentLink})
{
  return(
     <a href={item.link} className={item.className} ref={item.ref} onClick={()=>{
        alert('ok')
     }}>{item.label}</a>
  )
}


export default Navitems;