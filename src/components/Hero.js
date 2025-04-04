import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import homeVideo from '../images/home1.mp4';

const Hero = () => {
    return (
        <div className="relative h-screen w-full">
            {/* Ensure the NavBar stays above everything */}
            <div className="relative z-50">
                <NavBar />
            </div>

            {/* Background Video */}
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover border-none outline-none -z-10">
                <source src={homeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hero Content */}
            <div 
    className="flex items-center justify-center text-center h-screen w-full px-4 md:px-12 relative z-10"
    data-aos="zoom-in"
    id="hero-content"
>
    <div className="max-w-2xl flex flex-col items-center">
        <h4 className="mb-5 md:text-5xl text-3xl font-bold text-[#1c1e2d]">
            Robotics Launchpad Fueled By Imagination
        </h4>
        <div className="text-xl font-semibold tracking-tight mb-5 text-[#282f45]">
            You don't just imagine  - You build it here.
        </div>
        <div className="mb-4">
            <Link to="/" 
                className="text-white bg-[#1c1e2d] border border-[#1c1e2d] hover:bg-[#282f45] hover:border-[#282f45] hover:text-white 
                inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg 
                shadow-xl rounded-2xl sm:w-auto sm:mb-0 transition-all duration-300">
                Launching Soon
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </Link>
        </div>
    </div>
</div>

        </div>
    );
};

export default Hero;
