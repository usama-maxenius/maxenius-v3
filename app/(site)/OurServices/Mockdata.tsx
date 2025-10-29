// app/(site)/OurServices/Mockdata.tsx
import { Card } from '@components/ui/card'
import { theme } from '@config/theme'
import Image from "next/image";
import Link from "next/link";
import React from 'react'

// yahan cards ko export kar diya
export const cards = [
  {
    icon: "/assets/ourservices/ideation.svg",
    title: "Product",
    subtitle: "Ideation",
    link: "/OurServices/ProductIdeation", // ✅ agar yeh folder hai
  },
  {
    icon: "/assets/ourservices/design.svg",
    title: "Product",
    subtitle: "Design",
    link: "/OurServices/ProductDesign", // ✅ tumhara folder name
  },
  {
    icon: "/assets/ourservices/development.svg",
    title: "Product",
    subtitle: "Development",
    link: "/OurServices/ProductDevelopment",
  },
  {
    icon: "/assets/ourservices/growth.svg",
    title: "Product",
    subtitle: "Growth",
    link: "/OurServices/ProductGrowth",
  },
]

const Mockdata = () => {
  return (
    <div className="w-full flex justify-center pt-10">
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${theme.spacing.container}`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-center rounded-none !gap-0 text-center py-20 px-15 bg-white"
          >
            <Image
              src={card.icon}
              alt={card.subtitle}
              width={129}
              height={126}
              unoptimized
              className="w-[129px] h-[126.5px]"
            />

            <h3
              className={`${theme.typography.paragraph.p3} ${theme.colors.brand.senior} leading-[24px] font-normal`}
            >
              {card.title}
            </h3>

            {/* ✅ Subtitle as Link */}
            <Link
              href={card.link}
              className={`${theme.typography.paragraph.p2} ${theme.colors.brand.senior} leading-[24px] font-semibold hover:text-[#007BFF] transition-colors duration-300`}
            >
              {card.subtitle}
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Mockdata
