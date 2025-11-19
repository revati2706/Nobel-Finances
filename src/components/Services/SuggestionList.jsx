import React from 'react'
import servicesImg from "../../assets/img/servicesImg.avif"
import advice2 from "../../assets/img/advice2.avif"
import advice3 from "../../assets/img/advice3.webp"
import advice1 from "../../assets/img/advice1.jpg"
const SuggestionList = () => {
    const info=[
        {
          id:1,
          title:"Our tax advisors write you a plan",
          para:"Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
          img:advice1
        },
        {
          id:2,
          title:"Onboard us to your finances",
          para:"Offer expert guidance and representation to resolve tax audits and disputes with confidence.",
          img:advice2
        },
        {
          id:3,
          title:"We solve the rest",
          para:"Maintain organized financial records and provide clear reports to support business growth and financial health.",
          img:advice3
        }
      ]
  return (
    <section>
         <div className='md:w-full lg:h-[850px] '><img className='w-full h-full' src={servicesImg} alt="" /></div>
        <div className='flex flex-col md:gap-20 md:p-20'>
             <div className='p-10 flex flex-col gap-5 '>
                <span className='text-sm text-[#2e4f22]'>How it works</span>
                <h1 className='md:text-7xl text-3xl text-[#2e4f22]'>A simple onboarding</h1>
                <p className='text-lg text-[#2e4f22]'>Serving individuals and small businesses since 1987</p>
             </div>
            
            {info.map((info,idx)=>(
               <div key={idx} className='flex flex-col justify-center p-10 lg:flex-row gap-10 lg:gap-40 text-[#2e4f22]  '>
              <span className='text-8xl font-extralight font-[sans] '>{info.id}</span>
              <div className='flex flex-col'>
                <h1 className='text-4xl font-medium lg:max-w-80'>{info.title}</h1>
              <p className='text-lg lg:max-w-90 font-[]'>{info.para}</p>
              </div>
                <div className='  md:h-180 md:w-180 rounded-2xl bg-[#f5f7f6] '><img className='object-contain h-full w-full ' src={info.img} alt="" /></div>
             </div>

            ))}
             
          </div>
    </section>
  )
}

export default SuggestionList