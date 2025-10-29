// import { theme } from '@config/theme'
// import React from 'react'
// import CardList from './CardList'

// const IdeationApproach = () => {
//   const card1 = [
//     {
//       left: '/assets/productideation/person.svg',
//       Title: 'UNDERSTANDING THE REQUIREMENTS',
//       Content:
//         'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals.',
//     },
//     {
//       left: '/assets/productideation/idea.svg',
//       Title: 'BRAINSTORMING SESSION',
//       Content:
//         'Conducting brainstorming sessions with the team we facilitate a free flow of ideas to generate a wide range of creative ideas and solutions that can address the client’s requirements.',
//     },
//   ]

//   const card2 = [
//     {
//       left: '/assets/productideation/person.svg',
//       Title: 'PRIORITIZE IDEAS',
//       Content:
//         'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals',
//     },
//     {
//       left: '/assets/productideation/person.svg',
//       Title: 'REFINE CONCEPTS',
//       Content:
//         'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals',
//     },
//     {
//       left: '/assets/productideation/person.svg',
//       Title: 'WIREFRAMING',
//       Content:
//         'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals',
//     },
//     {
//       left: '/assets/productideation/person.svg',
//       Title: 'TEST & ITERATE',
//       Content:
//         'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals',
//     },
//   ]

//   return (
//     <section
//       className={`${theme.spacing.section} bg-black`}
//       // style={{
//       //   backgroundImage:
//       //     "url('/assets/productideation/ideationapproachback.svg')",
//       //   backgroundSize: 'cover',
//       //   backgroundPosition: 'center',
//       //   backgroundRepeat: 'no-repeat',
//       // }}
//     >

//        {/* <div className="flex flex-col items-center text-center mb-16">
//         <h3
//           className={`${theme.typography.heading.h3} ${theme.colors.brand.accent} font-semibold leading-[60px]`}
//         >
//           Product Ideation Approach
//         </h3>
//       </div> */}
     

//       {/* Centered 2 Columns */}
//       <div className="flex justify-center items-start gap-50 flex-wrap">
//         {/* Left Column */}
//         <div className="flex-col flex items-center">
//           <h3
//           className={`${theme.typography.heading.h3} ${theme.colors.brand.accent} font-semibold leading-[60px] w-[75%] mb-20`}
//         >
//           Product Ideation Approach
//         </h3>
//           <CardList cards={card1} className='mt-35' />
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col items-center">
//           <CardList cards={card2} />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default IdeationApproach



import { theme } from '@config/theme'
import React from 'react'
import CardList from './CardList'

const IdeationApproach = () => {
  const card1 = [
    {
      left: '/assets/productideation/person.svg',
      Title: 'UNDERSTANDING THE REQUIREMENTS',
      Content:
        'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals.',
    },
    {
      left: '/assets/productideation/idea.svg',
      Title: 'BRAINSTORMING SESSION',
      Content:
        'Conducting brainstorming sessions with the team we facilitate a free flow of ideas to generate a wide range of creative ideas and solutions that can address the client’s requirements.',
    },
  ]

  const card2 = [
    {
      left: '/assets/productideation/person.svg',
      Title: 'PRIORITIZE IDEAS',
      Content:
        'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals',
    },
    {
      left: '/assets/productideation/person.svg',
      Title: 'REFINE CONCEPTS',
      Content:
        'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals',
    },
    {
      left: '/assets/productideation/person.svg',
      Title: 'WIREFRAMING',
      Content:
        'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals',
    },
    {
      left: '/assets/productideation/person.svg',
      Title: 'TEST & ITERATE',
      Content:
        'The first step involves understanding the project requirements, the client’s objectives, and the target audience; it helps in generating and refining ideas that will align with project goals',
    },
  ]

  return (
    <section
      className={`${theme.spacing.section} relative overflow-hidden`}
      style={{
        backgroundImage: "url('/assets/productideation/ideationapproachback.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '400px',   // ✅ prevents top overflow
        paddingBottom: '120px' // ✅ keeps spacing at bottom consistent
      }}
    >
      <div className={` ${theme.spacing.container} flex justify-between mx-0 items-start gap-32 flex-wrap `}>
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <h3
            className={`${theme.typography.heading.h3} ${theme.colors.brand.accent} font-semibold leading-[60px] w-[75%] mb-20`}
          >
            Product Ideation Approach
          </h3>
          <CardList cards={card1} className='mt-38'/>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          <CardList cards={card2} />
        </div>
      </div>
    </section>
  )
}

export default IdeationApproach
