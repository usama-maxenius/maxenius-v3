// app/(site)/OurServices/Mockdata.tsx
import { Card } from '@components/ui/card'
import { theme } from '@config/theme'
import Image from "next/image";
import React from 'react'

// yahan cards ko export kar diya
export const cards = [
  {
    
    icon: "/assets/products/Max.svg",
    title: "MAX",
    subtitle: "INVENTORY"
  },
  {
   
    icon: "/assets/products/ticket.svg",
    title: "RESERVATION",
    subtitle: "& TICKETING"
  },
 
]

const Mockdata = () => {
  return (
    <div className="w-full flex justify-center pt-10">  
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  ${theme.spacing.container} `}  >
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-center rounded-none !gap-0 text-center py-20 px-15  bg-white"
          >
          

<Image
  src={card.icon}
  alt={card.subtitle}
  width={160}
  height={160}
  unoptimized
  className="w-[160px] h-[160px]"
/>

            <h3
              className={`${theme.typography.paragraph.p3}  leading-[24px]  font-normal`}
              style={{
                color:
                index===0 ? theme.colors.background.red : theme.colors.brand.senior
              }}
            >
              {card.title}
            </h3>
            <p
              className={`${theme.typography.paragraph.p2} leading-[24px]  font-semibold`}
              style={{
                color:
                index===0 ? theme.colors.background.red : theme.colors.brand.senior
              }}
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
