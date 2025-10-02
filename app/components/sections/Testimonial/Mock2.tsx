// "use client";

// import React, { useState } from "react";
// import { Card, CardContent } from "../../ui/card";

// const Mock2 = () => {
//   const cards = [
//     {
//       id: 1,
//       left: "/assets/testinomial/person1.svg",
//       descrption:
//         "“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”",
//       bottom: "Isaac Olson",
//     },
//     {
//       id: 2,
//       left: "/assets/testinomial/person2.svg",
//       descrption:
//         "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users who want success.”",
//       bottom: "Barry Young",
//     },
//     {
//       id: 3,
//       left: "/assets/testinomial/person3.svg",
//       descrption:
//         "“Must have book for all, who want to be Product Designer or Interaction Designer.”",
//       bottom: "Esther Allison",
//     },
//   ];

//   const maxIndex = cards.length - 1;
//   const [scrollIndex, setScrollIndex] = useState(maxIndex); // 👈 last dot active by default

//   return (
//     <div className="relative flex flex-col items-center">
//       {/* Cards */}
//       <div className="grid grid-cols-1 mx-auto gap-6">
//         {cards.map((card, index) => (
//           <Card
//             key={card.id}
//             className="w-[792px] h-[225px] relative"
//             style={
//               index === 2
//                 ? { background: "rgba(29,29,29,0.4)", border: "none" }
//                 : { background: "#1D1D1D", border: "none" }
//             }
//           >
//             <CardContent className="flex items-center gap-10 h-full">
//               {/* Image */}
//               <img
//                 src={card.left}
//                 alt={card.bottom}
//                 className={`w-[78.31px] h-[78.31px] ml-10 -mt-4 rounded-full ${
//                   index === 2 ? "opacity-40" : ""
//                 }`}
//               />

//               {/* Text beside image */}
//               <div
//                 className={`flex flex-col justify-center h-full ${
//                   index === 0 || index === 1 ? "text-white" : "text-[#868686]"
//                 }`}
//               >
//                 <span className="text-[20px] font-semibold mt-10 w-[90%] leading-[29px]">
//                   {card.descrption}
//                 </span>
//                 <span className="text-[17px] font-semibold leading-[30px] mt-7">
//                   {card.bottom}
//                 </span>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* ✅ Vertical Dots on the Right Side */}
//       <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 flex flex-col space-y-3">
//         {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//           <span
//             key={i}
//             onClick={() => setScrollIndex(i)}
//             className={`w-4 h-4 cursor-pointer transition-all duration-300 ${
//               scrollIndex === i ? "bg-[#C42630]" : "bg-gray-400"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mock2;




"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { theme } from "../../../config/theme";

const Mock2 = () => {
  const cards = [
    {
      id: 1,
      left: "/assets/testinomial/person1.svg",
      descrption:
        "“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”",
      bottom: "Isaac Olson",
    },
    {
      id: 2,
      left: "/assets/testinomial/person2.svg",
      descrption:
        "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users who want success.”",
      bottom: "Barry Young",
    },
    {
      id: 3,
      left: "/assets/testinomial/person3.svg",
      descrption:
        "“Must have book for all, who want to be Product Designer or Interaction Designer.”",
      bottom: "Esther Allison",
    },
  ];

  const maxIndex = cards.length - 1;
  const [scrollIndex, setScrollIndex] = useState(maxIndex); // 👈 last dot active by default

  return (
    <div className="relative flex flex-col items-center">
      {/* Cards */}
      <div className="grid grid-cols-1 mx-auto gap-6">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            className="w-[792px] h-[225px] relative"
            style={
              index === 2
                ? { background: "rgba(29,29,29,0.4)", border: "none" }
                : { background: theme.colors.background.dark, border: "none" }
            }
          >
            <CardContent className="flex items-center gap-10 h-full">
              {/* Image */}
              <img
                src={card.left}
                alt={card.bottom}
                className={`w-[78.31px] h-[78.31px] ml-10 -mt-4 rounded-full ${
                  index === 2 ? "opacity-40" : ""
                }`}
              />

              {/* Text beside image */}
              <div
                className={`flex flex-col justify-center h-full ${
                  index === 0 || index === 1
                    ? theme.colors.text.inverse
                    : theme.colors.brand.medium
                }`}
              >
                <span
                  className={`${theme.typography.paragraph.p2} mt-10 w-[90%] font-normal leading-[30px]`}
                >
                  {card.descrption}
                </span>
                <span
                  className={`${theme.typography.paragraph.p3} mt-7 leading-[29px] font-semibold`}
                >
                  {card.bottom}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ✅ Vertical Dots on the Right Side */}
     <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 flex flex-col space-y-3">
    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
      <span
        key={i}
        onClick={() => setScrollIndex(i)}
        className={`w-4 h-4 rounded cursor-pointer transition-all duration-300 $`}
        style={{
          background:
          scrollIndex === i ? theme.colors.background.red : theme.colors.background.dark
        }}
      ></span>
    ))}
  </div>
    </div>
  );
};

export default Mock2;
