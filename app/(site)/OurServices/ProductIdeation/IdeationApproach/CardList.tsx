import React from 'react'
import Image from 'next/image'
import { theme } from '@config/theme'

interface CardItem {
  left: string
  Title: string
  Content: string
}

interface CardListProps {
  cards: CardItem[]
  className?: string // optional, so you can add spacing from parent
}

const CardList: React.FC<CardListProps> = ({ cards, className = '' }) => {
  return (
    <div className={`flex flex-col items-center mt-7 gap-6 ${className}`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center w-[300px] lg:w-[594px] h-[159px] mb-80 lg:mb-30 bg-transparent border-none"
        >
          {/* Left Image */}
          <div className="flex-shrink-0 w-[120px] h-[120px]  flex justify-center">
            <Image
              src={card.left}
              alt={card.Title}
              width={79}
              height={79}
              className="mt-[-90px] object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="ml-6 flex flex-col justify-center text-left">
            <p
              className={`${theme.typography.paragraph.p1} ${theme.colors.brand.accent} font-semibold leading-[31px] mb-2`}
            >
              {card.Title}
            </p>
            <p
              className={`${theme.typography.paragraph.p2} ${theme.colors.brand.accent} leading-[30px] w-[109%]`}
            >
              {card.Content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardList
