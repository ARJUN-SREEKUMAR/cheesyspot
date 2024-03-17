import React from 'react'
import transparent from "../assets/transparent.png";

const About = () => {
  return (
    <div className='main  p-6  bg-yellow-300 md:min-h-[30rem] min-h-[50rem]  flex items-center'>
        <div className='child flex md:justify-center md:flex-row flex-col items-center md:gap-5 gap-10'>
            <div className='left  md:w-[55%] lg:w-[55%] '>
                <div className=' '>
                  <img className=' w-full' src={transparent} alt="" />
                </div>
            </div>
            <div className='right  flex w-[90%] md:w-[40%] lg:w-[50%] gap-10 items-center flex-col text-center'>
              <div className='font-Cheesebase text-4xl'>
                About us
              </div>
                <div className=' flex flex-col lg:flex-row gap-10 font-Cheesebase'>
                  <div>
                    Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
                  </div>
                  <div>
                    At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About