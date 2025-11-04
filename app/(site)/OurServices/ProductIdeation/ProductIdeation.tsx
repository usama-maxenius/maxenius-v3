import { theme } from '@config/theme'
import Image from "next/image";
import React from 'react'
import IdeationCard from './card';

const ProductIdeation = () => {
  return (
     <section className={`w-full items-center overflow-hidden  `}
     style={{
      background: theme.colors.background.gradient3
     }}

        
          
          //  style={{
          //    backgroundImage: "url('/assets/productideation/ideationback.svg')",
          //    backgroundSize: 'cover',
          //    backgroundPosition: 'center',
          //    backgroundRepeat: 'no-repeat',
          //    paddingTop: '80px',   // ✅ prevents top overflow
          //    paddingBottom: '300px' // ✅ keeps spacing at bottom consistent
          //  }}
         >

            <div className={`text-center  ${theme.spacing.container}`}>
                    <h1 className={`text-[55px] md:${theme.typography.heading.h0} ${theme.colors.brand.accent} mx-auto text-center  mt-40 lg:mt-60 lg:text-start  lg:w-[60%] font-semibold leading-[80px] lg:leading-[114px]`}>Transform Your Ideas into Digital Reality</h1>
                    <div className='flex items-center justify-center mx-auto mt-10 w-full'>
                      <div className={`w-[80%] lg:w-[40%]`}>
                    <p className={`${theme.typography.paragraph.p2} ${theme.colors.brand.accent}  font-normal mx-auto text-start w-[70%]  leading-[30px]`}>Unlock the potential of your concepts with our innovative digital product ideation services.</p>
                    </div>
                    <div className={`w-[30%] mt-[-130px] ml-[-54]
                      `}>
                    <Image src="/assets/productideation/arrow.svg"
                    alt='Arrow'
                    width={141.76}
                    height={1.01}
                    className="w-[50px] lg:w-[70px] xl:w-[141px] h-auto"/>
                  </div>
                  </div>
                  </div>
                  <div  className={`text-center ${theme.spacing.section} ${theme.spacing.container}`}>
                    <h4 className={`${theme.typography.heading.h4} ${theme.colors.brand.accent} mx-auto  mt-40   font-bold lg:leading-[114px]`}>Product Ideation Services</h4>
                    <p className={`${theme.typography.paragraph.p2} ${theme.colors.brand.accent} mx-auto font-normal   leading-[30px]`}>Get your creative juices flowing with our ideation expertise</p>
                </div>
                <div>
                    <IdeationCard/>
                </div>
                <button className={`${theme.components.button.primary} flex justify-center mt-15 mb-20  mx-auto`}>
                    Let&apos;s Talk
                </button>

    </section>
  )
}

export default ProductIdeation



















