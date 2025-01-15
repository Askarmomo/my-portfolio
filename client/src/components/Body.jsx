import { useEffect, useRef, useState } from 'react'
import img from '../../public/images/Askar.jpg'
import About from './About'
import Typed from "typed.js"
import Skill from './Skill'
import Projects from './Projects'
import Contect from './Contect'
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion"

import pdf from "/public/images/Resume of Asakr.pdf"

const Body = () => {

    const typedElement = useRef(null)
    const typedInstance = useRef(null)

    useEffect(() => {

        typedInstance.current = new Typed(typedElement.current, {
            strings: ["MERN Stack Developer", "Full Stack Developer"],
            typeSpeed: 70,
            backSpeed: 30,
            fadeOut: true,
            loop: true
        });

        return () => {
            typedInstance.current.destroy()
        }
    }, [])

    const [show, setShow] = useState(true)

    return (

        <div className='bg-gray-950'>
            {/* hearders */}
            <div className=" sticky z-50 top-0 bg-gray-950 text-white list-none p-4 flex items-center px-10 justify-between">
                <div>
                    <li className=" text-3xl"> Portfolio</li>
                </div>

                <div className=' sm:hidden'>
                    {
                        show ?
                            <button onClick={() => setShow(!show)}>
                                <svg className=' stroke-slate-200' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth="2" d="M5 6h14M5 12h14M5 18h14"></path></svg>
                            </button>
                            :
                            <button onClick={() => setShow(!show)}>
                                <svg className=' fill-slate-200' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path d="m8.4 16.308l3.6-3.6l3.6 3.6l.708-.708l-3.6-3.6l3.6-3.6l-.708-.708l-3.6 3.6l-3.6-3.6l-.708.708l3.6 3.6l-3.6 3.6zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
                            </button>
                    }
                </div>

                <div className=" sm:flex space-x-7 hidden items-center ">
                    <Link to='body' smooth={true} duration={500}>
                        <li className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> Home</li>
                    </Link>
                    <Link to='aboutme' smooth={true} duration={1000}>
                        <li className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> About Me</li>
                    </Link>
                    <Link to='skills' smooth={true} duration={1000}>
                        <li className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> Skills</li>
                    </Link>
                    <Link to='projects' smooth={true} duration={1000}>
                        <li className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> Projects</li>
                    </Link>
                    <Link to='contect' smooth={true} duration={1000} >
                        <li className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> Contect</li>
                    </Link>
                </div>
            </div>

            <div className={` absolute mt-[70px] z-50 ${!show ? 'transition duration-200 ease-in-out' : "hidden"}  top-0  right-0 bottom-0 h-full bg-slate-700`}>
                <div className=' list-none text-slate-300 text-center'>
                    <Link to='body' smooth={true} duration={500}>
                        <li className=" hover:text-cyan-500 px-[110px] py-5 border-b border-b-slate-500 cursor-pointer transition ease-in-out duration-200"> Home</li>
                    </Link>
                    <Link to='aboutme' smooth={true} duration={1000}>
                        <li className=" hover:text-cyan-500  px-[110px] py-5 border-b border-b-slate-500 cursor-pointer transition ease-in-out duration-200"> About Me</li>
                    </Link>
                    <Link to='skills' smooth={true} duration={1000}>
                        <li className=" hover:text-cyan-500  px-[110px] py-5 border-b border-b-slate-500 cursor-pointer transition ease-in-out duration-200"> Skills</li>
                    </Link>
                    <Link to='projects' smooth={true} duration={1000}>
                        <li className=" hover:text-cyan-500  px-[110px] py-5 border-b border-b-slate-500 cursor-pointer transition ease-in-out duration-200"> Projects</li>
                    </Link>
                    <Link to='contect' smooth={true} duration={1000} >
                        <li className=" hover:text-cyan-500  px-[110px] py-5 border-b border-b-slate-500 cursor-pointer transition ease-in-out duration-200"> Contect</li>
                    </Link>
                </div>
            </div>

            <div className=" min-h-screen px-10 bg-slate-900 text-white pt-4">
                {/* body */}
                <Element name='body'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className=" sm:flex mb-10 sm:justify-between sm:items-center">

                        <div className=' sm:pl-20 pb-10 pt-20 space-y-10'>
                            <div>
                                <h4 className=" font-semibold text-xl">Hello, I&rsquo;ts Me</h4>
                                <h2 className="font-semibold text-4xl">Mohammed Askar</h2>
                                <h4 className="font-semibold text-xl">And I Am A <span ref={typedElement} className=' text-cyan-500'></span></h4>
                            </div>
                            <div className=' w-[450px]'>
                                <span className=' text-slate-400'>
                                    I started my developer journey on December 28, 2023. Now, I have 1 year of experience in MERN stack development.
                                    I am very interested in this field and was inspired by my friends.</span>
                            </div>
                            <div> <a href={pdf} download={pdf} className=' font-semibold bg-cyan-600 hover:bg-cyan-700 transition duration-200 ease-in-out rounded-2xl px-8 py-1.5'>Download Resume</a></div>
                        </div>

                        <div>
                            <img className=' shadow-xl shadow-cyan-900 hover:shadow-cyan-800 cursor-pointer transition ease-in-out duration-200 rounded-l-xl border-l-cyan-500 border-l-2 border-b-cyan-500 border-b-2 border-t-cyan-500 border-t-2 sm:h-[600px] sm:w-[700px] object-cover' src={img} alt="Mohammed Askar" />
                        </div>
                    </motion.div>
                </Element>
                {/* about me */}
                <Element name='aboutme'>
                    <About />
                </Element>

                <Element name='skills'>
                    <Skill />
                </Element>
                <Element name='projects'>
                    <Projects />
                </Element>
            </div>
            <Element name='contect'>
                <Contect />
            </Element>
        </div>
    )
}

export default Body