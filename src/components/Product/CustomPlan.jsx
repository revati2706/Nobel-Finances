import React from 'react'
import customPlan from "../../assets/img/customPlan.avif"
import { Link } from 'react-router-dom'
const CustomPlan = () => {
  return (
    <section className='min-h-[600px] w-full mt-30 flex items-center justify-center p-10'>
      <div className='flex flex-col-reverse lg:flex-row items-center gap-10 w-full max-w-[1400px]'>
        
        {/* Left Part */}
        <div className='bg-[#2e4f22] flex-1 p-10 lg:p-20 text-white rounded-2xl flex flex-col gap-5 text-left items-start'>
          <h1 className='text-4xl lg:text-6xl'>A custom built plan for you</h1>
          <p className='text-lg'>
            At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. 
            Our approach is centered on three key pillars: simplicity, accuracy, and security.
          </p>
         <Link to='/services'><button className='bg-white px-6 rounded-full py-3 text-base text-[#2e4f22]'>
            Learn more
          </button></Link> 
        </div>

        {/* Right Part */}
        <div className='flex-1 h-60 lg:h-110  overflow-hidden rounded-4xl'>
          <img className='h-full w-full object-cover' src={customPlan} alt="" />
        </div>

      </div>
    </section>
  )
}

export default CustomPlan
