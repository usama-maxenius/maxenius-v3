import { theme } from '@config/theme'
import React from 'react'
import Cards from './Cards'
import Container from './Container/Container'
import AsteraBytes from './AsteraBytes/AsteraBytes'


const Products = () => {
  return (
    <section className={`${theme.spacing.section} bg-black  `}>

        <div className={`${theme.spacing.container} items-center justify-center mx-auto text-center`}>
            <h2 className={`${theme.typography.heading.h2} ${theme.colors.brand.accent} leadng-[57px] font-semibold`}>Our Products</h2>
            <p className={`${theme.typography.paragraph.p2} ${theme.colors.brand.accent} leadng-[30px] font-normal w-[60%] mx-auto`}>Lorem ipsum dolor sit amet consectetur. Faucibus mi sit vitae eget tempor erat aliquet ac. Tellus malesuada ut purus quis penatibus donec.</p>
            <div>
              <Cards/>
            </div>
            <div>
              <Container/>
            </div>
            <div>
              <AsteraBytes/>
            </div>
        </div>

    </section>
  )
}

export default Products