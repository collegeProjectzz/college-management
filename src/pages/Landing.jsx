import React from 'react';
import Lottie from 'react-lottie';
import Gradient from 'rgt';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link as SLink } from "react-scroll";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import data1 from '../assets/73479-student.json';
import data2 from '../assets/30304-back-to-school.json';
import data3 from '../assets/30305-back-to-school.json';

export default function Landing() {
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: data1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: data2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: data3,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="columns-1">
            <div id="sec-1" className="flex flex-col justify-center items-center p-10 lg:flex-row " >
                <Fade left>
                    <div className="w-full row-3 lg:w-1/2">
                        <h1 className="m-1 font-black text-4xl sm:text-5xl lg:text-7xl md:text-6xl lg:m-3">
                            <Gradient dir="left-to-right" from="#007CF0" to="#00DFD8">
                                college management
                            </Gradient>
                        </h1>
                        <p className="my-5 m-1 text-gray-900 text-lg sm:m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident illum nesciunt deserunt, esse atque soluta non maiores, commodi quam ipsum ullam incidunt quibusdam in voluptates blanditiis doloremque quaerat exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident illum nesciunt deserunt, esse atque soluta non maiores, commodi quam ipsum ullam incidunt quibusdam in voluptates blanditiis doloremque quaerat exercitationem.
                        </p>
                        <div className="flex flex-col justify-items-start sm:flex-row">
                            <button className="flex justify-center items-center m-5 rounded-2xl p-5 bg-gradient-to-r from-blue-600 to-sky-300 hover:from-blue-600 hover:to-sky-200">
                                <SLink
                                    to="sec-3"
                                    spy={true}
                                    smooth={true}
                                    offset={1}
                                    duration={500}
                                    className="flex justify-center items-center"
                                >
                                    Get Started as Student
                                    <AiOutlineArrowRight className="ml-2" />
                                </SLink>
                            </button>
                            <button className="flex justify-center items-center m-5 rounded-2xl p-5 bg-gradient-to-r from-blue-600 to-sky-300 hover:from-blue-600 hover:to-sky-200">
                                <SLink
                                    to="sec-2"
                                    spy={true}
                                    smooth={true}
                                    offset={1}
                                    duration={500}
                                    className="flex justify-center items-center"
                                >
                                    Get Started as a Faculty
                                    <AiOutlineArrowRight className="ml-2" />
                                </SLink>
                            </button>
                        </div>
                    </div>
                </Fade>
                <div className="w-full justify-center items-center lg:w-1/2">
                    <Lottie
                        options={defaultOptions1}
                    />
                </div>
            </div>
            <div id="sec-2" className="flex flex-col justify-center items-center p-10 lg:flex-row bg-blue-900">
                <div className="w-1/2 justify-center items-center">
                    <Lottie
                        options={defaultOptions2}
                    />
                </div>
                <Fade right>
                    <div className="w-full row-3 lg:w-1/2">
                        <h1 className="m-1 font-black text-4xl sm:text-5xl lg:text-7xl md:text-6xl lg:m-3">
                            <Gradient dir="left-to-right" from="#cffafe" to="#22d3ee">
                                for faculties
                            </Gradient>
                        </h1>
                        <p className="my-5 m-1 text-gray-900 text-lg sm:m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident illum nesciunt deserunt, esse atque soluta non maiores, commodi quam ipsum ullam incidunt quibusdam in voluptates blanditiis doloremque quaerat exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident illum nesciunt deserunt, esse atque soluta non maiores, commodi quam ipsum ullam incidunt quibusdam in voluptates blanditiis doloremque quaerat exercitationem.
                        </p>
                        <div className="flex flex-col justify-items-start sm:flex-row">
                            <button className="flex justify-center items-center m-5 rounded-2xl p-5 bg-gradient-to-r from-blue-600 to-sky-300 hover:from-blue-600 hover:to-sky-200">
                                <Link
                                    to="/signin/faculty"
                                    className="flex justify-center items-center"
                                >
                                    Sign in as a Faculty
                                    <AiOutlineArrowRight className="ml-2" />
                                </Link>
                            </button>
                            <button className="flex justify-center items-center m-5 rounded-2xl p-5 bg-gradient-to-r from-blue-600 to-sky-300 hover:from-blue-600 hover:to-sky-200">
                                <Link
                                    to="/signup/faculty"
                                    className="flex justify-center items-center"
                                >
                                    Sign up as a Faculty
                                    <AiOutlineArrowRight className="ml-2" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </Fade>
            </div>
            <div id="sec-3" className="flex flex-col justify-center items-center p-10 lg:flex-row " >
                <Fade left>
                    <div className="w-full row-3 lg:w-1/2">
                        <h1 className="m-1 font-black text-4xl sm:text-5xl lg:text-7xl md:text-6xl lg:m-3">
                            <Gradient dir="left-to-right" from="#007CF0" to="#00DFD8">
                                for Students
                            </Gradient>
                        </h1>
                        <p className="my-5 m-1 text-gray-900 text-lg sm:m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident illum nesciunt deserunt, esse atque soluta non maiores, commodi quam ipsum ullam incidunt quibusdam in voluptates blanditiis doloremque quaerat exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident illum nesciunt deserunt, esse atque soluta non maiores, commodi quam ipsum ullam incidunt quibusdam in voluptates blanditiis doloremque quaerat exercitationem.
                        </p>
                        <div className="flex flex-col justify-items-start sm:flex-row">
                            <button className="flex justify-center items-center m-5 rounded-2xl p-5 bg-gradient-to-r from-blue-600 to-sky-300 hover:from-blue-600 hover:to-sky-200">
                                <Link
                                    to="/signin/student"
                                    className="flex justify-center items-center"
                                >
                                    Sign in as a Student
                                    <AiOutlineArrowRight className="ml-2" />
                                </Link>
                            </button>
                            <button className="flex justify-center items-center m-5 rounded-2xl p-5 bg-gradient-to-r from-blue-600 to-sky-300 hover:from-blue-600 hover:to-sky-200">
                                <Link
                                    to="/signup/student"
                                    className="flex justify-center items-center"
                                >
                                    Sign up as a Student
                                    <AiOutlineArrowRight className="ml-2" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </Fade>
                <div className="w-full justify-center items-center lg:w-1/2">
                    <Lottie
                        options={defaultOptions1}
                    />
                </div>
            </div>
        </div>
    );
}

