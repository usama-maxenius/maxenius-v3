import { theme } from '@config/theme'
import Image from 'next/image'
import React from 'react'

const Pics = () => {
  return (
    <section className={`pt-10 pb-30`}>
        <div className={`max-w-[1400px] justify-center items-center mx-auto overflow-hidden`}>
       <div className="flex !flex-col xl:!flex-row justify-center mx-auto gap-5 items-center ">
  <Image src="/assets/maxinventory/1.svg" alt="1" width={629} height={456} />
  <Image src="/assets/maxinventory/2.svg" alt="2" width={629} height={456} />
  <Image src="/assets/maxinventory/3.svg" alt="3" width={629} height={456} />
</div>

<div className="flex !flex-col xl:!flex-row justify-center mx-auto gap-5 mt-5 items-center">
  <Image src="/assets/maxinventory/4.svg" alt="4" width={629} height={456} />
  <Image src="/assets/maxinventory/5.svg" alt="5" width={629} height={456} />
  <Image src="/assets/maxinventory/6.svg" alt="6" width={629} height={456} />
</div>

        </div>

    </section>
  )
}

export default Pics