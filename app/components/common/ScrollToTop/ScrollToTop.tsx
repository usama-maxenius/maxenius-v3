// "use client";

// import React, { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-[#C42630] text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all"
//         >
//           <ArrowUp className="w-[17] h-[17]" />
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollToTop;


"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { theme } from '../../../config/theme';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 ${theme.components.button.thirdly}  p-4 transition-all hover:opacity-90 cursor-pointer`}
        >
          <ArrowUp className="w-[17px] h-[17px]" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
