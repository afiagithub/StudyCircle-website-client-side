import { MdOutlineCreateNewFolder } from "react-icons/md";
import { CiSaveUp2 } from "react-icons/ci";
import { VscFeedback } from "react-icons/vsc";

const Feature = () => {
    return (
        <section className="mt-5 lg:mt-10">
            <div className="container flex flex-col p-6 w-4/5 mx-auto">
                <h2 className="py-4 text-4xl font-bold text-center">Our Features</h2>
                <div className="divide-y dark:divide-gray-300">
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full text-6xl text-[#A91D3A]">
                            <MdOutlineCreateNewFolder />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <h1 className="text-xl font-bold">Assignment Creation and Management</h1>
                            <span className="mt-4 text-secondary lg:w-4/5">
                                StudyCircle allows students to create assignments where they can define assignment details such as title, description, due date, and marking criteria.
                            </span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full 
                        text-6xl text-[#A91D3A]">
                            <CiSaveUp2 />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <h1 className="text-xl font-bold">Submission and Tracking</h1>
                            <span className="mt-4 text-secondary lg:w-4/5">
                                Students can conveniently submit their completed assignments
                                directly through the platform. StudyCircle provides a centralized hub where
                                all submissions are recorded and tracked, enabling easy monitoring of progress and
                                deadlines.
                            </span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full text-6xl text-[#A91D3A]">
                            <VscFeedback />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <h1 className="text-xl font-bold">Peer Evaluation and Feedback</h1>
                            <span className="mt-4 text-secondary lg:w-4/5">
                                One of the key features of StudyCircle is its peer evaluation system.
                                After submitting assignments, students have the opportunity to evaluate and provide
                                feedback on their peers' work.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;