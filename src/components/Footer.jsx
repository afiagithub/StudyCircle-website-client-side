import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";

const Footer = () => {
    return (
        <footer className="bg-base-200 mt-8 md:mt-10 lg:mt-16 py-5 md:py-8 lg:py-10">
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <a href="#" className="text-[#A91D3A] font-bold text-2xl">
                                StudyCircle
                            </a>

                            <p className="max-w-sm mt-2 text-gray-500 ">
                                Connect and collaborate with peers for effective group studying.
                            </p>

                            <div className="flex mt-6 -mx-2 text-xl gap-5">
                                <a href="/" data-tooltip-id="fb-page" data-tooltip-content="https://www.facebook.com/studycircle">
                                    <FaFacebookF />
                                </a>
                                <Tooltip id="fb-page" place="top"/>
                                <a data-tooltip-id="twitter-page" data-tooltip-content="https://www.twitter.com/studycircle"
                                    data-tooltip-place="bottom">
                                    <FaTwitter />
                                </a>
                                <Tooltip id="twitter-page" />
                                <a data-tooltip-id="git-page" data-tooltip-content="https://www.github.com/studycircle"
                                    data-tooltip-place="bottom">
                                    <FaGithub />
                                </a>
                                <Tooltip id="git-page" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <h3 className="text-secondary uppercase font-bold">Pages</h3>
                                <a href="#" className="block mt-2 text-sm text-secondary  hover:underline">About Us</a>
                                <a href="#" className="block mt-2 text-sm text-secondary  hover:underline">Assignments</a>
                                <a href="#" className="block mt-2 text-sm text-secondary  hover:underline">Attempted Work</a>
                                <a href="#" className="block mt-2 text-sm text-secondary  hover:underline">Pending Work</a>
                            </div>

                            <div>
                                <h3 className="text-secondary uppercase font-bold">Company</h3>
                                <a href="#" className="block mt-2 text-sm text-secondary  hover:underline">Terms of use</a>
                                <a href="#" className="block mt-2 text-sm text-secondary  hover:underline">Privacy policy</a>
                                <a href="#" className="block mt-2 text-sm text-secondary  hover:underline">Cookie policy</a>
                            </div>

                            <div>
                                <h3 className="text-secondary uppercase font-bold">Contact</h3>
                                <span className="block mt-2 text-sm text-secondary  hover:underline">+1 526 654 8965</span>
                                <span className="block mt-2 text-sm text-secondary  hover:underline">studycircle@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none" />

                <div>
                    <p className="text-center text-gray-500 ">© StudyCircle 2024 - All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;