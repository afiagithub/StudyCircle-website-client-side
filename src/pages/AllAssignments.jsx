import SingleAssignCard from "../components/SingleAssignCard";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const AllAssignments = () => {
    const [items, setItems] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/all-assignment`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItems(data)
            })
    }, [])
    const handleDelete = (_id, email) => {
        // console.log(_id, email);
        if(email !== user.email){
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
        <div className="px-5 lg:px-12 py-4">
            <h1 className="text-center text-4xl font-bold font-sans mb-8 mt-4 lg:mt-12">All assignments</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                {
                    items.map(a => <SingleAssignCard key={a._id} a={a} handleDelete={handleDelete}></SingleAssignCard>)
                }
            </div>
        </div>
    );
};

export default AllAssignments;