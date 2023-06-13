import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const allServices = useLoaderData();
    return (
        <div className='py-6 md:py-12'>
            <h3 className='text-center text-primary font-bold
     text-3xl md:text-5xl py-4'>Services</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-2 md:mx-4 my-6 py-8'>
                {
                    allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;