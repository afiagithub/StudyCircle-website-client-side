import { FiEdit2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const SingleAssignCard = ({ a, handleDelete }) => {
    const {_id, title, image, subject, marks, difficulty, due_date, description, a_creator } = a;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-72" src={image} alt="Shoes" /></figure>
            <div className="card-body p-6 flex flex-row justify-between gap-2">
                <div>
                    <div className="card-actions justify-start mb-4">
                        <div className="badge bg-[#A91D3A] font-bold text-white py-3">{subject}</div>
                        <div className="badge bg-[#874CCC] font-bold text-white py-3">{difficulty}</div>
                    </div>
                    <div className="flex-grow h-[70%]">
                        <h2 className="card-title">
                            {title}
                        </h2>
                        <p title={description} className="text-sm mt-3 text-gray-600">{description.substring(0, 50)}...</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-lg font-bold text-[#A91D3A]">
                            <span className="font-normal text-base text-black">Marks:</span> {marks}</p>
                        <p className="text-lg font-bold text-[#A91D3A]">
                            <span className="font-normal text-base text-black">Due:</span> {new Date(due_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <button onClick={() => handleDelete(_id, a_creator.email)} className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <button className="btn btn-square btn-sm bg-[#874CCC] text-white">
                        <FiEdit2 />
                    </button>
                </div>
            </div>
            <NavLink to={`/assignment/${_id}`} className="btn bg-[#A91D3A] text-white text-lg border-2 border-[#A91D3A] 
            hover:border-[#A91D3A] hover:bg-transparent hover:text-[#A91D3A]">View Details</NavLink>
        </div>
    );
};

export default SingleAssignCard;