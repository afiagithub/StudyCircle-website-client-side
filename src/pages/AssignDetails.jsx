import { Link, useLoaderData } from "react-router-dom";


const AssignDetails = () => {
    const assignmentData = useLoaderData()
    const { _id, title, image, subject, mark, difficulty, due_date, description, a_creator } = assignmentData;
    return (
        // <div className="hero-content flex-col lg:flex-row lg:justify-start lg:items-start gap-10">
        //     <div className="lg:w-1/2 mx-auto flex flex-col justify-center rounded-3xl">
        //         <img src={image} className="rounded-lg shadow-2xl w-full" />
        //     </div>
        //     <div className="lg:w-3/5">
        //         <h1 className="text-4xl font-bold font-play">{title}</h1>
        //         <div className="w-4/5 flex flex-row justify-between items-center">
        //             <p className="text-lg pb-3 mt-3 mb-4 text-[#A91D3A]"><span className="text-primary font-bold">Subject: </span>
        //                 {subject}</p>
        //             <p className="text-lg pb-3 mt-3 mb-4 text-[#A91D3A]"><span className="text-primary font-bold">Difficulty: </span>
        //                 {difficulty}</p>
        //         </div>
        //         <p className="py-3 px-2 font-bold w-full bg-[#A91D3A] text-white rounded-xl">Description</p>
        //         <p className="py-3 px-3"><span className="font-bold"></span> {description}...</p>

        //         <p className="py-3 px-2 font-bold w-full bg-[#A91D3A] text-white rounded-xl mt-8">Tour Details</p>
        //         <div className="details lg:w-3/5 my-6 flex lg:justify-between">
        //             <div className="pages space-y-2 text-deep-purple font-semibold px-3">
        //                 <p>Due Date:</p>
        //                 <p>Marks:</p>

        //             </div>
        //             <div className="pages font-bold space-y-2">
        //                 <p>{new Date(due_date).toLocaleDateString()}</p>
        //                 <p>{mark}</p>
        //             </div>
        //         </div>
        //         <Link to={`/submit-assign/${_id}`} className="btn bg-primary text-white text-lg border-2 border-primary 
        //         hover:border-primary hover:bg-transparent hover:text-primary">Take Assignment</Link>
        //     </div>
        // </div>
        <div className="p-5 mx-auto sm:p-10 md:p-16">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                    <div className="space-y-2">
                        <a href="#" className="inline-block text-2xl font-semibold sm:text-3xl text-gray-800">
                            {title}</a>
                        <div className="flex flex-row gap-4 items-center">
                            <img className="w-10 h-10 rounded-full" src={a_creator.photo} alt="" />
                            <p className="text-sm dark:text-gray-600">By
                                <a rel="noopener noreferrer" href="#" className="hover:underline"> {a_creator.name}</a>
                            </p>
                        </div>
                    </div>
                    <div className="w-4/5 flex flex-row justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">Subject:
                            <span className="text-[#A91D3A]"> {subject}</span></p>
                        <p className="text-lg font-bold text-gray-800">Difficulty:
                            <span className="text-[#A91D3A]"> {difficulty}</span></p>
                    </div>
                    <div className="dark:text-gray-800">
                        <p>{description}</p>
                    </div>
                    <p className="py-3 px-2 font-bold w-full bg-[#A91D3A] text-white rounded-xl mt-8">Other Details</p>
                    <div className="details lg:w-3/5 my-6 flex lg:justify-between text-gray-800">
                        <div className="pages space-y-2 text-deep-purple font-semibold px-3">
                            <p>Due Date:</p>
                            <p>Marks:</p>

                        </div>
                        <div className="pages font-bold space-y-2">
                            <p>{new Date(due_date).toLocaleDateString()}</p>
                            <p>{mark}</p>
                        </div>
                    </div>
                    <Link to={`/submit-assign/${_id}`} className="btn bg-primary text-white text-lg border-2 border-primary 
                 hover:border-primary hover:bg-transparent hover:text-primary">Take Assignment</Link>
                </div>
            </div>
        </div>
    );
};

export default AssignDetails;