import { theme } from '@config/theme';
import React from 'react'
import Image from 'next/image'

const MockData2 = () => {

     const logos = [
    'airtable.png', 'fivetran.png', 'pendo.png',
    'airbnb.png', 'elastic.png', 'airtable.png', 'airbnb.png',
  ];
  return (
     <div className={`mb-20  border ${theme.colors.border.base} overflow-hidden`}>
             <div className="flex flex-wrap w-full">
               {/* Left Side */}
               <div className="py-4 w-full sm:w-[300px] bg-transparent border-b  border-r border-white/30">
                 <div className="flex items-start ml-12 space-x-3">
                  <Image
  src="/assets/herosection/star.png"
  alt="star"
  width={24}
  height={20}
  unoptimized
  className="w-6 h-5"
/>

                   <span className="text-white text-lg leading-[22px] font-medium">
                     Trusted by industry leaders
                   </span>
                 </div>
                 <span className="text-white font-normal text-base leading-[26px] ml-20 block">
                   500+ clients
                 </span>
               </div>
   
               {/* Logos */}
               <div className="flex flex-wrap justify-between items-center flex-1 gap-8">
                 {logos.map((logo, index) => (
                   <div
                     key={index}
                     className="w-36 h-12 flex items-center justify-center rounded-full"
                   >
                     <Image
  src={`/assets/herosection/${logo}`}
  alt={logo.replace('.png', '')}
  width={120}
  height={40}
  unoptimized
/>

                   </div>
                 ))}
               </div>
             </div>
           </div>
  )
}

export default MockData2