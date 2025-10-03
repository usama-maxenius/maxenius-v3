// import React from 'react'

// const OurProducts = () => {
//   return (
//     <section className='mt-30  w-full  items-center  mb-12'>
//         <div className="mt-20 mx-auto text-center px-6 max-w-[1600px]">
//             <h1 className='text-[64px]  leading-[57px] font-semibold pb-20'>Our Products</h1>
//             <p className='text-[20px] w-[65%] mx-auto leading-[30px] font-normal'>Lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget tempor erat aliquet ac. Tellus malesuada ut purus quis penatibus donec.</p>
//             <div className="flex justify-center items-center mx-auto pt-30 ">
//   {/* Black Circle (top layer, thoda overlap) */}
//   <div className="w-[213.64px] h-[213.64px] text-[18px] leading-[18.36px] font-medium 
//                   bg-black text-white flex items-center justify-center rounded-full z-10
//                   -mr-10">
//     Maxinventory
//   </div>

//   {/* White Circle (piche rahega) */}
//   <div className="w-[213.64px] h-[213.64px] text-[18px] leading-[18.36px] font-medium 
//                   bg-white text-black border flex items-center justify-center rounded-full">
//     Reservation & Ticketing
//   </div>
// </div>
//         <div className='flex items-center  mx-auto mt-0 gap-30'>

//     <div >
//   <div className='mt-50'>
//     <img src="./assets/ourproducts/dashboard.svg" alt="" className='w-[789px] h-[638px]' />
//   </div>

//   {/* Button */}
//   <div className="flex justify-center ">
//     <button className="text-[18px] py-[15px] px-[25px] leading-[20px] text-white bg-[#C42630] font-bold rounded-full">
//       Explore Maxinventory
//     </button>
//   </div>
//   </div>




//             <div className='w-1/2 text-left '>
//               <h2 className='text-[36px] text-[#0E0E0E] leading-[57px] font-bold'>Maxinventory System</h2>
//               <p className='text-[20px] w-[85%] text-[#363636] leading-[30px] font-normal'>Lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget tempor erat aliquet ac. Tellus malesuada ut purus quis penatibus donec.</p>
//               <ol className="  pt-14 space-y-4">
//   <li className="ml-2 mr-[200px] pl-2 py-4  text-[20px] text-white leading-[155%] rounded-full bg-[#111111]"><span className='px-4 mr-1 bg-[#3D3D3D] rounded-full'>1</span>Reporting and Analytics</li>
//   <li className="ml-8 mr-[170px] pl-2 py-4 text-[20px] text-white leading-[155%] rounded-full bg-[#111111]"><span className='px-4 mr-1 bg-[#3D3D3D] rounded-full'>2</span>Inventory Forecasting</li>
//   <li className="ml-16 mr-[130px] pl-2 py-4 text-[20px] text-white leading-[155%] rounded-full bg-[#111111]"><span className='px-4 mr-1 bg-[#3D3D3D] rounded-full'>3</span>Mobile Accessibility</li>
//   <li className="ml-24 mr-[100px] pl-2 py-4 text-[20px] text-white leading-[155%] rounded-full bg-[#111111]"><span className='px-4 mr-1 bg-[#3D3D3D] rounded-full'>4</span>Track Order</li>
//   <li className="ml-35 mr-[70px] pl-2 py-4 text-[20px] text-white leading-[155%] rounded-full bg-[#111111]"><span className='px-4 mr-1 bg-[#3D3D3D] rounded-full'>5</span>Save Time</li>
// </ol>
//             </div>
//         </div>
    
//         </div>
//     </section>
//   )
// }

// export default OurProducts




import Image from 'next/image'
import React from "react";
import { theme } from "../../../config/theme" // ✅ import theme

const OurProducts = () => {
  return (
    <section className={`mt-30 w-full items-center mb-12 ${theme.spacing.section}`}>
      <div className={`mt-20 ${theme.spacing.container} text-center px-6`} >
        {/* Heading */}
        <h2
          className={`${theme.typography.heading.h2} ${theme.colors.brand.senior} font-semibold leading-[57px] pb-20`}
        >
          Our Products
        </h2>

        {/* Description */}
        <p
          className={`${theme.typography.paragraph.p2} ${theme.colors.brand.junior} w-[65%] mx-auto`}
        >
          Lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget
          tempor erat aliquet ac. Tellus malesuada ut purus quis penatibus
          donec.
        </p>

        {/* Circles */}
       <div className="flex justify-center items-center mx-auto pt-30 relative">
  {/* Black Circle (Top Layer, thoda overlap) */}
  <div
    className={`w-[213.64px] h-[213.64px] rounded-full flex items-center justify-center 
                leading-[18.39px] font-medium z-10 relative -mr-10 
                ${theme.typography.paragraph.p3} ${theme.colors.text.inverse}`}
    style={{ background: theme.colors.background.circle }}
  >
    Maxinventory
  </div>

  {/* White Circle (Back Layer) */}
  <div
    className={`w-[213.64px] h-[213.64px] rounded-full flex items-center justify-center 
                border leading-[18.39px] font-medium z-0
                ${theme.typography.paragraph.p3} ${theme.colors.brand.circle}`}
    style={{ background: theme.colors.background.light }}
  >
    Reservation & Ticketing
  </div>
</div>



        {/* Content Row */}
        <div className="flex items-center mx-auto mt-0 gap-30">
          {/* Left Side - Image + Button */}
          <div>
            <div className="mt-50">
              <Image
                src="./assets/ourproducts/dashboard.svg"
                alt="Dashboard"
                className="w-[789px] h-[638px]"
              />
            </div>

            <div className="flex mt-15 justify-center">
              <button
                className={` ${theme.colors.text.inverse} ${theme.components.button.primary} ${theme.typography.paragraph.p2}`}
                
              >
                Explore Maxinventory
              </button>
            </div>
          </div>

          {/* Right Side - Text + List */}
          <div className="w-1/2 text-left">
            <h2
              className={`${theme.typography.heading.h5} ${theme.colors.brand.senior} leading-[57px] font-bold`}
            >
              Maxinventory System
            </h2>
            <p
              className={`${theme.typography.paragraph.p2} ${theme.colors.brand.junior} font-normal leading-[30px] w-[85%]`}
            >
              Lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget
              tempor erat aliquet ac. Tellus malesuada ut purus quis penatibus
              donec.
            </p>

            {/* Features List */}
            <ol className="pt-14 space-y-4">
              {[
                "Reporting and Analytics",
                "Inventory Forecasting",
                "Mobile Accessibility",
                "Track Order",
                "Save Time",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`rounded-full py-4  text-[20px] leading-[155%] flex items-center ${theme.typography.paragraph.p2} ${theme.colors.text.inverse}`}
                  style={{
                    background: theme.colors.background.dark,
                    marginLeft: `${index * 2}rem`,
                    marginRight: `${200 - index * 30}px`,
                  }}
                >
                  <span
                    className={`px-4 mr-1 ${theme.typography.paragraph.p2} leading-[155%] ml-5 rounded-full`}
                    style={{ background: "#3D3D3D" }} // ✅ can add to theme if reused
                  >
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
