import { theme } from '@config/theme'
import Image from "next/image";
import React from 'react'
import LaptopCard from './Card'

const DesignWork = () => {
  return (
    <section className={`mt-20  text-center ${theme.spacing.section}  ${theme.spacing.scontainer}`}>
        <div>
            <p  className={`${theme.typography.paragraph.p2} ${theme.colors.brand.primary}  leading-[100%] mx-auto flex items-center justify-center font-bold`}>OUR DESIGN Work</p>
            <h3  className={`${theme.typography.heading.h3} ${theme.colors.brand.senior} mt-4 mb-12 font-semibold text-center w-[75%] mx-auto leading-[60px]`}>Crafting Your Brand Identity With Our Experties</h3>
        </div>
        <div>
            <LaptopCard/>
        </div>
        <div>
            <h3 className={`${theme.typography.heading.h3} ${theme.colors.brand.senior} mt-4 mb-25  lg:mb-12 font-semibold lg:w-[50%] mx-auto leading-[60px]`}>Our Product Design Process</h3>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-16 mt-10">
  {/* Left Text Column */}
  <div className="text-left lg:text-right  space-y-19 mt-[-40px]">
    <p className={`${theme.colors.brand.junior} ${theme.typography.paragraph.p3} leading-[29px] w-[100%] font-normal`}>
      This initial phase involves understanding the market, identifying user needs, and gathering insights.
    </p>
    <p className={`${theme.colors.brand.junior} ${theme.typography.paragraph.p3} leading-[29px] w-[100%] font-normal`}>
      Generate ideas and concepts that align with user needs and business goals.
    </p>
    <p className={`${theme.colors.brand.junior} ${theme.typography.paragraph.p3} leading-[29px] w-[100%] font-normal`}>
      Create low-fidelity wireframes to visualize the product&apos;s flow and structure.
    </p>
    <p className={`${theme.colors.brand.junior} ${theme.typography.paragraph.p3} leading-[29px] w-[100%] font-normal`}>
      Develop detailed, interactive prototypes to simulate the final product.
    </p>
  </div>

  {/* Center Image */}
  <div className="flex justify-center items-center">
    <Image
      src="/assets/productdesign/process.svg"
      alt="Process"
      width={791.89}
      height={791.89}
      className="object-contain"
    />
  </div>

  {/* Right Text Column */}
  <div className=" text-left space-y-10 mt-[-40px]">
    <p className={`${theme.colors.brand.junior} ${theme.typography.paragraph.p3} leading-[29px] w-[80%] font-normal`}>
      Release the product to the market and monitor user feedback. Make ongoing updates based on user needs.
    </p>
    <p className={`${theme.colors.brand.junior} ${theme.typography.paragraph.p3} leading-[29px] w-[80%] font-normal`}>
      Continue usability testing to identify areas for improvement. Address bugs and optimize the product.
    </p>
    <p className={`${theme.colors.brand.junior} ${theme.typography.paragraph.p3} leading-[29px] w-[80%] font-normal`}>
      Provide developers with all necessary assets, specifications, and guidelines for implementation.
    </p>
    <p className={`${theme.colors.brand.junior} ${theme.typography.paragraph.p3} leading-[29px] w-[80%] font-normal`}>
      Apply UI design elements like color schemes and typography to create an appealing interface.
    </p>
  </div>
</div>

    </section>
  )
}

export default DesignWork