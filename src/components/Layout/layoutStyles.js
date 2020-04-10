import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
`

export const FooterSection = styled.footer`
  padding-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryGray};
`

export const HeaderContent = styled.div`
  position: relative;
  overflow: auto;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 80px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primaryGray};
  }
`

export const HeadingMain = styled.h1`
  span {
    transition: color 0.2s;
  }
`

export const Socials = styled.p`
  font-size: 80%;

  * + * {
    margin-left: 5px;
  }
`

export const TLD = styled.small`
  transition: color 0.2s;
`
