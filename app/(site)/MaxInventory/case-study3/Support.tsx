import React from 'react'
import Image from 'next/image'
import { theme } from '@config/theme'

const Support = () => {
  return (
    <section className={`${theme.spacing.section}`}>
        <div className={`flex flex-col xl:flex-row mx-auto pt-100 ${theme.spacing.container}`}>
            <div className={``}>
                <h3 className={`${theme.typography.heading.h3} ${theme.colors.brand.senior} font-bold leading-[59px] w-[60%]`}>How We Supports Max Inventory ?</h3>
                <div>
                    <p className={`${theme.colors.brand.senior} text-[22px] font-semibold leading-[59px]`}>UI UX Design</p>
                    <p className={`${theme.typography.paragraph.p3} ${theme.colors.brand.junior} font-normal leading-[28px] w-[55%]`}>Lorem ipsum dolor sit amet consectetur. Viverra feugiat eleifend tortor ac nulla non. Interdum sit elit laoreet tellus ullamcorper tristique.</p>
                </div>     
                <div>
                    <p className={`${theme.colors.brand.senior} text-[22px] font-semibold leading-[59px]`}>Development</p>
                    <p className={`${theme.typography.paragraph.p3} ${theme.colors.brand.junior} font-normal leading-[28px] w-[55%]`}>Lorem ipsum dolor sit amet consectetur. Viverra feugiat eleifend tortor ac nulla non. Interdum sit elit laoreet tellus ullamcorper tristique.</p>
                </div> 
                <div>
                    <p className={`${theme.colors.brand.senior} text-[22px] font-semibold leading-[59px]`}>Customizable Modules</p>
                    <p className={`${theme.typography.paragraph.p3} ${theme.colors.brand.junior} font-normal leading-[28px] w-[55%]`}>Lorem ipsum dolor sit amet consectetur. Viverra feugiat eleifend tortor ac nulla non. Interdum sit elit laoreet tellus ullamcorper tristique.</p>
                </div>        
            </div>
            <div>
                <Image
                src="/assets/maxinventory/support.svg"
                alt='Support Max Inventory'
                width={800}
                height={471}
                className='object-contain'
                />
            </div>
        </div>
    </section>
  )
}

export default Support