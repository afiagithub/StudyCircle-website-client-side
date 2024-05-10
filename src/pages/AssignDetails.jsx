import { useLoaderData } from "react-router-dom";


const AssignDetails = () => {
    const assignmentData = useLoaderData()
    const {title, thumbnail, subject, marks, difficulty, due_date, description } = assignmentData;
    return (
        <div className="hero-content flex-col lg:flex-row lg:justify-start lg:items-start gap-10">
            <div className="lg:w-1/2 mx-auto flex flex-col justify-center rounded-3xl">
                <img src={thumbnail} className="rounded-lg shadow-2xl w-full" />
            </div>
            <div className="lg:w-3/5">
                <h1 className="text-4xl font-bold font-play">{title}</h1>
                <div className="w-4/5 flex flex-row justify-between items-center">
                    <p className="text-lg pb-3 mt-3 mb-4 text-[#A91D3A]"><span className="text-primary font-bold">Subject: </span>
                        {subject}</p>
                    <p className="text-lg pb-3 mt-3 mb-4 text-[#A91D3A]"><span className="text-primary font-bold">Difficulty: </span>
                        {difficulty}</p>
                </div>
                <p className="py-3 px-2 font-bold w-full bg-[#A91D3A] text-white rounded-xl">Description</p>
                <p className="py-3 px-3"><span className="font-bold"></span> {description}...</p>

                <p className="py-3 px-2 font-bold w-full bg-[#A91D3A] text-white rounded-xl mt-8">Tour Details</p>
                <div className="details lg:w-3/5 my-6 flex lg:justify-between">
                    <div className="pages space-y-2 text-deep-purple font-semibold px-3">
                        <p>Due Date:</p>
                        <p>Marks:</p>

                    </div>
                    <div className="pages font-bold space-y-2">
                        <p>{new Date(due_date).toLocaleDateString()}</p>
                        <p>{marks}</p>
                    </div>
                </div>
                <button className="btn bg-[#874CCC] text-white text-lg border-2 border-[#874CCC] 
                hover:border-[#874CCC] hover:bg-transparent hover:text-[#874CCC]">Take Assignment</button>
            </div>
        </div>
    );
};

export default AssignDetails;