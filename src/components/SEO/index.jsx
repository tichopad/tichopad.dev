import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({ title, image, type = 'website', children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const { title: defaultTitle } = data.site.siteMetadata;

  return (
    <Helmet title={title} titleTemplate={`%s - ${defaultTitle}`} defaultTitle={defaultTitle}>
      {/* General tags */}
      <html lang="cs" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="description" content="Osobní blog Michaela Tichopáda." />
      {/* OpenGraph tags */}
      <meta property="og:url" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      {children}
    </Helmet>
  );
}
