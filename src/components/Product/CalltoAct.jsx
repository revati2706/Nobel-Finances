import React from 'react'
import { Link } from 'react-router-dom'
const CalltoAct = () => {
  return (
    <section className='w-full h-[500px] flex items-center justify-center'>
        <div className='flex flex-col  items-center text-center gap-10 p-10'>
        <p className='max-w-80 md:max-w-none lg:max-w-[900px] md:text-4xl text-3xl text-[#2e4f22]'>
        We believe that tax filing should be seamless, accurate, and stress-free. Get started with Noble Finance today!
        </p>

     <Link to='/book'>
     <button className='bg-[#2e4f22] px-4 py-3 rounded-full text-white'>Connect with our experts</button>
     </Link>      </div>
       
    </section>
  )
}

export default CalltoAct