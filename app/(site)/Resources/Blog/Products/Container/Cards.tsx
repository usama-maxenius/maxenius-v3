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
          className="
            flex flex-col sm:flex-row items-center sm:items-start
            w-full sm:w-[325px] h-auto sm:h-[100px] gap-4 sm:gap-0
            mx-auto
          "
        >
          {/* Left Image */}
          <div className="flex-shrink-0 w-full lg:w-[120px] h-[100px] flex justify-center items-center">
            <Image
              src={card.left}
              alt={card.Title}
              width={128}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col text-center sm:text-left sm:h-full sm:pl-4">
            <h3
              className={`${theme.typography.paragraph.p3} ${theme.colors.brand.accent} 
              font-semibold leading-[24.58px] mb-[6px] sm:mt-[-10px]`}
            >
              {card.Title}
            </h3>
            <p
              className={`${theme.typography.paragraph.p5} ${theme.colors.brand.accent} 
              font-normal leading-[20px] opacity-[50%]`}
            >
              {card.Content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
