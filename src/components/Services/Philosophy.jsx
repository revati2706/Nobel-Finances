import React from 'react'
import finalcal from "../../assets/img/finalcal.avif"
import { Link } from 'react-router-dom'
const Philosophy = () => {
    const info=[
        {id:"01",
        para:"In empowering individuals and small businesses with the knowledge and tools they need to achieve lasting financial confidence."
        },
        {id:"02",para:"That personalized, trusted guidance, built on decades of experience, is the foundation of a successful financial partnership."},
        {id:"03",para:"In simplifying complex financial matters, providing clear, actionable strategies that pave the way for your financial well-being."}
    ]
  return (
   <section className='min-h-[900px] font-[nunito] text-[#2e4f22] flex flex-col items-start gap-20'>
    <div className=' flex flex-col self-start gap-20  '>
      <hr className='border-[#2e4f22]  lg:w-5/6' />
     
     <div className='flex flex-col p-5 items-center'>
         <div className='flex flex-col justify-center items-center p-20 gap-5 '>
        <span className='text-sm '>Philosophy</span>
        <h1 className='md:text-6xl text-3xl font-ligth text-[#2e4f22]'>We believe:</h1>
      </div>
     
     <div className='flex flex-col gap-5 items-center'>
         {info.map((i,idx)=>(
<div key={idx} className='flex flex-col  rounded-4xl p-10 md:px-30 md:py-20 text-center md:gap-5 gap-3 bg-[#d1f8db] lg:w-3/4'>
        <span>{i.id}</span>
        <p className='md:text-2xl text-xl'>{i.para}</p>
      </div>
      ))}
     </div>
     
      

     </div>

    
     
    </div>
     <div className='p-10 bg-[#f5f7f6] w-full flex flex-col md:flex-row-reverse md:gap-10 md:items-center md:justify-center lg:gap-20'>
        <div className='px-10 rounded-2xl bg-[#a0f2bd] md:h-95 md:w-95 lg:h-1/4  md:px-0 '><img className='h-full w-full' src={finalcal} alt="" /></div>
        <div className='flex flex-col items-center justify-center text-center gap-10 h-[400px] py-10 '>
            <h1 className='text-4xl md:max-w-90'>Say goodbye to taxes of the past</h1>
          <Link to='/book'><button className='text-sm bg-[#2e4f22] p-4 rounded-full text-white font-bold'>Connect with our experts</button></Link>  
        </div>
     </div>
   </section>
  )
}

export default Philosophy