import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { image, name, description, price, _id } = service;

    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="meal" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h4>Price: ${price}</h4>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn  btn-success text-white bg-primary border-primary">Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;