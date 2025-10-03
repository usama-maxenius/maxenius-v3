// app/(site)/OurServices/Mockdata.tsx
import { Card } from '@components/ui/card'
import { theme } from '@config/theme'
import React from 'react'

// yahan cards ko export kar diya
export const cards = [
  {
   
    icon: "/assets/ourservices/ideation.svg",
    title: "Product",
    subtitle: "Ideation"
  },
  {

    icon: "/assets/ourservices/design.svg",
    title: "Product",
    subtitle: "Design"
  },
  {
    
    icon: "/assets/ourservices/development.svg",
    title: "Product",
    subtitle: "Development"
  },
  {
    
    icon: "/assets/ourservices/growth.svg",
    title: "Product",
    subtitle: "Growth"
  },
]

const Mockdata = () => {
  return (
    <div className="w-full flex justify-center pt-10">
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  ${theme.spacing.container}`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-center rounded-none !gap-0 text-center py-20 px-15  bg-white"
          >
            <img src={card.icon} alt={card.subtitle} className="w-[129px] h-[126.5px] " />
            <h3
              className={`${theme.typography.paragraph.p3} ${theme.colors.brand.senior} leading-[24px]  font-normal`}
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
