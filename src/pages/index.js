import React from 'react'
import { graphql } from 'gatsby'
import { Container, Footer, Header } from '../components/Layout'
import PostPreview from '../components/PostPreview'
import SEO from '../components/SEO'
import ThemeProvider from '../components/ThemeProvider'

export const query = graphql`
  query AllPosts {
    posts: allMarkdownRemark(sort: { fields: [frontmatter___published], order: DESC }) {
      ...Posts
    }
  }
`

const IndexPage = ({ data }) => {
  const postsList = data.posts.nodes.map(post => (
    <PostPreview
      key={post.id}
      excerpt={post.meta.perex || post.excerpt} //TODO: nullish coalesce
      link={post.fields.slug}
      formattedDatePublished={post.metaFormatted.published}
      rawDatePublished={post.meta.published}
      title={post.meta.title}
    />
  ))

  return (
    <ThemeProvider>
      <Header />
      <Container as="main">
        <SEO title="Blog" />
        {postsList}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default IndexPage
