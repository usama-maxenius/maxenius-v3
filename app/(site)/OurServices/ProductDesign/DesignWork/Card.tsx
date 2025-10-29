"use client";
import React, { useState } from "react";
import Image from "next/image";
import { theme } from "@config/theme";

const cards = [
  {
    TopLeft: "/assets/productdesign/grantafy.svg",
    TopRight: "/assets/productdesign/arrowblack.svg",
    Center: "/assets/productdesign/laptop1.svg",
  },
  {
    TopLeft: "/assets/productdesign/grantafy.svg",
    TopRight: "/assets/productdesign/arrowblack.svg",
    Center: "/assets/productdesign/laptop2.svg",
  },
];

const LaptopCard = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const maxIndex = cards.length - 1;

  return (
    <div className="relative flex flex-col 2xl:flex-row max-w-[1000px] mx-auto justify-center gap-2 mt-30 mb-20 flex-nowrap">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative  bg-[#EBEBEB] flex items-center justify-center rounded-2xl"
          // style={{
          //   width: "801px",
          //   height: "548px",
          //   backgroundColor: "#EBEBEB",
          // }}
        >
          {/* Inner Content Area */}
          <div
            className="relative max-w-[1440px] mx-auto flex flex-col items-center justify-center w-[650px] h-[478px]"
            // style={{
            //   width: "728px",
            //   height: "478px",
            // }}
          >
            {/* Top Left Image */}
            <Image
              src={card.TopLeft}
              alt="Top Left"
              width={97.08}
              height={23.81}
              className="absolute top-6 left-[45px] object-contain"
            />

            {/* Top Right Image */}
            <Image
              src={card.TopRight}
              alt="Top Right"
              width={21.73}
              height={18.42}
              className="absolute top-6 right-[50px] object-contain"
            />

            {/* Center Image */}
            <Image
              src={card.Center}
              alt="Center Image"
              width={539.8}
              height={349.99}
              className="object-contain"
            />

            {/* Bottom Right Button */}
            <button
              className={`${theme.components.button.primary} ${theme.typography.paragraph.p3} absolute bottom-6 right-6 text-white font-bold transition-all`}
            >
              Case Study
            </button>
          </div>
        </div>
      ))}

      {/* Bottom Center Dots */}
      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 flex flex-row space-x-3">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setScrollIndex(i)}
            className="w-4 h-4 cursor-pointer rounded-sm transition-all duration-300"
            style={{
              background:
                scrollIndex === i
                  ? theme.colors.background.red
                  : theme.colors.background.gray,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LaptopCard;
