import React from 'react';

export default function SchemaOrg({
  canonicalUrl,
  title,
  datePublished,
  dateModified,
  authorName,
  description,
  isBlogPost,
}) {
  const baseData = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    url: canonicalUrl,
    name: title,
  };
  const articleData = {
    '@context': 'https://schema.org/',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    name: title,
    headline: title,
    datePublished,
    dateModified,
    description,
    author: {
      '@type': 'Person',
      name: authorName,
    },
  };
  const structuredData = isBlogPost ? { ...baseData, ...articleData } : baseData;

  return <script type="application/ld+json">{JSON.stringify(structuredData, null, 2)}</script>;
}
