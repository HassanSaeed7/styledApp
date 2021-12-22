import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 90px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin-bottom: 0;
  }
`

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 825px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0;
  }
`