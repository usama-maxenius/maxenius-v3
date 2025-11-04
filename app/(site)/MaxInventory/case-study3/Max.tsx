import { theme } from '@config/theme'
import Image from 'next/image'
import React from 'react'





const Max = () => {
  return (
    <section className={`${theme.colors.background.gradient3} relative`}
    style={{
        background:
        theme.colors.background.gradient3
    }}>
        <div className={`${theme.spacing.container} mx-auto text-center lg:pb-170 ${theme.spacing.section}`}>
            <h1 className={`${theme.colors.brand.accent} font-semibold ${theme.typography.heading.h2} lg:${theme.typography.heading.h0} pt-[55px] leading-[70px] lg:leading-[94px]`}>MAX Inventory</h1>
            <p className={`${theme.typography.paragraph.p3} ${theme.colors.brand.accent} font-medium leading-[30px] mx-auto pt-[35px] lg:w-[51%] `}>Lorem ipsum dolor sit amet consectetur. Orci amet sit habitasse gravida. Tincidunt semper gravida dui nunc. Quam et orci elit tincidunt. </p>
            <div className={`flex flex-wrap justify-center gap-3 pt-10 mx-auto`}>
                <button className={`${theme.components.button.fourth} ${theme.typography.paragraph.p4} leading-[155%] font-normal `}>Development</button>
                <button className={`${theme.components.button.fourth} ${theme.typography.paragraph.p4} leading-[155%] font-normal `}>Ux Audit</button>
                <button className={`${theme.components.button.fourth} ${theme.typography.paragraph.p4} leading-[155%] font-normal `}>Product Design</button>
                <button className={`${theme.components.button.fourth} ${theme.typography.paragraph.p4} leading-[155%] font-normal `}>Style Guide</button>
            </div>
        </div>
        <Image
  src="/assets/maxinventory/maxinventory.svg"
  alt="Max Inventory"
  width={1044}
  height={543}
  className="object-contain absolute top-[90%] lg:top-[532px] left-1/2 transform -translate-x-1/2"
/>


    </section>
  )
}

export default Max