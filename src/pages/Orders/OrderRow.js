import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handledelete, handleStatusUpdate }) => {
    const { _id, customer, phone, price, serviceName, id, status } = order;
    const [orderServices, setOrderServices] = useState({});
    useEffect(() => {
        fetch(`https://green-vegan2-server.vercel.app/services/${id}`)
            .then(res => res.json())
            .then(data => setOrderServices(data))
    }, [id])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handledelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">

                            {orderServices?.image && <img src={orderServices.image} alt='order'></img>}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{id}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>${price}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{
                    status ? status : 'pending'
                }</button>
            </th>
        </tr>
    );
};

export default OrderRow;