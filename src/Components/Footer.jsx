import React from 'react'

function Footer() {
//   <style>
// {/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */}
// </style>
  return (
    <div className='font-[poppins]  flex xl:text-3xl xl:gap-48  md:flex-row text-[#8D99AE] lg:gap-32 md:h-[40vh] lg:text-2xl  md:bg-black  md:justify-around     bg-[#2B2D42] text-xl items-center mx-auto   flex-col gap-5'>
      
      <div >
      <h1 className='text-[#EDF2F4] font-extrabold text-2xl'>Umar@project</h1>
        <p>
        @ecommercewebsite
        </p>
        </div>
      <ul className='flex hover:cursor-pointer  hover:underline md:gap-1 flex-col gap-5' >
        <li className='text-[#EDF2F4] text-2xl '>About Us</li>
        <li>Careers</li>
        <li>Our Stores</li>
        <li>Our Cares</li>
        <li>Term & Condition</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className='flex hover:cursor-pointer hover:underline md:gap-1 flex-col gap-5'>
        <li className='text-[#EDF2F4] text-2xl'>Customer Care</li>
        <li>Help Center</li>
        <li>Track Your Order</li>
        <li>Corporate & Bulk </li>
        <li>Return and Refunds</li>
      </ul>
      <ul className='flex md:gap-1 hover:cursor-pointer hover:underline flex-col gap-5'>
        <li className='text-[#EDF2F4] text-2xl'>Contact Us</li>
        <li>90 Washington </li>
        <li>umarestore@.com</li>
        <li>Phone:+123423</li>
      </ul>
    </div>
  )
}

export default Footer
