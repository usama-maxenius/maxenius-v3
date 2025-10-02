// import React from 'react'
// import { Card, CardFooter, CardHeader } from '../../ui/card'
// import { ArrowRight } from 'lucide-react'

// const cards = [
//   { id: 1, topLeft: "healthcare.png", bottomLeft: "HealthCare", bottomRight: "/01" },
//   { id: 2, topLeft: "realestate.png", bottomLeft: "RealEstate", bottomRight: "/02" },
//   { id: 3, topLeft: "education.png", bottomLeft: "Education", bottomRight: "/03" },
//   { id: 4, topLeft: "banking.png", bottomLeft: "Banking & Finance", bottomRight: "/04" },
//   { id: 5, topLeft: "socialnetwork.png", bottomLeft: "Social Network", bottomRight: "/05" },
//   { id: 6, topLeft: "travel.png", bottomLeft: "Travel & Tour", bottomRight: "/06" },
//   { id: 7, topLeft: "technology.png", bottomLeft: "Technology", bottomRight: "/07" },
//   { id: 8, topLeft: "organicbrands.png", bottomLeft: "Organic Brands", bottomRight: "/08" },
//   { id: 9, topLeft: "On Demand Services", bottomLeft: "Get Started Now", bottomRight: "" },
// ]

// const MockData = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-[1320px] mx-auto">
//       {cards.map((card, index) => (
//         <Card
//           key={card.id}
//           className={index === 6 ? "shadow-lg shadow-gray-700" : ""}
//           style={
//             index === 6
//               ? { background: "#FFFFFF14", border: "none" }
//               : index === 8
//               ? { background: "#C42630", border: "none",padding:'0px' }
//               : { background: "#00000014", border: "none" }
//           }
//         >
//           {/* Header */}
//           <CardHeader className="flex justify-start px-4 pt-4">
//             {card.topLeft.endsWith(".png") ? (
//               <img
//                 src={`/assets/IndustryWork/${card.topLeft}`}
//                 alt={card.bottomLeft}
//                 className="w-[33px] h-[33px]"
//               />
//             ) : (
//               <span className="text-white text-[22px] font-semibold">
//                 {card.topLeft}
//               </span>
//             )}
//           </CardHeader>

//           {/* Footer */}
//           <CardFooter
//             className={`mt-20 px-4 
//               ${index === 8 ? "text-white flex items-center gap-2" : "flex justify-between text-[#868686] items-center"}`}
//           >
//             <span
//               className={`text-[18px] leading-[19.44px] font-medium  relative ${
//                 index === 8 ? "text-white text-[18px] leading-[19.44px] font-medium  -mt-20" : ""
//               }`} // 👈 last card text thoda upar
//             >
//               {card.bottomLeft}
//             </span>

//             {index === cards.length - 1 ? (
//               <ArrowRight className="text-[18px] leading-[19.44px] font-medium text-white -mt-20" />
//             ) : (
//               <span className="text-[26px] font-medium leading-[19.44px]">
//                 {card.bottomRight}
//               </span>
//             )}
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   )
// }

// export default MockData





import React from "react";
import { Card, CardFooter, CardHeader } from "../../ui/card";
import { ArrowRight } from "lucide-react";
import { theme } from "../../../config/theme";

const cards = [
  { id: 1, topLeft: "healthcare.png", bottomLeft: "HealthCare", bottomRight: "/01" },
  { id: 2, topLeft: "realestate.png", bottomLeft: "RealEstate", bottomRight: "/02" },
  { id: 3, topLeft: "education.png", bottomLeft: "Education", bottomRight: "/03" },
  { id: 4, topLeft: "banking.png", bottomLeft: "Banking & Finance", bottomRight: "/04" },
  { id: 5, topLeft: "socialnetwork.png", bottomLeft: "Social Network", bottomRight: "/05" },
  { id: 6, topLeft: "travel.png", bottomLeft: "Travel & Tour", bottomRight: "/06" },
  { id: 7, topLeft: "technology.png", bottomLeft: "Technology", bottomRight: "/07" },
  { id: 8, topLeft: "organicbrands.png", bottomLeft: "Organic Brands", bottomRight: "/08" },
  { id: 9, topLeft: "On Demand Services", bottomLeft: "Get Started Now", bottomRight: "" },
];

const MockData = () => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 ${theme.spacing.container}`}
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          className={`flex flex-col justify-between ${
            index === 6
              ? `${theme.shadows.lg}`
              : index === 8
              ? "p-0"
              : ""
          }`}
          style={{
            background:
              index === 6
                ? "#FFFFFF" // transparent white
                : index === 8
                ? theme.colors.background.red
                : "#00000014", // grayish bg
            border: "none",
          }}
        >
          {/* Header */}
          <CardHeader className="flex justify-start px-4 pt-4">
            {card.topLeft.endsWith(".png") ? (
              <img
                src={`/assets/IndustryWork/${card.topLeft}`}
                alt={card.bottomLeft}
                className="w-[33px] h-[33px]"
              />
            ) : (
              <span className={`${theme.typography.paragraph.p2} ${theme.colors.text.inverse} pt-5`}>
                {card.topLeft}
              </span>
            )}
          </CardHeader>

          {/* Footer */}
          <CardFooter
  className={`mt-20 flex items-center px-4 ${
    index === 8
      ? `${theme.colors.text.inverse} gap-2`
      : `${theme.colors.brand.medium}`
  }`}
>
  {/* Left Text */}
  <span
    className={`${theme.typography.paragraph.p3} w-[60%] font-normal leading-[19.5px] ${
      index === 8 ? "-mt-20" : ""
    }`}
  >
    {card.bottomLeft}
  </span>

  {/* Right Text / Icon */}
  {index === cards.length - 1 ? (
    <ArrowRight className={`${theme.colors.text.inverse} -mt-20 ml-auto`} />
  ) : (
   <span
  className={`${theme.typography.paragraph.p3} leading-[19.44px] font-normal ml-auto ${theme.colors.brand.right}`}
>
      {card.bottomRight}
    </span>
  )}
</CardFooter>

        </Card>
      ))}
    </div>
  );
};

export default MockData;
