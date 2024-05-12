import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const AssignmentSection = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/all-assignment`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItems(data)
            })
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold font-sans mt-10 mb-5">Assignments</h1>
            <p className="text-center w-3/5 mx-auto">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Id, molestias?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mt-10">
                {
                    items.slice(0, 3).map(a => <div key={a._id} className="card w-96 h-full bg-base-100 shadow-xl">
                        <figure><img className="h-72" src={a.image} alt="Shoes" /></figure>
                        <div className="w-full p-5">
                            <div className="card-actions justify-start mb-4">
                                <div className="badge bg-[#A91D3A] font-bold text-white py-3">{a.subject}</div>
                                <div className="badge bg-[#874CCC] font-bold text-white py-3">{a.difficulty}</div>
                            </div>
                            <div className="flex-grow h-20">
                                <h2 className="card-title">
                                    {a.title}
                                </h2>
                                {/* <p title={description} className="text-sm mt-3 text-gray-600">{short_desc}...</p> */}
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5 w-full">
                                <p className="text-lg font-bold text-[#A91D3A]">
                                    <span className="font-normal text-base text-black">Marks:</span> {a.mark}</p>
                                <p className="text-lg font-bold text-[#A91D3A]">
                                    <span className="font-normal text-base text-black">Due:</span> {new Date(a.due_date).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <NavLink to={`/assignment/${a._id}`} className="btn bg-[#A91D3A] text-white text-lg border-2 border-[#A91D3A] 
                    hover:border-[#A91D3A] hover:bg-transparent hover:text-[#A91D3A]">View Details</NavLink>
                    </div>)
                }
            </div>
            <div className="text-center my-6">
                <Link to="/assignment" className="btn bg-[#874CCC] text-white text-lg border-2 border-[#874CCC] 
                hover:border-[#874CCC] hover:bg-transparent hover:text-[#874CCC]">View More</Link>
            </div>
        </div>
    );
};

export default AssignmentSection;