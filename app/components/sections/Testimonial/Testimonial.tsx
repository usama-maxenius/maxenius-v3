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
      style={{ background: theme.colors.background.gradient3 }} // ✅ gradient via theme
    >
      <div className={`flex ${theme.spacing.container}  justify-center mb-40 mt-60`}>
        {/* Left Section */}
        <div className="w-1/2">
          <p
            className={`${theme.typography.paragraph.p2} ${theme.colors.brand.primary} font-bold  leading-[100%]`}
          >
            TESTIMONIALS
          </p>
          <h2
            className={`w-[80%] ${theme.typography.heading.h2} ${theme.colors.text.inverse}`}
          >
            What Clients Say About Our Services
          </h2>
          <p
            className={`w-[52%] mt-20 ${theme.typography.paragraph.p2} ${theme.colors.text.inverse} font-normal leading-[30px]`}
          >
            Lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget
            tempor erat aliquet ac. Tellus malesuada ut purus quis penatibus
            donec.
          </p>
        </div>

        {/* Right Section with Mock2 */}
        <div>
          <Mock2 />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
