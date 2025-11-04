import { Search } from "lucide-react";
import { theme } from '@config/theme'
import React from 'react'

const Blog = () => {
  return (
   <section className={`${theme.spacing.section} bg-black`}>
    <div className= {`${theme.spacing.container} mx-auto flex flex-col items-center justify-center gap-6 mt-10`}>
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

   </section>
  )
}

export default Blog