import React from 'react'
import Image from "next/image";
import { theme } from '@config/theme';
import Services from './Services/Services';


const ProductDesign = () => {
  return (
    <section className={`w-full items-center overflow-hidden bg-cover bg-no-repeat bg-center ${theme.spacing.section}`}
    style={{backgroundImage:"url('/assets/productdesign/designback.svg')"}}>
      
      <div className={`text-center ${theme.spacing.section} ${theme.spacing.container}`}>
        <h1 className={`${theme.typography.heading.h0} ${theme.colors.brand.accent} mx-auto mt-40 text-start w-[70%] font-semibold leading-[114px]`}>We Offer Product Design and Solution Services</h1>
        <div className='flex items-center justify-center mx-auto mt-10 w-full'>
          <div className={`w-[40%]`}>
        <p className={`${theme.typography.paragraph.p2} ${theme.colors.brand.accent} font-normal text-start w-[100%] xl:w-[70%]   leading-[30px]`}>Lorem ipsum dolor sit amet consectetur. Tincidunt fusce lectus mauris scelerisque velit. Mi scelerisque aenean pellentesque tortor egestas praesent orci enim</p>
        </div>
        <div
  className={`
    w-[30%] mt-[-130px] ml-[-54px] 
    hidden lg:block
  
  `}
>
  <Image
    src="/assets/productdesign/arrow.svg"
    alt="Arrow"
    width={141.76}
    height={1.01}
    className=" h-auto"  /* ✅ makes it responsive */
  />
</div>

      </div>
      </div>

      <div className={`flex justify-center mx-auto`}>
        <Image src="/assets/productdesign/video.svg"
        alt='Video'
        width={1489.99}
        height={732}
        className='object-contain'/>
      </div>
      <div>
        <Services/>
        
      </div>

    </section>
  )

}

export default ProductDesign