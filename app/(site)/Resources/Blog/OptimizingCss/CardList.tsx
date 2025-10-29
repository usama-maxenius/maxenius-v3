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
    <div className={`flex flex-col items-center mt-7 gap-6 ${className}`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-[570px] h-[135px] bg-transparent border-t border-[#D9D9D9] pt-4"
        >
          {/* Left Image */}
          <div className="flex-shrink-0 w-[120px] h-[120px] flex justify-center items-center">
            <Image
              src={card.left}
              alt="left image"
              width={175}
              height={112}
              className="object-contain"
            />
          </div>

          {/* Middle Content */}
          <div className="flex-1 text-start px-5">
            <p
              className={`${theme.typography.paragraph.p2} text-[#121416] leading-[25px] font-semibold w-[93%]`}
            >
              {card.content}
            </p>
          </div>

          {/* Right Image / Arrow */}
          <div className="flex-shrink-0 flex justify-center   items-center pr-0 -translate-x-2">
            <Image
              src={card.right}
              alt="right arrow"
              width={14}
              height={14}
              className="object-contain mr-[60px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
