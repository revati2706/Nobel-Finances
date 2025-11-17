import React from 'react'
import fileIcon from "../../assets/icon/fileIcon.avif"
import familyIcon from "../../assets/icon/familyIcon.avif"
import businessIcon from "../../assets/icon/businessIcon.png"
import financeImg from "../../assets/img/financeImg.webp"
import CustomPlan from './CustomPlan'
const Product = () => {
  return (
   <section>
    <div className='h-[600px] w-full'>
        <img src={financeImg} alt=""  className='h-full w-full object-cover'/>
    </div>
    
    <div className='md:flex-row md:justify-around flex flex-col p-10 gap-5  items-center '>
        <h1 className='text-3xl md:text-6xl font-medium text-[#2e4f22] lg:max-w-1/3 '>Smart Finance For everyone</h1>
        <p className='text-sm text-justify text-[#2e4f22] lg:max-w-1/3  lg:text-lg'>At Noble Finance, we believe that financial confidence should be accessible to everyone whether you’re a solo entrepreneur, managing a growing family, or running a small business.</p>
    </div>

<div className='flex flex-col p-3 lg:flex-row lg:p-10 md:p-10'>

<div className='p-5 flex gap-10 flex-col border-t lg:border-l'>
        
        <img className='h-12 w-12' src={fileIcon} alt="" />

        <h1 className='text-2xl text-[#2e4f22] '>For Freelancers</h1>
       
       <h2 className='text-md text-[#2e4f22]'>Simplicity &amp; Control</h2>

        <p className='text-md text-[#2e4f22]'>Stay in charge of your income with seamless expense tracking, automated deductions, and smart tax strategies—so you can focus on doing what you love.</p>
    </div>


    <div className='p-5 flex gap-10 flex-col lg:border-l border-t'>
        
        <img className='h-12 w-12' src={familyIcon} alt="" />

        <h1 className='text-2xl text-[#2e4f22] '>For Families</h1>
       
       <h2 className='text-md text-[#2e4f22]'>Stability &amp; Security</h2>

        <p className='text-md text-[#2e4f22]'> From budgeting tools to tax-saving insights, we help you plan for the future, maximize refunds, and keep your household finances running smoothly.</p>
    </div>


    <div className='p-5 flex gap-10 flex-col lg:border-l  border-t'>
        
        <img className='h-12 w-12' src={businessIcon} alt="" />

        <h1 className='text-2xl text-[#2e4f22] '>For Small Businesses</h1>
       
       <h2 className='text-md text-[#2e4f22]'>Stability &amp; Security</h2>

        <p className='text-md text-[#2e4f22]'>Effortless bookkeeping, payroll solutions, and expert-backed tax support—so you can spend less time on finances and more time scaling your business.</p>
    </div>
</div>
    
<CustomPlan/>
   </section>
  )
}

export default Product