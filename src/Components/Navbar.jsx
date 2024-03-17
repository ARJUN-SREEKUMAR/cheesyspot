import React from 'react'
import { NavLink ,useLocation} from 'react-router-dom'
import cheesylogo from "../assets/cheesylogo.png";
import paint from "../assets/COLOR004.png";

const Navbar = () => {
    const location = useLocation()
  return (
    <div >
        <img className='  z-30  bg-transparent relative md:-left-9 inline   w-[200px] md:visible invisible' src={paint} alt="" /> 
        <div className='  top-0 flex items-center md:justify-around  justify-center bg-black  shadow-2xl z-20 fixed h-[150px] w-full border border-b-1 border-t-0 border-black'>
     
         
                <img className=' h-36 mt-14  rounded-full bg-transparent z-40 ' src={cheesylogo} alt="" /> 
        
            <div className='  gap-10 hidden md:flex mt-9'>
                <div style={{ color: location.pathname === '/' ? 'yellow' : 'white' }}>
                    <NavLink to="/"  className="font-Cheesebase text-xl ">Home</NavLink>
                </div>
                <div style={{ color: location.pathname === '/about' ? 'yellow' : 'white' }}>
                    <NavLink className="font-Cheesebase text-xl hover:text-[#FAFB00]"  to="/about">About</NavLink>
                </div>
                <div style={{ color: location.pathname === '/menu' ? 'yellow' : 'white' }}>
                    <NavLink className="font-Cheesebase text-xl hover:text-[#FAFB00]" to="/menu">Menu</NavLink>
                </div>
                <div style={{ color: location.pathname === '/contact' ? 'yellow' : 'white' }}>
                    <NavLink className="font-Cheesebase text-xl hover:text-[#FAFB00]" to="/contact">Contact us</NavLink>
                </div>
                <div style={{ color: location.pathname === '/booknow' ? 'yellow' : 'white' }}>
                    <NavLink className="font-Cheesebase text-xl hover:text-[#FAFB00]" to="/booknow">Booknow</NavLink>
                </div>
          
            </div>
        </div>
        
    </div>
  )
}

export default Navbar