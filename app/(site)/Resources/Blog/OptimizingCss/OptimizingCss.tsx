import { theme } from "@config/theme";
import React from "react";
import CardList from "./CardList";
import Image from "next/image";

const cards = [
  {
    left: "/assets/blog/office.svg",
    content: "ACHIEVE YOUR BUSINESS GOALS WITH WEB DEVELOPMENT SOLUTIONS",
    right: "/assets/blog/arrow.svg",
  },
  {
    left: "/assets/blog/office.svg",
    content: "ACHIEVE YOUR BUSINESS GOALS WITH WEB DEVELOPMENT SOLUTIONS",
    right: "/assets/blog/arrow.svg",
  },
  {
    left: "/assets/blog/office.svg",
    content: "ACHIEVE YOUR BUSINESS GOALS WITH WEB DEVELOPMENT SOLUTIONS",
    right: "/assets/blog/arrow.svg",
  },
  {
    left: "/assets/blog/office.svg",
    content: "ACHIEVE YOUR BUSINESS GOALS WITH WEB DEVELOPMENT SOLUTIONS",
    right: "/assets/blog/arrow.svg",
  },
];

const OptimizingCss = () => {
  return (
    <section
      className={`${theme.spacing.section} flex justify-center items-center min-h-screen`}
    >
      <div
        className={`${theme.spacing.container} flex flex-col lg:flex-row justify-center items-center w-[85%] gap-10`}
      >
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start order-1 lg:order-none">
          <div>
            <Image
              src="/assets/blog/rocket.png"
              alt="Poster"
              width={867}
              height={451}
              className="object-contain mb-6"
            />
          </div>

          <div>
            <div className="flex my-5">
              <p className="text-[14px] text-[#4B4B4B] font-normal leading-[100%] w-[85%]">
                Front-end
              </p>
              <Image
                src="/assets/blog/arrow.svg"
                alt="arrow"
                width={14.39}
                height={14.39}
              />
            </div>

            <h4
              className={`${theme.typography.heading.h4} ${theme.colors.brand.senior} leading-[60px] font-semibold`}
            >
              Optimizing CSS for faster page loads
            </h4>

            <p
              className={`${theme.typography.paragraph.p3} ${theme.colors.brand.junior} w-[87%] mt-10 leading-[25px] font-normal`}
            >
              Not long ago I decided to improve the loading times of my website.
              It already loads pretty fast, but I knew there was still room for
              improvement and one of them was CSS loading. I will walk you
              through the process and show you how you can improve your load
              times as well.
            </p>

            <p
              className={`${theme.typography.paragraph.p3} ${theme.colors.brand.junior} w-[81%] leading-[25px] font-normal mt-10`}
            >
              To see how CSS affects the load time of a webpage we first have to
              know how the browser converts an HTML document into a functional
              webpage...
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center order-2 lg:order-none mt-10 lg:mt-[-180px]">
          <CardList cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default OptimizingCss;
