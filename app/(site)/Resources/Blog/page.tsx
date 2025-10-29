import React from 'react'
import Blog from './Blog'
import OptimizingCss from './OptimizingCss/OptimizingCss'
import Products from './Products/Products'
import WorkTogether from '@components/sections/WorkTogether'





export default function Page() {
  return (
    <div>
    <Blog/>
     <OptimizingCss/>
     <Products/>
     <WorkTogether/>
   
    </div>
  )
}

