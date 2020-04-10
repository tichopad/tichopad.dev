import React from 'react'
import { Container, Footer, Header } from '../components/Layout'
import LinkHomepage from '../components/LinkHomepage'
import ThemeProvider from '../components/ThemeProvider'

const NotFoundPage = () => (
  <ThemeProvider>
    <Header />
    <Container as="main">
      <h4>
        <LinkHomepage />
      </h4>
      <h2>Tato stránka neexistuje</h2>
      <p>Nezabloudili jste?</p>
    </Container>
    <Footer />
  </ThemeProvider>
)

export default NotFoundPage
