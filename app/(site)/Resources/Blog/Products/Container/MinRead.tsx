import React from 'react'
import Image from 'next/image'
import { theme } from '@config/theme'
import Cards from './Cards'

const MinRead = () => {
  return (
    <section>
        <div className={`flex flex-col xl:flex-row justify-center items-center gap-20 mx-auto`}>
            <div className={`text-start lg:w-[55%] `}>
                <Image src="/assets/blog/frame.svg"
                alt="Frame"
                width={601}
                height={289}
                className='object-contain'
                />
                <button className={`w-[106.45px] h-[33.61px] py-[7.47px] px-[12.14px] rounded-full mt-10 text-[13px] leading-[155%]  font-medium ${theme.colors.brand.oval}`}
                style={{
                    background:theme.colors.background.light
                }}
                >
                    10 Min Read
                </button>
                <p className={`${theme.typography.paragraph.p3} ${theme.colors.brand.accent} leading-[24px] font-semibold mt-10 `}>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</p>
                <p className={`${theme.typography.paragraph.p4} ${theme.colors.brand.accent} leading-[21px] font-normal mt-10`}>lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum.</p>
            </div>
            <div>
                <Cards/>
            </div>
        </div>
    </section>
  )
}

export default MinRead