
import img from "/public/images/6893942.jpg"


const Projects = () => {
    return (
        <div data-aos="zoom-in-up">
            <h1 className=" font-bold text-2xl text-center">Projects</h1>

            <div className=" sm:flex space-y-10 sm:space-y-0 sm:items-center sm:justify-center sm:space-x-40 pt-10 pb-10">
                <div className=" border border-slate-600 sm:max-w-sm pb-4">
                    <img className=" h-[250px] w-[400px] object-cover" src={img} alt="" />
                    <div className="px-4 flex items-center space-x-4 pb-4 pt-4">
                        <h3 className=" text-2xl font-semibold capitalize">Book shop</h3>
                        <span className=" text-xs bg-cyan-600 p-0.5 rounded-xl px-5 font-semibold">  MERN</span>
                    </div>
                    <p className=" text-slate-300 px-4 capitalize">
                        I Created a book order website you can order, delete order,and i included stripe payment system in demo it is have admin dashboard
                    </p>
                    <p className=" text-rose-500 font-semibold text-sm px-4 pt-2">NOTE :- Sometimes, the website may take a long time to load due to the free tier of my hosting service.</p>
                    <div className=" pt-5 flex px-2 space-x-2">
                        <a href="https://e-commerce-31ey.onrender.com/" className=" text-center p-2 rounded bg-cyan-600 hover:bg-cyan-700 transition ease-in-out duration-200 w-full">Website</a>
                        <a href="https://github.com/Askarmomo/e-commerce" className=" text-center p-2 rounded bg-pink-600 hover:bg-pink-700 transition ease-in-out duration-200 w-full">Code</a>
                    </div>
                </div>
                <div className=" border border-slate-600 sm:max-w-sm pb-4">
                    <img className=" h-[250px] w-[400px] object-cover" src={"https://www.mckinsey.com/~/media/mckinsey/featured%20insights/mckinsey%20explainers/what%20is%20social%20media/what%20is%20social%20media__1407795145_hero_1536x864.jpg?cq=50&mw=767&cpy=Center"} alt="" />
                    <div className="px-4 flex items-center space-x-4 pb-4 pt-4">
                        <h3 className=" text-2xl font-semibold capitalize">Social Media</h3>
                        <span className=" text-xs bg-cyan-600 p-0.5 rounded-xl px-5 font-semibold">  MERN</span>
                    </div>
                    <p className=" text-slate-300 px-4 capitalize">
                        I Created a social media clone website you can create,delete posts update profile login singup with jwt token

                    </p>
                    <p className=" text-rose-500 font-semibold text-sm px-4 pt-2">NOTE :- Sometimes, the website may take a long time to load due to the free tier of my hosting service.</p>
                    <div className=" pt-5 flex px-2 space-x-2">
                        <a href="https://my-socialmeadia-app-1.onrender.com/" className=" text-center p-2 rounded bg-cyan-600 hover:bg-cyan-700 transition ease-in-out duration-200 w-full">Website</a>
                        <a href="https://github.com/Askarmomo/my-socialMeadia-app-1" className=" text-center p-2 rounded bg-pink-600 hover:bg-pink-700 transition ease-in-out duration-200 w-full">Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects