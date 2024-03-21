import React from 'react'
import transparent from "../assets/transparent.png";

const About = () => {
  return (
    <div>
        <div className='parent flex gap-10 flex-col lg:flex-row  items-center bg-transparent '>
          <div className='bg-transparent left flex flex-row items-center w-[90%] md:w-[80%] xl:w-[55%] p-4 color bg-yellow-300 relative xl:top-0 lg:-top-44 top-0'style={{borderTopRightRadius: "120px"}}>
              <div className='  bg-transparent'>
                <img className='bg-transparent' src={transparent} alt="" />
              </div>
          </div>
          <div className='p-5 sm:text-center  bg-transparent right lg:w-[50%] md:w-[80%] w-[90%] flex flex-col items-center'>
            <div className='font-Cheesebase text-4xl pb-5'>
              About Us
            </div>
            <div className='font-Cheesebase'>
               Welcome to the delightful world of Burger Lounge by Grapa Foods, where real happiness can be found. Since establishing our first outlet at Puthiyara in 2012, Burger Lounge has been your haven for delectable burgers. Every bite we crafted has fulfilled your "burgerly" dreams. Our mouthwatering creations at an affordable price have firmly established us as Kerala’s favorite burger spot. In 2023, GRAPA FOODS LLP, led by Mr. Abdulla Koya P K, joined hands with us, aiming to propel Burger Lounge to global stardom.
            </div>
            <div className='font-Cheesebase'>
            Everything in here is made to resonate with your unique taste. The buns, soft and toasted to golden perfection, and the patties, born from the choicest cuts of meat, speak volumes about our dedication to your satisfaction. Our recipes are created to give you delicious joy with iconic flavours, premium ingredients, and art. Grapa Burger Lounge is your go-to spot for a family-friendly dining experience. To celebrate, cherish, and create memories. The atmosphere is warm, just like the smile we're ready to welcome you with. The service is attentive because you deserve nothing less. And the joy of sharing a meal with loved ones is palpable, as we've designed it all with you in mind.
            </div>
          </div>
        </div>
    </div>
  )
}

export default About