import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddSchool() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        const res = await fetch('/api/addSchool', {
            method: 'POST',
            body: formData,
        });
        if (res.ok) {
            alert('School added successfully!');
        } else {
            alert('Error adding school!');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Add School</h1>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div>
                    <label>Name</label>
                    <input {...register('name', { required: true })} />
                    {errors.name && <p>Name is required</p>}
                </div>
                <div>
                    <label>Address</label>
                    <input {...register('address', { required: true })} />
                    {errors.address && <p>Address is required</p>}
                </div>
                <div>
                    <label>City</label>
                    <input {...register('city', { required: true })} />
                    {errors.city && <p>City is required</p>}
                </div>
                <div>
                    <label>State</label>
                    <input {...register('state', { required: true })} />
                    {errors.state && <p>State is required</p>}
                </div>
                <div>
                    <label>Contact</label>
                    <input type="number" {...register('contact', { required: true })} />
                    {errors.contact && <p>Contact is required</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register('email_id', { required: true })} />
                    {errors.email_id && <p>Email is required</p>}
                </div>
                <div>
                    <label>Image</label>
                    <input type="file" {...register('image', { required: true })} />
                    {errors.image && <p>Image is required</p>}
                </div>
                <button type="submit">Add School</button>
            </form>
        </div>
    );
}
