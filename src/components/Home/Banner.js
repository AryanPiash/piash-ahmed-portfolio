import React from 'react';
import hero from '../../assets/images/hero-pick.png'
const Banner = () => {
    return (
        <div className='pt-16'>
            <div class="hero max-h-screen lg:px-8">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={hero} class="max-h-lg w-2/4" alt=''/>
                    <div className='w-2/4'>
                        <h4 className='text-2xl text-primary font-semibold mb-2'>Hello,I'm</h4>
                        <h1 class="text-7xl font-bold">Piash Ahmed</h1>
                        <p class="py-6 text-gray-600">Obviously I'm a Web Designer. Web Developer with over 6 months of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        <a target={'_blank'} href='https://drive.google.com/file/d/1hN3HfWUNJMl3lYG03xK9SDAhl5HDK4MQ/view' class="btn btn-primary text-white">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;