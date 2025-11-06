import { Search } from "lucide-react";
import { theme } from '@config/theme'
import React from 'react'
import Breadcrumbs from "@components/common/BreadCrumb.tsx/BreadCrumb";
import Image from 'next/image'

const Blog = () => {
  const items = [
    { label: "HOME", href: "/" },
    { label: "CASE", href: "/docs" },
    { label: "REFINE PHARMA", href: "/docs/components", active: true },

  ]
  const card = [{ TopCenter: "/assets/blog/56+.svg", Center: "News & Articles", }]

  return (

    <section className={`bg-black h-[1200px] md:h-[900] lg:h-[900px]`}>
      <div className="relative max-w-[1600px] mx-auto h-full">
        <div className={`${theme.spacing.container} pt-40`}>
          <Breadcrumbs items={items} />

        </div>
        <div className={`${theme.spacing.container} mx-auto flex flex-col items-center justify-center gap-6 mt-10 relative`}>
          <h1 className={`${theme.typography.heading.h3} lg:${theme.typography.heading.h0} ${theme.colors.brand.accent} font-semibold leading-[70px] lg:leading-[100px] mb-5`}>NEWS & BLOG</h1>
          <p className={`${theme.colors.brand.accent} ${theme.typography.paragraph.p2} leading-[35px] font-normal text-start lg:text-center lg:w-[52%] mb-10`}>Lorem ipsum dolor sit amet consectetur. Vel elementum egestas eu faucibus. Nibh fringilla sociis.Lorem ipsum dolor sit amet consectetur.  </p>

          <div className="relative mt-4 w-full max-w-[719px] px-4 mb-10">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full pl-15 py-4 text-[16px] leading-[30px] ${theme.typography.paragraph.p4} placeholder-[#868686] rounded-full `}
              style={{
                background: theme.colors.background.dark
              }}
            />
            <Search
              size={20}
              color="#868686"
              className="absolute left-9 top-[47%] -translate-y-1/2 pointer-events-none"
            />
          </div>
          <div className={`flex justify-center items-center mx-auto gap-3 flex-wrap`}>
            <button className={`${theme.components.button.fifth} font-medium leading-[155%] focus:bg-[#C42630] `} >Technology</button>
            <button className={`${theme.components.button.fifth} font-medium leading-[155%] focus:bg-[#C42630]`} >Tech Industry</button>
            <button className={`${theme.components.button.fifth} font-medium leading-[155%]  focus:bg-[#C42630]`} >Solutions</button>
            <button className={`${theme.components.button.fifth}  font-medium leading-[155%] focus:bg-[#C42630]`} >Design</button>
            <button className={`${theme.components.button.fifth}  font-medium leading-[155%] focus:bg-[#C42630]`} >Development</button>
          </div>
        </div>

        <div
          className={`flex justify-end items-center w-full  
  mt-20 lg:mt-0 absolute right-[0] bottom-[-30px]  `}
        >
      {card.map((item, index) => (
  <div
    key={index}
    className={`relative w-[327px] h-[220px] rounded-md shadow-lg flex flex-col items-center p-6 text-white`}
    style={{ background: theme.colors.background.gradient }}
  >
    {/* Top Image */}
    <Image
      src={item.TopCenter}
      alt="Top Center"
      width={129}
      height={85}
      className="object-contain mt-6"
    />

    {/* Center Text */}
    {/* <h2 className="text-xl font-semibold mt-6 text-center">
      {item.Center}
    </h2> */}
    <h2
      className={`text-[26.73px] ${theme.colors.brand.accent} font-normal leading-[32.86px] mt-6 text-center`}
    >
      {item.Center}
    </h2>

    {/* Bottom Social Icons */}
    <div className="absolute bottom-6 flex justify-around w-[173px] h-[45px] bg-black rounded-full">
      <Image
        src="/assets/blog/logo-twitter.svg"
        alt="Twitter"
        width={19.22}
        height={16.57}
      />
      <Image
        src="/assets/blog/fb.svg"
        alt="Facebook"
        width={19.22}
        height={16.57}
      />
      <Image
        src="/assets/blog/logo-instagram.svg"
        alt="Instagram"
        width={19.22}
        height={16.57}
      />
      <Image
        src="/assets/blog/in.svg"
        alt="LinkedIn"
        width={19.22}
        height={16.57}
      />
    </div>
  </div>
))}

        </div>
      </div>
    </section>

  )
}

export default Blog