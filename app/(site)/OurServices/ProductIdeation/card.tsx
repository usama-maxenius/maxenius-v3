'use client'

import React from "react";
import { theme } from "@config/theme";
import Image from "next/image";

const cards = [
  { TopLeft: "/assets/productideation/person.svg", BottomLeft: "Discover Session" },
  {
    TopLeft: "/assets/productideation/idea.svg",
    Title: "Idea Evolution",
    Content:
      "Designed to facilitate open and honest discussions with your team, Discovery sessions allow us to understand your needs, goals, and challenges and develop successful product strategies.",
  },
  { TopLeft: "/assets/productideation/person.svg", BottomLeft: "Customer Journey Mapping" },
  { TopLeft: "/assets/productideation/person.svg", BottomLeft: "Market Research" },
  { TopLeft: "/assets/productideation/person.svg", BottomLeft: "Interactive Wireframes" },
];

const IdeationCard = () => {
  return (
    <div
      className={`
        grid gap-6 justify-center max-w-[1600px] mx-auto
        grid-cols-1            /* ✅ <sm: 1 card */
        sm:grid-cols-1         /* ✅ sm: 2 cards */
        md:grid-cols-2         /* ✅ md: 3 cards */
        lg:grid-cols-3        /* ✅ lg: 4 cards */
        2xl:grid-cols-5        /* ✅ 2xl: 5 cards */
      `}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="text-white rounded-2xl p-6 flex flex-col justify-between"
          style={{
            width: index === 1 ? "100%" : "232.42px",
            minHeight: "509px",
            backgroundColor: "#1D1D1D",
            whiteSpace: "normal",
          }}
        >
          {/* Top-left Image */}
          <div>
            <Image
              src={card.TopLeft}
              alt={card.Title || card.BottomLeft || "card-image"}
              width={71.08}
              height={71.08}
              className="object-contain mb-6"
            />
          </div>

          {/* Content Area */}
          {index === 1 ? (
            <div className="flex-1 mt-[30px] text-left">
              <h3 className={`${theme.typography.paragraph.p1} ${theme.colors.brand.accent} leading-[30.4px] font-semibold`}>
                {card.Title}
              </h3>
              <p className={`${theme.typography.paragraph.p1} ${theme.colors.brand.accent} mt-10 leading-[30px] font-normal`}>
                {card.Content}
              </p>
            </div>
          ) : (
            <div>
              <p className={`${theme.typography.paragraph.p1} ${theme.colors.brand.accent} leading-[33px] font-semibold mt-auto`}>
                {card.BottomLeft}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default IdeationCard;
