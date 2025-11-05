import React from 'react'
import Image from "next/image";
import { theme } from '@config/theme';
import Services from './Services/Services';

import Breadcrumbs from '@components/common/BreadCrumb.tsx/BreadCrumb';



const ProductDesign = () => {
    const items=[
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/docs" },
    { label: "PRODUCT DESIGN", href: "/docs/components", active: true },
  ]

  return (
    <section className={`w-full items-center overflow-hidden bg-cover bg-no-repeat bg-center py-35`}
    style={{backgroundImage:"url('/assets/productdesign/designback.svg')"}}>
     
      <div className={`text-center px-5 ${theme.spacing.container} `}>
        <div className=''>
        <Breadcrumbs items={items}/>
        </div>
        <h1 className={`${theme.typography.heading.h3} lg:text-[96px] ${theme.colors.brand.accent} mx-auto mt-40 text-start lg:w-[70%] font-semibold leading-[80px] lg:leading-[114px]`}>We Offer Product Design and Solution Services</h1>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-center mx-auto mt-10 w-full'>
          <div className={`lg:w-[40%]`}>
        <p className={`${theme.typography.paragraph.p2} ${theme.colors.brand.accent} font-normal text-start w-[100%] lg:w-[70%]  lg:mb-0 leading-[30px]`}>Lorem ipsum dolor sit amet consectetur. Tincidunt fusce lectus mauris scelerisque velit. Mi scelerisque aenean pellentesque tortor egestas praesent orci enim</p>
        </div>
        <div
  className={`
    w-[30%] mt-[-230px] lg:mt-[-130px] ml-[80%] lg:ml-[-54px] 
    
  
  `}
>
  <Image
    src="/assets/productdesign/arrow.svg"
    alt="Arrow"
    width={141.76}
    height={1.01}
    className="w-[50px] md:w-[80px] lg:w-[141.76px] h-auto mb-50 lg:mb-0"  /* ✅ makes it responsive */
  />
</div>

      </div>
      </div>

      <div className={`flex justify-center mx-auto mt-20`}>
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