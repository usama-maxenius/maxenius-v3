import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

import Navbar from '@components/common/Navbar';
import Footer from '@components/common/Footer';
import ScrollToTop from '@components/common/ScrollToTop/ScrollToTop';



// Configure Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Maxenius - Creative Solutions',
  description: 'Maxenius provides innovative services and products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
      
        <main>{children}</main>
        <Footer/>
        <ScrollToTop />

      </body>
    </html>
  );
}
