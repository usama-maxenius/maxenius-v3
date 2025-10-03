import { theme } from '@config/theme'
import React from 'react'
import MockData from './MockData'
import MockData2 from './MockData2'

const Background = () => {
  return (
    <section
         className={`relative min-h-screen w-full ${theme.components.section.light} bg-cover bg-center`}
         style={{ backgroundImage: "url('/assets/herosection/globe.gif')" }}
       >
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/50 z-10" />
   
         {/* Main content */}
         <div className={`relative  z-20  pb-0`}>
          
   
           {/* Heading */}
           <h1 className={`${theme.colors.brand.accent} ${theme.spacing.container}  ${theme.typography.heading.h1} leading-[135px] font-semibold text-center mb-15 -mt-25`}>
            Everything Tech
           </h1>
           <p className={`${theme.colors.brand.accent} ${theme.spacing.container} ${theme.typography.paragraph.p1} text-center leading-[35px] font-normal mb-50`}>
                     We built several WordPress brands used by over 25 million websites.<br />
                     Subscribe to learn the lessons we wish we knew when started
                   </p>
           <div>
            <MockData2/>
           </div>
           <div>
            <MockData/>
           </div>
           </div>

   </section>
  )
}

export default Background