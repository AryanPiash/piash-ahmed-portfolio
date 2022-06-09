import React from 'react';
import bg1 from '../../assets/images/1.png'
import bg2 from '../../assets/images/2.png'
import bg3 from '../../assets/images/3.png'

const Services = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 my-24'>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-5 pt-5 pb-5" style={{background: `url(${bg1})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',margin: 'auto'}}>
                    <img  src="https://dizme.codelayers.net/images/svg/process/target.svg" alt="Shoes" class="w-16" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-xl">Pixel Perfect Design</h2>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-5 pt-5 pb-5" style={{background: `url(${bg2})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',margin: 'auto'}}>
                    <img src="https://dizme.codelayers.net/images/svg/process/brush.svg" alt="Shoes" class="w-16" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">High Quality Content</h2>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-5 pt-5 pb-5" style={{background: `url(${bg3})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',margin: 'auto'}}>
                    <img src="https://dizme.codelayers.net/images/svg/process/energy.svg" alt="Shoes" class="w-16" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Awesome Idea</h2>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;