// import React from 'react'
// import Slider from './Slider'
// import { ArrowRight } from 'lucide-react'

// const Portfolio = () => {
//   return (
//     <section
//       className={`w-full  items-center  mb-12
//                   bg-[linear-gradient(to_bottom_right,black_0%,black_75%,rgba(196,38,48,0.9)_100%)] opa overflow-hidden`}
//     >
//       <div className="mt-20 mx-auto text-center px-6 pt-20 max-w-[1200px]">
//         <p className="text-[20px] leading-[100%] text-[#C42630] font-bold">PORTFOLIO</p>
//         <h1 className="text-[55px]  text-white font-semibold leading-[60px] mt-4 mb-12">
//           Explore some of the transformative journeys of Maxenius global clients
//         </h1>
//       </div>

//       <div className='pt-20 '> 
//       <Slider/>
//       </div>
//       <button className='flex mx-auto text-[20px] leading-[17px] text-white pt-15 pb-25 pl-5 '>
//         See all works <ArrowRight className='pb-2'/>
//       </button>


//     </section>
//   )
// }

// export default Portfolio



import React from "react"
import Slider from "./Slider"
import { ArrowRight } from "lucide-react"
import { theme } from "../../../config/theme"

const Portfolio = () => {
  return (
    // <section
    //   className={`relative w-full items-center  bg-cover bg-center bg-no-repeat   mb-12 ${theme.spacing.section}`}
    //   style={{ backgroundImage:"url('/assets/portfolio/portfolio.svg')" }}
    // >
       <section
      className={`relative w-full items-center     mb-12 py-10`}
      style={{
        background: theme.colors.background.gradient3
      }}
      // style={{ backgroundImage:"url('/assets/portfolio/portfolio.svg')" }}
    >
      {/* Header */}
      <div className={`mt-0 text-start  lg:text-center lg:px-6 ${theme.spacing.scontainer} `}>
        <p
          className={`${theme.typography.paragraph.p2} ${theme.colors.brand.primary} leading-[100%] font-bold`}
        >
          PORTFOLIO
        </p>
        <h3
          className={`${theme.typography.heading.h4} lg:${theme.typography.heading.h3} ${theme.colors.brand.accent} mt-4 mb-12 leading-[60px]`}
        >
          Explore some of the transformative journeys of Maxenius global clients
        </h3>
      </div>

      {/* Slider */}
      <div className="pt-20">
        <Slider />
      </div>

      
      <p
        className={`flex items-center gap-2 mx-auto justify-center mt-12 ${theme.typography.paragraph.p2} ${theme.colors.brand.accent} leading-[17px]`}
      >
        See all works
        <ArrowRight className="h-6 w-6" />
      </p>
    </section>
  )
}

export default Portfolio

