// import React from 'react'

// const DiscussProject = () => {
//   return (
//     <section className="flex justify-center items-center ">
//       {/* Main container */}
//       <div className="flex items-center justify-center mx-auto max-w-[1600px] w-full gap-8 mt-[120px]">
        
//         {/* Left: Image */}
//         <div className="w-1/2 flex  items-center">
//           <img
//             src="/assets/discussproject/Layer_1.png"
//             alt="Discuss Project"
//             className="w-[592px] h-[395.82px]"
//           />
//         </div>
        
//         {/* Right: Text */}
//         <div className="w-[45%] flex">
//           <div className="flex flex-col gap-4 text-left">
            
//             {/* Small top text */}
//             <p className="text-[18px] font-normal leading-[22px] m-0 p-0">
//               Let's Discuss Your Project
//             </p>

//             {/* Heading */}
//             <h2 className="text-[48px] font-semibold leading-[60px] m-0 p-0">
//               Feel empowered and supported by a team of dedicated professionals who are committed to your success.
//             </h2>

//             {/* Paragraph */}
//             <p className="text-[18px] font-normal leading-[30px] m-0 p-0">
//               Trust in our expertise to guide you through the complexities of technology outsourcing with ease and efficiency.
//             </p>

//             {/* Button */}
//             <button className="bg-[#C42630] text-white px-6 py-2 rounded-full  mt-4 w-fit">
//               Let's Talk
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default DiscussProject






import Image from 'next/image'
import React from "react";
import { theme } from "../../../config/theme";

const DiscussProject = () => {
  return (
    <section
      className={`${theme.spacing.section} flex justify-center items-center`}
    >
      {/* Main container */}
      <div
        className={`${theme.spacing.container} flex flex-col xl:flex-row items-center justify-center gap-8 mt-[120px] w-full mx-auto mb-[100px]`}
      >
        {/* Left: Image */}
        <div className="w-1/2 flex items-center">
          <Image
            src="/assets/discussproject/Layer_1.png"
            alt="Discuss Project"
            width={592}
            height={395.82}
            className="object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="w-[45%] flex">
          <div className="flex flex-col gap-4 mt-25 text-left w-[90%]">
            {/* Small top text */}
            <p className={`${theme.typography.paragraph.p3} font-normal leading-[22px]`}>
              Let&apos;s Discuss Your Project
            </p>

            {/* Heading */}
            <h4 className={`${theme.typography.heading.h4} leading-[60px] font-semibold `}>
              Feel empowered and supported by a team of dedicated professionals
              who are committed to your success.
            </h4>

            {/* Paragraph */}
            <p className={`${theme.typography.paragraph.p3} font-normal mt-10 leading-[30px]`}>
              Trust in our expertise to guide you through the complexities of
              technology outsourcing with ease and efficiency.
            </p>

            {/* Button */}
            <button className={`${theme.components.button.primary} font-bold leading-[20px] mt-8 w-fit`}>
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussProject;
