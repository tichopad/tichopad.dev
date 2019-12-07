import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import SchemaOrg from './SchemaOrg';

export default function SEO({
  children,
  title,
  datePublished,
  dateUpdated,
  meta = [],
  pathname = '',
  description = 'Osobní blog Michaela Tichopáda.',
  type = 'website',
  isBlogPost = false,
}) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            url
            author {
              name
            }
          }
        }
      }
    `
  );
  const { title: defaultTitle, url: baseUrl, author } = data.site.siteMetadata;
  const canonicalUrl = `${baseUrl}${pathname}`;
  const composedTitle = (title ? `${title} - ` : '') + defaultTitle;
  const composedMeta = [
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover',
    },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: type },
    ...meta,
  ];

  return (
    <>
      <Helmet title={composedTitle} defaultTitle={defaultTitle} meta={composedMeta}>
        <html lang="cs" />
        <link rel="canonical" href={canonicalUrl} />
        {children}
      </Helmet>
      <SchemaOrg
        title={title}
        authorName={author.name}
        description={description}
        datePublished={datePublished}
        dateModified={dateUpdated}
        canonicalUrl={canonicalUrl}
        isBlogPost={isBlogPost}
      />
    </>
  );
}
