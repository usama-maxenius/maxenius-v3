import React from "react";
import Image from "next/image";
import { theme } from "@config/theme";

const Cards = () => {
  const cards = [
    {
      left: "/assets/blog/frame1.svg",
      Title: "ETL, As We Know It, Is Dead",
      Content: "21 March 2021",
    },
    {
      left: "/assets/blog/frame2.svg",
      Title: "ETL, As We Know It, Is Dead",
      Content: "21 March 2021",
    },
    {
      left: "/assets/blog/frame3.svg",
      Title: "ETL, As We Know It, Is Dead",
      Content: "21 March 2021",
    },
    {
      left: "/assets/blog/frame4.svg",
      Title: "ETL, As We Know It, Is Dead",
      Content: "21 March 2021",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex items-center w-[325px] h-[100px] "
        >
          {/* Left Image */}
          <div className="flex-shrink-0">
            <Image
              src={card.left}
              alt={card.Title}
              width={128}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col h-full pl-4 py-2 text-start">
            <h3 className={`${theme.typography.paragraph.p3} ${theme.colors.brand.accent} font-semibold leading-[24.58px] mt-[-10px] mb-[10px]`}>
              {card.Title}
            </h3>
            <p className={`${theme.typography.paragraph.p5} ${theme.colors.brand.accent} font-normal leading-[20px] opacity-[50%]`}>{card.Content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
