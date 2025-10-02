// 'use client';

// import React from 'react';
// import { Card, CardFooter, CardHeader } from '../../ui/card';



// const Hero = () => {
//   // Cards data
//   const cards = [
//     { 
//       id: 1, 
//       topLeft: "100+.png", 
//       bottomLeft: "Developers", 
//       bottomRight: "/01", 
      
//     },
//     { 
//       id: 2, 
//       topLeft: "5+.png", 
//       bottomLeft: "Years in Business", 
//       bottomRight: "/2", 
      
//     },
//     { 
//       id: 3, 
//       topLeft: "2K+.png", 
//       bottomLeft: "Customers Served  ", 
//       bottomRight: "/03", 
      
//     },
//     { 
//       id: 4, 
//       topLeft: "500+.png", 
//       bottomLeft: "Global Clients", 
//       bottomRight: "/04", 
      
//     },
//   ];

//   // Logos data
//   const logos = [
//     "airtable.png",
//     "fivetran.png",
//     "pendo.png",
//     "airbnb.png",
//     "elastic.png",
//     "airtable.png",
//     "airbnb.png",
//   ];

//   return (
// <section
//   className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
//   style={{
//     backgroundImage: "url('/assets/herosection/globe.gif')",
//   }}
// >

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-10"></div>

//       {/* Main Content */}
//       <div className="relative z-20   mx-auto  pb-[70px]">
//         {/* Red Text */}
//         <div className='max-w-[1150px]  mx-auto'>
//         <div className="text-center mb-6">
//           <p className="text-red-500 text-[20px] pt-[220px] font-semibold leading-6">
//            Technology outsourcing agency
//           </p>
//         </div>

//         {/* Heading */}
//         <div className="text-center mb-8 ">
//           <h1
//             className="text-white font-semibold text-[120.76px] leading-[135px] mb-4"
            
//           >
//             Expert Insights On Everything Tech
//           </h1>
//         </div>

//         {/* Sub Text */}
//         <div className="text-center mb-16">
//           <p
//             className="text-[#FFFFFF] text-[24px] leading-[35px] font-normal">
//            We built several WordPress brands used by over 25 million websites. <br/>
//             Subscribe to learn the lessons we wish we knew when started
//           </p>
//         </div>
//         </div>

//         {/* Trusted By Section */}
//         <div className="mb-20   ">
//           <div className=" border border-white/30 overflow-hidden">
//             <div className="flex flex-wrap w-full">
//               {/* Left Side */}
//               <div className=" py-4 w-full sm:w-[300px] bg-transparent border-b sm:border-b-0 sm:border-r border-white/30">
// <div className="flex items-start ml-[50px] space-x-3">
//   <div className="flex items-start justify-center">
//     <span style={{ display: "inline-block", width: "24.49px", height: "20px" }}>
//       <img
//         src="/assets/herosection/star.png"
//         alt="star"
//         style={{ width: "100%", height: "100%" }}
//       />
//     </span>
//   </div>
//   <span className="text-white font-medium text-[20px] leading-[22px]">
//     Trusted by industry leaders
//   </span>
// </div>

//                 <span className="text-white font-normal text-[18px] leading-[26px] ml-[85px] block">
//                   500+ clients 
//                 </span>
//               </div>

//               {/* Logos */}
//               <div className="flex  flex-wrap justify-between items-center flex-1 gap-[30px] ">
//                 {logos.map((logo, index) => (
//                   <div
//                     key={index}
//                     className="w-37 h-12 ml-3 rounded-full flex items-center justify-space-around"
//                   >
//                     <img
//                       src={`/assets/herosection/${logo}`}
//                       alt={logo.replace('.png', '')}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cards Section */}
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1320px] mx-auto">
//   {cards.map((card,index) => (
//     <Card key={card.id}
//      style={
//         index === 2 // 0-based index → third card
//           ? { background: "linear-gradient(135deg, #292929, #3D3D3D, #5C5C5C, #3B3B3B, #292929)",border:"none" }
//           : { background: "#1D1D1D",border:"none" }
//       }>
//       <CardHeader>
//         {/* Top-left image */}
//         <img
//           src={`/assets/herosection/${card.topLeft}`} 
//           alt={card.bottomLeft}
//           className="text-[64px] object-contain" 
//         />
//       </CardHeader>

