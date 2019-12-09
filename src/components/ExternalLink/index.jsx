import React from 'react';

/**
 * External link component. Handles opening links in a new window with implicit "rel" tags.
 * @param {{ to: String, children: React.ReactNode }} props
 */
export default function ExternalLink({ to, children, ...additionalAttributes }) {
  const attributes = {
    target: '_blank',
    rel: 'noreferrer noopener',
    ...additionalAttributes,
  };

  return (
    <a href={to} {...attributes}>
      {children}
    </a>
  );
}
