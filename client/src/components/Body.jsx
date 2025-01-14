import { useEffect, useRef } from 'react'
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

    return (

        <div>
            {/* hearders */}
            <div className=" bg-gray-950 text-white list-none p-4 flex items-center px-10 justify-between">
                <div>
                    <li className=" text-3xl"> Portfolio</li>
                </div>

                <div className=" flex space-x-7 items-center ">
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

            <div className=" min-h-screen bg-slate-900 text-white pt-4">
                {/* body */}
                <Element name='body'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className=" flex mb-10 justify-between items-center">

                        <div className=' pl-20 space-y-10'>
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
                            <img className=' shadow-xl shadow-cyan-900 hover:shadow-cyan-800 cursor-pointer transition ease-in-out duration-200 rounded-l-xl border-l-cyan-500 border-l-2 border-b-cyan-500 border-b-2 border-t-cyan-500 border-t-2 h-[600px] w-[700px] object-cover' src={img} alt="Mohammed Askar" />
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
                <Element name='contect'>
                    <Contect />
                </Element>
            </div>
        </div>
    )
}

export default Body