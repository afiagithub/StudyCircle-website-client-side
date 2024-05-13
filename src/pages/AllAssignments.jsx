import SingleAssignCard from "../components/SingleAssignCard";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const AllAssignments = () => {
    const [items, setItems] = useState([]);
    const [filterVal, setFilterVal] = useState(0)
    const { user } = useAuth();

    const handleSort = (e) => {
        const criteria = e.target.value;
        setFilterVal(criteria)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/all-assignment`)
            .then(res => res.json())
            .then(data => {
                if (filterVal) {
                    const restItems = data.filter(d => d.difficulty === filterVal);
                    setItems(restItems)
                }
                else{
                    setItems(data)
                }                
            })
    }, [filterVal])

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
            <div className="text-center">
                <h1 className="text-center text-4xl font-bold font-sans mb-8 mt-4 lg:mt-12">All assignments</h1>
                <select onChange={handleSort} className="p-3 text-primary font-semibold border-2 border-primary 
                hover:text-primary hover:bg-transparent hover:border-primary rounded-lg mb-6">
                    <option selected disabled>Filter</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                {
                    items.map(a => <SingleAssignCard key={a._id} a={a} handleDelete={handleDelete}></SingleAssignCard>)
                }
            </div>
        </div>
    );
};

export default AllAssignments;