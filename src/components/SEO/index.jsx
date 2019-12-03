import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({ title }) {
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
  const composedTitle = (title ? `${title} - ` : '') + data.site.siteMetadata.title;

  return <Helmet title={composedTitle} />;
}
