import { theme } from "@config/theme";
import Image from "next/image";
import React from "react";

const Technologies = () => {
  return (
    <section
      className={`mt-20 text-center bg-black px-6 ${theme.spacing.section}`}
    >
      <div
        className={`flex  items-center justify-between mx-auto  ${theme.spacing.container}`}
      >
        {/* Left Text Section */}
        <div className="w-full md:w-[45%] text-left">
          <h3
            className={`${theme.typography.heading.h3} ${theme.colors.brand.accent} font-semibold leading-[60px]`}
          >
            UI and UX Designing Tools and Technologies
          </h3>
          <p
            className={`${theme.typography.paragraph.p2} ${theme.colors.brand.accent} mt-10 md:mt-20 w-[80%] md:w-[60%] font-medium leading-[30px]`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s  standard.
          </p>
        </div>

        {/* Right Images Section */}
        <div className="grid grid-cols-3 gap-8 items-center justify-center">
          <Image
            src="/assets/productdesign/figma.svg"
            alt="Figma"
            width={96.17}
            height={144.52}
          />
          <Image
            src="/assets/productdesign/xd.svg"
            alt="XD"
            width={96.17}
            height={144.52}
          />
          <Image
            src="/assets/productdesign/sketch.svg"
            alt="Sketch"
            width={96.17}
            height={144.52}
          />
          <Image
            src="/assets/productdesign/miro.svg"
            alt="Miro"
            width={96.17}
            height={144.52}
          />
          <Image
            src="/assets/productdesign/invision.svg"
            alt="Invision"
            width={96.17}
            height={144.52}
          />
          <Image
            src="/assets/productdesign/marvel.svg"
            alt="Marvel"
            width={96.17}
            height={144.52}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
