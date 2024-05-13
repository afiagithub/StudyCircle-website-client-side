import { FiEdit2 } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import { RxCross2 } from "react-icons/rx";

const SingleAssignCard = ({ a, handleDelete }) => {
    const { user } = useAuth()
    const { _id, title, image, subject, mark, difficulty, due_date, description, a_creator } = a;
    // const short_desc = description.substring(0, 50)
    return (
        <div className="card w-96 bg-base-300 shadow-xl">
            <figure><img className="h-72" src={image} alt="Shoes" /></figure>
            <div className="card-body p-6 flex flex-row justify-between gap-2">
                <div className="w-full">
                    <div className="card-actions justify-start mb-4">
                        <div className="badge bg-[#A91D3A] font-bold text-white py-3">{subject}</div>
                        <div className="badge badge-outline text-primary font-bold py-3">Difficulty: {difficulty}</div>
                    </div>
                    <div className="flex-grow h-14">
                        <h2 className="card-title">{title}</h2>
                    </div>
                    <p title={description} className="text-sm my-3 text-secondary">
                        {description.substring(0, 65)}...</p>
                    <div className="flex flex-row justify-between items-center gap-5 w-full">
                        <p className="text-lg font-bold text-[#A91D3A]">
                            <span className="text-base font-semibold text-primary">Marks:</span> {mark}</p>
                        <p className="text-lg font-bold text-[#A91D3A]">
                            <span className="font-semibold text-base text-primary">Due:</span> {new Date(due_date).toLocaleDateString()}</p>
                    </div>
                </div>
                {
                    user ? <div className="flex flex-col gap-5">
                        <button onClick={() => handleDelete(_id, a_creator.email)}
                            className="btn btn-square btn-sm bg-red-200 text-2xl text-red-700">
                            <RxCross2 />
                        </button>
                        <Link to={`/update-assign/${_id}`} className="btn btn-square btn-sm bg-primary text-white">
                            <FiEdit2 />
                        </Link>
                    </div> : ""
                }
            </div>
            <NavLink to={`/assignment/${_id}`} className="btn bg-[#A91D3A] text-white text-lg border-2 border-[#A91D3A] 
            hover:border-[#A91D3A] hover:bg-transparent hover:text-[#A91D3A]">View Details</NavLink>
        </div>
    );
};

SingleAssignCard.propTypes = {
    a: PropTypes.object,
    handleDelete: PropTypes.func,
    title: PropTypes.string,
    a_creator: PropTypes.obj,
    image: PropTypes.string,
    subject: PropTypes.string,
    mark: PropTypes.string,
    difficulty: PropTypes.string,
    due_date: PropTypes.string,
    description: PropTypes.string,
}

export default SingleAssignCard;