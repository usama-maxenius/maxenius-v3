import React from 'react'
// import ProductDesign from './ProductDesign/ProductDesign'
import Mockdata from './Mockdata'
import Navbar from '@components/common/Navbar'

import Hero from '@components/sections/Hero'




export default function Page() {
  return (
     <>
      {/* Navbar text black */}
      <Navbar
       textColor="black" />

      <section className="pt-15 bg-white">
        <div className=" mx-auto text-center">
          
          
        <div className="relative z-10">
  <Mockdata />
</div>

<div className="relative z-0  -mt-100">
  <Hero />
</div>


        </div>
      </section>
    </>
   
   
  )
}

