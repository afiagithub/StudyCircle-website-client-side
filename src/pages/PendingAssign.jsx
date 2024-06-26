import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const PendingAssign = () => {
    const [items, setItems] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/pending/${user.email}`)
            .then(res => {
                const restItems = res.data.filter(d => d.status === 'Pending');
                // console.log(restItems)
                setItems(restItems)
            })
    }, [user])

    return (
        <div className="py-5">
            <Helmet>
                <title>StudyCircle | Pending Work</title>
            </Helmet>
            <div className="overflow-x-auto lg:w-4/5 mx-auto">
                <table className="table">                    
                    <thead>
                        <tr className="font-rale lg:text-lg text-primary">
                            <th></th>
                            <th>Title</th>
                            <th>Name</th>
                            <th>Total Mark</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, idx) => <tr key={item._id} className="hover">
                                <th>{idx + 1}</th>
                                <td>{item.assign_title}</td>
                                <td>{item.submitter.name}</td>
                                <td>{item.total_mark}</td>
                                <td>{new Date(item.due_date).toLocaleDateString()}</td>
                                <td>
                                    <Link className="btn bg-[#A91D3A] text-white border-2 border-[#A91D3A] 
                        hover:border-[#A91D3A] hover:bg-transparent hover:text-[#A91D3A]" to={`/mark-assign/${item._id}`}>
                                        Give Mark
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssign;