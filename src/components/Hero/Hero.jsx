import React from 'react'
import heroEarth from "../../assets/Hero/heroEarth.avif"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='flex flex-col-reverse items-center bg-[#a1f1bd] gap-10  rounded-b-2xl md:flex-row md:p-5 justify-center md:gap-20 w-full min-h-[600px]'>
       <div className='flex flex-col items-start  p-5 text-left font-[nunito] gap-5 md:gap-10'>
        <h1 className='text-4xl md:text-7xl md:max-w-4xl max-w-66 text-[#2e4f22] font-medium '>Financial Clarity You Can Trust</h1>
        <p className='text-sm md:text-xl text-[#2e4f22]'>Trusted financial guidance for every stage of life and business since 1987</p>
  <Link to='/book'> <button className='bg-[#2e4f22] md:text-md py-2 px-4 text-[12px] rounded-full text-white font-bold max-w-[200px] '>Connect with our experts</button>
</Link>            </div>

      <div className='h-80 w-80 mt-5 md:h-96 md:w-96 overflow-hidden'>

        <img className='h-full w-full object-contain' src={heroEarth} alt="" />
       </div>

    </section>
  )
}

export default Hero