import React from "react";
import Mockdata from "./Mockdata";
import Navbar from "@components/common/Navbar";
import Background from "@components/sections/Background/Background";

export default function OurServicesPage() {
  return (
    <>
      {/* Navbar text black */}
      <Navbar textColor="black" />

      <section className="pt-15 bg-white">
        <div className=" mx-auto text-center">
          
          {/* cards from mockdata */}
          <Mockdata />
          <Background/>
        </div>
      </section>
    </>
  );
}
