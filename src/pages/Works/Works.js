import React from 'react';
import resturant from '../../Assets/icons/resturant.svg';
import menu from '../../Assets/icons/menu.svg';
import delivery from '../../Assets/icons/delivery.svg';


const Works = () => {
    return (
        <div className=' py-20'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center md:py-6'>
                    <h2 className=' text-primary text-4xl font-bold py-3 md:py-6'>How It Works</h2>
                    <p className='px-4'>Very Easy steps you can order your favourite food from us</p>
                </div>
                <div className='grid md:grid-cols-3 pt-20 text-center gap-4 md:gap-x-8'>
                    <div>
                        <img className='w-52 mx-auto' src={resturant} alt="" />
                        <h4 className='text-3xl py-3'><span className='text-5xl font-bold font-mono text-green-400'>01</span>Select Your Meal</h4>
                        <p>Choose Your Favorite
                            Meal that you want to order.We prepared and delivered meals arrive at your door</p>
                    </div>
                    <div>
                        <img className='w-52 h-40 mx-auto' src={menu} alt="" />
                        <h4 className='text-3xl py-3'><span className='text-5xl font-bold font-mono text-green-400'>01</span>Order your meal</h4>
                        <p>Choose Your Favorite
                            Choose your favorite meals and order online or by phone. It's easy to customize your order.</p>
                    </div>
                    <div>
                        <img className='w-52 mx-auto h-40' src={delivery} alt="" />
                        <h4 className='text-3xl py-3'><span className='text-5xl font-bold font-mono text-green-400'>01</span>Wait for delivery</h4>
                        <p>We prepared and delivered meals arrive at your door. Duis autem vel eum iriure dolor in hendrerit in vulputate.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;