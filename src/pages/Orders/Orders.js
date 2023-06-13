import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://green-vegan2-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email]);

    const handledelete = (id) => {
        const proceed = window.confirm('Are You sure you want to delete?')
        if (proceed) {
            fetch(`https://green-vegan2-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted Succesfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining)

                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        const procceed = window.confirm('Are you sure?');
        if (procceed) {
            fetch(`https://green-vegan2-server.vercel.app/orders/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: "approved" })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        const remining = orders.filter(odr => odr._id !== id);
                        const approved = orders.find(odr => odr._id === id);
                        approved.status = 'Approved';
                        const newOrder = [approved, ...remining];
                        setOrders(newOrder)
                    }
                })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Services</th>
                            <th>Customer Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} handleStatusUpdate={handleStatusUpdate} handledelete={handledelete} order={order} ></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;