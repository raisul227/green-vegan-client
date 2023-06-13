import React from 'react';
import aboutImg from '../../Assets/images/about.jpg';

const About = () => {
    return (
        <div className='md:py-8'>
            <h3 className='text-center text-primary  text-3xl font-bold py-5 md:text-5xl md:py-8'>About Us</h3>
            <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 py-8  md:py-16">
                <div className="md:w-1/2 text-center">
                    <img src={aboutImg} alt="Content" className="w-full mb-4 md:mb-0 md:w-[94%] h-auto rounded-lg" />
                </div>
                <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <div className=' border-b-2 pb-4 border-green-400'>
                        <h2 className="text-3xl md:text-4xl font-bold mb-5"><span className='text-primary'>Organic Food</span> - Farm Fresh Produce Right To Your Door</h2>
                        <p className="text-gray-600">Welcome To Green Vegan Food.
                            Green Vegan Food is a premier food delivery website dedicated to providing delicious and nutritious plant-based meals. Our mission is to offer a convenient and sustainable food delivery service that promotes a healthy lifestyle and supports environmental sustainability.</p>
                    </div>
                    <div>
                        <p className='py-4'>We prioritize sustainability by using eco-friendly packaging materials and partnering with local suppliers who share our commitment to ethical and environmentally conscious practices. We strive to minimize our carbon footprint and contribute to a greener planet with every meal delivered.Ordering from Green Vegan Food is easy and convenient. Our user-friendly website allows you to browse our menu, customize your order, and select from a range of delivery options. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;