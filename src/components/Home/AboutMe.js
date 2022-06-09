import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <h2 className='text-3xl text-center font-semibold uppercase mb-24'>About Me</h2>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://dizme.codelayers.net/images/about/1.jpg" class="lg:max-w-lg" alt=''/>
                    <div className='px-8'>
                        <h3 className='text-xl text-primary mb-2'>Hello, I am a</h3>
                        <h1 class="text-5xl font-bold">Frontend Developer</h1>
                        <p class="py-6">Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 6 month of experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                        <button class="btn btn-primary px-8">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;