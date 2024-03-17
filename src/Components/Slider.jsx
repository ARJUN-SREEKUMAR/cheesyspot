import React from 'react'
import { NavLink ,useLocation} from 'react-router-dom'
import transparent from "../assets/transparent.png";
const Slider = () => {
  return (
    <div>
        <div className=' flex ring justify-between  items-center flex-nowrap'>
            <div className=' left  '>
                <div className="font-Cheesebase text-xl ">Best Food For your Taste</div>
                <div className="font-Cheesebase text-xl ">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</div>
                <div>
                <NavLink className="font-Cheesebase text-xl" to="/menu">Menu</NavLink>
                </div>
            </div>
            <div className=' h-full  bg-yellow-300 right relative'>
                <img className=' z-10 relative -left-[50%]' src={transparent} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Slider