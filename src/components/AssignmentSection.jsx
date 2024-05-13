import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import SingleAssignCard from "./SingleAssignCard";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const AssignmentSection = () => {
    const [items, setItems] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/all-assignment`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItems(data)
            })
    }, [])

    const handleDelete = (_id, email) => {
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
        <div className="px-8 lg:mt-20">
            <h1 className="text-center text-4xl font-bold font-sans mt-10 mb-6">Assignments</h1>
            <p className="text-center w-5/6 lg:w-3/5 mx-auto">Here, memebers can access, complete, and
                submit assignments tailored to their subjects of interest. Our platform facilitates seamless interaction among students</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mt-10">
                {
                    items.slice(0, 3).map(a => <SingleAssignCard key={a._id} a={a} handleDelete={handleDelete}></SingleAssignCard>)
                }
            </div>
            <div className="text-center mb-6 mt-10">
                <Link to="/assignment" className="btn bg-primary text-white text-lg border-2 border-primary 
                hover:border-primary hover:bg-transparent hover:text-primary px-10">View More</Link>
            </div>
        </div>
    );
};

export default AssignmentSection;