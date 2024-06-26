import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const PostedAssign = () => {
    const [items, setItems] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/posted/${user.email}`)
            .then(res => {
                setItems(res.data)
            })
    }, [user])

    const handleDelete = (_id, email) => {
        // console.log(_id, email);
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

                fetch(`https://studycircle-server.vercel.app/all-assignment/${_id}`, {
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
        <div className="py-5">
            <Helmet>
                <title>StudyCircle | Posted Work</title>
            </Helmet>
            <div className="overflow-x-auto lg:w-4/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-rale lg:text-lg text-primary">
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
                                <td className={item.difficulty === 'Easy' ? 'badge mt-6 ml-5 text-base-100 bg-green-600'
                                    : item.difficulty === 'Medium' ? 'badge mt-6 ml-5 text-base-100 bg-primary'
                                        : 'badge mt-6 ml-5 text-base-100 bg-red-600'}>
                                    {item.difficulty}
                                </td>
                                <td>{item.mark}</td>
                                <td>{new Date(item.due_date).toLocaleDateString()}</td>
                                <td>
                                    <Link className="btn btn-square bg-primary text-white border-2 border-primary 
                        hover:border-primary hover:bg-transparent hover:text-primary text-xl"
                                        to={`/update-assign/${item._id}`}>
                                        <FiEdit2 />
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id, item.a_creator.email)}
                                        className="btn btn-square bg-[#ff494a] text-white border-2 border-[#ff494a] 
                                    hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a] text-xl">
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