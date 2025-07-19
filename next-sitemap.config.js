/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yellowchilli.co.uk", // 🔁 Replace with your actual domain (no trailing slash)
  generateRobotsTxt: true, // ✅ Generate robots.txt file
  changefreq: "weekly", // Optional: change frequency for crawlers
  priority: 0.7, // Optional: priority for pages
  sitemapSize: 5000, // Optional: how many entries per sitemap file
  exclude: [
    "/privacy-policy",
    "/terms", // 🔁 Add any routes you don’t want in your sitemap
    "/admin/*",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        // disallow: "/private", // Optional: disallow specific paths
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://yellowchilli.co.uk"}/sitemap-0.xml`,
      // `${process.env.NEXT_PUBLIC_SITE_URL || "https://yellowchilli.co.uk"}/extra-sitemap.xml`, // Add any custom ones here
    ],
  },
};
