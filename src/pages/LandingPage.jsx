import React from 'react'
import Hero from '../components/Hero/Hero'
import Features from '../components/Feature/Features'
import Testimonials from '../components/Testimonials/Testimonials'
import Product from '../components/Product/Product'
import CalltoAct from '../components/Product/CalltoAct'


const LandingPage = () => {
  return (
    <section>
        <Hero/>
        <Features/>
        {/* <Testimonials/> */}
       <Product/>
       <CalltoAct/>
    </section>
  )
}

export default LandingPage