// import React from 'react'
// import MockData from './MockData'

// const IndustryWork = () => {
//   return (
//     <section className="flex justify-center items-center  mb-50">
//       {/* Wrapper with max-width and center */}
//       <div className="flex justify-center mx-auto max-w-[1600px] w-full gap-40 mt-[120px]">
        
//         {/* Left Side Content */}
//         <div className="w-[40%] pl-8">   {/* 👈 40% + thoda right shift */}
//           <div className="flex flex-col gap-4">
//             <h1 className="text-[48px] w-[80%] font-semibold leading-[57px]">
//               Industries We Work With
//             </h1>
//             <p className="text-[32px] font-normal leading-[47px]">
//               We provide a complete range of services to turn your great ideas
//               into profitable business solutions
//             </p>
//           </div>
//         </div>

//         {/* Right Side Content */}
//         <div className="w-[60%]">   {/* 👈 ab 60% width */}
//           <MockData />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default IndustryWork





import React from "react";
import MockData from "./MockData";
import { theme } from "../../../config/theme";

const IndustryWork = () => {
  return (
    <section className={`flex justify-center items-center mb-40`}>
      {/* Wrapper with max-width and center */}
      <div
  className={`${theme.spacing.container} flex flex-col xl:flex-row justify-center w-full gap-20 lg:gap-40 mx-auto items-center mt-[120px]`}
>
  {/* Left Side Content */}
  <div className="w-full lg:w-[40%] pl-0 lg:pl-8 text-center lg:text-left">
    <div className="flex flex-col gap-4 mt-[-250px]">
      <h4
        className={`${theme.typography.heading.h4} w-full lg:w-[80%] leading-[57px] font-semibold ${theme.colors.brand.senior} mx-auto lg:mx-0`}
      >
        Industries We Work With
      </h4>
      <h6
        className={`${theme.typography.heading.h6} font-normal pt-10 leading-[47px] ${theme.colors.brand.junior} w-full lg:w-auto mx-auto lg:mx-0`}
      >
        We provide a complete range of services to turn your great ideas
        into profitable business solutions
      </h6>
    </div>
  </div>

  {/* Right Side Content */}
  <div className="w-full lg:w-[60%] mt-10 lg:mt-0">
    <MockData />
  </div>
</div>

    </section>
  );
};

export default IndustryWork;
