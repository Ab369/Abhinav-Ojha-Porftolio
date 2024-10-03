import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import emailjs from '@emailjs/browser';

import React, { useRef } from 'react';

function Footer(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_60lg6ol','template_q6gvcwy', form.current, {
          publicKey:'i2JrmKDSR_LrRsBn9',
        })
        .then(
          () => {
            alert('SEND SUCCESSFULLY');
          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );
    };

  return(
    <div id='contact' className="max-md:mx-3 mt-20 lg:text-3xl md:text-2xl lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-6 gap-10 md: items-center justify-around lg:p-14 py-10 border-2 border-b-0 border-zinc-500 rounded-t-2xl bg-gradient-to-t from-sky-400/5 via-25% via-sky-400/20 to-85%">

        <div className="left  flex flex-col gap-4 justify-center items-center">
            <div className="flex lg:flex-col gap-5">
            <p>Lets Connect!</p>
            <div className="socials flex lg:gap-5 gap-3">
                <a href="https://x.com/Abhinav43358626" target='_blank'><img src={twitter} alt='image' className="lg:w-10 w-7 hover:scale-110" /></a>
                <a href="https://www.linkedin.com/in/9abhinav/" target='_blank'><img src={linkedin} alt='image' className="lg:w-10 w-7 hover:scale-110" /></a>
                <a href="https://wa.me/6387347895" target='_blank'><img src={whatsapp} alt='image' className="lg:w-10 w-7 hover:scale-110" /></a>
            </div>
            </div>
            <p className="text-sm">&copy; made by Abhinav Ojha</p>
        </div>

        <div className="right flex flex-col  items-center gap-5">
            <p className="flex justify-center items-center gap-2">Drop your Message Below<span class="material-symbols-outlined">mail</span></p>

        <form ref={form} onSubmit={sendEmail} className="form flex flex-col gap-4 lg:text-xl">

            <input type="email"  name="user_name" placeholder="Enter Your Email" className="bg-zinc-600   placeholder-zinc-300 px-8 py-2 rounded-xl" />

            <textarea name="message"  placeholder="Write your message/queries" className="bg-zinc-600   placeholder-zinc-300 px-8 py-2 rounded-xl" />

            <button type='submit' className="flex items-center justify-center gap-2 border-2 rounded-lg hover:bg-zinc-800 hover:border-zinc-800 hover:justify-evenly">
                Send<span className="material-symbols-outlined ">send</span>
            </button>
            
            </form>
        </div>
    </div>
  )
}

export default Footer;