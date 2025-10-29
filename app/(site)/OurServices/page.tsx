import React from 'react'
// import ProductDesign from './ProductDesign/ProductDesign'
import Mockdata from './Mockdata'
import Navbar from '@components/common/Navbar'
import Background from '@components/sections/Background/Background'




export default function Page() {
  return (
     <>
      {/* Navbar text black */}
      <Navbar
       textColor="black" />

      <section className="pt-15 bg-white">
        <div className=" mx-auto text-center">
          
          
          <Mockdata />
          <Background/>
        </div>
      </section>
    </>
   
   
  )
}

