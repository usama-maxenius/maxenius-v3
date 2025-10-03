import { theme } from '@config/theme'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <section
      className={`${theme.spacing.section}`}
      style={{
        background: theme.colors.background.gradient3,
      }}
    >
      <div className={`flex justify-center mt-20 mb-50 ${theme.spacing.container}`}>
        <div className={`mt-20`}>
          <h1
            className={`${theme.typography.heading.h1} ${theme.colors.brand.accent} w-[40%] leading-[120px] font-bold`}
          >
            GET STARTED
          </h1>
          <h5
            className={`${theme.typography.heading.h5} ${theme.colors.brand.accent} w-[60%] leading-[45px] mt-10 font-semibold`}
          >
            LET&apos;S FIND THE PERFECT SOLUTION FOR YOUR PROJECT
          </h5>
        </div>

        {/* Form with background image behind */}
        <div className="relative">
          {/* Decorative image behind form */}
         <Image
  src="/assets/contactus/daimond.svg" // check spelling + path
  alt="Diamond decoration"
  width={332}
  height={445}
  className="absolute right-[-161px] top-[711px] z-0 opacity-70"

/>


          {/* Form */}
          <div
            className={`mx-auto pt-10 px-10 rounded-lg bg-white/5  shadow-2xl `}
            style={{ width: '765.49px', height: '935px' }}
          >
            <form action="" className="space-y-6">
              {/* Name */}
              <div>
                <label
                  className={` ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
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
                  className={` ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
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
                  className={` ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
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
                  className={` ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
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
                  className={` ${theme.colors.brand.accent} ${theme.typography.paragraph.p4} leading-[47.29px] font-medium mb-2`}
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
