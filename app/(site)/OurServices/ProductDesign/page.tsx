import React from 'react'
import ProductDesign from './ProductDesign'
import WorkTogether from '@components/sections/WorkTogether'
import DesignWork from './DesignWork/DesignWork'
import Technologies from './Technologies/Technologies'
// import ProductDesign from './ProductDesign/ProductDesign'




export default function Page() {
  return (
    <div>
     <ProductDesign/>  
     <DesignWork/>
     <Technologies/>
     <WorkTogether/>  
     
   
    </div>
  )
}

