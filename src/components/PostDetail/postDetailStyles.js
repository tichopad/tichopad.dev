import styled from '@emotion/styled'

export const BottomNav = styled.nav`
  padding: 1.37rem 0 1rem 0;

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`

// TODO: grid?
export const BottomNavItem = styled.h4`
  float: ${({ next = false }) => (next ? 'right' : 'left')};
  margin-top: 1rem;

  & + & {
    margin-left: 1rem;
  }
`
