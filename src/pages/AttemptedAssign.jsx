import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AttemptedAssign = () => {
    const [items, setItems] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/attempted/${user.email}`)
        .then(res => {
            setItems(res.data)
        })
        // fetch(`http://localhost:5000/attempted/${user.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setItems(data)
        //     })
    }, [user])
    
    return (
        <div>
            <div className="overflow-x-auto lg:w-4/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-rale lg:text-lg">
                            <th></th>
                            {/* <th>Submission</th> */}
                            <th>Title</th>
                            <th>Status</th>
                            <th>Total Mark</th>
                            <th>Obtained Mark</th>
                            <th>Due Date</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, idx) => <tr key={item._id} className="hover">
                                <th>{idx + 1}</th>
                                {/* <td><iframe src={item.assignment_file} className="w-60"></iframe></td> */}
                                <td>{item.assign_title}</td>
                                <td>{item.status}</td>
                                <td>{item.total_mark}</td>
                                <td>{item.got_mark}</td>                                
                                <td>{new Date(item.due_date).toLocaleDateString()}</td>
                                <td>{item.feedback}</td>                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttemptedAssign;