import { theme } from "@config/theme";
import React from "react";

const Signup = () => {
  return (
    <section className="bg-white w-[478px] h-[519px] rounded-3xl px-10 py-20 text-left">
      <div className=" bg-white w-full mt-[-20px]">
        {/* Heading */}
        <h5 className={`${theme.typography.heading.h5} ${theme.colors.brand.oval} leading-[28px] font-semibold mb-8`}>SIGN UP</h5>

        {/* Subtext */}
        <p className={`${theme.typography.paragraph.p4} ${theme.colors.brand.oval} leading-[25px] font-normal mb-3 w-[90%]`}>
         Get monthly data insights, trends, best practices, and news in your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col ">
          <label className={`${theme.typography.paragraph.p4} ${theme.colors.brand.oval} leading-[47.29px] font-medium  `}>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className={` w-[408] h-[55.77] ${theme.typography.paragraph.p4} ${theme.colors.brand.accent} leading-[47.29px]  rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C42630]`}
            style={{
                background: theme.colors.background.dark
            }}
          />
          <label className={`${theme.typography.paragraph.p4} ${theme.colors.brand.oval} leading-[47.29px] font-medium  `}>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className={` w-[408] h-[55.77] ${theme.typography.paragraph.p4} ${theme.colors.brand.accent} leading-[47.29px]  rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C42630]`}
            style={{
                background: theme.colors.background.dark
            }}
          />

          {/* Subscribe Button */}
          <button
            type="submit"
            className={`py-[13.38px] px-[22.8px] rounded-full w-[165px] h-[55px] mt-25 ${theme.colors.brand.accent} ${theme.typography.paragraph.p3} leading-[17.84px] font-bold `}
            style={{
                background: theme.colors.background.red
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
