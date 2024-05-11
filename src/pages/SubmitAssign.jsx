import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const SubmitAssign = () => {
    const assignment = useLoaderData()
    const {_id, title, mark, due_date, a_creator} = assignment;
    const { user } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const assign_id = _id;
        const assign_title = title;
        const assignment_file = form.assignment_file.value;
        const short_note = form.short_note.value;
        const status = 'Pending';
        const total_mark = mark;
        const got_mark = '';
        const feedback = '';
        const creator_email = a_creator.email;
        const submitter = {
            email: user?.email,
            name: user?.displayName
        }

        const submissionData = {
            assign_id, assign_title, assignment_file, short_note, status, total_mark, got_mark, due_date, feedback, 
            creator_email, submitter}

        console.log(submissionData)


        fetch("http://localhost:5000/submission", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(submissionData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Submitted Assignment Successfully",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className='flex flex-col max-w-2xl mx-auto p-6 rounded-md sm:p-10 mb-10'>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-[#A91D3A]">Submit Assignment</h1>
                <p className="text-sm dark:text-[#874CCC]">Provide assignment file and other information below</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-5">
                    <div>
                        <input name='assignment_file' type="file" placeholder='Enter your assignment file here'
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div>
                        <textarea name="short_note" cols="30" rows="5" placeholder="Write short notes"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50"></textarea>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Submit Assignment"
                        className="w-full px-8 py-3 mt-3 bg-[#A91D3A] text-white text-lg font-semibold rounded-xl 
                            border-2 border-[#A91D3A] hover:border-[#A91D3A] hover:bg-transparent 
                            hover:text-[#A91D3A]" />
                </div>
            </form>
        </div>
    );
};

export default SubmitAssign;