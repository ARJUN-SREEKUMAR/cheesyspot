import React from 'react'
import { NavLink ,useLocation} from 'react-router-dom'
const Navbar = () => {
    const location = useLocation()
  return (
    <div>
        <div className='flex items-center md:justify-around  bg-white shadow-lg  fixed  z-10  w-full'>
            <div>
                <img className='h-16' src="" alt="" />
            </div>
            <div className='  gap-10 hidden md:flex'>
                <div style={{ color: location.pathname === '/' ? 'blue' : 'black' }}>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div style={{ color: location.pathname === '/about' ? 'blue' : 'black' }}>
                    <NavLink to="/about">About</NavLink>
                </div>
                <div style={{ color: location.pathname === '/menu' ? 'blue' : 'black' }}>
                    <NavLink to="/menu">Menu</NavLink>
                </div>
                <div style={{ color: location.pathname === '/contact' ? 'blue' : 'black' }}>
                    <NavLink to="/contact">Contact us</NavLink>
                </div>
                <div style={{ color: location.pathname === '/booknow' ? 'blue' : 'black' }}>
                    <NavLink to="/booknow">Booknow</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar