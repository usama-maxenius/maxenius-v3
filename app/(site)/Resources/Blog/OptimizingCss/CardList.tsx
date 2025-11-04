import React from "react";
import Image from "next/image";
import { theme } from "@config/theme";

interface CardItem {
  left: string;
  content: string;
  right: string; // right arrow or image path
}

interface CardListProps {
  cards: CardItem[];
  className?: string;
}

const CardList: React.FC<CardListProps> = ({ cards, className = "" }) => {
  return (
  <div className={`flex flex-col items-center mt-7  gap-6 ${className}`}>
  {cards.map((card, index) => (
    <div
      key={index}
      className="flex flex-col lg:flex-row items-center justify-between 
                 lg:w-[570px] h-auto lg:h-[135px] bg-transparent border-t border-[#D9D9D9] pt-4"
    >
      {/* Left Image */}
     <div
  className="flex-shrink-0 lg:w-[120px] h-[120px] flex justify-start lg:justify-center items-center 
             mb-3 sm:mb-4 lg:mb-0 w-full lg:w-[120px]"
>
  <Image
    src={card.left}
    alt="left image"
    width={175}
    height={112}
    className="object-contain"
  />
</div>


      {/* Middle Content */}
      <div className=" text-start w-full lg:w-[55%]  lg:px-5 mb-3 lg:mb-0">
        <p
          className={`${theme.typography.paragraph.p4} lg:${theme.typography.paragraph.p2} 
                      text-[#121416] leading-[25px] font-semibold w-full lg:w-[93%]`}
        >
          {card.content}
        </p>
      </div>

      {/* Right Image / Arrow */}
      <div className=" flex-shrink-0 flex justify-center items-center  lg:mt-0 pr-0 lg:-translate-x-2 ">
        <Image
          src={card.right}
          alt="right arrow"
          width={14}
          height={14}
          className="object-contain mt-[-100px]  lg:mt-[-50px] ml-[250px] lg:ml-0 lg:mr-[20px]"
        />
      </div>
    </div>
  ))}
</div>

  );
};

export default CardList;
