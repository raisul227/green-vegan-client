import React from 'react';
import heroImg from '../../Assets/images/hero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${heroImg}) no-repeat top center` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl md:text-5xl font-bold md:leading-normal"><span className='text-primary'>Discover</span> a World of  Culinary <span className='text-primary'>Delights</span></h1>
                    <p className="mb-5">Welcome to Green Vegan Food, your premier food delivery service bringing you a delectable array of culinary experiences right to your doorstep</p>
                    <Link to='/allservices'><button className="btn btn-success text-white">View Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;