import Head from "next/head";

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const SeoHead = ({
  title = "Maxinus - Innovative Tech Solutions for Business Growth",
  description = "Maxinus helps businesses grow with innovative tech solutions, smart strategies, and creative digital services.",
  keywords = "Maxinus, business growth, digital solutions, tech services, innovative strategies,nextjs, react, seo, homepage",
  ogImage = "/assets/og/home-og.png",
  url = "https://www.maxinus.com",
}: SeoHeadProps) => {
  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Mobile Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SeoHead;
