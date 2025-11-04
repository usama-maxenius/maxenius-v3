'use client'
import { theme } from '@config/theme'
import { Check } from 'lucide-react'
import React from 'react'

const IndustryExpertise = () => {
  return (
    <section className={`${theme.spacing.section}`}>
      {/* Main Wrapper - centered row */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 mx-auto max-w-[1400px]">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className={`${theme.typography.heading.h3} ${theme.colors.brand.senior} leading-[57px] font-bold`}>
            Industry Expertise
          </h3>
          <p className={`${theme.typography.paragraph.p2} ${theme.colors.brand.junior} w-[98%] leading-[30px] font-normal mt-4`}>
            Lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget tempor erat aliquet ac.
            Tellus malesuada ut purus quis penatibus donec.
          </p>
       <ol
  className="pt-35 space-y-4 sm:mx-0 mx-auto w-fit"
>
  {[
    "E-commerce",
    "EdTech",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ].map((item, index) => (
    <li
      key={index}
      className={`rounded-full py-[8px] px-[13px] w-[279px] h-[51px] text-[20px] leading-[155%] flex items-center ${theme.typography.paragraph.p2} ${theme.colors.text.inverse}`}
      style={{
        background: theme.colors.background.dark,
        marginLeft: `${index * 2}rem`,
        marginRight: `${400 - index * 30}px`,
      }}
    >
      <style jsx>{`
        @media (max-width: 640px) {
          li {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
      `}</style>

      <span
        className={`px-4 mr-3 ${theme.typography.paragraph.p2} leading-[155%] ml-5 rounded-full text-white`}
        style={{
          background: index === 0 ? "#C42630" : "#3D3D3D",
        }}
      >
        {index + 1}
      </span>
      {item}
    </li>
  ))}
</ol>




        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2  md:text-left">
          <h4 className={`${theme.typography.heading.h4} ${theme.colors.brand.senior} leading-[53px] font-semibold mb-5`}>
            E-commerce
          </h4>
          <p className={`${theme.typography.paragraph.p2} ${theme.colors.brand.junior} leading-[30px] font-normal mt-2 w-[89%]`}>
            Creating a benchmark with the enhanced shopping experience with our UI/UX design services
            that help increase user retention and boost user action for eCommerce platforms.
          </p>

          {/* List Section */}
          <ol className="pt-10 space-y-6">
            {[
              "Fashion E-commerce",
              "Online Marketplaces",
              "Brands and Online Retailer Stores"
            ].map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-4 ${theme.typography.paragraph.p2} ${theme.colors.brand.junior} font-normal`}
              >
                {/* Tick inside Circle */}
                <span className={`flex  justify-center w-8 h-8 rounded-full border ${theme.colors.border.dark} ${theme.colors.brand.junior} flex-shrink- 0`}
                style={{
                  minHeight:"30px",
                  minWidth:"30px"
                }}
                >
                  <Check   strokeWidth={3} />
                </span>
                <span className="leading-[32px] ">{item}</span>
              </li>
            ))}
          </ol>

          {/* Button */}
          <div className="flex justify-center md:justify-start mt-12">
            <button className={`${theme.components.button.primary}`}>
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryExpertise
