import React from 'react';
import Hero from '../Hero/Hero';
import Works from '../Works/Works';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Works></Works>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;