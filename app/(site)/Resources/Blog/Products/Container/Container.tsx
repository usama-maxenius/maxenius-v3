import React from 'react'
import Signup from './Signup'
import MinRead from './MinRead'

const Container = () => {
  return (
    <div
      className={`bg-[#1D1D1D]  w-full py-[150px] px-5 lg:pl-[38px] 
      flex flex-col  2xl:flex-row justify-center items-center  gap-10 
      mx-auto rounded-4xl`}
    >
      <Signup />
      <MinRead />
    </div>
  )
}

export default Container
