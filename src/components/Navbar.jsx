import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [theme, setTheme] = useState(['light']);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }
    const { user, logOut } = useAuth();
    const handleSigOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged Out")
            })
    }

    const links = <>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-primary text-primary"
            : "border-2 border-transparent "} to="/">Home</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-primary text-primary"
            : "border-2 border-transparent"} to="/about">About</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-primary text-primary"
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
                        {
                            user ? <>
                                <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-primary text-primary"
                                    : "border-2 border-transparent"} to="/add-assign">Create Assignments</NavLink></li>
                                <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-primary text-primary"
                                    : "border-2 border-transparent"} to="/pending-assign">Pending Assignments</NavLink></li></>
                                : ""
                        }
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-2xl text-sans text-[#A91D3A] font-bold">
                    <span className="text-primary">Study</span>Circle</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                    {
                        user ? <>
                            <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-primary text-primary"
                                : "border-2 border-transparent"} to="/add-assign">Create Assignments</NavLink></li>
                            <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-primary text-primary"
                                : "border-2 border-transparent"} to="/pending-assign">Pending Assignments</NavLink></li></>
                            : ""
                    }
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
                                <li className="font-rale font-bold text-sm py-3">Hello,
                                    <span className="text-rose-500">{user.displayName}</span>
                                </li>
                                <li><NavLink to='/posted-assignment'>My Posted Assignments</NavLink></li>
                                <li><NavLink to="/attempted-assign">Attempted Assignments</NavLink></li>
                                <li><NavLink onClick={handleSigOut} to="/">Logout</NavLink></li>
                            </ul>
                        </div>

                    </div> :
                        <div className="flex flex-row gap-4">
                            <NavLink className="btn bg-[#A91D3A] text-white border-2 border-[#A91D3A] 
                            hover:border-[#A91D3A] hover:bg-transparent hover:text-[#A91D3A]" to="/login">Login</NavLink>
                            <NavLink className="btn bg-primary text-white border-2 border-primary 
                            hover:border-primary hover:bg-transparent hover:text-primary" to="/register">Register</NavLink>
                        </div>

                }
                <label className="cursor-pointer grid place-items-center ml-3">
                    <input onClick={handleToggle} type="checkbox" value="dark" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;