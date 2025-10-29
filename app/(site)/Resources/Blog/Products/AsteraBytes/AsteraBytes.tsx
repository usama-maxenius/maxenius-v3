import { theme } from '@config/theme'
import React from 'react'

const AsteraBytes = () => {
  return (
   <section className={`bg-blue-900 mt-50 w-[478px] h-[600px] rounded-3xl px-10 py-20 text-left`}>
         <div className=" bg-blue-900 w-full ">
           {/* Heading */}
           <h6 className={`${theme.typography.heading.h6} ${theme.colors.brand.accent} leading-[28px] font-normal mb-5`}>Sign Up For</h6>
           <h5 className={`${theme.typography.heading.h5} ${theme.colors.brand.accent} leading-[28px] font-semibold mb-10   `}>AsteraBytes!</h5>
   
           {/* Subtext */}
           <p className={`${theme.typography.paragraph.p4} ${theme.colors.brand.accent} leading-[25px] font-normal mb-10 w-[90%]`}>
            Get monthly data insights, trends, best practices, and news in your inbox.
           </p>
   
           {/* Form */}
           <form className="flex flex-col ">
             
             <input
               type="text"
               placeholder="Enter Your Name"
               className={` w-[408] h-[55.77] ${theme.typography.paragraph.p4} ${theme.colors.brand.senior}  leading-[47.29px]  rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C42630] mb-10`}
               style={{
                   background: theme.colors.background.light
               }}
             />
             
             <input
               type="email"
               placeholder="Enter Your Email"
               className={` w-[408] h-[55.77] ${theme.typography.paragraph.p4} ${theme.colors.brand.senior} leading-[47.29px]  rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C42630]`}
               style={{
                   background: theme.colors.background.light
               }}
             />
   
             {/* Subscribe Button */}
             <button
               type="submit"
               className={`py-[13.38px] px-[22.8px] rounded-md w-[165px] h-[55px] mt-25 bg-amber-600 ${theme.colors.brand.accent} ${theme.typography.paragraph.p3} leading-[17.84px] font-bold `}
               
             >
               Subscribe
             </button>
           </form>
         </div>
       </section>
  )
}

export default AsteraBytes