import { useRef } from "react"


const Header = () => {

    const ref = useRef(null)

    const handleScroll = () => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className=" bg-gray-950 text-white list-none p-4 flex items-center px-10 justify-between">
            <div>
                <li className=" text-3xl"> Portfolio</li>
            </div>

            <div className=" flex space-x-7 items-center ">
                <li onClick={handleScroll} className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> Home</li>
                <li className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> About Me</li>
                <li className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> Skills</li>
                <li className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> Projects</li>
                <li className=" hover:text-cyan-500 cursor-pointer transition ease-in-out duration-200"> Contect</li>
            </div>
        </div>
    )
}

export default Header