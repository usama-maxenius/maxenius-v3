// import { ArrowUpRight } from 'lucide-react'
// import React from 'react'

// const WorkTogether = () => {
//   return (
//     <section
//       className="relative  w-full bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: "url('/assets/WorkTogether/background.svg')",
//       }}
//     >
//       <div className="flex items-center justify-center  max-w-[1600px] mx-auto pt-40 pb-40 px-6 gap-10">
//         {/* Left Content */}
//         <div className="w-[70%]">
//           <h1 className="text-[120px] w-[800px] text-[#FFFFFF]  leading-[120px] font-bold ">
//             HAVE  
//           </h1>
//           <h1 className="text-[120px] w-[800px] text-[#FFFFFF]  leading-[120px] font-bold ">A PROJECT?</h1>
//           <h1 className="text-[120px] w-[800px] text-[#FFFFFF]  leading-[120px] font-bold ">CONTACT US</h1>
//         </div>

//         {/* Right Content */}
//         <div className="w-[30%] pt-30">
//           <img src="./assets/WorkTogether/arrowup.svg" alt="arrow" className="pl-[196px]" />
//           <p className="text-[20px] text-[#FFFFFF] pt-40 leading-[30px] font-normal w-[360px] mb-8">
//             lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget tempor erat
//             aliquet ac. Tellus malesuada ut purus quis penatibus donec.
//           </p>
//           <button className="bg-[#C42630] text-[#FFFFFF] ml-[-25] py-[15px] px-[25px] text-[18px] leading-[20px] font-bold rounded-full flex items-center">
//             Let&apos;s Work Together
//             <ArrowUpRight className="w-[14px] ml-[10px]" />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WorkTogether




import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { theme } from "../../../config/theme";

const WorkTogether = () => {
  return (
    <section
      className={`relative w-full bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: "url('/assets/WorkTogether/background.svg')",
      }}
    >
      <div
        className={`flex flex-col 2xl:flex-row justify-center ${theme.spacing.container} pt-40 pb-40 gap-10`}
      >
        {/* Left Content */}
       <div className="w-full lg:w-[70%] text-center lg:text-left">
  <h1
    className={`${theme.typography.heading.h2} md:${theme.typography.heading.h0} lg:${theme.typography.heading.h1} ${theme.colors.text.inverse} leading-[130px] font-bold  lg:w-[800px]`}
  >
    HAVE
  </h1>
  <h1
    className={`${theme.typography.heading.h2} md:${theme.typography.heading.h0} lg:${theme.typography.heading.h1} ${theme.colors.text.inverse} leading-[130px] font-bold lg:w-[800px]`}
  >
    A PROJECT?
  </h1>
  <h1
    className={`${theme.typography.heading.h2} md:${theme.typography.heading.h0} lg:${theme.typography.heading.h1} ${theme.colors.text.inverse} leading-[130px] font-bold lg:w-[800px]`}
  >
    CONTACT US
  </h1>
</div>


        {/* Right Content */}
        <div className="w-full lg:w-[30%] pt-10 lg:pt-30 flex flex-col items-center lg:items-start">
          <Image
            src="/assets/WorkTogether/arrowup.svg"
            alt="arrow"
            width={400}
            height={50}
            unoptimized
            className="w-[100px] md:w-[200px] lg:w-[400px] lg:pl-[196px] mb-8"
          />

          <p
            className={`${theme.typography.paragraph.p2} ${theme.colors.text.inverse} pt-10 lg:pt-40 leading-[30px] w-[90%] lg:w-[360px] mb-8 text-center lg:text-left`}
          >
            lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget
            tempor erat aliquet ac. Tellus malesuada ut purus quis penatibus
            donec.
          </p>

          <button
            className={`${theme.components.button.primary} text-[18px] leading-[20px] font-bold flex items-center justify-center lg:justify-start`}
          >
            Let&apos;s Work Together
            <ArrowUpRight className="w-[14px] ml-[7px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
