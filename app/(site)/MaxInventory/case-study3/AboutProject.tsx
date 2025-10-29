import { theme } from '@config/theme'
import React from 'react'

const AboutProject = () => {
  return (
    <section className={` ${theme.spacing.section}`}
    style={{
        background:
        theme.colors.background.gradient2
    }}>
        <div className={ `flex  flex-col xl:flex-row ${theme.spacing.container} mx-auto  justify-center `}>
           <div className={`w-[50%] lg:w-[100%]`}>
                <h3 className={`${theme.typography.heading.h3} ${theme.colors.brand.accent} pt-10  font-bold  `}>About<br/> The Project</h3>
                </div>
            
          <div className="w-[50%] lg:w-[90%]">
  {/* 01 / CHALLENGE */}
  <div className="relative flex justify-center items-center gap-[161px] border-b border-gray-800 pb-20">
    {/* Number & Title Block */}
    <div className=" flex  items-center justify-center">
      {/* Background number */}
      <p className="font-semibold text-[134.11px] leading-[173.23px] bg-gradient-to-b from-[#3B3B3B] to-[#0F0F0F] bg-clip-text text-transparent opacity-50 select-none relative z-0">
        01
      </p>

      {/* Foreground text */}
      <p  className={`${theme.typography.paragraph.p1} ${theme.colors.brand.accent} leading-[31px] font-semibold absolute top-1/4 -translate-y-1/2 left-[-5px] z-10`}>
        CHALLENGE
      </p>
    </div>

    {/* Description */}
    <p
     className={`${theme.typography.paragraph.p3} ${theme.colors.brand.accent} mt-20 leading-[28px] font-normal`}
        >
      Lorem ipsum dolor sit amet consectetur. Viverra feugiat eleifend tortor ac nulla non. Interdum
      sit elit laoreet tellus ullamcorper tristique. Quam enim quam et nisi orci. Sit tempor tellus sit
      sodales ipsum urna. Cras egestas quis ac convallis suspendisse ipsum elit. Amet at ut orci et vitae
      fusce viverra. Mi mollis id ultricies nulla volutpat mattis.
    </p>
  </div>

  {/* 02 / APPROACH */}
  <div className="relative flex justify-center items-center gap-[136px] mt-10 border-b border-gray-800 pb-20">
    <div className="flex  items-center justify-center">
      <p className="font-semibold text-[134.11px] leading-[173.23px] bg-gradient-to-b from-[#3B3B3B] to-[#0F0F0F] bg-clip-text text-transparent opacity-50 select-none relative z-0">
        02
      </p>
      <p className={`${theme.typography.paragraph.p1} ${theme.colors.brand.accent} leading-[31px] font-semibold absolute top-1/5 -translate-y-1/2 left-[0px] z-10`}>
        APPROACH
      </p>
    </div>

    <p
      className={`${theme.typography.paragraph.p3} ${theme.colors.brand.accent} leading-[28px]  font-normal`}
    >
      Lorem ipsum dolor sit amet consectetur. Viverra feugiat eleifend tortor ac nulla non. Interdum sit
      elit laoreet tellus ullamcorper tristique. Quam enim quam et nisi orci. Sit tempor tellus sit
      sodales ipsum urna. Cras egestas quis ac convallis suspendisse ipsum elit.
    </p>
  </div>
</div>

        </div>
    </section>
  )
}

export default AboutProject