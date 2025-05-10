export const loader = () => {
  const robotText = `
# Allow all crawlers full access
User-agent: *
Allow: /

# Specify your sitemap location
Sitemap: https://tuanhuy.dev/sitemap.xml

# Crawl-delay is optional - adjust if needed
Crawl-delay: 10
`;

  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
