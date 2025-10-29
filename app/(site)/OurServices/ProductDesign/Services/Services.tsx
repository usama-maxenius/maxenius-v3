import { theme } from '@config/theme'
import React from 'react'
import ProcessCards from './Cards'

const Services = () => {
  return (
    <div className={`text-center mx-auto  ${theme.spacing.section} ${theme.spacing.container}`}>
        <h4 className={`${theme.typography.heading.h4} ${theme.colors.brand.accent} font-bold leading-[57px]`}>Product Design Services</h4>
        <p className={`${theme.typography.paragraph.p2} ${theme.colors.brand.accent} mx-auto leading-[30px] w-[65%] pt-5 font-normal`}>Lorem ipsum dolor sit amet consectetur. Malesuada sed quis sed nec rutrum enim consequat at bibendum. Gravida ac nec imperdiet velit ornare amet scelerisque libero pulvinar. </p>
        <div className={`flex flex-col xl:flex-row items-center  justify-center mt-20`}>
            <div className={`w-[50%]`}>
                 <ol className="pt-14 space-y-4">
                              {[
                                "Ux Research",
                                "Ux Design",
                                "Wireframes",
                                "Prototype",
                                "Design System",
                                "Ui Design "
                              ].map((item, index) => (
                                <li
                                  key={index}
                                  className={`rounded-full  py-4 w-[316px]  text-[20px] leading-[155%] flex items-center ${theme.typography.paragraph.p2} ${theme.colors.text.inverse}`}
                                  style={{
                                    background: theme.colors.background.dark,
                                
                                    
                                  }}
                                >
                                  <span
                                    className={`px-[12px] mr-2 ${theme.typography.paragraph.p2} leading-[155%] ml-5 rounded-full`}
                                    style={{ background: theme.colors.background.oval }} // ✅ can add to theme if reused
                                  >
                                    {index + 1}
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ol>
            </div>
            <div className={`w-[65%]`}>
                <ProcessCards/>
            </div>
        </div>

      <div className="flex justify-center mt-10">
  <button className={theme.components.button.primary}>
    <span className={`${theme.typography.paragraph.p3} leading-[20px] font-bold`}>
      Let&apos;s Talk
    </span>
  </button>
</div>

    </div>
  )
}

export default Services