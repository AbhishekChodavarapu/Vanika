import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm xl:w-80 mx-auto text-center border border-gray-300">
                                <h3 className="text-3xl font-semibold text-gray-800 mb-2">Vanika.ai</h3>
                                <p className="text-gray-700 text-base">
                                    Product by{' '}
                                    <a
                                        href="https://www.anvirobotics.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Anvi
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* 2nd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="text-[white] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink to="/#home" className="text-[white] hover:text-white hover:tracking-wider transition duration-250 ease-in-out">Home</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="/#about" className="text-[white] hover:text-white hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="" className="text-[white] hover:text-gray-white hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* 3rd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                            <h6 className="text-[white] text-xl font-bold mb-4">Services</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink smooth to="" className="text-[white] hover:text-white hover:tracking-wider transition duration-250 ease-in-out">Develop</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink smooth to="" className="text-[white] hover:text-white hover:tracking-wider transition duration-250 ease-in-out">Connect</HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* 4th block */}
                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-white-900">
                            <div className="text-xl mb-6">
                                Social Media Links.
                            </div>
                            <div className="text-md font-medium mb-6">
                                Follow us on social media.
                            </div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Copyright Section */}
                    <div className="text-center mt-10">
                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} Vanika.ai. All rights reserved.
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
