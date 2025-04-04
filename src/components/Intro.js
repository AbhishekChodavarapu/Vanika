import React from 'react';
import img from '../images/intro2.jpg';

const Intro = () => {
    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about'>
                {/* Heading */}
                <h3 className="text-4xl text-[#1c1e2d] font-sans font-bold text-center mb-4">
                    Revolutionizing Robotics for the Next Generation
                </h3>

                <div className="flex flex-col lg:flex-row py-8 items-center lg:items-start justify-between lg:text-left" data-aos="fade-up">
                    {/* Left Image */}
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <img alt="card img" className="rounded-lg w-full lg:w-4/5" src={img} />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 px-6 ml-[-10px]" data-aos="zoom-in" data-aos-delay="500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[  
                                { title: "VIRTUAL", desc: "Simulated environments, robot design in software." },
                                { title: "AUTONOMOUS", desc: "Self-thinking, decision-making robotics." },
                                { title: "NEURO-INTEGRATED", desc: "AI/ML-inspired control and processing." },
                                { title: "INTELLIGENT", desc: "Smart learning, adaptive systems." },
                                { title: "KINETICS", desc: "Mechanical movement, dynamics." },
                                { title: "ACTUATION", desc: "Motor control, servo systems, real-world robotics output." }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#282f45] border border-gray-500 p-5 rounded-lg w-[100%]">
                                    <h5 className="text-xl text-white font-sans font-bold">
                                        <span className="text-2xl uppercase">{item.title.charAt(0)}</span>
                                        {item.title.slice(1).toLowerCase()}
                                    </h5>
                                    <p className="text-white">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;
