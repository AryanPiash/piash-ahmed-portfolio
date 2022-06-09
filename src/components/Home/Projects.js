import React from 'react';
import manufacturer from '../../assets/images/car-manfacturer.PNG'
import inventory from '../../assets/images/inventory.PNG'
import photography from '../../assets/images/photography.PNG'

const Projects = () => {
    return (
        <div className='mt-36'>
            <h1 className='text-3xl text-center font-bold uppercase my-12'>My Awesome <span className='text-primary'>Projects</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-8'>
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={manufacturer} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Car Manufacturing</h2>
                        <p>This is a full-stack responsive react project where dealers can buy tools in bulk. Users can go to the dashboard and pay for or cancel their orders. Only admins see all orders and their payment status in the dashboard. They can also ship paid orders. Admins can make normal users admin and add or delete products.</p>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4'>
                            <small className='bg-slate-700 text-white rounded-lg px-4 font-semibold'><a target={'_blank'} href="https://car-manufacturer-95d50.web.app/">Live Website</a></small>
                            <small className='bg-slate-700 text-white rounded-lg px-4 font-semibold'><a target={'_blank'} href="https://github.com/AryanPiash/car-manufacturer-client">Code Client</a></small>
                            <small className='bg-slate-700 text-white rounded-lg pl-4 font-semibold'><a target={'_blank'} href="https://github.com/AryanPiash/car-manufacturer-server">Code Server</a></small>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={inventory} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Inventory Management</h2>
                        <p>This is another full stack responsive web application to manage store inventory. Where users can update the stock of a product by restocking or delivering products. The user can add or delete products from the list. Users can report bugs from the bug report section on the home page.</p>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4'>
                            <small className='bg-slate-700 text-white rounded-lg px-4 font-semibold'><a target={'_blank'} href="https://inventory-management-28f0a.web.app/">Live Website</a></small>
                            <small className='bg-slate-700 text-white rounded-lg px-4 font-semibold'><a target={'_blank'} href="https://github.com/AryanPiash/inventory-management">Code Client</a></small>
                            <small className='bg-slate-700 text-white rounded-lg pl-4 font-semibold'><a target={'_blank'} href="https://github.com/AryanPiash/inventory-management-server">Code Server</a></small>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={photography} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Natural Photographer</h2>
                        <p>This is a simple react website with routing and firebase authentication. Users can log in using email-password or google pop-up. Users cannot access the checkout page without logging in.</p>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4'>
                            <small className='bg-slate-700 text-white rounded-lg px-4 font-semibold'><a target={'_blank'} href="https://natural-photographer.web.app/">Live Website</a></small>
                            <small className='bg-slate-700 text-white rounded-lg px-4 font-semibold'><a target={'_blank'} href="https://github.com/AryanPiash/natural-photographer">Code Client</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;