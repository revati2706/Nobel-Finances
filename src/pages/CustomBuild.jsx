import React from 'react'
import financeimg_services from "../assets/img/financeimg_services.webp"
import SuggestionList from '../components/Services/SuggestionList'
import Philosophy from '../components/Services/Philosophy'

const CustomBuild = () => {
  
  return (
    <section className='bg-white min-h-screen'>
          <div className='md:p-20 p-10 flex flex-col md:flex-row-reverse items-center justify-center md:gap-20 gap-5 md:min-h-[800px]'>
            <div className='lg:h-90'><img className='h-full' src={financeimg_services} alt="" /></div>
             <div className='flex flex-col items-start gap-5'>
                <h1 className='text-3xl md:text-7xl md:max-w-150 max-w-80 text-[#2e4f22] '>Your Financial Journey, Clearly Defined</h1>
                <p className='text-md text-justify text-[#2e4f22]'>Trusted financial guidance for every stage of life and business since 1987</p>
                <button className='py-2 px-4 text-sm bg-[#2e4f22] text-white font-semibold rounded-full'>Connect with our experts</button>
             </div>
          </div>

          <SuggestionList/>
          <Philosophy/>


    </section>
  )
}

export default CustomBuild