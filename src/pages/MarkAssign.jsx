import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MarkAssign = () => {
    const assignment = useLoaderData()
    console.log(assignment)
    const { _id, assign_id, assign_title, assignment_file, short_note, total_mark, due_date, creator_email,
        submitter } = assignment;
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const status = 'Completed';
        const got_mark = form.got_mark.value;
        const feedback = form.feedback.value;

        const updatedMark = {
            assign_id, assign_title, assignment_file, short_note, status, total_mark, got_mark, due_date, feedback,
            creator_email, submitter
        }

        console.log(updatedMark)


        fetch(`http://localhost:5000/submission/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedMark)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success",
                        text: "Updated Assignment Result",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className='flex flex-col max-w-2xl mx-auto p-6 rounded-md sm:p-10 mb-10'>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-[#A91D3A]">Mark Assignment</h1>
                <p className="text-sm dark:text-primary">Check the files and mark the assignment</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-5">
                    <div>
                        <input name='assignment_file' type="text" defaultValue={assignment_file} disabled
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div>
                        <textarea name="short_note" cols="30" rows="5" defaultValue={short_note} disabled
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50"></textarea>
                    </div>
                    <div>
                        <input name='got_mark' type="number" placeholder='Enter Obtained Mark' required
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div>
                        <textarea name="feedback" cols="30" rows="5" placeholder='Give Feedback'
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50"></textarea>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Mark Assignment"
                        className="w-full px-8 py-3 mt-3 bg-[#A91D3A] text-white text-lg font-semibold rounded-xl 
                            border-2 border-[#A91D3A] hover:border-[#A91D3A] hover:bg-transparent 
                            hover:text-[#A91D3A]" />
                </div>
            </form>
        </div>
    );
};

export default MarkAssign;