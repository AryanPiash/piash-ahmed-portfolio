import React from 'react';
import dotsBg from '../../assets/images/dots.jpg'

const ContactMe = () => {
    return (
        <div style={{ background: `url(${dotsBg})` }}>
            <div className="text-center py-12 mb-12 mt-36 bg-slate-600" 
            style={{backgroundColor: 'rgba(128,103,240,.92)'}}
             >
                <h4 className='text-white uppercase'>Contact Me</h4>
                <h2 className='text-white text-2xl uppercase'>Stay connected with us</h2>
                <div className="card flex-shrink-0 w-full max-w-sm mx-auto">
                    <div className="card-body">
                        <div className="form-control mb-2">
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-2">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <textarea className='rounded-lg p-3 outline-0 ' name="message" id="" cols="10" rows="4" placeholder='Your Message'></textarea>
                        </div>
                        <div className="w-full mt-2">
                            <button className="btn btn-primary px-8 text-white w-full">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;