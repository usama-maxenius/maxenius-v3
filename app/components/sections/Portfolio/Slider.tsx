// "use client";

// import React, { useState, useEffect } from "react";

// const cards = [
//   { id: 1, right: "/assets/portfolio/mobile1.svg", topLeft: "/assets/portfolio/maskgroup.svg", size: "w-[70.09px] h-[34px]", descrption: "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem. Orci enim sit blandit morbi vivamus felis interdum ut." },
//   { id: 2, right: "/assets/portfolio/mobile2.svg", topLeft: "/assets/portfolio/logo2.svg", size: "w-[130px] h-[30px]", descrption: "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem. Orci enim sit blandit morbi vivamus felis interdum ut." },
//   { id: 3, right: "/assets/portfolio/mobile3.svg", topLeft: "/assets/portfolio/maxinventory.svg", size: "w-[170px] h-[31px]", descrption: "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem. Orci enim sit blandit morbi vivamus felis interdum ut." },
//   { id: 4, right: "/assets/portfolio/mobile1.svg", topLeft: "/assets/portfolio/maskgroup.svg", size: "w-[70.09px] h-[34px]", descrption: "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem. Orci enim sit blandit morbi vivamus felis interdum ut." },
// ];

// const Slider = () => {
//   const [scrollIndex, setScrollIndex] = useState(0);

//   const visibleCards = 2; // simultaneously visible cards
//   const cardWidth = 675;
//   const cardGap = 0;
//   const totalMove = cardWidth + cardGap;

//   const maxIndex = cards.length - visibleCards;

//   // ✅ Autoplay every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScrollIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [maxIndex]);

//   // ✅ Fix last empty space
//   const totalContentWidth = cards.length * totalMove;
//   const viewportWidth = visibleCards * totalMove;
//   const maxTranslate = totalContentWidth - viewportWidth;
//   const offset = Math.min(scrollIndex * totalMove, maxTranslate);

//   return (
//     <div className="relative w-full mx-auto max-w-[1440px]">
//       {/* Cards container */}
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{
//             transform: `translateX(-${offset}px)`,
//           }}
//         >
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className="flex-shrink-0 p-4 basis-1/2"
//               style={{ width: `${cardWidth}px`, height: "549px" }}
//             >
//               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
//                 <div className="flex flex-1">
//                   {/* Left Side */}
//                   <div className="w-1/2 flex flex-col pt-15">
//                     <img
//                       src={card.topLeft}
//                       alt="Top Left"
//                       className={`${card.size} object-contain mb-3`}
//                     />
//                     <p className="text-[18px] font-normal leading-[25px] text-[#040707] ">
//                       Some description about project {card.descrption}.
//                     </p>
//                     <button className="flex items-center justify-center w-[155px] bg-[#C42630] text-white px-[25px] py-[15px] rounded-full text-[18px] leading-[20px] font-bold mt-50 ">
//                       Case Study
//                     </button>
//                   </div>

//                   {/* Right Side */}
//                   <div className="w-1/2 flex items-center justify-center">
//                     <img
//                       src={card.right}
//                       alt="Right Image"
//                       className="w-full h-[390px] object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Dots below slider */}
//       <div className="flex justify-center mt-20 space-x-3">
//         {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//           <span
//             key={i}
//             onClick={() => setScrollIndex(i)}
//             className={`w-4 h-4 rounded ${
//               scrollIndex === i ? "bg-[#C42630]" : "bg-gray-400"
//             } cursor-pointer transition-all duration-300`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;




"use client";

import React, { useState, useEffect } from "react";
import { theme } from "../../../config/theme" // ✅ import your theme

const cards = [
  {
    id: 1,
    right: "/assets/portfolio/mobile1.svg",
    topLeft: "/assets/portfolio/maskgroup.svg",
    size: "w-[70.09px] h-[34px]",
    descrption:
      "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem. Orci enim sit blandit morbi vivamus felis interdum ut.",
  },
  {
    id: 2,
    right: "/assets/portfolio/mobile2.svg",
    topLeft: "/assets/portfolio/logo2.svg",
    size: "w-[130px] h-[30px]",
    descrption:
      "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem. Orci enim sit blandit morbi vivamus felis interdum ut.",
  },
  {
    id: 3,
    right: "/assets/portfolio/mobile3.svg",
    topLeft: "/assets/portfolio/maxinventory.svg",
    size: "w-[170px] h-[31px]",
    descrption:
      "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem. Orci enim sit blandit morbi vivamus felis interdum ut.",
  },
  {
    id: 4,
    right: "/assets/portfolio/mobile1.svg",
    topLeft: "/assets/portfolio/maskgroup.svg",
    size: "w-[70.09px] h-[34px]",
    descrption:
      "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem. Orci enim sit blandit morbi vivamus felis interdum ut.",
  },
];

const Slider = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const visibleCards = 2;
  const cardWidth = 675;
  const cardGap = 0;
  const totalMove = cardWidth + cardGap;

  const maxIndex = cards.length - visibleCards;

  // ✅ Autoplay every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  // ✅ Fix last empty space
  const totalContentWidth = cards.length * totalMove;
  const viewportWidth = visibleCards * totalMove;
  const maxTranslate = totalContentWidth - viewportWidth;
  const offset = Math.min(scrollIndex * totalMove, maxTranslate);

  return (
    <div className="relative w-full mx-auto max-w-[1440px]">
      {/* Cards container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 p-4 basis-1/2"
              style={{ width: `${cardWidth}px`, height: "549px" }}
            >
              <div
                className={`rounded-lg flex flex-col h-full ${theme.shadows.md}`}
                style={{
                  background: theme.colors.background.light,
                  padding: "24px",
                }}
              >
                <div className="flex flex-1">
                  {/* Left Side */}
                  <div className="w-1/2 flex flex-col pt-[15px]">
                    <img
                      src={card.topLeft}
                      alt="Top Left"
                      className={`${card.size} object-contain mb-3`}
                    />
                    <p
                      className={`${theme.typography.paragraph.p3} ${theme.colors.brand.secondary} mt-20 w-[65%] leading-[25px]`}
                    >
                      {card.descrption}
                    </p>
                    <button
                      className={`flex items-center justify-center ${theme.components.button.primary} mt-[50px] w-[155px]  `}
                      
                    >
                      <span className={`${theme.typography.paragraph.p3} ${theme.colors.brand.accent} leading-[20px]`}>
                      Case Study</span>
                    </button>
                  </div>

                  {/* Right Side */}
                  <div className="w-1/2 flex items-center justify-center">
                    <img
                      src={card.right}
                      alt="Right Image"
                      className="w-full h-[390px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Dots below slider */}
      <div className="flex justify-center mt-20 space-x-3">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setScrollIndex(i)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              scrollIndex === i
                ? theme.colors.brand.primary
                : theme.colors.brand.medium
            }`}
            style={{
              backgroundColor:
                scrollIndex === i
                  ? theme.colors.background.red
                  : "#9ca3af", // gray-400 fallback
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;

