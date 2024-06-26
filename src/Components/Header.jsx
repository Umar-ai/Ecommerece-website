import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'

function Header() {
//   <style>
// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
// </style>
  const[togle,settogle]=useState(false)
  const toglle=()=>{
    settogle(!togle)
  }
  return (
    <>
   <header>

    <nav>
    <div  className='md:flex font-[poppins]  flex  bg-[#2B2D42] text-[#EDF2F4] h-[10vh] justify-around items-center    md:font-extrabold md:text-2xl  md:justify-around  '> 
    <button onClick={toglle} className='flex bg-white md:hidden md:mt-1'><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="28"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
    <p className='font-extrabold text-xl 2xl:text-3xl '>Umar@project</p>
    <div className='md:space-x-5 2xl:text-2xl 2xl:gap-11 hidden md:flex md:text-xl md:font-bold '>
      <NavLink to='/' className={({isActive})=>`${isActive?"text-orange-700":"text-[#EDF2F4]"}`}>Home</NavLink>
      {/* <NavLink className={({isActive})=>`${isActive?"text-orange-700":"text-[#EDF2F4]"}`}>Product</NavLink> */}
      <NavLink to='Products' className={({isActive})=>`${isActive?"text-orange-700":"text-[#EDF2F4]"}`}>Products</NavLink>
      <NavLink to='contact' className={({isActive})=>`${isActive?"text-orange-700":"text-[#EDF2F4]"}`}>Contact</NavLink>
      <NavLink to='Cart' className={({isActive})=>`${isActive?"text-orange-700":"text-[#EDF2F4]"}`}>Cart</NavLink>
      
    </div>
    </div>

    </nav>
   </header>

   {togle && <div>
    <nav>
    <div className='text-xl fixed font-[poppins]  bg-[#2B2D42] text-[#EDF2F4] opacity-80   w-[200px] h-[400px]  '>
    <button onClick={toglle}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
    <p>Umar@project</p>
    <div className='flex-col gap-5 mt-5  flex '>
    <NavLink to='/' className={({isActive})=>`${isActive?"text-orange-700":"text-[#EDF2F4]"}`}>Home</NavLink>
      {/* <NavLink className={({isActive})=>`${isActive?"text-orange-700":"text-[#EDF2F4]"}`}>Product</NavLink> */}
      <NavLink to='contact' className={({isActive})=>`${isActive?"text-orange-700":"text-[#EDF2F4]"}`}>Contact</NavLink>
    </div>
    </div>
    </nav>
    </div>}
    </>
  )
}

export default Header

