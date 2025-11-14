"use client";

import { Card } from "@components/ui/card";
import { theme } from "@config/theme";
import React, { useState } from "react";

const cards = [
  { number: "01", title: "UX RESEARCH", description: "Lorem ipsum dolor sit amet consectetur. Tincidunt fusce lectus mauris scelerisque velit. Mi scelerisque aenean pellentesque tortor egestas praesent orci enim." },
  { number: "02", title: "UX Design", description: "Lorem ipsum dolor sit amet consectetur. Tincidunt fusce lectus mauris scelerisque velit. Mi scelerisque aenean pellentesque tortor egestas praesent orci enim." },
  { number: "03", title: "WIREFRAMES", description: "Lorem ipsum dolor sit amet consectetur. Tincidunt fusce lectus mauris scelerisque velit. Mi scelerisque aenean pellentesque tortor egestas praesent orci enim." },
  { number: "04", title: "PROTOTYPE", description: "Lorem ipsum dolor sit amet consectetur. Tincidunt fusce lectus mauris scelerisque velit. Mi scelerisque aenean pellentesque tortor egestas praesent orci enim." },
  { number: "05", title: "DESIGN SYSTEM", description: "Lorem ipsum dolor sit amet consectetur. Tincidunt fusce lectus mauris scelerisque velit. Mi scelerisque aenean pellentesque tortor egestas praesent orci enim." },
  { number: "06", title: "UI Design", description: "Lorem ipsum dolor sit amet consectetur. Tincidunt fusce lectus mauris scelerisque velit. Mi scelerisque aenean pellentesque tortor egestas praesent orci enim." },
];

const ProcessCards = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-10">
      {/* ✅ Card List */}
      <div className="flex flex-col items-center justify-center w-full">
        {cards.map((card, index) => (
          <Card
            key={card.number}
            className="flex flex-col lg:flex-row justify-center items-center border-b border-gray-800 pb-20 gap-40 !border-t-0 !border-l-0 !border-r-0 !bg-transparent w-[90%]"
          >
            {/* Left Side: Number + Title */}
            <div className="relative flex items-center justify-center w-full sm:w-auto sm:justify-center">
              {/* Background number */}
              <p className="font-semibold text-[134.11px] leading-[173.23px] bg-gradient-to-b from-[#3B3B3B] to-[#0F0F0F] bg-clip-text text-transparent opacity-50 select-none relative z-0 
              text-left sm:text-center w-full sm:w-auto">
                {card.number}
              </p>

              {/* Foreground title */}
              <p
                className={`${theme.typography.paragraph.p1} ${theme.colors.brand.accent} leading-[31px] font-semibold absolute top-1/4 -translate-y-1/2 z-10 
                left-0 sm:left-5 text-left sm:text-left`}
                style={{
                  width: index === 4 ? "140%" : "121%",
                  lineHeight: index === 4 ? "30px" : "31px",
                }}
              >
                {index === 4 ? (
                  <>
                    DESIGN
                    <br />
                    SYSTEM
                  </>
                ) : (
                  card.title
                )}
              </p>
            </div>

            {/* Right Side: Description */}
            <div className="lg:w-[56%] mt-6 lg:mt-0">
              <p
                className={`${theme.typography.paragraph.p3} ${theme.colors.brand.accent} leading-[30px] font-normal text-start`}
              >
                {card.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* ✅ Dots Section */}
      <div className="w-full flex justify-center mt-10 sm:mt-8 mb-6 sm:mb-10">
        <div className="flex space-x-3">
          {cards.map((_, i) => (
            <span
              key={i}
              onClick={() => setScrollIndex(i)}
              className="w-4 h-4 rounded-full cursor-pointer transition-all duration-300"
              style={{
                backgroundColor:
                  scrollIndex === i
                    ? theme.colors.background.red
                    : "#9ca3af",
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessCards;
