import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSigOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged Out")
            })
    }

    const links = <>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#874CCC] text-[#874CCC]"
            : "border-2 border-transparent "} to="/">Home</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#874CCC] text-[#874CCC]"
            : "border-2 border-transparent"} to="/about">About</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#874CCC] text-[#874CCC]"
            : "border-2 border-transparent"} to="/assignment">Assignments</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#874CCC] text-[#874CCC]"
            : "border-2 border-transparent"} to="/add-assign">Create Assignments</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#874CCC] text-[#874CCC]"
            : "border-2 border-transparent"} to="/pending-assign">Pending Assignments</NavLink></li>

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
                <a className="btn btn-ghost text-2xl text-sans text-[#A91D3A] font-bold">
                    <span className="text-[#874CCC]">Study</span>Circle</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex flex-row gap-3">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component"
                                        src={user.photoURL || 'https://i.ibb.co/QnTrVRz/icon.jpg'} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to='/posted-assignment'>My Posted Assignments</NavLink></li>
                                <li><NavLink to="/attempted-assign">Attempted Assignments</NavLink></li>
                                <li><NavLink onClick={handleSigOut} to="/">Logout</NavLink></li>
                            </ul>
                        </div>

                    </div> :
                        <div className="flex flex-row gap-5">
                            <NavLink className="btn bg-[#A91D3A] text-white text-lg border-2 border-[#A91D3A] 
                            hover:border-[#A91D3A] hover:bg-transparent hover:text-[#A91D3A]" to="/login">Login</NavLink>
                            <NavLink className="btn bg-[#874CCC] text-white text-lg border-2 border-[#874CCC] 
                            hover:border-[#874CCC] hover:bg-transparent hover:text-[#874CCC]" to="/register">Register</NavLink>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;