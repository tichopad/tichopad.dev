import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({ title, pathname = '', type = 'website', children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            url
          }
        }
      }
    `
  );
  const { title: defaultTitle, url: baseUrl } = data.site.siteMetadata;
  const canonicalUrl = `${baseUrl}${pathname}`;
  const composedTitle = (title ? `${title} - ` : '') + defaultTitle;

  return (
    <Helmet title={composedTitle} defaultTitle={defaultTitle}>
      {/* General tags */}
      <html lang="cs" />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="description" content="Osobní blog Michaela Tichopáda." />
      {/* OpenGraph tags */}
      <meta property="og:title" content={composedTitle} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content="TODO:" />
      <meta property="og:image" content="TODO:" />
      {children}
    </Helmet>
  );
}
