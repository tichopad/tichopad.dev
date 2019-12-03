import React from 'react';

export default function ExternalLink({ to, children, ...additionalAttributes }) {
  const attributes = {
    rel: 'noreferrer noopener',
    ...additionalAttributes,
  };
  return (
    <a href={to} {...attributes}>
      {children}
    </a>
  );
}
