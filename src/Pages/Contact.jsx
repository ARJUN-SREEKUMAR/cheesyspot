import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <div className=" flex  flex-col items-center mb-20 bg-transparent">
        Contact
        <div className="parent  w-[80%] bg-[#161616] flex flex-col items-center bg-transparent">
          <div style={{ color: '#ffffff' }} className=" pt-16 pb-16 font-Cheesebase bg-transparent">
            Get in Touch
            </div>
          <div className=" child  w-[90%]">
            <div className="details flex flex-col gap-5 ">
              <div className=" flex  gap-6 md:flex-row flex-col">
                <input className=" w-[100%] h-[74px] pl-4 " type="text" placeholder="First Name"/>
                <input className=" w-[100%] h-[74px] pl-4 " type="text" placeholder="Last Name"/>
              </div>
              <div className=" flex gap-6 md:flex-row flex-col">
                <input className=" w-[100%] h-[74px] pl-4 " type=" no" placeholder="Phone"/>
                <input className=" w-[100%] h-[74px] pl-4 " type="email" placeholder="Email"/>
              </div>
              <textarea className=" w-[100%] " name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className=" flex justify-center">
              <button style={{ color: '#ffffff' }} className="   mt-16 mb-16 text-white bg-gray-800 rounded-lg p-2 px-4">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
