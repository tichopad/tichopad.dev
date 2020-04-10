import React from 'react'
import { Container, FooterSection } from './layoutStyles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterSection>
      <Container>
        <p>
          <small>
            &copy;&nbsp;{currentYear !== 2020 && '2020 - '}
            {currentYear} Michael Tichopád
          </small>
        </p>
      </Container>
    </FooterSection>
  )
}

export default Footer