//       <CardFooter className="flex justify-between text-[#868686] items-center mt-20 px-4">
//         <span className="text-[18px] font-semibold leading-[30px]">{card.bottomLeft}</span>
//         <span className="text-[20px] font-medium  leading-[30px]">
//           {card.bottomRight}
//         </span>
//       </CardFooter>
//     </Card>
//   ))}
// </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;




'use client';

import React from 'react';
import { Card, CardFooter, CardHeader } from '../../ui/card';
import { theme } from '../../../config/theme';

const Hero = () => {
  const cards = [
    { id: 1, topLeft: '100+.png', bottomLeft: 'Developers', bottomRight: '/01' },
    { id: 2, topLeft: '5+.png', bottomLeft: 'Years in Business', bottomRight: '/2' },
    { id: 3, topLeft: '2K+.png', bottomLeft: 'Customers Served', bottomRight: '/03' },
    { id: 4, topLeft: '500+.png', bottomLeft: 'Global Clients', bottomRight: '/04' },
  ];

  const logos = [
    'airtable.png', 'fivetran.png', 'pendo.png',
    'airbnb.png', 'elastic.png', 'airtable.png', 'airbnb.png',
  ];

  return (
    <section
      className={`relative min-h-screen w-full ${theme.components.section.light} bg-cover bg-center`}
      style={{ backgroundImage: "url('/assets/herosection/globe.gif')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Main content */}
      <div className={`relative  z-20  pb-20`}>
        {/* Red Text */}
        <p className={`${theme.colors.brand.primary} ${theme.spacing.container} ${theme.typography.paragraph.p2} font-semibold text-center leading-[20px] pt-30`}>
          Technology outsourcing agency
        </p>

        {/* Heading */}
        <h1 className={`${theme.colors.brand.accent} ${theme.spacing.container}  ${theme.typography.heading.h1} leading-[135px] font-semibold text-center my-6`}>
          Expert Insights On Everything Tech
        </h1>

        {/* Subtext */}
        <p className={`${theme.colors.brand.accent} ${theme.spacing.container} ${theme.typography.paragraph.p1} text-center leading-[35px] font-normal mb-16`}>
          We built several WordPress brands used by over 25 million websites.<br />
          Subscribe to learn the lessons we wish we knew when started
        </p>

        {/* Trusted By Section */}
        <div className={`mb-20  border ${theme.colors.border.base} overflow-hidden`}>
          <div className="flex flex-wrap w-full">
            {/* Left Side */}
            <div className="py-4 w-full sm:w-[300px] bg-transparent border-b  border-r border-white/30">
              <div className="flex items-start ml-12 space-x-3">
                <img src="/assets/herosection/star.png" alt="star" className="w-6 h-5" />
                <span className="text-white font-medium text-lg leading-[22px] font-medium">
                  Trusted by industry leaders
                </span>
              </div>
              <span className="text-white font-normal text-base leading-[26px] ml-20 block">
                500+ clients
              </span>
            </div>

            {/* Logos */}
            <div className="flex flex-wrap justify-between items-center flex-1 gap-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="w-36 h-12 flex items-center justify-center rounded-full"
                >
                  <img src={`/assets/herosection/${logo}`} alt={logo.replace('.png', '')} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Section */}
       <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${theme.spacing.container} ${theme.spacing.container}  mx-auto`}>
  {cards.map((card, index) => (
    <Card
      key={card.id}
      className="flex flex-col justify-between" // ✅ Flex column to push footer to bottom
      style={{
        width: "392px",       // Fixed width
        height: "227px",      // Fixed height
        border: "none",
        background:
          index === 2
            ? `${theme.colors.background.gradient}`
            : `${theme.colors.background.dark}`,
      }}
    >
      <CardHeader>
        <img
          src={`/assets/herosection/${card.topLeft}`}
          alt={card.bottomLeft}
          className="object-contain w-16"
        />
      </CardHeader>

      <CardFooter className={`flex ${theme.typography.paragraph.p2} justify-between leading-[30px] font-normal items-center px-4 ${
    index === 2 ? theme.colors.brand.accent : theme.colors.brand.medium
  }`} >
        <span className="font-semibold">{card.bottomLeft}</span>
        <span className="font-medium">{card.bottomRight}</span>
      </CardFooter>
    </Card>
  ))}
</div>


      </div>
    </section>
  );
};

export default Hero;

