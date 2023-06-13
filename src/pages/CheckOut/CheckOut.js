import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, name, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const email = user?.email || 'Unregistered';
    const handleOrders = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const message = form.message.value;
        const order = {
            id: _id,
            customerName: userName,
            name,
            phone,
            email,
            message,
            price
        }

        fetch('https://green-vegan2-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('ordered placed successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err.message))
    }
    return (
        <div className=" flex justify-center items-center  bg-white">
            <div className="container w-full my-4 px-4 lg:px-20">
                <form onSubmit={handleOrders} className="w-full mx-auto p-8 my-4 md:px-12 lg:w-9/12  rounded-2xl shadow-2xl">
                    <h4 className='text-3xl'>You Are About To Order: <span className='text-2xl text-orange-600 font-bold'>{name}</span></h4>
                    <h5 className='text-2xl'>Price: ${price}</h5>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input name='firstName' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="First Name*" />
                        <input name='lastName' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Last Name*" />
                        <input name='email' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email*" defaultValue={user?.email} readOnly />
                        <input name='phone' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Phone*" />
                    </div>
                    <div className="my-4">
                        <textarea name='message' placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <input className="uppercase text-sm font-bold  bg-primary text-gray-100 p-3 rounded-lg w-full" type="submit" value="Order Now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;