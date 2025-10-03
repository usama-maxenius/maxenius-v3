import { Card, CardContent } from "../../ui/card";
import { theme } from "../../../config/theme"
import Image from 'next/image'
import React from 'react'

const ChooseCard = () => {


    const cards = [
  {
    icon: "/assets/chooseus/dedicated.svg",
    title: "Dedicated project manager",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut leo tempus est pharetra egestas dolor lobortis at a.",
  },
  {
    icon: "/assets/chooseus/organisedtask.svg",
    title: "Organized tasks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut leo tempus est pharetra egestas dolor lobortis at a.",
  },
  {
    icon: "/assets/chooseus/easyfeedback.svg",
    title: "Easy feedback sharing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut leo tempus est pharetra egestas dolor lobortis at a.",
  },
  {
    icon: "/assets/chooseus/nevermiss.svg",
    title: "Never miss deadline",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut leo tempus est pharetra egestas dolor lobortis at a.",
  },
]
  return (
    <>
     {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-30 gap-x-100 gap-y-12">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="bg-transparent border-0 shadow-none flex items-start gap-4 text-left"
            >
             
              <CardContent className="p-0 flex gap-5 ">

                <Image
                src={card.icon}
                alt={card.title}
                className="w-[79px] h-[79px] object-contain"
              />


                <div>
                <p
                  className={`${theme.typography.paragraph.p1} ${theme.colors.text.inverse} font-semibold leading-[32px]`}
                >
                  {card.title}
                </p>
                <p
                  className={`${theme.typography.paragraph.p2} ${theme.colors.text.inverse} w-[80%] pt-7 opacity-70 leading-[29px]`}
                >
                  {card.description}
                </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </>
  )
}

export default ChooseCard