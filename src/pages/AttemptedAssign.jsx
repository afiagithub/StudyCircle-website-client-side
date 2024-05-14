import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AttemptedAssign = () => {
    const [items, setItems] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/attempted/${user.email}`)
            .then(res => {
                setItems(res.data)
            })
    }, [user])

    return (
        <div className="py-5">
            <Helmet>
                <title>StudyCircle | Attempted Work</title>
            </Helmet>
            <div className="overflow-x-auto lg:w-4/5 mx-auto">
                <table className="table">                    
                    <thead>
                        <tr className="font-rale lg:text-lg text-primary">
                            <th></th>
                            <th>Submission</th>
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
                                <td><iframe src={item.assignment_file} className="w-56"></iframe></td>
                                <td>{item.assign_title}</td>
                                <td className={item.status === 'Completed' ? 'badge mt-16 text-base-100 bg-green-600'
                                    : 'badge mt-16 text-base-100 bg-orange-600'}>
                                    {item.status}
                                </td>
                                <td>{item.total_mark}</td>
                                <td className="font-bold">{item.got_mark || 'Not Given'}</td>
                                <td>{new Date(item.due_date).toLocaleDateString()}</td>
                                <td>{item.feedback.substring(0, 20)}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttemptedAssign;