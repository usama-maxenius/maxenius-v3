import React from "react";
import Image from "next/image";
import { theme } from "@config/theme";

const Cards = () => {
  const cards = [
    {
      Top: "/assets/blog/cssvariable.svg",
      Content:
        "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved prefix, and there are no real rules about their value.",
    },
    {
      Top: "/assets/blog/screen.svg",
      Content:
        "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved prefix, and there are no real rules about their value.",
    },
    {
      Top: "/assets/blog/tab.svg",
      Content:
        "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved prefix, and there are no real rules about their value.",
    },
    {
      Top: "/assets/blog/mobile.svg",
      Content:
        "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved prefix, and there are no real rules about their value.",
    },
    {
      Top: "/assets/blog/screen.svg",
      Content:
        "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved prefix, and there are no real rules about their value.",
    },
    {
      Top: "/assets/blog/daigram.svg",
      Content:
        "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved prefix, and there are no real rules about their value.",
    },
    {
      Top: "/assets/blog/laptop.svg",
      Content:
        "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved prefix, and there are no real rules about their value.",
    },
    {
      Top: "/assets/blog/screen.svg",
      Content:
        "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved prefix, and there are no real rules about their value.",
    },
    {
      Top: "/assets/blog/code.svg",
      Content:
        "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved prefix, and there are no real rules about their value.",
    },
  ];

  return (
    <section className="w-full bg-transparent py-16">
      <div className="flex flex-wrap gap-10 ">
  {cards.map((card, index) => (
    <div
      key={index}
      className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[466.44px] h-[508.89px] bg-transparent border-b border-gray-400 pb-6 flex flex-col mx-auto"
    >
      <Image
        src={card.Top}
        alt={`Card ${index + 1}`}
        width={466.44}
        height={281.81}
        className="object-contain"
      />
      <p
        className={`${theme.typography.paragraph.p1} ${theme.colors.brand.accent} text-start font-semibold mt-4 leading-[32.68px]`}
      >
        {card.Content}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Cards;
