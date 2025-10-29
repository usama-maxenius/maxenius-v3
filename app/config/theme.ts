import { Circle } from "lucide-react";


// src/config/theme.ts
export const theme = {
  // 🌈 Brand colors
  colors: {
    brand: {
      right:"text-[#7B7B7B]",
      circle:"text-[#111111]",
      primary: "text-[#C42630]",
      secondary: "text-[#040707]",
      medium:"text-[#868686]",
      junior:"text-[#363636]",
      senior:"text-[#0E0E0E]",
      accent: "text-[#FFFFFF]",
      oval:"text-[#0F0F0F]"
    },
    background: {
      gray:"#EBEBEB",
      oval:"#0F0F0F",
      circle:"#111111",
      light: "#FFFFFF",
      red:"#C42630",
      dark: "#1D1D1D",
      muted: "gray-50",
      gradient: "linear-gradient(135deg, #292929, #3D3D3D, #5C5C5C, #3B3B3B, #292929)",
      gradient2: "linear-gradient(to bottom right, black 0%, black 75%, rgba(196,38,48,0.9) 100%)",
     gradient3: "linear-gradient(to bottom left, black 0%, black 80%, rgba(196,38,48,1) 100%)"

    },
    border: {
      base: "border-gray-500",
      strong: "border-gray-800",
      red:"border-[#C42630]",
      dark:"border-[#363636]"
    },
    text: {
      base: "text-gray-800",
      muted: "text-gray-500",
      inverse: "text-[#FFFFFF]",
    },
  },

  // ✍️ Typography
  typography: {
    logo:{
      logo:"text-[37.72px]",
      
      
    },
    heading: {
      h0:"text-[96px]",
      h1: "text-[122px] ",
      h2: "text-[64px]  ",
      h3: "text-[55px]  ",
      h4: "text-[48px]  ",
      h5: "text-[34px] ",
      h6: "text-[32px] ",
           
    },
    paragraph:{
         p1:"text-[24px] ",
      p2:"text-[20px] ",
      p3:"text-[18px] ",
      p4:"text-[16px] ",
      p5:"text-[14px] ",
      
    },
    body: {
      base: "text-base leading-relaxed text-gray-700",
      large: "text-lg leading-relaxed text-gray-700",
      small: "text-sm text-gray-600",
    },

  
    link: "text-brand-secondary hover:underline",
  },

  // 📏 Spacing
  spacing: {
    section: "py-30 px-6",
    sectionLg: "py-32 px-6",
    scontainer:"max-w-[1200px] mx-auto",
    container: "max-w-[1600px] mx-auto",
    gutter: "px-6",
  },

  // ⬜️ Borders & Radii
  radii: {
    sm: "rounded-md",
    md: "rounded-xl",
    lg: "rounded-2xl",
    full: "rounded-full",
  },

  // 🌑 Shadows
  shadows: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  },

  // 🧩 Components
  components: {
    button: {
      primary: "bg-[#C42630] text-[#FFFFFF]  py-[15px] px-[25px] rounded-full ",
      secondary: "bg-[#FFFFFF]  py-2 px-4 rounded-full  ",
      thirdly:"bg-[#C42630] text-[#FFFFFF]  py-[25px] px-[25px] rounded-full ",
      fourth:"bg-[#FFFFFF] text-[#0F0F0F]  py-[8px] px-[13px] rounded-full  ",
      fifth:"bg-[#1D1D1D] text-[#FFFFFF]  py-[15px] px-[25px] rounded-full "
    },
    card: {
      base: "bg-white border border-gray-200 rounded-2xl shadow-sm p-6",
      medium: "hover:shadow-md transition-shadow",
    },
   
    section: {
      light: "bg-white py-20",
      dark: "bg-gray-900 text-white py-20",
      muted: "bg-gray-50 py-20",
    },
  },
};
