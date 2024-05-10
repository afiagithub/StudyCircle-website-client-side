import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const PostedAssign = () => {
    const [items, setItems] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/pending/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [user])
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
                                <td>{item.mark} days</td>
                                <td>{item.due_date}</td>
                                <td>
                                    <Link className="btn bg-primary text-white border-2 border-primary 
                        hover:border-primary hover:bg-transparent hover:text-primary" to={`/update/${item._id}`}>Update</Link>
                                </td>
                                <td>
                                    <button  className="btn bg-[#ff494a] text-white border-2 border-[#ff494a] 
                        hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]">Delete</button>
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