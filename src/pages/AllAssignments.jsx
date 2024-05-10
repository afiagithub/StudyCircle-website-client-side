import { useLoaderData } from "react-router-dom";
import SingleAssignCard from "../components/SingleAssignCard";


const AllAssignments = () => {
    const assignments = useLoaderData()
    return (
        <div className="px-5 lg:px-12 py-4">
            <h1 className="text-center text-4xl font-bold font-sans mb-10">All assignments</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    assignments.map(a => <SingleAssignCard key={a._id} a={a}></SingleAssignCard>)
                }
            </div>
        </div>
    );
};

export default AllAssignments;