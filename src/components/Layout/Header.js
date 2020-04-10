import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import RandomColor from '../RandomColor'
import Link from '../Link'
import { Container, HeaderContent, HeadingMain, Socials } from './layoutStyles'

const GET_AUTHOR_METADATA_QUERY = graphql`
  query GetAuthorMetadata {
    site {
      siteMetadata {
        author {
          email
          github
          linkedin
        }
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(GET_AUTHOR_METADATA_QUERY)
  const { author } = data.site.siteMetadata

  return (
    <header>
      <Container>
        <HeaderContent>
          <HeadingMain>
            <RandomColor defaultColor="#ebebeb">{'{'}</RandomColor>
            tichopad
            <RandomColor defaultColor="#134896">
              <small>.</small>
            </RandomColor>
            <RandomColor defaultColor="#134896">
              <small>dev</small>
            </RandomColor>
            <RandomColor defaultColor="#ebebeb">{'}'}</RandomColor>
          </HeadingMain>
          <Socials>
            <Link to={author.github}>GitHub</Link>&nbsp;&middot;
            <Link to={author.linkedin}>LinkedIn</Link>&nbsp;&middot;
            <Link to={`mailto:${author.email}`}>Mail</Link>
          </Socials>
        </HeaderContent>
      </Container>
    </header>
  )
}

export default Header
