// import React from 'react'
// import Mock2 from './Mock2'



// const Testimonial = () => {
//   return (
//     <section  className={`w-full   border-b border-gray-800
//                   bg-[linear-gradient(to_bottom_left,black_0%,black_80%,rgba(196,38,48,1)_100%)]


//  opa overflow-hidden`}>
//     <div className='flex mx-auto max-w-[1600px] justify-center mb-40 mt-60'>
//     <div className='w-1/2'>
//         <p className='text-[20px] text-[#C42630] font-bold leading-[100%]'>TESTIMONIALS</p>
//         <h2 className='text-[64px] w-[80%] text-[#FFFFFF] leading-[67px] font-semibold'>What Clients Say About Our Services</h2>
//         <p className='text-[20px]  w-[52%] text-[#FFFFFF] leading-[30px] font-normal mt-20 '>Lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget tempor erat aliquet ac. Tellus malesuada ut purus quis penatibus donec.</p>
//     </div>
//     <div>

//     </div>
//     <Mock2/>
//     </div>

//     </section>
//   )
// }

// export default Testimonial





import React from 'react'
import Mock2 from './Mock2'
import { theme } from "../../../config/theme"

const Testimonial = () => {
  return (
    <section
      className={`w-full border-b ${theme.colors.border.base} overflow-hidden`}
      style={{ background: theme.colors.background.gradient3 }}
    >
      <div
        className={`flex flex-col xl:flex-row ${theme.spacing.container} justify-center mb-10 lg:mb-40 mt-10 lg:mt-40 gap-12 lg:gap-0`}
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p
            className={`${theme.typography.paragraph.p2} ${theme.colors.brand.primary} font-bold leading-[100%]`}
          >
            TESTIMONIALS
          </p>
          <h2
            className={`w-full lg:w-[80%] ${theme.typography.heading.h2} ${theme.colors.text.inverse} mx-auto lg:mx-0`}
          >
            What Clients Say About Our Services
          </h2>
          <p
            className={`w-full lg:w-[52%] mt-10 lg:mt-20 ${theme.typography.paragraph.p2} ${theme.colors.text.inverse} font-normal leading-[30px] mx-auto lg:mx-0`}
          >
            Lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget
            tempor erat aliquet ac. Tellus malesuada ut purus quis penatibus
            donec.
          </p>
        </div>

        {/* Right Section with Mock2 */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-10 lg:mt-0">
          <Mock2 />
        </div>
      </div>
    </section>
  )
}

export default Testimonial

