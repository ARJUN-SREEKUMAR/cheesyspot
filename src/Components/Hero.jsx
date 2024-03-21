import React from 'react'
import { NavLink ,useLocation} from 'react-router-dom'
import chain from "../assets/chain.png";
const Slider = () => {
  return (
    <div className='flex border-[10px] border-primary  mb-4  h-96 rounded-t-3xl justify-center gap-[10%] items-center w-[99%] '>
     
    <div className='   relative   w-[50%] '>
    <span className='text-5xl font-Cheesebase bg-clip-text text-transparent   bg-hero-pattern bg-[length:80px_80px]  leading-snug  '>
    The ultimate destination for che<span className=' text-6xl bg-transparent   font-mozereella    m-0 p-0 bg-clip-text text-transparent   bg-hero-pattern bg-[length:80px_80px]  inline-block  '>e  </span>se lovers<span className=' text-5xl bg-transparent  font-extrabold'>.</span> <br></br>Where every bite is pure delight
    </span>
    <div className=' text-5xl font-creamcheese bg-clip-text text-transparent   bg-hero-pattern bg-[length:80px_80px] border-[2px] w-[330px]  rounded-3xl border-primary  text-center pt-1 cursor-pointer hover:scale-[1.02]  '> explore Men<span className=' text-4xl bg-transparent   font-mozereella  w-[1px]  m-0 p-0 bg-clip-text text-transparent   bg-hero-pattern bg-[length:80px_80px] '>u  </span></div>
    </div>
    <img src={chain} alt=""  className='w-96 absolute  bg-transparent -right-[90px] -top-[280px] z-50'/>
    <img src={chain} alt=""  className='w-96 absolute  bg-transparent -left-[90px] -top-[280px] z-50'/>

    <div className='flex bg-primary  h-72 rounded-t-[30%] w-[20%] '>
        


    </div>
  
    </div>
  )
}

export default Slider