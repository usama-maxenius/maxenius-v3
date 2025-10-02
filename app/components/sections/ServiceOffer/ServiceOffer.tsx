// import React from 'react'
// import { ArrowUpRight } from "lucide-react";

// const ServiceOffer = () => {
//   return (
//     <section className="min-h-screen w-full flex items-center justify-center pt-50 pb-50">
//         <div className='text-center  mx-auto'>
//             <h1 className='text-[55px] text-[#0E0E0E] leading-[57px] font-semibold'>Services We Offer</h1>
//             <p className='text-[24px] pt-10 w-[65%] mx-auto font-normal text-[#363636] leading-[38px] '>We enable agencies to focus on what they do best—by championing the very ideas that made clients seek you out in the first place.</p>
//             <div className='flex items-center justify-between pt-40 mx-auto max-w-[1600px] px-[20px]  gap-70'>
//                 <div >
//                     <div className='text-left '>
//                         <img src="/assets/serviceoffer/ideation.svg" alt="PRODUCT iDEATION" />
//                         <h3 className='text-[#0E0E0E] text-[24px] font-semibold leading[57px]'>PRODUCT IDEATION</h3>
//                         <p className='text-[18px] w-[95%] pt-5 text-[#363636] font-normal leading-[29px]'>We enable agencies to focus on what they do best—by championing the very ideas that made clients seek you out in the first place</p>
//                         <button className='flex text-[16px] text-[#C42630] leading-[20px] p-[10px]  mt-[20px] border border-[#C42630] rounded-full font-medium'>Learn Now <span> <ArrowUpRight className='text-[#C42630] h-6 w-6'/></span></button>
//                     </div>
//                     <div  className='text-left pt-35  '>
//                          <img src="/assets/serviceoffer/development.svg" alt="PRODUCT DESIGNING" />
//                         <h3 className='text-[#0E0E0E] text-[24px] font-semibold leading[57px]'>PRODUCT DEVELOPMENT</h3>
//                         <p className='text-[18px] pt-5 w-[95%] text-[#363636] font-normal leading-[29px]'>We enable agencies to focus on what they do best—by championing the very ideas that made clients seek you out in the first place</p>
//                          <button className='flex text-[16px] text-[#C42630] leading-[20px] p-[10px]  mt-[20px] border border-[#C42630] rounded-full font-medium'>Learn Now <span> <ArrowUpRight className='text-[#C42630] h-6 w-6'/></span></button>
//                     </div>
//                 </div>
//                 <div >
//                     <img src="/assets/serviceoffer/daigram.svg" alt="Daigram" className='w-[600px] ' />
//                 </div>
//                 <div >
//                     <div  className='text-left  pt-15 '>
//                          <img src="/assets/serviceoffer/designing.svg" alt="PRODUCT DEVELOPMENT" />
//                         <h3 className='text-[#0E0E0E] text-[24px] font-semibold leading[57px]'>PRODUCT DESIGNING</h3>
//                         <p className='text-[18px] pt-5 w-[95%] text-[#363636] font-normal leading-[29px]'>We enable agencies to focus on what they do best—by championing the very ideas that made clients seek you out in the first place</p>
//                          <button className='flex text-[16px] text-[#C42630] leading-[20px] p-[10px]  mt-[20px] border border-[#C42630] rounded-full font-medium'>Learn Now <span> <ArrowUpRight className='text-[#C42630] h-6 w-6'/></span></button>
//                     </div>
//                     <div  className='text-left pt-30 ' >
//                          <img src="/assets/serviceoffer/growth.svg" alt="PRODUCT GROWTH & SCALEBILITY" />
//                         <h3 className='text-[#0E0E0E] w-[70%] text-[24px] font-semibold leading[57px]'>PRODUCT GROWTH & SCALEBILITY</h3>
//                         <p className='text-[18px] pt-5 w-[95%] text-[#363636] font-normal leading-[29px]'>We enable agencies to focus on what they do best—by championing the very ideas that made clients seek you out in the first place</p>
//                          <button className='flex text-[16px] text-[#C42630] leading-[20px] p-[10px]  mt-[20px] border border-[#C42630] rounded-full font-medium'>Learn Now <span> <ArrowUpRight className='text-[#C42630] h-6 w-6'/></span></button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default ServiceOffer





import React from "react"
import { ArrowUpRight } from "lucide-react"
import { theme } from "../../../config/theme"

