import { theme } from '@config/theme'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <section
      className={`py-30`}
      style={{
        background: theme.colors.background.gradient3,
      }}
    >
      {/* ✅ Added flex-wrap + gap-10 for responsive wrapping */}
      <div
        className={`flex flex-col 2xl:flex-row  justify-center gap-10 mt-20 mb-50 ${theme.spacing.container} mt-[10%]`}
      >
        <div className={`mt-20 mx-auto`}>
          <h1
            className={`${theme.typography.heading.h2} md:text-[96px] lg:text-[120px] ${theme.colors.brand.accent} w-[40%] flex justify-center items-center mx-auto leading-[80px] lg:leading-[120px] font-bold  `}
          >
            GET STARTED
          </h1>
          <h5
            className={`${theme.typography.heading.h5} ${theme.colors.brand.accent} w-[65%] flex justify-center items-center mx-auto leading-[45px] mt-10 font-semibold`}
          >
            LET&apos;S FIND THE PERFECT SOLUTION FOR YOUR PROJECT
          </h5>
        </div>

        {/* Form with background image behind */}
        <div className="relative">
          {/* Decorative image behind form */}
          <Image
            src="/assets/contactus/daimond.svg"
            alt="Diamond decoration"
            width={332}
            height={445}
            className="absolute right-1/70 top-[70%] max-w-[1000px] z-0 opacity-70  w-[150px] md:w-[280px] lg:w-[332px]"
          />

          {/* Form */}
          <div
            className={`mx-auto xl:w-[765.49px] lg:h-[935px] pt-10 px-10 rounded-lg bg-white/5 shadow-2xl`}
            // style={{ width: '765.49px', height: '935px' }}
          >
            <form action="" className="space-y-6">
              {/* Name */}
              <div>
                <label
                  className={`${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
                >
                  Name
                </label>
                <input
                  type="text"
                  className={`w-full max-w-[692px] border ${theme.colors.border.strong} ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium rounded-md py-3 px-5 focus:outline-none focus:${theme.colors.border.red}`}
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className={`${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full max-w-[692px] border ${theme.colors.border.strong} ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium rounded-md py-3 px-5 focus:outline-none focus:${theme.colors.border.red}`}
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className={`${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={`w-full max-w-[692px] border ${theme.colors.border.strong} ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium rounded-md py-3 px-5 focus:outline-none focus:${theme.colors.border.red}`}
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Budget */}
              <div>
                <label
                  className={`${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
                >
                  What is Your Budget
                </label>
                <input
                  type="text"
                  className={`w-full max-w-[692px] border ${theme.colors.border.strong} ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium rounded-md py-3 px-5 focus:outline-none focus:${theme.colors.border.red}`}
                  placeholder="Enter your budget"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className={`${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
                >
                  Message
                </label>
                <textarea
                  className={`w-full max-w-[692px] border ${theme.colors.border.strong} ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium rounded-md py-3 px-5 focus:outline-none focus:${theme.colors.border.red}`}
                  placeholder="What are you interested in ? "
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`${theme.components.button.primary} ${theme.typography.paragraph.p3} leading-[17.84px] font-bold mt-10`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
