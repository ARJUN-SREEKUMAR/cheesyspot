import React from 'react'
import { NavLink ,useLocation} from 'react-router-dom'
import cheesylogo from "../assets/cheesylogo.png";
import paint from "../assets/COLOR004.png";

const Navbar = () => {
    const location = useLocation()
  return (


    <div className=' '>
        <img className='  z-30  bg-transparent relative md:-left-9   inline   w-[200px] invisible  ' src={paint} alt="" /> 
        <div className='  top-0 flex items-center md:justify-around  justify-center bg-transparent backdrop-blur-sm shadow-2xl z-20 fixed h-[70px] w-full '>

   
         
                <img className=' h-36 mt-14  rounded-full bg-transparent z-40 ' src={cheesylogo} alt="" /> 
        
            <div className='  gap-10 hidden md:flex  bg-transparent'>

                <div style={{ color: location.pathname === '/' ? '#FFCF0C' : 'white' }} className='bg-transparent'>
                    <NavLink to="/"  className="font-Cheesebase text-xl bg-transparent ">Home</NavLink>
                </div>
                <div style={{ color: location.pathname === '/about' ? '#FFCF0C' : 'white' }} className='bg-transparent'>
                    <NavLink className="font-Cheesebase text-xl bg-transparent hover:text-[#FFCF0C]"  to="/about">About</NavLink>
                </div>
                <div style={{ color: location.pathname === '/menu' ? '#FFCF0C' : 'white' }} className='bg-transparent'>
                    <NavLink className="font-Cheesebase text-xl bg-transparent hover:text-[#FFCF0C]" to="/menu">Menu</NavLink>
                </div>
                <div style={{ color: location.pathname === '/contact' ? '#FFCF0C' : 'white' }} className='bg-transparent'>
                    <NavLink className="font-Cheesebase text-xl bg-transparent hover:text-[#FFCF0C]" to="/contact">Contact us</NavLink>
                </div>
                <div style={{ color: location.pathname === '/booknow' ? '#FFCF0C' : 'white' }} className='bg-transparent'>
                    <NavLink className="font-Cheesebase text-xl bg-transparent hover:text-[#FFCF0C]" to="/booknow">Booknow</NavLink>
                </div>
          
            </div>
        </div>
      
    </div>
  )
}

export default Navbar