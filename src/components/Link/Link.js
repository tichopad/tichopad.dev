import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

/**
 * Handles internal/external links. Uses Gatsby Link component to handle internal links and
 * plain anchor element to handle external ones.
 * If the "internal" prop is not set, any link starting with exactly one slash is treated as internal.
 */
const Link = ({ activeClassName, children, partiallyActive, to, internal = false, ...rest }) => {
  const linkStartsWithOneSlash = /^\/(?!\/)/.test(to)

  if (internal || linkStartsWithOneSlash) {
    return (
      <GatsbyLink
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        to={to}
        {...rest}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

export default Link
