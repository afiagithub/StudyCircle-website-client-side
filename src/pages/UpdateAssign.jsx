import { useState } from 'react';
import Swal from 'sweetalert2'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from 'react-router-dom';

const UpdateAssign = () => {
    const assignData = useLoaderData();
    const {_id, title, image, subject, mark, difficulty, due_date, description, a_creator } = assignData;

    const [startDate, setStartDate] = useState(new Date());

    const handleUpdateSpot = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const subject = form.subject.value;
        const difficulty = form.difficulty.value;
        const mark = form.mark.value;
        const due_date = startDate;
        const image = form.image.value;
        const description = form.description.value;

        const updatedAssignmentData = {
            title, subject, difficulty, mark, due_date, image, description, a_creator
        }

        console.log(updatedAssignmentData)
        

        fetch(`http://localhost:5000/all-assignment/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedAssignmentData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success",
                        text: "Updated Assignment Data",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className='flex flex-col max-w-2xl mx-auto p-6 rounded-md sm:p-10 mb-10'>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-[#A91D3A]">Update Assignment</h1>
                <p className="text-sm dark:text-[#874CCC]">Provide all necessary information below</p>
            </div>
            <form onSubmit={handleUpdateSpot}>
                <div className="w-full flex flex-col gap-5">
                    <div className="flex gap-3">
                        <input type="text" defaultValue={title} name="title" placeholder="Enter Assignment Title"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div className="flex gap-3">
                        <select name="subject" defaultValue={subject} className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" >
                            <option value="English">English</option>
                            <option value="Programming">Programming</option>
                            <option value="Arts">Arts</option>
                            <option value="Biology">Biology</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                        </select>
                        <select name="difficulty" defaultValue={difficulty} className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className="flex gap-3">
                        <input type="number" name="mark" defaultValue={mark} placeholder="Enter Toal Mark"
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                        <DatePicker className='border-2 w-64 rounded-md dark:border-gray-300 dark:bg-gray-50 p-3'
                            selected={due_date} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="flex gap-3">
                        <input type="text" name="image" defaultValue={image}  placeholder="Enter Image URL"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div>
                        <textarea name="description" defaultValue={description} cols="30" rows="5" placeholder="Write a short description"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50"></textarea>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Update Assignment"
                        className="w-full px-8 py-3 mt-3 bg-[#A91D3A] text-white text-lg font-semibold rounded-xl 
                            border-2 border-[#A91D3A] hover:border-[#A91D3A] hover:bg-transparent 
                            hover:text-[#A91D3A]" />
                </div>
            </form>
        </div>
    );
};

export default UpdateAssign;