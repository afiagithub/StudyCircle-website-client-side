import { useState } from 'react';
import Swal from 'sweetalert2'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from 'react-helmet-async';

const CreateAssign = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth();
    const handleAddSpot = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const subject = form.subject.value;
        const difficulty = form.difficulty.value;
        const mark = form.mark.value;
        const due_date = startDate;
        const image = form.image.value;
        const description = form.description.value;
        const a_creator = {
            email: user?.email,
            name: user?.displayName,
            photo: user?.photoURL
        }

        if (title === '') {
            return toast.error("Provide a meaningful title for the assignment")
        }

        if (mark === '') {
            return toast.error("Provide total mark for the assignment")
        }

        const newAssignmentData = {
            title, subject, difficulty, mark, due_date, image, description, a_creator
        }

        // console.log(newAssignmentData)


        fetch("https://studycircle-server.vercel.app/all-assignment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newAssignmentData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Created New Assignment",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className='flex flex-col max-w-2xl mx-auto p-6 rounded-md sm:p-10 mb-10'>
            <Helmet>
                <title>StudyCircle | Create Assignment</title>
            </Helmet>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-[#A91D3A]">Create Assignment</h1>
                <p className="text-sm dark:text-primary">Provide all necessary information below</p>
            </div>
            <form onSubmit={handleAddSpot}>
                <div className="w-full flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <label className='text-lg font-semibold text-primary'>Assignment Title *</label>
                        <input type="text" name="title" placeholder="Enter Assignment Title"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div className="flex gap-3 w-full">
                        <div className='flex flex-col gap-3 w-1/2'>
                            <label className='text-lg font-semibold text-primary'>Subject</label>
                            <select name="subject" defaultValue="Programming" className=" px-3 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50" >
                                <option value="English">English</option>
                                <option value="Programming">Programming</option>
                                <option value="Arts">Arts</option>
                                <option value="Biology">Biology</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <label className='text-lg font-semibold text-primary'>Difficulty</label>
                            <select name="difficulty" defaultValue="Easy" className="px-3 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50" >
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className='flex flex-col gap-3 w-1/2'>
                            <label className='text-lg font-semibold text-primary'>Total Mark *</label>
                            <input type="number" name="mark" placeholder="Enter Toal Mark"
                                className="px-3 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                        </div>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <label className='text-lg font-semibold text-primary'>Due Date</label>
                            <DatePicker className='border-2 w-64 rounded-md dark:border-gray-300 dark:bg-gray-50 p-3'
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className='text-lg font-semibold text-primary'>Image URL</label>
                        <input type="text" name="image" placeholder="Enter Image URL"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg font-semibold text-primary'>Short Description</label>
                        <textarea name="description" cols="30" rows="5" placeholder="Write a short description"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50"></textarea>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Create Assignment"
                        className="w-full px-8 py-3 mt-6 bg-[#A91D3A] text-white text-lg font-semibold rounded-xl 
                            border-2 border-[#A91D3A] hover:border-[#A91D3A] hover:bg-transparent 
                            hover:text-[#A91D3A]" />
                </div>
            </form>
        </div>
    );
};

export default CreateAssign;