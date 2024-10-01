
function Footer(){
  return(
    <div className="max-md:mx-3 mt-20 lg:text-3xl md:text-2xl lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-6 gap-10 md: items-center justify-around lg:p-14 py-10 border-2 border-b-0 border-zinc-500 rounded-t-2xl bg-gradient-to-t from-sky-400/5 via-25% via-sky-400/20 to-85%">

        <div className="left  flex flex-col gap-4 justify-center items-center">
            <div className="flex lg:flex-col gap-5">
            <p>Lets Connect!</p>
            <div className="socials flex lg:gap-5 gap-3">
                <a href=""><img src="src/assets/twitter.png" alt='image' className="lg:w-10 w-7 hover:scale-110" /></a>
                <a href=""><img src="src/assets/linkedin.png" alt='image' className="lg:w-10 w-7 hover:scale-110" /></a>
                <a href=""><img src="src/assets/whatsapp.png" alt='image' className="lg:w-10 w-7 hover:scale-110" /></a>
                <a href=""><img src="src/assets/instagram.png" alt='image' className="lg:w-10 w-7 hover:scale-110" /></a>
            </div>
            </div>
            <p className="text-sm">&copy; made by Abhinav Ojha</p>
        </div>

        <div className="right flex flex-col  items-center gap-5">
            <p className="flex justify-center items-center gap-2">Drop your Message Below<span class="material-symbols-outlined">mail</span></p>

        <div className="form flex flex-col gap-4 lg:text-xl">
            <input type="email" placeholder="Enter Your Email" className="bg-zinc-600   placeholder-zinc-300 px-8 py-2 rounded-xl" />
            <textarea placeholder="Write your message/queries" className="bg-zinc-600   placeholder-zinc-300 px-8 py-2 rounded-xl" />
            <button className="flex items-center justify-center gap-2 border-2 rounded-lg hover:bg-zinc-800 hover:border-zinc-800 hover:justify-evenly">Send message<span className="material-symbols-outlined ">send</span>
            </button>
            
            </div>
        </div>
    </div>
  )
}

export default Footer;