import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#874CCC] text-[#874CCC]"
            : "border-2 border-transparent "} to="/">Home</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#874CCC] text-[#874CCC]"
            : "border-2 border-transparent"} to="/about">About</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#874CCC] text-[#874CCC]"
            : "border-2 border-transparent"} to="/assignment">Assignments</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 px-5 lg:px-12 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-sans text-[#A91D3A]">StudyCircle</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex flex-row gap-5">
                    <NavLink className="btn bg-[#A91D3A] text-white text-lg border-2 border-[#A91D3A] 
                        hover:border-[#A91D3A] hover:bg-transparent hover:text-[#A91D3A]" to="/login">Login</NavLink>
                    <NavLink className="btn bg-[#874CCC] text-white text-lg border-2 border-[#874CCC] 
                        hover:border-[#874CCC] hover:bg-transparent hover:text-[#874CCC]" to="/register">Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;