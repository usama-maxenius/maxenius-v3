import { Card, CardFooter, CardHeader } from '@components/ui/card';
import { theme } from '@config/theme';
import Image from 'next/image'
import React from 'react'

const MockData = () => {

     const cards = [
    { id: 1, topLeft: '100+.png', bottomLeft: 'Developers', bottomRight: '/01' },
    { id: 2, topLeft: '5+.png', bottomLeft: 'Years in Business', bottomRight: '/2' },
    { id: 3, topLeft: '2K+.png', bottomLeft: 'Customers Served', bottomRight: '/03' },
    { id: 4, topLeft: '500+.png', bottomLeft: 'Global Clients', bottomRight: '/04' },
  ];
  return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${theme.spacing.container} ${theme.spacing.container}  mx-auto`}>
  {cards.map((card, index) => (
    <Card
      key={card.id}
      className="flex flex-col justify-between" // ✅ Flex column to push footer to bottom
      style={{
        width: "392px",       // Fixed width
        height: "227px",      // Fixed height
        border: "none",
        background:
          index === 2
            ? `${theme.colors.background.gradient}`
            : `${theme.colors.background.dark}`,
      }}
    >
      <CardHeader>
        <Image
  src={`/assets/herosection/${card.topLeft}`}
  alt={card.bottomLeft}
  width={64}
  height={64}
  unoptimized
  className="object-contain w-16"
/>

      </CardHeader>

      <CardFooter className={`flex ${theme.typography.paragraph.p2} justify-between leading-[30px] font-normal items-center px-4 ${
    index === 2 ? theme.colors.brand.accent : theme.colors.brand.medium
  }`} >
        <span className="font-semibold">{card.bottomLeft}</span>
        <span className="font-medium">{card.bottomRight}</span>
      </CardFooter>
    </Card>
  ))}
</div>
  )
}

export default MockData