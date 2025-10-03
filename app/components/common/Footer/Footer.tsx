// import React from 'react'

// const Footer = () => {
//   return (
//     <section className="bg-[#0F0F0F] py-16">
//       <div className="grid grid-cols-5 gap-10 mx-auto max-w-[1600px] pt-15  text-left pl-[40px]">
//         {/* Logo + Text */}
//         <div>
//           <ol>
//             <li className="text-[33.6px] leading-[100%] text-[#FFFFFF] font-bold mb-4">
//               Maxenius
//             </li>
//             <li className="text-[18px] leading-[31.2px] text-[#FFFFFF] font-normal max-w-[300px] mt-[50px] mx-auto ">
//               With lots of unique blocks, you can easily build a page without coding.
//               Build your next landing page.
//             </li>
//             <li className='flex  gap-10 mt-10'>
//                 <span><img src="/assets/footer/twitter.svg" alt="Twitter" /></span>
//                 <span><img src="/assets/footer/facebook.svg" alt="Facebook" /></span>
//                 <span><img src="/assets/footer/instagram.svg" alt="Instagram" /></span>
//                 <span><img src="/assets/footer/linkedin.svg" alt="LinkedIn" /></span>

//             </li>
//           </ol>
//         </div>

//         {/* Company */}
//         <div className='w-[40%] ml-[55px]'>
//           <ol className="space-y-8  text-[18px] leading-[31.2px] text-[#FFFFFF] font-normal">
//             <li className="font-semibold">Company</li>
//             <li>About us</li>
//             <li>Contact us</li>
//             <li>Careers</li>
//             <li>Press</li>
//           </ol>
//         </div>

//         {/* Products */}
//         <div className=' w-[50%]'>
//           <ol className="space-y-8 text-[18px] leading-[31.2px] text-[#FFFFFF] font-normal">
//             <li className="font-semibold">Products</li>
//             <li>Reservation & Ticketing</li>
//             <li>Maxiventory</li>
//           </ol>
//         </div>

//         {/* Services */}
//         <div>
//           <ol className="space-y-8 text-[18px] leading-[31.2px] text-[#FFFFFF] font-normal">
//             <li className="font-semibold">Services</li>
//             <li>Product Ideation</li>
//             <li>Product Design</li>
//             <li>Product Development</li>
//             <li>Product Growth</li>
//           </ol>
//         </div>

//         {/* Legal */}
//         <div>
//           <ol className="space-y-9 text-[18px] leading-[31.2px] text-[#FFFFFF] font-normal">
//             <li className="font-semibold">Legal</li>
//             <li>Privacy</li>
//             <li>Terms & Conditions</li>
//             <li>Return Policy</li>
//           </ol>
//         </div>
//       </div>
// <div className="max-w-[1300px] mx-auto flex justify-end pt-30">
//   <div className="flex items-center w-[421px] h-[80px] rounded-full bg-[#1D1D1D] px-5 gap-4">
//     <span className="text-[#FFFFFF] font-bold text-[18px] bg-[#0F0F0F] px-[25px] py-[20px] rounded-full whitespace-nowrap">
//       Contact Us
//     </span>
//     <p className="text-[#FFFFFF] text-[18px] leading-[23px] font-normal">
//       SHARE YOUR PRODUCT IDEA WITH US
//     </p>
//   </div>
// </div>


//       {/* <button  className='flex  text-[#FFFFFF] bg-[#1D1D1D]'>
//       <button className='text-[#FFFFFF] bg-[#0F0F0F] py-[15px] px-[25px]'>Contact Us</button>
//          SHARE YOUR PRODUCT IDEA WITH US
//       </button> */}
//     </section>
//   )
// }

// export default Footer




import React from "react";
import { theme } from '../../../config/theme';
import Image from 'next/image'
import Link from "next/link";

const Footer = () => {
  return (
    <section
      className={`py-16`}
      style={{ background: theme.colors.background.oval }}
    >
      <div
        className={`grid grid-cols-5 gap-10 ${theme.spacing.container} pt-15 text-left pl-[40px]`}
      >
        {/* Logo + Text */}
        <div>
          <ol>
            <li
              className={`text-[33.6px] leading-[100%] ${theme.colors.text.inverse} font-bold mb-4`}
            >
              Maxenius
            </li>
            <li
              className={`${theme.typography.paragraph.p3} ${theme.colors.text.inverse} max-w-[300px] font-normal leading-[31.2px] mt-[50px] mx-auto`}
            >
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </li>
            <li className="flex gap-10 mt-10">
              <span>
                <Image src="/assets/footer/twitter.svg" alt="Twitter" />
              </span>
              <span>
                <Image src="/assets/footer/facebook.svg" alt="Facebook" />
              </span>
              <span>
                <Image src="/assets/footer/instagram.svg" alt="Instagram" />
              </span>
              <span>
                <Image src="/assets/footer/linkedin.svg" alt="LinkedIn" />
              </span>
            </li>
          </ol>
        </div>

        {/* Company */}
        <div className="w-[40%] ml-[55px]">
          <ol
            className={`space-y-8 ${theme.typography.paragraph.p3} ${theme.colors.text.inverse} leading-[31.2px] font-normal`}
          >
            <li>Company</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
          </ol>
        </div>

        {/* Products */}
        <div className="w-[50%]">
          <ol
            className={`space-y-8 ${theme.typography.paragraph.p3} ${theme.colors.text.inverse} leading-[31.2px] font-normal`}
          >
            <li>Products</li>
            <li>Reservation & Ticketing</li>
            <li>Maxiventory</li>
          </ol>
        </div>

        {/* Services */}
        <div>
          <ol
            className={`space-y-8 ${theme.typography.paragraph.p3} ${theme.colors.text.inverse} leading-[31.2px] font-normal`}
          >
            <li>Services</li>
            <li>Product Ideation</li>
            <li>Product Design</li>
            <li>Product Development</li>
            <li>Product Growth</li>
          </ol>
        </div>

        {/* Legal */}
        <div>
          <ol
            className={`space-y-9 ${theme.typography.paragraph.p3} ${theme.colors.text.inverse} leading-[31.2px] font-normal`}
          >
            <li>Legal</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ol>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="max-w-[1300px] mx-auto flex justify-end pt-30">
        <Link href="/contact" passHref>
          <div
            className={`flex items-center w-[421px] h-[80px] rounded-full px-5 gap-4 cursor-pointer`}
            style={{ background: theme.colors.background.dark }}
          >
            <span
              className={`${theme.colors.text.inverse} font-bold text-[18px] ${theme.colors.background.oval} px-[25px] py-[20px] rounded-full whitespace-nowrap`}
            >
              Contact Us
            </span>
            <p
              className={`${theme.colors.text.inverse} text-[18px] leading-[23px] font-normal`}
            >
              SHARE YOUR PRODUCT IDEA WITH US
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Footer;



