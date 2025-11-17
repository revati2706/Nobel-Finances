import React from 'react'
import clock from "../assets/img/clock.avif"
const BookAppoint = () => {
  return (
    <section className='w-full] p-20 bg-[#d1f8db]'>
      <div className='flex flex-col md:flex-row md:gap-10 gap-5 '>
        <div className='flex-1 bg-[#a1f1bd] rounded-2xl md:h-80 md:w-80'><img className='h-full w-full object-cover' src={clock} alt="" /></div>
        
        <div className='flex-2 flex flex-col items-start md:justify-center gap-3'>
            <h1 className='text-2xl text-[#2e4f22] md:text-5xl '>Book an appointment now</h1>
            <p className='text-[#2e4f22]'>Serving individuals and small businesses since 1987</p>
            <button className='bg-[#2e4f22] px-3 py-2 rounded-full text-white'>Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default BookAppoint