import React from "react";
import tslam from "../assets/tslam.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <section className="flex">
      <div className=" fixed top-0 left-0 h-screen bg-primary w-[300px] pt-[30px] pb-[40px] flex flex-col items-center justify-between text-dark border-r-2 border-white">
        <div className=" ">
          <div className="pb-[30px]">
            <img
              className="w-[100px] h-[100px] rounded-full block mx-auto border-white border-[3px]"
              src={tslam}
              alt="slam"
            />
            <p className="pb-[40px] pt-[15px] font-bold">Taiwo Salami</p>
          </div>
          <ul className="text-center flex flex-col gap-[15px]">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Portfolio</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-center gap-2 pb-2">
            <div className="text-primary bg-dark rounded-full py-2 px-2">
              <FaFacebookF />
            </div>
            <div className="text-primary bg-dark  rounded-full py-2 px-2">
              <FaTwitter />
            </div>
            <div className="text-primary bg-dark  rounded-full py-2 px-2">
              <FaLinkedinIn />
            </div>
          </div>
          <p>Copyright © 2024 Taiwo</p>
          <p>Sakon. All rights reserved.</p>
        </div>
      </div>
      <section className="bg-dark w-screen bg-fixed overflow-x-hidden pt-[40px] ">
        <div className="container text-primary flex">
          <div>
            <h1 className="font-extrabold text-[50px] leadng-[70px]">
              Hi, I'm <span className="text-white ">Taiwo!</span>
              <br />
              Creative
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                &nbsp; Designer
              </motion.span>
              <br />
              Base in Nigeria
            </h1>
            <p className="leadng-[70px] text-white pt-6 mb-[40px]">
              I'm a Nigeria based web designer & front-end <br /> developer with
              <span className="text-primary"> 2+ years </span>
              of experience
            </p>
            <div className="flex text-[18px]   mb-[150px] gap-2">
              <button className="py-[9px] px-[40px] text-dark bg-primary rounded">
                <Link>Got a project?</Link>
              </button>
              <button className="py-[9px] px-[40px] text-white bg-dark border-[2px] rounded border-primary">
                <Link>Let's talk</Link>
              </button>
            </div>
            <div className="flex items-center">
              <div className="absolute w-1 bg-white top-[87%] bottom-[0]"></div>
              <div className="pl-4 pb-4">
                <p>+2348167663282</p>
                <p>tslam223@gmail.com</p>
                <p>Slam Street, Nigeria</p>
              </div>
            </div>
          </div>
          <div>{/* <img src={tslam} alt="tslam" /> */}</div>
        </div>
      </section>
    </section>
  );
};

export default Navbar;
