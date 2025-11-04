import React from "react";
import Mockdata from "./Mockdata";
import Navbar from "@components/common/Navbar";

import Hero from "@components/sections/Hero";

export default function OurServicesPage() {
  return (
    <>
      {/* Navbar text black */}
      <Navbar textColor="black" />

      <section className="pt-15 bg-white">
        <div className=" mx-auto text-center">
          
          {/* cards from mockdata */}
           <div className="relative z-10">
  <Mockdata />
</div>

<div className="relative z-0  -mt-100">
  <Hero />
</div>
        </div>
      </section>
    </>
  );
}
