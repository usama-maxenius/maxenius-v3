// app/(site)/OurServices/Mockdata.tsx
import { Card } from '@components/ui/card'
import { theme } from '@config/theme'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// yahan cards ko export kar diya
export const cards = [
  {
    icon: "/assets/resources/study.svg",
    title: "CASE",
    subtitle: "STUDY",
    link: "/Resources/Case-Study",
  },
  {
    icon: "/assets/resources/article.svg",
    title: "BLOG",
    subtitle: "& ARTICLES",
    link: "/Resources/Blog",
  },
  {
    icon: "/assets/resources/paper.svg",
    title: "WHITE",
    subtitle: "PAPER",
    link: "/Resources/White-Paper",
  },
]

const Mockdata = () => {
  return (
    <div className="w-full flex justify-center pt-8 lg:pt-10 "
    style={{
          background: theme.colors.background.light
        }}>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${theme.spacing.container}`}
      >
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            
          >
            <Card
              className="flex flex-col items-center rounded-none !gap-0 text-center py-20 px-15 bg-white"
            >
              <Image
                src={card.icon}
                alt={card.subtitle}
                width={160}
                height={160}
              />
              <h3
                className={`${theme.typography.paragraph.p3} ${theme.colors.brand.senior} leading-[24px] mt-10 font-normal`}
              >
                {card.title}
              </h3>
              <p
                className={`${theme.typography.paragraph.p2} ${theme.colors.brand.senior} leading-[24px] font-semibold`}
              >
                {card.subtitle}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Mockdata
