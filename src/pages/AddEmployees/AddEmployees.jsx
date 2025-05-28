import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input"; // from ShadCN
import { Button } from "@/components/ui/button";
import emailjs from 'emailjs-com';
import useToast from '../../hooks/useTostNotification';
import { useNavigate } from 'react-router-dom';

const AddEmployees = () => {
    const { toastSuccess } = useToast()
    const Navigate = useNavigate()
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("employees") || "[]");
        setEmployees(stored);
    }, []);


    // schema and validation
    const formSchema = useMemo(() =>
        z.object({
            name: z.string().min(3, "Name must be at least 3 characters"),
            email: z.string().email("Invalid email"),
            phone: z.string().optional().refine(val => !val || /^\d{10,15}$/.test(val), {
                message: "Phone must be 10–15 digits"
            }),
            role: z.enum(["Developer", "Designer", "Manager"]),
            joiningDate: z.string().refine(date => new Date(date) <= new Date(), {
                message: "Joining date must be in the past or today"
            })
        }), [])
    // schema and validation

    // useform hokk with validation with zodResolver pasing schema
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });


    const onSubmit = (data) => {
        const updatedData = [...employees, data];
        setEmployees(updatedData);
        // update localStorage
        localStorage.setItem("employees", JSON.stringify(updatedData));
        reset();
        // tostify message
        toastSuccess("Employees Added Successfully");
        Navigate("/employee")

        const sendemailcontent = {
            name: data.name,
            message: "Employees Added Successfully",
            ...data // include the rest of the form data if needed
        };



        // Send email using EmailJS
        emailjs.send('service_be3m97e', 'template_fdj26zd', sendemailcontent, 'tcc7Ht5swxuFGaNfv')
            .then(() => console.log("Email sent"))
            .catch(err => console.error("Email failed", err));
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 uppercase"> <span className=' bg-[#269fe8] px-2 text-white  rounded'>Add Employee</span> Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input placeholder="Name" {...register("name")} className="bg-white border border-gray-300 text-black" />
                {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}

                <Input placeholder="Email" {...register("email")} className="bg-white border border-gray-300 text-black" />
                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

                <Input type="number" placeholder="Phone (optional)" {...register("phone")} className="bg-white border border-gray-300 text-black" />
                {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}

                <select {...register("role")} className="w-full bg-white border border-gray-300 text-black rounded-lg p-2">
                    <option value="">Select Role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                </select>
                {errors.role && <p className="text-red-600 text-sm">{errors.role.message}</p>}

                <Input type="date" {...register("joiningDate")} className="bg-white border border-gray-300 text-black" />
                {errors.joiningDate && <p className="text-red-600 text-sm">{errors.joiningDate.message}</p>}

                <Button type="submit" className="bg-[#269fe8] text-white hover:bg-[black] w-full">Submit</Button>
            </form>
        </div>
    )
}

export default AddEmployees