// 'use client';

// import React from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const navItems = [
//     { name: 'Our Services', href: '/services' },
//     { name: 'Products', href: '/products' },
//     { name: 'Our Works', href: '/works' },
//     { name: 'Resources', href: '/resources' },
//   ];

//   return (
//     <nav className="absolute top-0 left-0 w-full border-b-1 border-gray-800 z-20 bg-transparent py-4 px-6">
//       <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <div className="text-[37.72px] font-bold text-white leading-[
// 47.78px]">Maxenius</div>
//         </div>

//         {/* Navigation Links - Middle */}
//         <div className="hidden md:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <Link 
//               key={item.name}
//               href={item.href}
//               className="text-white text-[18px]  font-semibold leading-[30px]"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Let's Talk Button - Right */}
//         <div className="flex items-center">
//           <button className="bg-red-500 text-white px-[25px] py-[15px] rounded-full">
//              <span className='text-[18px] font-bold leading-[20px]'>Lets Talk</span>
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { theme } from '../../../config/theme';

interface NavbarProps {
  textColor?: 'black' | 'white'; // page-specific text color
}

const Navbar = ({ textColor = 'white' }: NavbarProps) => {
  const navItems = [
    { name: 'Our Services', href: '/OurServices' },
    { name: 'Products', href: '/Products' },
    { name: 'Our Works', href: '/works' },
    { name: 'Resources', href: '/Resources' },
  ];

  const pathname = usePathname(); // current route

  // Tailwind class dynamically based on textColor prop
  const linkClass = textColor === 'black'
    ? `${theme.typography.paragraph.p3} font-semibold leading-[30px] text-black relative`
    : `${theme.typography.paragraph.p3} font-semibold leading-[30px] text-white relative`;

  // Logo class dynamically based on textColor
  const logoClass = textColor === 'black'
    ? `${theme.typography.heading.h5} font-semibold text-black leading-[44px]`
    : `${theme.typography.heading.h5} font-semibold text-white leading-[44px]`;

  return (
    <nav className={`absolute top-0 left-0 w-full z-30 border-b ${theme.colors.border.base} bg-transparent py-4 px-6`}>
      <div className={`${theme.spacing.container} flex items-center justify-between`}>
        {/* Logo */}
        <div className="flex items-center">
          <h5 className={logoClass}>Maxenius</h5>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className={linkClass}>
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-7.5 left-0 w-full h-[3px] bg-[#C42630] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Let's Talk Button */}
        <div className="flex items-center">
          <button className={theme.components.button.primary}>
            <span className={`${theme.typography.paragraph.p3} leading-[20px] font-bold`}>
              Let&apos;s Talk
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
