// import React from "react"

// const ChooseUs = () => {
//   return (
//     <section className="min-h-screen w-full bg-[#0F0F0F] flex items-center py-20">
//       <div className="max-w-[1200px] mx-auto pt-[100px] text-center">
//         {/* Heading */}
//         <p className="text-[20px] text-[#C42630] leading-[100%] font-bold">
//           Why choose us
//         </p>
//         <h1 className="text-[55px] w-[80%] mx-auto text-[#FFFFFF] leading-[60px] font-semibold mt-4 mb-12">
//           People choose us because we serve the best for everyone
//         </h1>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-50 gap-y-20">
//           {/* Card 1 */}
//           <div className="flex items-start gap-4 w-[80%]">
//             <img
//               src="/assets/chooseus/dedicated.svg"
//               alt="Dedicated project manager"
//               className="w-16 h-16 object-contain"
//             />
//             <div className="text-left">
//               <h2 className="text-[24px] font-semibold text-[#FFFFFF] leading-[32px]">
//                 Dedicated project manager
//               </h2>
//               <p className="text-[20px] w-[85%] pt-7  text-[#FFFFFF] opacity-70 leading-[29px]">
//                 Lorem ipsum dolor sit amet consectetur. Ut leo tempus est
//                 pharetra egestas dolor lobortis at a.
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="flex items-start gap-4 w-[78%]">
            
//             <img
//               src="/assets/chooseus/organisedtask.svg"
//               alt="Organized tasks"
//               className="w-16 h-16 object-contain"
//             />
//             <div className="text-left">
//               <h2 className="text-[24px] font-semibold text-[#FFFFFF] leading-[32px]">
//                 Organized tasks
//               </h2>
//               <p className="text-[20px] w-[87%] pt-7  text-[#FFFFFF] opacity-70 leading-[29px]">
//                 Lorem ipsum dolor sit amet consectetur. Ut leo tempus est
//                 pharetra egestas dolor lobortis at a.
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="flex items-start gap-4 w-[78%]">
//             <img
//               src="/assets/chooseus/easyfeedback.svg"
//               alt="Easy feedback sharing"
//               className="w-16 h-16 object-contain"
//             />
//             <div className="text-left">
//               <h2 className="text-[24px]  font-semibold text-[#FFFFFF] leading-[32px]">
//                 Easy feedback sharing
//               </h2>
//               <p className="text-[20px] w-[87%] pt-7  text-[#FFFFFF] opacity-70 leading-[29px]">
//                 Lorem ipsum dolor sit amet consectetur. Ut leo tempus est
//                 pharetra egestas dolor lobortis at a.
//               </p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="flex items-start gap-4 w-[78%]">
//             <img
//               src="/assets/chooseus/nevermiss.svg"
//               alt="Never miss deadline"
//               className="w-16 h-16 object-contain"
//             />
//             <div className="text-left">
//               <h2 className="text-[24px] font-semibold text-[#FFFFFF] leading-[32px]">
//                 Never miss deadline
//               </h2>
//               <p className="text-[20px] w-[87%] pt-7 text-[#FFFFFF] opacity-70 leading-[29px]">
//                 Lorem ipsum dolor sit amet consectetur. Ut leo tempus est
//                 pharetra egestas dolor lobortis at a.
//               </p>
//             </div>
//           </div>
//         </div>
//           <button className="bg-[#C42630] py-[15px] px-[25px]  rounded-full mt-[40px]">
//         <span className="text-[#FFFFFF] text-[18px] leading-[20px]">let Talk</span>
//       </button>
//       </div>
    
//     </section>
//   )
// }

// export default ChooseUs




"use client"
import React from "react"

import { theme } from "../../../config/theme"
import ChooseCard from "./ChooseCard"



const ChooseUs = () => {
  return (
   <section
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat py-20"
  style={{ backgroundImage: "url('/assets/chooseus/choose.svg')" }}
>
      <div className={`${theme.spacing.scontainer} pt-[100px] text-center`}>
        {/* Heading */}
        <p
          className={`${theme.typography.paragraph.p2} ${theme.colors.brand.primary} leading-[100%] font-bold pt-[100px]`}
        >
          Why choose us
        </p>
        <h2
          className={`${theme.typography.heading.h2} ${theme.colors.text.inverse} w-[90%] leading-[60px] mx-auto font-semibold mt-4 mb-12`}
        >
          People choose us because we serve the best for everyone
        </h2>

       <div>
        <ChooseCard/>
       </div>

        {/* Button */}
        <button className={`${theme.components.button.primary} mt-[40px]`}>
          <span
            className={`${theme.typography.paragraph.p2} ${theme.colors.text.inverse}`}
          >
            Let’s Talk
          </span>
        </button>
      </div>
    </section>
  )
}

export default ChooseUs
