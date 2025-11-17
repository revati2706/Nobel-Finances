import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <section className='w-full min-h-screen p-3 flex flex-col items-center justify-center gap-10'>
     <div className='flex gap-5 flex-col items-center text-center  font-[nunito] mt-20'>
        <h1 className='text-sm font-semibold text-[#2e4f22] '>Services</h1>
        <p className='text-3xl md:text-5xl  text-center  font-[nunito] text-[#2e4f22]'>Let us handle the numbers,<br/> so you can handle your success.</p>
        <p className='text-md text-[#2e4f22]'>Serving individuals and small businesses since 1987</p>
  <Link to='/book'><button className='text-[10px] md:text-md bg-[#2e4f22] px-4 py-2  rounded-full text-white font-semibold'>Schedule a call</button>
  </Link>         
  </div>
    
    <Card/>
     
    </section>
  )
}

export default Features