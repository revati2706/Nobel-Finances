import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#2e4f22] font-[nunito] w-full min-h-[400px] py-10 px-5 flex justify-between flex-col'>
      
      <div className='flex gap-5 flex-col md:flex-row justify-between '> 
        
        <div> <h1 className='text-white font-bold text-2xl' >Noble Finances</h1>
        </div>
        
         <div className='flex justify-between gap-10 items-center md:gap-30'>
        <span className='text-white text-sm'>Services</span>
        <Link to='/book'>
         <button className='bg-white text-[#2e4f22] p-2 text-sm rounded-full'>
           Book an appointment
        </button>
        </Link>
       
         </div>
        </div>

        <div className='text-white font-[nunito] flex flex-col md:flex-row md:items-center md:gap-30 gap-5'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-[12px]'>Financial Clarity You Can Trust</h1>
            <p className='text-[10px]'>Trusted financial guidance for every stage of life and business since 1987</p>
            </div>
            
            <div><p className='text-[10px]'>© 2025 All Rights Reserved</p></div>

            
        </div>
    </footer>
  )
}

export default Footer