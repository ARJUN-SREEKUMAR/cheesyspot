import React from 'react'
import { NavLink ,useLocation} from 'react-router-dom'
import cheesylogo from "../assets/cheesylogo.png";

const Navbar = () => {
    const location = useLocation()
  return (
    <div>
        <div className='flex items-center md:justify-around  bg-[#000000] shadow-2xl z-20 fixed h-[100px] w-full'>
            <div>
                <img className=' h-36 mt-16' src={cheesylogo} alt="" /> 
            </div>
            <div className='  gap-10 hidden md:flex'>
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