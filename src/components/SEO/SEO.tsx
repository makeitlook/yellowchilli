"use client";

import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
}

const defaultMetadata = {
  title: "Yellow Chilli | Indian & Afghan Cuisine in Southall",
  description:
    "Discover the rich flavours of Indian and Afghan cuisine at Yellow Chilli in Southall. From aromatic biryanis to sizzling grills, enjoy authentic dishes in a warm, welcoming setting.",
  url: "https://yellowchilli.co.uk",
  image: "/images/og-default.png",
  keywords: [
    "Yellow Chilli Southall",
    "Indian restaurant Southall",
    "Afghan restaurant Southall",
    "Indian Afghan cuisine",
    "best biryani Southall",
    "halal food Southall",
    "South Asian food Southall",
    "tandoori grill Southall",
  ],
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  keywords,
}) => {
  const metaTitle = title
    ? `${title} | ${defaultMetadata.title}`
    : defaultMetadata.title;
  const metaDescription = description || defaultMetadata.description;
  const metaUrl = url || defaultMetadata.url;
  const metaImage = image || defaultMetadata.image;
  const metaKeywords = keywords || defaultMetadata.keywords;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Head>
  );
};

export default SEO;
