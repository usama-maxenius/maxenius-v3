import SeoHead from "@components/common/SeoHead/SeoHead";
import ChooseUs from "@components/sections/ChooseUs";
import DiscussProject from "@components/sections/DiscussProject";
import Hero from "@components/sections/Hero";
import IndustryWork from "@components/sections/IndustryWork";
import OurProducts from "@components/sections/OurProducts";
import Portfolio from "@components/sections/Portfolio";
import ServiceOffer from "@components/sections/ServiceOffer";
import Testimonial from "@components/sections/Testimonial";
import WorkTogether from "@components/sections/WorkTogether";





export default function Home() {
  return (
    <div className="">


       <SeoHead
        title="Home | Maxenius"
        description="Welcome to My Website. We provide the best services and products to help your business grow."
        keywords="services, products, solutions, case studies"
        ogImage="/assets/og/home-og.png"
        url="https://www.maxenius.com"
      />
          
      <Hero />
      <DiscussProject />
      <IndustryWork/>
      <ChooseUs/>
      <ServiceOffer/>
      <Portfolio/>
      <OurProducts/>
      <Testimonial/>
      <WorkTogether/>
      
      {/* Yahan aap baaki sections add kar sakte hain */}
    </div>
  );
}


// 'use client';

// import React from 'react';
// import Navbar from './components/common/Navbar/Navbar';
// import SeoHead from './components/common/SeoHead/SeoHead';
// import Hero from './components/sections/Hero';
// import DiscussProject from './components/sections/DiscussProject';
// import IndustryWork from './components/sections/IndustryWork';
// import ChooseUs from './components/sections/ChooseUs';
// import ServiceOffer from './components/sections/ServiceOffer';
// import Portfolio from './components/sections/Portfolio';
// import OurProducts from './components/sections/OurProducts';
// import Testimonial from './components/sections/Testimonial';
// import WorkTogether from './components/sections/WorkTogether';
// import { theme } from './config/theme';

// export default function Home() {
//   return (
//     <div className={`${theme.colors.background.light} min-h-screen`}>
      
//       {/* SEO */}
//       <SeoHead
//         title="Home | Maxenius"
//         description="Welcome to Maxenius. We provide the best services and products to help your business grow."
//         keywords="services, products, solutions, case studies"
//         ogImage="/assets/og/home-og.png"
//         url="https://www.maxenius.com"
//       />

//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className={theme.components.section.light}>
//         <div className={theme.spacing.container}>
//           <Hero />
//         </div>
//       </section>

//       {/* Discuss Project Section */}
//       <section className={theme.components.section.light}>
//         <div className={theme.spacing.container}>
//           <DiscussProject />
//         </div>
//       </section>

//       {/* Industry Work Section */}
//       <section className={theme.components.section.light}>
//         <div className={theme.spacing.container}>
//           <IndustryWork />
//         </div>
//       </section>

//       {/* Choose Us Section */}
//       <section className={theme.components.section.light}>
//         <div className={theme.spacing.container}>
//           <ChooseUs />
//         </div>
//       </section>

//       {/* Service Offer Section */}
//       <section className={theme.components.section.light}>
//         <div className={theme.spacing.container}>
//           <ServiceOffer />
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section className={theme.components.section.light}>
//         <div className={theme.spacing.container}>
//           <Portfolio />
//         </div>
//       </section>

//       {/* Our Products Section */}
//       <section className={theme.components.section.light}>
//         <div className={theme.spacing.container}>
//           <OurProducts />
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className={theme.components.section.light}>
//         <div className={theme.spacing.container}>
//           <Testimonial />
//         </div>
//       </section>

//       {/* Work Together Section */}
//       <section className={theme.components.section.light}>
//         <div className={theme.spacing.container}>
//           <WorkTogether />
//         </div>
//       </section>

//     </div>
//   );
// }