const ServiceOffer = () => {
  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center ${theme.spacing.section} `}
    >
      <div className="text-center mx-auto">
        {/* Heading */}
        <h3
          className={`${theme.typography.heading.h3} ${theme.colors.brand.senior} font-semibold leading-[57px]`}
        >
          Services We Offer
        </h3>

        {/* Description */}
        <p
          className={`${theme.typography.paragraph.p1} ${theme.colors.brand.junior} leading-[39px] font-medium pt-10 w-[65%] mx-auto`}
        >
          We enable agencies to focus on what they do best—by championing the
          very ideas that made clients seek you out in the first place.
        </p>

        {/* Content Wrapper */}
        <div className="flex items-center justify-between pt-40 mx-auto max-w-[1600px] px-[20px] gap-[70px]">
          {/* Left Side */}
          <div>
            {/* Card 1 */}
            <div className="text-left">
              <img
                src="/assets/serviceoffer/ideation.svg"
                alt="PRODUCT IDEATION"
              />
              <p
                className={`${theme.typography.paragraph.p1} ${theme.colors.brand.senior} leading-[57px] font-semibold`}
              >
                PRODUCT IDEATION
              </p>
              <p
                className={`${theme.typography.paragraph.p3} ${theme.colors.brand.junior} leading-[29px] pt-5 w-[55%]`}
              >
                We enable agencies to focus on what they do best—by championing
                the very ideas that made clients seek you out in the first
                place.
              </p>
              <button
                className={`flex items-center gap-2 mt-5  border ${theme.colors.brand.primary} ${theme.components.button.secondary}`}
              >
                Learn Now{" "}
                <ArrowUpRight
                  className={`${theme.colors.brand.primary} h-6 w-6`}
                />
              </button>
            </div>

            {/* Card 2 */}
            <div className="text-left pt-45">
              <img
                src="/assets/serviceoffer/development.svg"
                alt="PRODUCT DEVELOPMENT"
              />
              <p
                className={`${theme.typography.paragraph.p1} ${theme.colors.brand.senior} leading-[57px] font-semibold`}
              >
                PRODUCT DEVELOPMENT
              </p>
              <p
                className={`${theme.typography.paragraph.p3} ${theme.colors.brand.junior} leading-[29px] pt-5 w-[55%]`}
              >
                We enable agencies to focus on what they do best—by championing
                the very ideas that made clients seek you out in the first
                place.
              </p>
              <button
                className={`flex items-center gap-2 mt-5  border ${theme.colors.brand.primary} ${theme.components.button.secondary}`}
              >
                Learn Now{" "}
                <ArrowUpRight
                  className={`${theme.colors.brand.primary} h-6 w-6`}
                />
              </button>
            </div>
          </div>

          {/* Middle Image */}
          <div>
            <img
              src="/assets/serviceoffer/daigram.svg"
              alt="Daigram"
              className="w-[500px]"
            />
          </div>

          {/* Right Side */}
          <div>
            {/* Card 3 */}
            <div className="text-left pt-[15px] pl-45">
              <img
                src="/assets/serviceoffer/designing.svg"
                alt="PRODUCT DESIGNING"
              />
              <p
                className={`${theme.typography.paragraph.p1} ${theme.colors.brand.senior} leading-[57px] font-semibold`}
              >
                PRODUCT DESIGNING
              </p>
              <p
                className={`${theme.typography.paragraph.p3} ${theme.colors.brand.junior} leading-[29px] pt-5 w-[55%]`}
              >
                We enable agencies to focus on what they do best—by championing
                the very ideas that made clients seek you out in the first
                place.
              </p>
              <button
                className={`flex items-center gap-2 mt-5  border ${theme.colors.brand.primary} ${theme.components.button.secondary}`}
              >
                Learn Now{" "}
                <ArrowUpRight
                  className={`${theme.colors.brand.primary} h-6 w-6`}
                />
              </button>
            </div>

            {/* Card 4 */}
            <div className="text-left pt-45 pl-45">
              <img
                src="/assets/serviceoffer/growth.svg"
                alt="PRODUCT GROWTH & SCALEBILITY"
              />
              <p
                className={`${theme.typography.paragraph.p1} ${theme.colors.brand.senior} leading-[57px] font-semibold`}
              >
                PRODUCT GROWTH & SCALEBILITY
              </p>
              <p
                className={`${theme.typography.paragraph.p3} ${theme.colors.brand.junior} leading-[29px] pt-5 w-[55%]`}
              >
                We enable agencies to focus on what they do best—by championing
                the very ideas that made clients seek you out in the first
                place.
              </p>
             <button
                className={`flex items-center gap-2 mt-5  border ${theme.colors.brand.primary} ${theme.components.button.secondary}`}
              >
                Learn Now{" "}
                <ArrowUpRight
                  className={`${theme.colors.brand.primary} h-6 w-6`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceOffer
