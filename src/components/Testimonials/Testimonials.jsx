import React, { useState } from 'react'

const Testimonials = () => {
    const [Bg, setBg] = useState("bg-white")
    const changeBackground=()=>{
        setBg(Bg=== "bg-white" ? "bg-[#2e4f22]" : "bg-white")
    }
  return (
    <section className='w-full min-h-[600px] flex  items-center flex-col  text-center'>
    <h1 className='capitalize text-3xl max text-[#2e4f22]  font-bold '>Hear From our happy clients</h1>
     
     
     <div className='flex md:flex-row flex-col items-center justify-between p-10 gap-10'>
       <div className='md:border-r-2 flex-1 flex md:gap-10 md:flex-col flex-row  '>
        <div onClick={changeBackground} className={`m-3 ${Bg} p-10 flex flex-col `}>
            <hr />
            <h1>Graphic Designer</h1>
            <h2>Ontario, Canada</h2>
        </div>
        <div onClick={changeBackground} className={`m-3 ${Bg} p-10 flex flex-col `}>
            <hr />
            <h1>Graphic Designer</h1>
            <h2>Ontario, Canada</h2>
        </div>
       </div>

       <div className='flex-2 flex flex-col'>
        <p className=''>"I used to worry about missing deductions, but with Noble Finance, I know I’m maximizing my savings.”</p>
        <h2 className='text-sm'>Margaret L., 24 years old</h2>
       </div>

     </div>
    </section>
  )
}

export default Testimonials