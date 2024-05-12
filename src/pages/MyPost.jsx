import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const PostedAssign = () => {
    const [items, setItems] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/posted/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [user])

    const handleDelete = (_id, email) => {
        console.log(_id, email);
        if (email !== user.email) {
            return toast.error("Action Not Permitted")
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/all-assignment/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const restItems = items.filter(item => item._id !== _id)
                            setItems(restItems)
                            console.log(data)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Assignment has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto lg:w-4/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-rale lg:text-lg">
                            <th></th>
                            <th>Title</th>
                            <th>Subject</th>
                            <th>Difficulty</th>
                            <th>Mark</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, idx) => <tr key={item._id} className="hover">
                                <th>{idx + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.subject}</td>
                                <td>{item.difficulty}</td>
                                <td>{item.mark}</td>
                                <td>{new Date(item.due_date).toLocaleDateString()}</td>
                                <td>
                                    <Link className="btn bg-primary text-white border-2 border-primary 
                        hover:border-primary hover:bg-transparent hover:text-primary" to={`/update-assign/${item._id}`}>
                                        <FiEdit2 />
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id, item.a_creator.email)} className="btn bg-[#ff494a] text-white border-2 border-[#ff494a] 
                        hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]">
                                        <RiDeleteBin7Line />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostedAssign;