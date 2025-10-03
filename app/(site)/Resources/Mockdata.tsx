// app/(site)/OurServices/Mockdata.tsx
import { Card } from '@components/ui/card'
import { theme } from '@config/theme'
import React from 'react'

// yahan cards ko export kar diya
export const cards = [
  {
   
    icon: "/assets/resources/study.svg",
    title: "CASE",
    subtitle: "STUDY"
  },
  {

    icon: "/assets/resources/article.svg",
    title: "BLOG",
    subtitle: "& ARTICLES"
  },
  {
    
    icon: "/assets/resources/paper.svg",
    title: "WHITE",
    subtitle: "PAPER"
  }
]

const Mockdata = () => {
  return (
    <div className="w-full flex justify-center pt-10">
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ${theme.spacing.container}`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-center rounded-none !gap-0 text-center py-20 px-15  bg-white"
          >
            <img src={card.icon} alt={card.subtitle} className="w-[160px] h-[160px] " />
            <h3
              className={`${theme.typography.paragraph.p3} ${theme.colors.brand.senior} leading-[24px] mt-10  font-normal`}
            >
              {card.title}
            </h3>
            <p
              className={`${theme.typography.paragraph.p2} ${theme.colors.brand.senior} leading-[24px]  font-semibold`}
            >
              {card.subtitle}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Mockdata
